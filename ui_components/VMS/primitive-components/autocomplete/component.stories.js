import { useState, useEffect } from 'react';
import Autocomplete from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/vms-box';
import componentDocumentation from './docs.mdx';

export default {
	title: 'VMS Components/Primitive Components/Autocomplete',
	component: Autocomplete,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=6993%3A2727',
		},
	},
};

const options = [
	{
		label: 'Gate A12',
	},
	{
		label: 'Gate B1',
	},
	{
		label: 'Shop',
	},
	{
		label: 'Starbucks',
	},
	{
		label: 'Store',
	},
	{
		label: 'Store',
	},
	{
		label: 'Store',
	},
	{
		label: 'Store',
	},
	{
		label: 'Store',
	},
	{
		label: 'Store',
	},
	{
		label: 'Store',
	},
];

const optionsWithIcons = [
	{
		label: 'Gate A12',
		iconName: 'gate',
		badgeColor: 'orange',
		hasBadge: true,
	},
	{
		label: 'Gate B1',
		iconName: 'gate',
		badgeColor: 'violet',
		hasBadge: true,
	},
	{
		label: 'Shop',
		iconName: 'shop',
		badgeColor: 'skyblue',
		hasBadge: true,
	},
	{
		label: 'Starbucks',
		iconName: 'eat',
	},
	{
		label: 'Gate A12',
		iconName: 'gate',
		iconColor: 'orange',
	},
	{
		label: 'Gate B1',
		iconName: 'gate',
	},
	{
		label: 'Shop',
		iconName: 'shop',
		iconColor: 'orange',
	},
];

export const Default = () => {
	const [value, setValue] = useState();
	const [suggestions, setSuggestions] = useState(options);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: options.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = () => {};

	return (
		<Autocomplete
			suggestions={suggestions}
			value={value}
			onValueChange={(val) => setValue(val)}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			onSuggestionSelected={onSuggestionSelected}
		/>
	);
};

export const WithInputIcon = () => {
	const [value, setValue] = useState();
	const [suggestions, setSuggestions] = useState(options);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: options.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = () => {};

	return (
		<Autocomplete
			inputIcon="search.web"
			suggestions={suggestions}
			value={value}
			onValueChange={(val) => setValue(val)}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			onSuggestionSelected={onSuggestionSelected}
		/>
	);
};

export const WithPlaceholder = () => {
	const [value, setValue] = useState();
	const [suggestions, setSuggestions] = useState(options);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: options.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = () => {};

	return (
		<Autocomplete
			placeholder="Search for 's'"
			suggestions={suggestions}
			value={value}
			onValueChange={(val) => setValue(val)}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			onSuggestionSelected={onSuggestionSelected}
		/>
	);
};

export const WithNoSuggestions = () => {
	const [value, setValue] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	// Autosuggest will call this function every time you need to update suggestions.
	const onSuggestionsFetchRequested = () => {
		setSuggestions([]);
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	return (
		<Autocomplete
			placeholder="Search for 's'"
			suggestions={suggestions}
			value={value}
			onValueChange={(val) => setValue(val)}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			onSuggestionSelected={() => {}}
		/>
	);
};

export const WithPreSelectedSuggestion = () => {
	const [value, setValue] = useState('Starbucks');
	const [suggestions, setSuggestions] = useState(options);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: options.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = () => {};

	return (
		<Autocomplete
			suggestions={suggestions}
			value={value}
			onValueChange={(val) => setValue(val)}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			onSuggestionSelected={onSuggestionSelected}
		/>
	);
};

export const WithSelectedSuggestionHandler = () => {
	const [value, setValue] = useState();
	const [wasSuggestionClicked, setWasSuggestionClicked] = useState(false);
	const [suggestions, setSuggestions] = useState(options);
	const [selectedSuggestion, setSelectedSuggestion] = useState();

	useEffect(() => {
		// If input value changed, clear selected suggestion
		if (!wasSuggestionClicked && selectedSuggestion) {
			setSelectedSuggestion(null);
		}
		if (wasSuggestionClicked) setWasSuggestionClicked(false);
	}, [value]);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: options.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = ({
		/* eslint-disable no-unused-vars */
		suggestion,
		suggestionValue,
		suggestionIndex,
		sectionIndex,
		method,
		/* eslint-enable no-unused-vars */
	}) => {
		setWasSuggestionClicked(true);
		setSelectedSuggestion(suggestion.label);
	};

	return (
		<Box>
			<Box data-cy="SelectedSuggestionInfo" marginBottom="15px">
				Selected suggestion: {selectedSuggestion}
			</Box>
			<Autocomplete
				suggestions={suggestions}
				value={value}
				onValueChange={(val) => setValue(val)}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				onSuggestionSelected={onSuggestionSelected}
			/>
		</Box>
	);
};

export const SuggestionsWithIcons = () => {
	const [value, setValue] = useState();
	const [suggestions, setSuggestions] = useState(optionsWithIcons);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: optionsWithIcons.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = () => {};

	return (
		<Autocomplete
			placeholder="Search for 'g' or 's'"
			suggestions={suggestions}
			value={value}
			onValueChange={(val) => setValue(val)}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			onSuggestionSelected={onSuggestionSelected}
		/>
	);
};

export const WithErrorState = () => {
	const [value, setValue] = useState('gate');
	const [suggestions, setSuggestions] = useState(options);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: options.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = () => {};

	return (
		<Autocomplete
			label="Nearby location"
			suggestions={suggestions}
			value={value}
			onValueChange={(val) => setValue(val)}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			onSuggestionSelected={onSuggestionSelected}
			errorMessage="*Error message"
		/>
	);
};

export const WithUnsavedChanges = () => {
	const [value, setValue] = useState('gate');
	const [suggestions, setSuggestions] = useState(options);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: options.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = () => {};

	return (
		<Autocomplete
			suggestions={suggestions}
			value={value}
			onValueChange={(val) => setValue(val)}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			onSuggestionSelected={onSuggestionSelected}
			label="Nearby location"
			isUnsaved={true}
		/>
	);
};

export const Wide = () => {
	const [value, setValue] = useState();
	const [suggestions, setSuggestions] = useState(options);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: options.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = () => {};

	return (
		<Box width="400px">
			<Autocomplete
				suggestions={suggestions}
				value={value}
				onValueChange={(val) => setValue(val)}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				onSuggestionSelected={onSuggestionSelected}
				label="Nearby location"
			/>
		</Box>
	);
};

export const Stacked = () => {
	const [value, setValue] = useState();
	const [suggestions, setSuggestions] = useState(options);

	const getSuggestions = (term) => {
		const inputValue = term.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: options.filter(
					(option) =>
						option.label.toLowerCase().slice(0, inputLength) === inputValue
			  );
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSuggestionSelected = () => {};

	return (
		<Box>
			<Autocomplete
				id="shops"
				display="block"
				placeholder="Search for 's'"
				suggestions={suggestions}
				value={value}
				onValueChange={(val) => setValue(val)}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				onSuggestionSelected={onSuggestionSelected}
				marginBottom="20px"
			/>

			<Autocomplete
				id="gates"
				placeholder="Search for 'g'"
				suggestions={suggestions}
				value={value}
				onValueChange={(val) => setValue(val)}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				onSuggestionSelected={onSuggestionSelected}
			/>
		</Box>
	);
};
