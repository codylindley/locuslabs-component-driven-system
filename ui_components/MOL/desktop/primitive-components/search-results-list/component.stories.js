import { useState } from 'react';
import SearchResultsList from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mol-desktop-box';
import componentDocumentation from './docs.mdx';

export default {
	title:
		'MOL Components/Desktop/Primitive Components/Search Results List/Search Results List',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: SearchResultsList,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=11506%3A401',
		},
	},
};

const suggestedSearchesArray = [
	{
		name: 'Restaurants',
		searchTerm: 'eat',
		badgeIcon: 'eat',
	},
	{
		name: 'Shops',
		searchTerm: 'shop',
		badgeIcon: 'shop',
	},
	{
		name: 'Relax',
		searchTerm: 'relax',
		badgeIcon: 'relax',
	},
	{
		name: 'Toilets',
		searchTerm: 'restroom',
		badgeIcon: 'restroom',
	},
	{
		name: 'Airlines',
		searchTerm: 'check-in',
		badgeIcon: 'checkin',
	},
	{
		name: 'Baggage Claim Baggage Claim Baggage Claim',
		searchTerm: 'baggage claim',
		badgeIcon: 'baggage',
	},
	{
		name: 'Parking',
		searchTerm: 'parking',
		badgeIcon: 'parking',
	},
];

const searchTermsArray = [
	'Parking',
	'Baggage Claim',
	'Check-In',
	'Restroom',
	'Sandwiches',
	'ATM',
	'Souvenirs',
	'Currency Exchange',
];

const searchPOIsArray = [
	{
		iconName: 'shop',
		primaryLabel: 'Way Out West',
		secondaryLabel: 'Near Gate C34  •  Level 3',
		poiId: '62',
	},
	{
		iconName: 'shop',
		primaryLabel: 'Say Si Bon!',
		secondaryLabel: 'Near Gate C26  •  Level 5',
		poiId: '19',
	},
	{
		iconName: 'shop',
		primaryLabel: 'CNBC Smartshop',
		secondaryLabel: 'Near Gate C26  •  Level 5',
		poiId: '18',
		status: {
			type: 'alert',
			text: '10 minutes wait',
			pulsingStatusOn: true,
		},
	},
	{
		iconName: 'shop',
		primaryLabel: 'Tattered Cover Bookstore',
		secondaryLabel: 'Near Gate C  •  Level 5',
		poiId: '63',
	},
	{
		iconName: 'shop',
		primaryLabel: 'The Body Shop',
		secondaryLabel: 'Near Gate C  •  Level 5',
		poiId: '65',
	},
	{
		iconName: 'shop',
		primaryLabel: 'Peak Newsstand',
		secondaryLabel: 'Near Gate C  •  Level 5',
		poiId: '66',
		status: {
			type: 'info',
			text: '10 minutes wait',
		},
	},
	{
		iconName: 'shop',
		primaryLabel: "See's Candies",
		secondaryLabel: 'Near Gate C  •  Level 5',
		poiId: '74',
	},
	{
		iconName: 'shop',
		primaryLabel: 'Colorado Limited',
		secondaryLabel: 'Near Gate C  •  Level 5',
		poiId: '76',
	},
	{
		iconName: 'shop',
		primaryLabel: 'InMotion',
		secondaryLabel: 'Near Gate C  •  Level 5',
		poiId: '82',
	},
	{
		iconName: 'shop',
		primaryLabel: 'Bee Fruity & Nutty',
		secondaryLabel: 'Near Gate C  •  Level 5',
		poiId: '85',
	},
];

const SearchResultsListTemplate = (props) => {
	const [isOpen, setIsOpen] = useState(true);
	const onCollapseButtonClick = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<SearchResultsList
			isContentOpen={isOpen}
			onCollapseButtonClick={onCollapseButtonClick}
			collapsePanelTooltipContent="Collapse Panel"
			expandPanelTooltipContent="Expand Panel"
			onPOIClick={onPOIClick}
			onTermClick={onTermClick}
			onSuggestionClick={onSuggestionClick}
			noSearchResultsInfo={{
				primaryLabel: 'Sorry, no matches were found',
				secondaryLabel: 'Try searching a different phrase',
			}}
			{...props}
		/>
	);
};

export const Default = () => {
	return (
		<Box height="400px">
			<SearchResultsListTemplate
				searchTermsArray={searchTermsArray}
				searchPOIsSections={[
					{ sectionTitle: 'Nearby', searchPOIsArray },
					{ sectionTitle: 'Other results', searchPOIsArray },
				]}
			/>
		</Box>
	);
};

export const WithNoResults = () => {
	return (
		<Box height="400px">
			<SearchResultsListTemplate />
		</Box>
	);
};
export const WithOneResult = () => {
	return (
		<Box height="400px">
			<SearchResultsListTemplate searchTermsArray={['one result']} />
		</Box>
	);
};

export const WithSuggestedSearches = () => {
	return (
		<Box height="400px">
			<SearchResultsListTemplate
				suggestedSearchesArray={suggestedSearchesArray}
			/>
		</Box>
	);
};

export const WithSearchTerms = () => {
	return (
		<Box height="400px">
			<SearchResultsListTemplate searchTermsArray={searchTermsArray} />
		</Box>
	);
};

export const WithSearchPois = () => {
	return (
		<Box height="400px">
			<SearchResultsListTemplate
				searchPOIsSections={[
					{ sectionTitle: 'Nearby', searchPOIsArray },
					{ sectionTitle: 'Other results', searchPOIsArray },
				]}
			/>
		</Box>
	);
};

export const WithoutSectionTitle = () => {
	return (
		<Box height="400px">
			<SearchResultsListTemplate searchPOIsSections={[{ searchPOIsArray }]} />
		</Box>
	);
};

export const WithManyResults = () => {
	return (
		<Box height="400px">
			This list displays items from 0 to 9999
			<SearchResultsListTemplate searchTermsArray={[...Array(10000).keys()]} />
		</Box>
	);
};

export const WithExternalListChange = () => {
	const [updatedIndex, setUpdatedIndex] = useState(null);
	const [searchTermsArray, setSearchTermsArray] = useState([
		...Array(99).keys(),
	]);
	const [isAscending, setIsAscending] = useState(false);

	const changeOneItem = () => {
		setTimeout(() => {
			const randomIndex = Math.floor(Math.random() * searchTermsArray.length);
			setUpdatedIndex(randomIndex);
			const itemsCopy = [...searchTermsArray];
			itemsCopy[randomIndex] = '1';
			setSearchTermsArray([...itemsCopy]);
		}, 1500);
	};

	const sortList = () => {
		setSearchTermsArray(
			[...searchTermsArray].sort(function (a, b) {
				if (isAscending) return a - b;
				else return b - a;
			})
		);

		setIsAscending(!isAscending);
	};

	const replaceAllItems = () => {
		const startIndex = Math.floor(Math.random() * 1000);
		const newItems = [...Array(Math.floor(Math.random() * 8) + 1).keys()].map(
			(value) => (value + startIndex).toString()
		);
		setSearchTermsArray(newItems);
		setUpdatedIndex(null);
	};

	return (
		<Box
			height="400px"
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Box display="flex">
				<Box
					padding="20px"
					marginRight="10px"
					bg="gray"
					onClick={sortList}
					data-cy="SortItemsButton"
				>
					click to sort the list
				</Box>
				<Box
					padding="20px"
					marginRight="10px"
					bg="gray"
					onClick={changeOneItem}
				>
					change item with timeout
				</Box>
				<Box
					padding="20px"
					bg="gray"
					onClick={replaceAllItems}
					data-cy="ReplaceItemsButton"
				>
					replace all items
				</Box>
			</Box>
			{!!updatedIndex && <Box>Updated item at index {updatedIndex}</Box>}

			<SearchResultsListTemplate searchTermsArray={searchTermsArray} />
		</Box>
	);
};

export const WithNestedPropChange = () => {
	const [hasStatus, setHasStatus] = useState(false);
	const [searchPOIsSections, setSearchPOIsSections] = useState([
		{ searchPOIsArray },
	]);

	const updateStatus = () => {
		const searchSectionsCopy = [...searchPOIsSections];
		searchSectionsCopy[0].searchPOIsArray[2] = {
			...searchSectionsCopy[0].searchPOIsArray[2],
			status: {
				...searchSectionsCopy[0].searchPOIsArray[2].status,
				text: `${Math.floor(Math.random() * 9) + 1} minutes wait`,
			},
		};
		setSearchPOIsSections([...searchSectionsCopy]);
	};

	const toggleStatus = () => {
		const searchSectionsCopy = [...searchPOIsSections];
		if (hasStatus) {
			delete searchSectionsCopy[0].searchPOIsArray[0].status;
		} else {
			searchSectionsCopy[0].searchPOIsArray[0] = {
				...searchSectionsCopy[0].searchPOIsArray[0],
				status: {
					type: 'info',
					text: '10 minutes wait',
				},
			};
		}
		setHasStatus(!hasStatus);
		setSearchPOIsSections([...searchSectionsCopy]);
	};

	return (
		<Box
			height="400px"
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Box display="flex">
				<Box padding="20px" marginRight="10px" bg="gray" onClick={updateStatus}>
					update status
				</Box>
				<Box padding="20px" bg="gray" onClick={toggleStatus}>
					{hasStatus ? 'remove' : 'add'} status
				</Box>
			</Box>

			<SearchResultsListTemplate
				searchPOIsSections={searchPOIsSections}
				shouldUpdateElements={true}
				cancelDefaultScrollToTop={true}
			/>
		</Box>
	);
};

export const WithSmallThreshold = () => {
	return (
		<Box height="400px">
			<SearchResultsListTemplate
				threshold={2}
				searchTermsArray={searchTermsArray}
				searchPOIsSections={[
					{ sectionTitle: 'Nearby', searchPOIsArray },
					{ sectionTitle: 'Other results', searchPOIsArray },
				]}
			/>
		</Box>
	);
};

export const WithThresholdBiggerThanItems = () => {
	return (
		<Box height="400px">
			<SearchResultsListTemplate
				threshold={10}
				searchTermsArray={[...searchTermsArray].slice(0, 4)}
			/>
		</Box>
	);
};

export const WithInitialLoading = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [items, setItems] = useState([]);
	const toggleLoading = () => {
		if (!items.length) {
			setItems([{ sectionTitle: 'Nearby', searchPOIsArray }]);
		}
		setIsLoading(!isLoading);
	};

	return (
		<Box
			height="400px"
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Box display="flex">
				<Box padding="20px" bg="gray" onClick={toggleLoading}>
					toggle loading {isLoading ? 'OFF' : 'ON'}
				</Box>
			</Box>

			<SearchResultsListTemplate
				isLoading={isLoading}
				searchPOIsSections={items}
			/>
		</Box>
	);
};
