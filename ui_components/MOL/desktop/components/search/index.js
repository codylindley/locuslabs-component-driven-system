import { forwardRef, useContext, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mol-desktop-box';
import SearchInput from './subcomponents/search-input';
import Filter from './subcomponents/filter';
import SearchResultsList from '@locus-labs/mol-desktop-search-results-list';
import useComponentFocused from '@locus-labs/utils-use-component-focused';
import Logo from '@locus-labs/mol-desktop-logo';
import { theme, withProp } from 'styled-tools';

const StyledSearch = styled(Box)`
	pointer-events: none;
	filter: drop-shadow(${theme('shadows.md')});
	* {
		pointer-events: all;
	}
`;

const Divider = styled(Box)`
	background: ${theme('colors.background')};
	border-bottom: ${withProp(
		theme('colors.primaryText'),
		(primaryText) => `1px solid ${rgba(primaryText, 0.1)}`
	)};
`;

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
 * Search component is responsible for rendering Exploration Search UI.
 * Component consists of search header (logo, search input and filter), plus search collapsible content, which renders all search results.
 * Search results list is lazyloaded and virtualized, which improves performance
 * by only rendering the DOM nodes that user is able to see based on their current scroll position.
 */
const Search = forwardRef((props, ref) => {
	const {
		logoProps,
		filterProps,
		hasFilter,
		activeFilterOption,
		onFilterOptionClick,
		term,
		onSearchTermChange,
		onBackButtonClick,
		onClearButtonClick,
		onDirectionsIconClick,
		onReturnKeyPress,
		noSearchResultsInfo,
		isContentOpen,
		toggleCollapsePanel,
		collapsePanelTooltipContent,
		expandPanelTooltipContent,
		suggestedSearchesArray,
		searchTermsArray,
		searchPOIsSections,
		cancelDefaultScrollToTop,
		onPOIClick,
		onTermClick,
		onSuggestionClick,
		onInputFocus,
		onInputBlur,
		threshold,
		inputPlaceholder,
		searchIconTooltipContent,
		clearIconTooltipContent,
		directionsIconTooltipContent,
		backIconTooltipContent,
		isLoading,
		shouldUpdateElements,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);

	const {
		ref: componentFocusedRef,
		isComponentFocused,
		setIsComponentFocused,
	} = useComponentFocused(false);

	const inputRef = useRef(componentFocusedRef);
	const listRef = useRef();
	const filterRef = useRef();

	/**
	 * Expand content on term change.
	 * Called when term changes.
	 */
	useEffect(() => {
		if (!isContentOpen) {
			toggleCollapsePanel();
		}
	}, [term]);

	/**
	 * Handle side-effects of component focus/unfocus.
	 * Called when focus on component changes.
	 */
	useEffect(() => {
		// If component was focused but content is collapsed, expand it.
		if (isComponentFocused && !isContentOpen) {
			toggleCollapsePanel();
		}

		// If component was unfocused and term was empty, blur (deactivate) input.
		if (!isComponentFocused && !term.length) {
			onInputBlur();
		}
	}, [isComponentFocused]);

	/**
	 * Ensure filter dropdown collapses when content is collapsed.
	 * Called when content collapse state changes.
	 */
	useEffect(() => {
		if (!isContentOpen && filterRef && filterRef.current) {
			filterRef.current.toggleDropdown(false);
		}
	}, [isContentOpen]);

	/**
	 * Handle input focus.
	 * Expand content on input focus.
	 */
	const onInputFocusHandler = useCallback(() => {
		if (!isContentOpen) {
			toggleCollapsePanel();
		}
		onInputFocus();
	}, [isContentOpen]);

	/**
	 * Handle collapse button click and toggle collapsible panel.
	 */
	const onCollapseButtonClick = useCallback(
		(e) => {
			e.stopPropagation(); // Ensure component focus state won't be changed.
			toggleCollapsePanel();
		},
		[isContentOpen]
	);

	/**
	 * Handle filter option click.
	 * Scroll list to the top on option change.
	 */
	const onFilterOptionClickHandler = useCallback(
		(id) => {
			if (listRef.current && typeof listRef.current.scrollToTop === 'function')
				listRef.current.scrollToTop();
			onFilterOptionClick(id);
		},
		[listRef]
	);

	/**
	 * Handle filter dropdown click.
	 * Expand content if collapsed.
	 */
	const onFilterDropdownClick = useCallback(() => {
		if (!isContentOpen) {
			toggleCollapsePanel();
		}
	}, [isContentOpen]);

	return (
		<StyledSearch
			onClick={() => setIsComponentFocused(true)}
			ref={mergeRefs(ref, componentFocusedRef)}
			display="flex"
			flexDirection="column"
			{...omittedProps}
		>
			<Box
				position="relative"
				display="flex"
				flexDirection="column"
				flex="0 0 auto"
				zIndex={2}
				borderBottomLeftRadius={isContentOpen ? '0' : themeContext.radii.lg}
				borderBottomRightRadius={isContentOpen ? '0' : themeContext.radii.lg}
				overflow={isContentOpen ? 'visible' : 'hidden'}
			>
				<Box
					overflow="hidden"
					display="flex"
					flexDirection="column"
					borderTopLeftRadius={themeContext.radii.lg}
					borderTopRightRadius={themeContext.radii.lg}
					background={themeContext.colors.background}
				>
					{!!Object.keys(logoProps).length && (
						<Logo borderRadius="inherit" {...logoProps} />
					)}
					<SearchInput
						ref={inputRef}
						isContentOpen={isContentOpen}
						isComponentFocused={isComponentFocused}
						term={term}
						onSearchTermChange={onSearchTermChange}
						onBackButtonClick={onBackButtonClick}
						onClearButtonClick={onClearButtonClick}
						onDirectionsIconClick={onDirectionsIconClick}
						onInputFocus={onInputFocusHandler}
						onInputBlur={onInputBlur}
						onReturnKeyPress={onReturnKeyPress}
						placeholder={inputPlaceholder}
						searchIconTooltipContent={searchIconTooltipContent}
						clearIconTooltipContent={clearIconTooltipContent}
						directionsIconTooltipContent={directionsIconTooltipContent}
						backIconTooltipContent={backIconTooltipContent}
					/>
				</Box>
				{hasFilter && !!filterProps && filterProps.filterOptions.length && (
					<Filter
						ref={filterRef}
						zIndex={1}
						activeFilterOption={activeFilterOption}
						onFilterOptionClick={onFilterOptionClickHandler}
						onFilterDropdownClick={onFilterDropdownClick}
						{...filterProps}
					/>
				)}
				<Divider />
			</Box>
			<SearchResultsList
				ref={listRef}
				listScrollUpTrigger={term}
				isContentOpen={isContentOpen}
				noSearchResultsInfo={noSearchResultsInfo}
				collapsePanelTooltipContent={collapsePanelTooltipContent}
				expandPanelTooltipContent={expandPanelTooltipContent}
				onCollapseButtonClick={onCollapseButtonClick}
				suggestedSearchesArray={suggestedSearchesArray}
				searchTermsArray={searchTermsArray}
				searchPOIsSections={searchPOIsSections}
				cancelDefaultScrollToTop={cancelDefaultScrollToTop}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				threshold={threshold}
				isLoading={isLoading}
				shouldUpdateElements={shouldUpdateElements}
			/>
		</StyledSearch>
	);
});

Search.displayName = 'Search';

Search.defaultProps = {
	'data-cy': 'Search',
	logoProps: {},
	filterProps: {},
	hasFilter: false,
	isLoading: false,
};

export default Search;

Search.propTypes = {
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
	logoProps: PropTypes.shape({
		url: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		logoHeight: PropTypes.number,
		position: PropTypes.oneOf(['left', 'center', 'right']),
	}),
	threshold: PropTypes.number,
	hasFilter: PropTypes.bool,
	onFilterOptionClick: PropTypes.func,
	activeFilterOption: PropTypes.string,
	filterProps: PropTypes.shape({
		filterOptions: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
			})
		).isRequired,
		filterCaption: PropTypes.string.isRequired,
		filterTooltipContent: PropTypes.string.isRequired,
	}),
	isContentOpen: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool,
	term: PropTypes.string.isRequired,
	onTermClick: PropTypes.func.isRequired,
	onSearchTermChange: PropTypes.func.isRequired,
	inputPlaceholder: PropTypes.string.isRequired,
	searchIconTooltipContent: PropTypes.string.isRequired,
	clearIconTooltipContent: PropTypes.string.isRequired,
	directionsIconTooltipContent: PropTypes.string.isRequired,
	backIconTooltipContent: PropTypes.string.isRequired,
	onBackButtonClick: PropTypes.func.isRequired,
	onClearButtonClick: PropTypes.func.isRequired,
	onDirectionsIconClick: PropTypes.func.isRequired,
	onInputFocus: PropTypes.func.isRequired,
	onReturnKeyPress: PropTypes.func.isRequired,
	onInputBlur: PropTypes.func.isRequired,
	onPOIClick: PropTypes.func.isRequired,
	onSuggestionClick: PropTypes.func.isRequired,
	noSearchResultsInfo: PropTypes.shape({
		primaryLabel: PropTypes.string.isRequired,
		secondaryLabel: PropTypes.string.isRequired,
	}).isRequired,
	toggleCollapsePanel: PropTypes.func.isRequired,
	collapsePanelTooltipContent: PropTypes.string.isRequired,
	expandPanelTooltipContent: PropTypes.string.isRequired,
	cancelDefaultScrollToTop: PropTypes.bool,
	shouldUpdateElements: PropTypes.bool,
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
