import {
	forwardRef,
	useState,
	useEffect,
	useRef,
	useMemo,
	useCallback,
} from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import CollapsibleContent from '@locus-labs/mol-desktop-collapsible-content';
import InfiniteList from './InfiniteList';
import { LoadingRow, NoSearchResultsInfo } from './row-types';
import { prepareItemsList } from './prepareItemsList';

const mergeRefs = (...refs) => {
	const filteredRefs = refs.filter(Boolean);
	if (!filteredRefs.length) return null;
	if (filteredRefs.length === 0) return filteredRefs[0];
	return (inst) => {
		for (const ref of filteredRefs) {
			if (typeof ref === 'function') {
				ref(inst);
			} else if (ref) {
				ref.current = inst;
			}
		}
	};
};

/**
 * Search component renders collapsible content with search results items.
 * The search results items list is lazyloaded and virtualized, which improves performance
 * by only rendering the DOM nodes that user is able to see based on their current scroll position.
 *
 * Supported search results items:
 * - search suggestions
 * - search terms
 * - search POIs section (including section title and section POIs items)
 */
const SearchResultsList = forwardRef((props, ref) => {
	const {
		isContentOpen,
		onCollapseButtonClick,
		collapsePanelTooltipContent,
		expandPanelTooltipContent,
		searchTermsArray,
		suggestedSearchesArray,
		searchPOIsSections,
		threshold,
		noSearchResultsInfo,
		onPOIClick,
		onTermClick,
		onSuggestionClick,
		isLoading,
		cancelDefaultScrollToTop,
		shouldUpdateElements,
		...omittedProps
	} = props;
	const listRef = useRef();

	/**
	 * Determines if next batch of items to display has started loading.
	 *
	 * @type {[boolean, function]} isNextPageLoading
	 */
	const [isNextPageLoading, setIsNextPageLoading] = useState(false);

	/**
	 * Set of list items.
	 *
	 * @type {[Object[], function]} items
	 */
	const [items, setItems] = useState([]);

	/**
	 * Set of loaded list items.
	 *
	 * @type {[Object[], function]} displayedItems
	 */
	const [displayedItems, setDisplayedItems] = useState([]);

	/**
	 * Determines if there are more items to be loaded.
	 *
	 * @type {[boolean, function]} hasNextPage
	 */
	const [hasNextPage, setHasNextPage] = useState(true);

	/**
	 * Stores calculated content height.
	 * If set to false, then content height will be 100%.
	 *
	 * @type {[number|boolean, function]} measuredHeight
	 */
	const [measuredHeight, setMeasuredHeight] = useState(false);

	/**
	 * Determines if the content was scrolled.
	 * If set to true, then a top shadow on the CollapsibleContent will be applied.
	 * If set to false, then a top shadow on the CollapsibleContent will be removed.
	 *
	 * @type {[boolean, function]} isScrolled
	 */
	const [isScrolled, setIsScrolled] = useState(false);

	/**
	 * Determines if new items set was loaded for the first time.
	 *
	 * @type {[boolean, function]} isFirstLoad
	 */
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	/**
	 * Load next batch of items to be displayed on the list.
	 * Load without delay on initial list items render, so we don't get "no search results info".
	 * Called when isNextPageLoading changes its value.
	 */
	useEffect(() => {
		const _loadNextPage = () => {
			// If should load next page
			if (isNextPageLoading && hasNextPage) {
				const numberOfItemsToBeDisplayed = displayedItems.length + threshold; // How much items will be displayed after this round.
				setHasNextPage(numberOfItemsToBeDisplayed < items.length); // If not all items are going to be displayed in this round, allow loading another set.
				setIsNextPageLoading(false); // Finish loading this batch of items.
				setDisplayedItems(
					[...displayedItems].concat(
						[...items].slice(displayedItems.length, numberOfItemsToBeDisplayed)
					)
				); // Add new items to the displayed items list.
			}
		};

		if (isFirstLoad) {
			_loadNextPage();
			return;
		}

		let timer = setTimeout(() => {
			_loadNextPage();
		}, 200); // Add delay so the loading indicator shows up.
		return () => {
			clearTimeout(timer);
		};
	}, [isNextPageLoading]);

	/**
	 * Re-initialize displayed items on items change.
	 * By default displayed items array will be cleared.
	 * If update to existing items was requested, re-load currently displayed list items.
	 */
	useEffect(() => {
		setIsFirstLoad(false);
		if (!items.length) setIsScrolled(false); // If there are no items to be displayed, reset top shadow.
		let initialItemsArray = [];
		let initialItemsLength = 0;
		// If this is an update to existing list elements.
		if (shouldUpdateElements || cancelDefaultScrollToTop) {
			initialItemsLength = displayedItems.length; // Keep number of currently loaded elements so scroll can be preserved.
			initialItemsArray = [...items].slice(0, initialItemsLength); // Re-render currently displayed list.
		}
		setDisplayedItems(initialItemsArray); // Re-load displayed items.
		setHasNextPage(items.length > initialItemsLength); // Detect if there are more items left to load.
	}, [items]);

	/**
	 * Reset top-shadow if loading state for the list was requested.
	 */
	useEffect(() => {
		if (isLoading) setIsScrolled(false);
	}, [isLoading]);

	/**
	 * Re-initialize list and list items when search results change.
	 * Reset scroll position on the list if a set of items is being loaded for the first time.
	 * Load items without delay on initial list items render, so we don't get "no search results info".
	 */
	useEffect(() => {
		const _initializeList = () => {
			setIsFirstLoad(true);
			setHasNextPage(true); // Assume there are more items to load.
			setMeasuredHeight(false); // Container should reset to 100% height.
			// Prepare new items.
			setItems(
				prepareItemsList({
					searchTermsArray,
					suggestedSearchesArray,
					searchPOIsSections,
				})
			);
		};

		if (isFirstLoad) {
			_initializeList();
			forceScrollToTop();
			return;
		}
		let timer = setTimeout(() => {
			_initializeList();
		}, 200); // Add delay so we don't start rendering new items if there are upcoming changes.
		return () => {
			clearTimeout(timer);
		};
	}, [searchTermsArray, suggestedSearchesArray, searchPOIsSections]);

	/**
	 * Determine if there are any more items to be loaded.
	 * Invoked by InfiniteList when more rows must be loaded.
	 */
	const loadNextPage = useCallback(() => {
		const willRenderNextPage = displayedItems.length < items.length;
		setHasNextPage(willRenderNextPage);
		setIsNextPageLoading(willRenderNextPage);
	}, [displayedItems, items]);

	/**
	 * Calculate displayed list height.
	 * Invoked by InfiniteList when all items were loaded.
	 */
	const onAllPagesRendered = useCallback(() => {
		const searchItems = document.getElementsByClassName('search-result-item');
		const lastItem = searchItems[searchItems.length - 1];
		if (!lastItem) return; // If there was no item detected, don't change list height.
		const elementsHeight = lastItem.offsetTop + 24; // Add 24px, so the calculations include collapse button.
		setMeasuredHeight(elementsHeight);
	}, []);

	/**
	 * Check if the list was scrolled.
	 *
	 * @param {number|boolean} scrollOffset
	 */
	const handleListScroll = (scrollOffset) => {
		if (!!scrollOffset !== isScrolled) setIsScrolled(!!scrollOffset);
	};

	/**
	 * Reset scroll on the list.
	 */
	const forceScrollToTop = useCallback(() => {
		if (listRef.current && typeof listRef.current.scrollToTop === 'function')
			listRef.current.scrollToTop();
	}, [listRef]);

	/**
	 * Returns height of the CollapsibleContent necessary to fit all search results, so there is no additional space left.
	 * This will be re-calculated only when list items change, list loading state is changed or measured list height has changed.
	 *
	 * Returns 'auto', if there are no items to be displayed or list loading state is requested.
	 * Returns measuredHeight, if there are items to be displayed and list loading wasn't requested and list height was measured.
	 * Returns '100%', if there are items to be displayed and list loading wasn't requested, but list height wasn't measured.
	 * @returns {string} Height of the CollapsibleContent.
	 */
	const contentHeight = useMemo(
		() => (items.length && !isLoading ? measuredHeight || '100%' : 'auto'),
		[items, isLoading, measuredHeight]
	);

	/**
	 * Returns UI content that should be rendered.
	 * Returns LoadingRow, if list loading state was requested.
	 * Returns InfiniteList, if there are any search results.
	 * Returns NoSearchResultsInfo, in any other case.
	 *
	 * @returns {React.DOMElement} UI to be displayed.
	 */
	const getList = () => {
		if (isLoading) return <LoadingRow />;
		if (items.length)
			return (
				<InfiniteList
					ref={mergeRefs(ref, listRef)}
					data-cy="SearchResultsList"
					hasNextPage={hasNextPage}
					isNextPageLoading={isNextPageLoading}
					items={displayedItems}
					loadNextPage={loadNextPage}
					threshold={threshold}
					notifyItemsRendered={onAllPagesRendered}
					cancelDefaultScrollToTop={cancelDefaultScrollToTop}
					onPOIClick={onPOIClick}
					onTermClick={onTermClick}
					onSuggestionClick={onSuggestionClick}
					onListScroll={handleListScroll}
				/>
			);

		return <NoSearchResultsInfo noSearchResultsInfo={noSearchResultsInfo} />;
	};

	return (
		<CollapsibleContent
			hasHeightOverride={true}
			height={contentHeight}
			maxHeight="100%"
			isContentOpen={isContentOpen}
			onCollapseButtonClick={onCollapseButtonClick}
			collapsePanelTooltipContent={collapsePanelTooltipContent}
			expandPanelTooltipContent={expandPanelTooltipContent}
			isContentScrolled={isScrolled}
			hasCustomScroll={true}
			{...omittedProps}
		>
			{getList()}
		</CollapsibleContent>
	);
});

SearchResultsList.displayName = 'Search Results List';

SearchResultsList.defaultProps = {
	threshold: 10,
	isLoading: false,
	shouldUpdateElements: false,
};

export default SearchResultsList;

SearchResultsList.propTypes = {
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
	isLoading: PropTypes.bool,
	noSearchResultsInfo: PropTypes.shape({
		primaryLabel: PropTypes.string.isRequired,
		secondaryLabel: PropTypes.string.isRequired,
	}).isRequired,
	isContentOpen: PropTypes.bool.isRequired,
	cancelDefaultScrollToTop: PropTypes.bool,
	shouldUpdateElements: PropTypes.bool,
	onCollapseButtonClick: PropTypes.func.isRequired,
	collapsePanelTooltipContent: PropTypes.string.isRequired,
	expandPanelTooltipContent: PropTypes.string.isRequired,
	threshold: PropTypes.number,
	onPOIClick: PropTypes.func,
	onTermClick: PropTypes.func,
	onSuggestionClick: PropTypes.func,
	searchTermsArray: PropTypes.arrayOf(PropTypes.string),
	suggestedSearchesArray: PropTypes.arrayOf(
		PropTypes.shape({
			searchTerm: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			badgeIcon: PropTypes.string.isRequired,
			badgeIconColor: PropTypes.string,
			badgeColor: PropTypes.string,
			badgeOutlineColor: PropTypes.string,
		})
	),
	searchPOIsSections: PropTypes.arrayOf(
		PropTypes.shape({
			sectionTitle: PropTypes.string,
			searchPOIsArray: PropTypes.arrayOf(
				PropTypes.shape({
					iconName: PropTypes.string.isRequired,
					primaryLabel: PropTypes.string.isRequired,
					secondaryLabel: PropTypes.string.isRequired,
					status: PropTypes.shape({
						type: PropTypes.oneOf([
							'alert',
							'active',
							'inactive',
							'warning',
							'info',
						]).isRequired,
						text: PropTypes.string.isRequired,
						pulsingStatusOn: PropTypes.bool,
					}),
				})
			),
		})
	),
};
