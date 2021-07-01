import { useState, useEffect } from 'react';
import Search from './';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mol-desktop-box';
import componentDocumentation from './docs.mdx';
import searchPOIsData from './pois-data.json';

export default {
	title: 'MOL Components/Desktop/Domain Components/Search',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: Search,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=7366%3A0',
		},
	},
};

const suggestedSearchesArrayOriginal = [
	{
		name: 'Restaurants',
		searchTerm: 'eat',
		badgeIcon: 'eat',
		badgeColor: 'orange',
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
		badgeColor: 'purple',
	},
	{
		name: 'Toilets',
		searchTerm: 'restroom',
		badgeIcon: 'restroom',
		badgeColor: 'navy',
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

const searchTermsArrayOriginal = [
	'Parking',
	'Shop',
	'Baggage Claim',
	'Check-In',
	'Restroom',
	'Sandwiches',
	'ATM',
	'Souvenirs',
	'Currency Exchange',
];

const searchPOIsArrayOriginal = searchPOIsData;

const logoProps = {
	url: 'https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/spritesheet-svg/A1GU9WBVS35VHT/venue-logo.svg',
	logoHeight: 28,
	position: 'left',
	alt: 'custom alt text',
};

export const Default = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithLogo = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');
		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				logoProps={logoProps}
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithOneSearchTerm = () => {
	const defaultSearchTermsArray = ['shop'];
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithNoSearchTerms = () => {
	const defaultSearchTermsArray = [];
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithNoSuggestedSearches = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = [];
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithNoSearchPois = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = [];
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithDefaultScrollToTopCancelled = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				cancelDefaultScrollToTop={true}
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithFilter = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	const [hasFilter, setHasFilter] = useState(false);
	const [activeFilterOption, setActiveFilterOption] = useState('open');

	const filterProps = {
		filterCaption: 'Showing',
		filterOptions: [
			{
				id: 'open',
				name: 'Open',
			},
			{ id: 'all', name: 'All' },
		],
		filterTooltipContent: 'Filter results',
	};

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed) {
			if (searchTerms.length) setSearchTerms([]);
			setHasFilter(true);
		} else {
			setHasFilter(false);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	const onFilterOptionClick = (id) => {
		setActiveFilterOption(id);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				activeFilterOption={activeFilterOption}
				onFilterOptionClick={onFilterOptionClick}
				hasFilter={hasFilter}
				filterProps={filterProps}
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithLongListOfSearchTerms = () => {
	const defaultSearchTermsArray = [...Array(10000).keys()].map((el) =>
		el.toString()
	);
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithShortPoisList = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal.slice(0, 4);
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithSmallThreshold = () => {
	const defaultSearchTermsArray = [...Array(10000).keys()].map((el) =>
		el.toString()
	);
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				threshold={4}
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithTallList = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState(
		defaultSuggestedSearchesArray
	);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			if (term.length) {
				if (term.length >= 3) {
					const poisArray = [
						{
							sectionTitle: 'Nearby',
							searchPOIsArray: [...defaultSearchPOIsArray],
						},
					];
					poisArray[0].searchPOIsArray = filterPOIs(
						poisArray[0].searchPOIsArray
					);
					setSearchPOIs([...poisArray]);
				} else {
					setSearchPOIs([]);
				}

				setSuggestedSearches([]);
				if (isSearchConfirmed) {
					setSearchTerms([]);
				} else {
					const filteredTerms = filterTerms([...defaultSearchTermsArray]);
					setSearchTerms(filteredTerms);
				}
			} else if (hasFocusedInput) {
				setIsSearchConfirmed(false);
				setSuggestedSearches([]);
				setSearchPOIs([]);
				setSearchTerms(defaultSearchTermsArray);
			} else setInitialListState();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (term.length) setTerm('');
		setIsSearchConfirmed(false);
		setSuggestedSearches(defaultSuggestedSearchesArray);
		setSearchTerms([]);
		setSearchPOIs([]);
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'700px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithInitialTerm = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState([]);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('shop');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(false);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	const _searchTermChangeSideEffects = () => {
		if (term.length) {
			if (term.length >= 3) {
				const poisArray = [
					{
						sectionTitle: 'Nearby',
						searchPOIsArray: [...defaultSearchPOIsArray],
					},
				];
				poisArray[0].searchPOIsArray = filterPOIs(poisArray[0].searchPOIsArray);
				setSearchPOIs([...poisArray]);
			} else {
				setSearchPOIs([]);
			}

			setSuggestedSearches([]);
			if (isSearchConfirmed) {
				setSearchTerms([]);
			} else {
				const filteredTerms = filterTerms([...defaultSearchTermsArray]);
				setSearchTerms(filteredTerms);
			}
		} else if (hasFocusedInput) {
			setIsSearchConfirmed(false);
			setSuggestedSearches([]);
			setSearchPOIs([]);
			setSearchTerms(defaultSearchTermsArray);
		} else setInitialListState();
	};

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			_searchTermChangeSideEffects();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (isFirstLoad && term.length) {
			_searchTermChangeSideEffects();
		} else {
			if (term.length) setTerm('');
			setIsSearchConfirmed(false);
			setSuggestedSearches(defaultSuggestedSearchesArray);
			setSearchTerms([]);
			setSearchPOIs([]);
		}
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithInitialTermConfirmed = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const defaultSearchPOIsArray = searchPOIsArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState([]);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('shop');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(true);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		setInitialListState();
	}, []);

	const _searchTermChangeSideEffects = () => {
		if (term.length) {
			if (term.length >= 3) {
				const poisArray = [
					{
						sectionTitle: 'Nearby',
						searchPOIsArray: [...defaultSearchPOIsArray],
					},
				];
				poisArray[0].searchPOIsArray = filterPOIs(poisArray[0].searchPOIsArray);
				setSearchPOIs([...poisArray]);
			} else {
				setSearchPOIs([]);
			}

			setSuggestedSearches([]);
			if (isSearchConfirmed) {
				setSearchTerms([]);
			} else {
				const filteredTerms = filterTerms([...defaultSearchTermsArray]);
				setSearchTerms(filteredTerms);
			}
		} else if (hasFocusedInput) {
			setIsSearchConfirmed(false);
			setSuggestedSearches([]);
			setSearchPOIs([]);
			setSearchTerms(defaultSearchTermsArray);
		} else setInitialListState();
	};

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			_searchTermChangeSideEffects();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (isFirstLoad && term.length) {
			_searchTermChangeSideEffects();
		} else {
			if (term.length) setTerm('');
			setIsSearchConfirmed(false);
			setSuggestedSearches(defaultSuggestedSearchesArray);
			setSearchTerms([]);
			setSearchPOIs([]);
		}
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box height={'500px'} display="flex">
			<Search
				term={term}
				onSearchTermChange={onSearchTermChange}
				onBackButtonClick={onBackButtonClick}
				onClearButtonClick={onClearButtonClick}
				onDirectionsIconClick={onDirectionsIconClick}
				onInputFocus={onInputFocus}
				onInputBlur={onInputBlur}
				onReturnKeyPress={onReturnKeyPress}
				suggestedSearchesArray={suggestedSearches}
				searchTermsArray={searchTerms}
				searchPOIsSections={searchPOIs}
				onPOIClick={onPOIClick}
				onTermClick={onTermClick}
				onSuggestionClick={onSuggestionClick}
				isContentOpen={isOpen}
				toggleCollapsePanel={toggleCollapsePanel}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				noSearchResultsInfo={{
					primaryLabel: 'Sorry, no matches were found',
					secondaryLabel: 'Try searching a different phrase',
				}}
			/>
		</Box>
	);
};

export const WithElementsUpdate = () => {
	const defaultSearchTermsArray = searchTermsArrayOriginal;
	const defaultSuggestedSearchesArray = suggestedSearchesArrayOriginal;
	const [isOpen, setIsOpen] = useState(true);
	const [suggestedSearches, setSuggestedSearches] = useState([]);
	const [searchTerms, setSearchTerms] = useState([]);
	const [searchPOIs, setSearchPOIs] = useState([]);
	const [term, setTerm] = useState('gate');
	const [isSearchConfirmed, setIsSearchConfirmed] = useState(true);
	const [hasFocusedInput, setHasFocusedInput] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [defaultSearchPOIsArray, setDefaultSearchPOIsArray] = useState(
		searchPOIsArrayOriginal
	);
	const [hasStatus, setHasStatus] = useState(false);

	const updateStatus = () => {
		const arrayCopy = [...defaultSearchPOIsArray];
		arrayCopy[2] = {
			...arrayCopy[2],
			status: {
				...arrayCopy[2].status,
				text: `${Math.floor(Math.random() * 9) + 1} minute wait`,
			},
		};
		setDefaultSearchPOIsArray([...arrayCopy]);
	};

	const toggleStatus = () => {
		const arrayCopy = [...defaultSearchPOIsArray];
		if (hasStatus) {
			delete arrayCopy[0].status;
		} else {
			arrayCopy[0] = {
				...arrayCopy[0],
				status: {
					type: 'info',
					text: '10 minute wait',
				},
			};
		}
		setHasStatus(!hasStatus);
		setDefaultSearchPOIsArray([...arrayCopy]);
	};

	useEffect(() => {
		setInitialListState();
	}, []);

	const _searchTermChangeSideEffects = () => {
		if (term.length) {
			if (term.length >= 3) {
				const poisArray = [
					{
						sectionTitle: 'Nearby',
						searchPOIsArray: [...defaultSearchPOIsArray],
					},
				];
				poisArray[0].searchPOIsArray = filterPOIs(poisArray[0].searchPOIsArray);
				setSearchPOIs([...poisArray]);
			} else {
				setSearchPOIs([]);
			}

			setSuggestedSearches([]);
			if (isSearchConfirmed) {
				setSearchTerms([]);
			} else {
				const filteredTerms = filterTerms([...defaultSearchTermsArray]);
				setSearchTerms(filteredTerms);
			}
		} else if (hasFocusedInput) {
			setIsSearchConfirmed(false);
			setSuggestedSearches([]);
			setSearchPOIs([]);
			setSearchTerms(defaultSearchTermsArray);
		} else setInitialListState();
	};

	useEffect(() => {
		if (isFirstLoad) return;
		let timer = setTimeout(() => {
			_searchTermChangeSideEffects();
		}, 300); // Add debounce to search term change.
		return () => {
			clearTimeout(timer);
		};
	}, [term]);

	useEffect(() => {
		const searchPOIsCopy = [
			{
				sectionTitle: 'Nearby',
				searchPOIsArray: [...defaultSearchPOIsArray],
			},
		];
		searchPOIsCopy[0].searchPOIsArray = filterPOIs(
			searchPOIsCopy[0].searchPOIsArray
		);
		setSearchPOIs([...searchPOIsCopy]);
	}, [defaultSearchPOIsArray]);

	useEffect(() => {
		if (isSearchConfirmed && searchTerms.length) {
			setSearchTerms([]);
		}
	}, [isSearchConfirmed]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen) {
			if (hasFocusedInput) {
				if (searchTerms.length && !searchPOIs.length) return; // do not re-render items if nothing changed
				setSuggestedSearches([]);
				setSearchTerms([...defaultSearchTermsArray]);
				setSearchPOIs([]);
			} else {
				setInitialListState();
			}
		}
	}, [hasFocusedInput]);

	useEffect(() => {
		if (isFirstLoad) return;
		if (!term.length && isOpen && !hasFocusedInput) {
			if (!suggestedSearches.length) {
				setInitialListState();
			}
		}
	}, [isOpen]); // if input was cleared and content was opened, render initial list state

	const filterPOIs = (array) => {
		return array.filter(
			(el) =>
				el.iconName.includes(term) ||
				el.primaryLabel.toLowerCase().includes(term) ||
				el.secondaryLabel.toLowerCase().includes(term)
		);
	};

	const filterTerms = (array) => {
		return array.filter((el) => el.toLowerCase().includes(term));
	};

	const setInitialListState = () => {
		if (isFirstLoad && term.length) {
			_searchTermChangeSideEffects();
		} else {
			if (term.length) setTerm('');
			setIsSearchConfirmed(false);
			setSuggestedSearches(defaultSuggestedSearchesArray);
			setSearchTerms([]);
			setSearchPOIs([]);
		}
		setIsFirstLoad(false);
	};

	const onSearchTermChange = (term) => {
		setIsSearchConfirmed(false);
		setTerm(term.toLowerCase());
	};

	const onBackButtonClick = async () => {
		if (!isOpen) toggleCollapsePanel();
		await setHasFocusedInput(false); // ensure input will unfocus
		if (term.length) setTerm('');
		window.sessionStorage.setItem('Back button was clicked', true);
	};

	const onClearButtonClick = async () => {
		await setHasFocusedInput(true);
		setTerm('');

		window.sessionStorage.setItem('Clear button was clicked', true);
	};

	const onDirectionsIconClick = () => {
		window.sessionStorage.setItem('Directions icon was clicked', true);
	};

	const onInputFocus = () => {
		setHasFocusedInput(true);
		window.sessionStorage.setItem('Input was focused', true);
	};

	const onInputBlur = () => {
		setHasFocusedInput(false);
		window.sessionStorage.setItem('Input was unfocused', true);
	};

	const onReturnKeyPress = () => {
		if (term.length >= 3) setIsSearchConfirmed(true);
		window.sessionStorage.setItem('Return key was pressed', true);
	};

	const toggleCollapsePanel = () => setIsOpen(!isOpen);

	const onPOIClick = (poi) => {
		window.sessionStorage.setItem(`POI ${poi.poiId} was clicked`, true);
	};

	const onTermClick = (term) => {
		setTerm(term.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(`term ${term} was clicked`, true);
	};

	const onSuggestionClick = (suggestion) => {
		setTerm(suggestion.searchTerm.toLowerCase());
		setIsSearchConfirmed(true);
		window.sessionStorage.setItem(
			`suggestion ${suggestion.searchTerm} was clicked`,
			true
		);
	};

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Box display="flex">
				<Box padding="20px" marginRight="10px" bg="gray" onClick={updateStatus}>
					update status
				</Box>
				<Box padding="20px" bg="gray" onClick={toggleStatus}>
					{hasStatus ? 'remove' : 'add'} status
				</Box>
			</Box>

			<Box height={'500px'} display="flex">
				<Search
					cancelDefaultScrollToTop={true}
					shouldUpdateElements={true}
					term={term}
					onSearchTermChange={onSearchTermChange}
					onBackButtonClick={onBackButtonClick}
					onClearButtonClick={onClearButtonClick}
					onDirectionsIconClick={onDirectionsIconClick}
					onInputFocus={onInputFocus}
					onInputBlur={onInputBlur}
					onReturnKeyPress={onReturnKeyPress}
					suggestedSearchesArray={suggestedSearches}
					searchTermsArray={searchTerms}
					searchPOIsSections={searchPOIs}
					onPOIClick={onPOIClick}
					onTermClick={onTermClick}
					onSuggestionClick={onSuggestionClick}
					isContentOpen={isOpen}
					toggleCollapsePanel={toggleCollapsePanel}
					collapsePanelTooltipContent="Collapse Panel"
					expandPanelTooltipContent="Expand Panel"
					noSearchResultsInfo={{
						primaryLabel: 'Sorry, no matches were found',
						secondaryLabel: 'Try searching a different phrase',
					}}
				/>
			</Box>
		</Box>
	);
};
