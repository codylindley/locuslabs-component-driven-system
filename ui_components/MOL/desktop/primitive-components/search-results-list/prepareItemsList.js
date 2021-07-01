/**
 * Enum for list item types.
 * @readonly
 * @enum {number}
 */
const ListItemTypes = {
	SECTION_TITLE: 'SECTION_TITLE',
	SUGGESTION: 'SUGGESTION',
	TERM: 'TERM',
	POI: 'POI',
};
/**
 * Map suggested searches to search result format.
 * @param  {Array.<Object>} array - search terms array
 *
 * @returns {Array.<{value: Object, type: ListItemTypes}>} Array of suggested searches in search result format.
 */
const _mapSuggestedSearches = (array) =>
	array.map((el, index) => {
		const lastItemIndex = array.length - 1;
		const getMargin = (index) => {
			if (index === 0) return '20px 0 0';
			if (index === lastItemIndex) return '0 0 20px';
			return '0';
		};

		return Object.assign({
			value: { ...el, margin: getMargin(index) },
			type: ListItemTypes.SUGGESTION,
		});
	});

/**
 * Map terms to search result format.
 * @param  {Array.<string>} array - suggested searches array
 *
 * @returns {Array.<{value: Object, type: ListItemTypes}>} Array of search terms in search result format.
 */
const _mapSearchTerms = (array) =>
	array.map((term, index) =>
		Object.assign({
			value: { term, hasDivider: !!index },
			type: ListItemTypes.TERM,
		})
	);

/**
 * Map POIs sections to search result format.
 * @param  {Array.<{sectionTitle: string, searchPOIsArray: Array.<Object>}>} searchPOIsSections - array of objects containing POIs section title and POIs array
 *
 * @returns {Array.<{type: ListItemTypes, value: string|Object}}>} Array of POIs sections in search result format.
 */
const _mapPOIsSections = (searchPOIsSections) => {
	const mappedSearchPOIsArray = [];
	searchPOIsSections.forEach((section) => {
		mappedSearchPOIsArray.push(..._preparePoiSectionItems(section));
	});
	return mappedSearchPOIsArray;
};

/**
 * Map POIs section title and POIs array to search result format.
 * @param  {object} props
 * @param  {} searchPOIsArray - array of POIs
 * @param  {} sectionTitle=null - POIs section title
 *
 * @returns {Array.<{type: ListItemTypes, value: string|Object}>} Array of POIs section title and POIs in search result format.
 */
const _preparePoiSectionItems = ({ searchPOIsArray, sectionTitle = null }) => {
	const listItems = [];

	/**
	 * Check if list item should have top divider.
	 * @param  {string|null} sectionTitle - POIs section title
	 * @param  {number} index - list item index
	 * Returns false if item is displayed immediately after section title, otherwise returns true.
	 *
	 * @returns {boolean} Returns top divider state.
	 */
	const _hasDivider = (sectionTitle, index) => (sectionTitle ? !!index : true);

	if (searchPOIsArray && searchPOIsArray.length) {
		// If section title is defined.
		if (sectionTitle)
			listItems.push(
				Object.assign({
					value: sectionTitle,
					type: ListItemTypes.SECTION_TITLE,
				})
			);

		const mappedSearchPOIsArray = searchPOIsArray.map((poi, index) =>
			Object.assign({
				value: {
					...poi,
					hasDivider: _hasDivider(sectionTitle, index),
				},
				type: ListItemTypes.POI,
			})
		);
		listItems.push(...mappedSearchPOIsArray);
	}
	return listItems;
};

/**
 * Return search results items list.
 * @param  {object} props
 * @param  {object[]} props.searchTermsArray=[] - search terms array
 * @param  {object[]} props.suggestedSearchesArray=[] - suggested searches array
 * @param  {object[]} props.searchPOIsSections=[] - array of objects containing POIs section title and POIs array
 *
 * @returns {object[]} Array of search results.
 */
const prepareItemsList = ({
	suggestedSearchesArray = [],
	searchTermsArray = [],
	searchPOIsSections = [],
}) => {
	const mappedSuggestedSearchesArray = _mapSuggestedSearches(
		suggestedSearchesArray
	);
	const mappedSearchTermsArray = _mapSearchTerms(searchTermsArray);
	const mappedSearchPOIsArray = _mapPOIsSections(searchPOIsSections);

	return mappedSuggestedSearchesArray.concat(
		mappedSearchTermsArray,
		mappedSearchPOIsArray
	);
};

export { prepareItemsList, ListItemTypes };
