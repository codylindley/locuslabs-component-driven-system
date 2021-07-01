import {
	useRef,
	useEffect,
	useMemo,
	useState,
	forwardRef,
	useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import {
	LoadingRow,
	SearchTermRow,
	SuggestedSearchRow,
	SearchPOIRow,
} from './row-types';
import InformationDivider from '@locus-labs/mol-desktop-information-divider';
import {
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache,
	List,
	InfiniteLoader,
} from 'react-virtualized';
import { ListItemTypes } from './prepareItemsList';

import styled from 'styled-components';
import Box from '@locus-labs/mol-desktop-box';

const SearchResultWrapper = styled(Box)`
	${({ removeTopBorder }) =>
		removeTopBorder &&
		`
    & > * {
		border-top: none;
	}
  `}
`;

const StyledList = styled(List)`
	&:focus {
		outline: none;
		border: none;
	}
`;

/**
 * InfiniteList component renders search results items.
 * The search results items list is lazyloaded and virtualized, which improves performance
 * by only rendering the DOM nodes that user is able to see based on their current scroll position.
 *
 * Supported search results items:
 * - search suggestions
 * - search terms
 * - search POIs section (including section title and section POIs items)
 */
const InfiniteList = forwardRef((props, ref) => {
	const {
		items,
		hasNextPage,
		isNextPageLoading,
		threshold,
		loadNextPage,
		notifyItemsRendered,
		onPOIClick,
		onTermClick,
		onSuggestionClick,
		onListScroll,
		cancelDefaultScrollToTop,
		...omittedProps
	} = props;
	const infiniteLoaderRef = useRef(null);
	const hasMountedRef = useRef(false);

	/**
	 * Determines element index that list should scroll to.
	 *
	 * @type {[number|undefined, function]} scrollToIndex
	 */
	const [scrollToIndex, setScrollToIndex] = useState(undefined);

	/**
	 * Determines if list should scroll to element.
	 *
	 * @type {[boolean, function]} shouldScrollToTop
	 */
	const [shouldScrollToTop, setShouldScrollToTop] = useState(false);

	/**
	 * Expose scrollToTop function through component reference (forwardRef).
	 * Executing scrollToTop will make list scroll to first item.
	 */
	useImperativeHandle(ref, () => ({
		scrollToTop() {
			// Exit function with no side-effects if default scroll to top was cancelled.
			if (cancelDefaultScrollToTop) return;
			// Else make list scroll to top.
			setShouldScrollToTop(true);
		},
	}));

	/**
	 * Determine item count that is used by InfiniteLoader and List to render list items.
	 * Items count always has to be greater than total items length.
	 * If there are more items to be loaded then extra row will hold a loading indicator,
	 * otherwise the additional row will render as empty, but it's height will be 0.
	 *
	 * @type {number} itemCount
	 * */
	const itemCount = items.length + 1;

	/**
	 * In our example, average cell height is assumed to be about 52px.
	 * This value will be used for the initial `List` layout.
	 * Width is not dynamic.
	 */
	const cache = new CellMeasurerCache({
		defaultHeight: 52,
		fixedWidth: true,
	});

	/**
	 * Clear CellMeasurerCache cache on items change.
	 * Clearing the cache will result in recomputing row heights.
	 */
	useEffect(() => {
		// This effect will run on mount too; there's no need to reset in that case.
		if (hasMountedRef.current) {
			if (infiniteLoaderRef.current) {
				cache.clearAll();
			}
		}
		hasMountedRef.current = true;
	}, [items]);

	/**
	 * Call notifyItemsRendered function if there are no more items to load.
	 * Called when hasNextPage changes its value.
	 */
	useEffect(() => {
		if (!hasNextPage) {
			let timer = setTimeout(() => {
				notifyItemsRendered();
			}, 100);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [hasNextPage]);

	/**
	 * Set list item index that the list should scroll to.
	 * Called when shouldScrollToTop changes its value.
	 */
	useEffect(() => {
		if (shouldScrollToTop) {
			setScrollToIndex(0); // Scroll list to the first element.
		}
	}, [shouldScrollToTop]);

	/**
	 * Reset scrollToIndex back to undefined after list scroll to top was requested.
	 * Called when scrollToIndex changes its value.
	 */
	useEffect(() => {
		if (typeof scrollToIndex !== 'undefined') {
			setScrollToIndex(undefined); // reset scroll index
			setShouldScrollToTop(false);
		}
	}, [scrollToIndex]);

	/**
	 * Get UI for search result item.
	 *
	 * @param  {{value: Object, type: ListItemTypes}} item
	 */
	const _toUiItem = (item) => {
		const viewFactory = _getRowView(item.type);
		return viewFactory(item.value);
	};

	/**
	 * Parse search result item type to UI item.
	 *
	 * @param  {type: ListItemTypes} item
	 */
	function _getRowView(type) {
		switch (type) {
			case ListItemTypes.SECTION_TITLE:
				return _getInformationDividerUI;
			case ListItemTypes.SUGGESTION:
				return _getSuggestedSearchRowUI;
			case ListItemTypes.TERM:
				return _getSearchTermRowUI;
			case ListItemTypes.POI:
				return _getSearchPOIRowUI;
		}
	}

	/**
	 * Get UI for information divider item.
	 *
	 * @param  {string} value
	 */
	const _getInformationDividerUI = (value) => (
		<InformationDivider>{value}</InformationDivider>
	);

	/**
	 * Get UI for search term item.
	 *
	 * @param  {{term: string, hasDivider: boolean}} props - search term items
	 */
	const _getSearchTermRowUI = (props) => (
		<SearchTermRow
			{...props}
			// eslint-disable-next-line react/prop-types
			onSearchTermClick={() => onTermClick(props.term)}
		/>
	);

	/**
	 * Get UI for suggested search item.
	 *
	 * @param  {Object} props - suggested search item
	 */
	const _getSuggestedSearchRowUI = (props) => (
		<SuggestedSearchRow
			{...props}
			onSuggestedSearchRowClick={() => onSuggestionClick(props)}
		/>
	);

	/**
	 * Get UI for POI search result item.
	 *
	 * @param  {Object} props - POI search result item
	 */
	const _getSearchPOIRowUI = (props) => (
		<SearchPOIRow {...props} onPoiRowClick={() => onPOIClick(props)} />
	);

	/**
	 * Parse all items to UI items.
	 * Re-calculate only when items change.
	 */
	const uiItems = useMemo(() => items.map(_toUiItem), [items]);

	/**
	 * Ensures only 1 page of items is being loaded at a time.
	 * Used by InfiniteLoader.
	 */
	const loadMoreItems = isNextPageLoading
		? () => Promise.resolve()
		: loadNextPage;

	/**
	 * Determine if row is loaded.
	 * Returns true if there are no more items left to load,
	 * or there are more items to load but element is not last one on the list.
	 *
	 * @param  {number} {index} - row index
	 * @return  {boolean} - returns row loading state
	 */
	const isRowLoaded = ({ index }) => {
		return !hasNextPage || index < items.length;
	};

	/**
	 * Responsible for rendering a single row, given its index.
	 * Used by List.
	 *
	 * @param  {Object} props
	 * @param  {number} props.index - Index of row
	 * @param  {number} props.key - Unique key within array of rendered rows
	 * @param  {Object} props.parent - Reference to the parent List (instance)
	 * @param  {Object} props.style - Style object to be applied to row (to position it)
	 */
	const createRow = ({ index, key, parent, style }) => {
		let content;
		let isLoadingRow = false;
		if (!isRowLoaded({ index })) {
			// Add divider only when LoadingRow comes after another row.
			content = <LoadingRow hasDivider={!!index} />;
			isLoadingRow = true;
		} else {
			content = uiItems[index];
		}
		// last item will be undefined, so the cell measurer will measure its height as 0

		return (
			<CellMeasurer
				cache={cache}
				columnIndex={0}
				key={key}
				parent={parent}
				rowIndex={index}
			>
				{({ measure, registerChild }) => (
					<SearchResultWrapper
						key={key}
						className="search-result-item"
						data-cy={
							typeof content === 'undefined' || isLoadingRow
								? 'LoadingRowWrapper'
								: 'SearchResult'
						}
						ref={registerChild}
						style={style}
						onLoad={measure}
						removeTopBorder={index === 0}
					>
						{content}
					</SearchResultWrapper>
				)}
			</CellMeasurer>
		);
	};

	return (
		<InfiniteLoader
			ref={infiniteLoaderRef}
			isRowLoaded={isRowLoaded}
			rowCount={itemCount}
			loadMoreRows={loadMoreItems}
			threshold={threshold}
			minimumBatchSize={threshold}
			{...omittedProps}
		>
			{({ onRowsRendered, registerChild }) => (
				<AutoSizer disableWidth>
					{({ height }) => (
						<StyledList
							className="search-results-items-list"
							ref={registerChild}
							height={height}
							width={320}
							rowCount={itemCount}
							onRowsRendered={onRowsRendered}
							rowHeight={cache.rowHeight}
							rowRenderer={createRow}
							deferredMeasurementCache={cache}
							overscanRowCount={2}
							onScroll={({ scrollTop }) => onListScroll(scrollTop)}
							scrollToIndex={scrollToIndex}
						/>
					)}
				</AutoSizer>
			)}
		</InfiniteLoader>
	);
});

InfiniteList.displayName = 'Infinite List';

InfiniteList.defaultProps = {
	'data-cy': 'InfiniteList',
	cancelDefaultScrollToTop: false,
	onListScroll: () => {},
};

export default InfiniteList;

InfiniteList.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.flexbox,
	...styledSystemPropTypes.grid,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	cancelDefaultScrollToTop: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf(Object.keys(ListItemTypes)).isRequired,
			value: PropTypes.shape({}),
		})
	).isRequired,
	hasNextPage: PropTypes.bool.isRequired,
	isNextPageLoading: PropTypes.bool.isRequired,
	threshold: PropTypes.number,
	loadNextPage: PropTypes.func.isRequired,
	notifyItemsRendered: PropTypes.func.isRequired,
	onPOIClick: PropTypes.func,
	onTermClick: PropTypes.func,
	onSuggestionClick: PropTypes.func,
	onListScroll: PropTypes.func,
};
