import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { theme } from 'styled-tools';
import { display } from 'styled-system';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/vms-text';
import Box from '@locus-labs/vms-box';
import Badge from '@locus-labs/vms-badge';
import Icon from '@locus-labs/vms-icon';
import TextInput from '@locus-labs/vms-text-input';

import Autosuggest from 'react-autosuggest';

const StyledAutocomplete = styled(Box)`
	position: relative;
	width: 100%;
	display: inline-block;
	${display};
`;

const SuggestionsContainer = styled(Box)`
	position: absolute;
	z-index: 1;
	width: 100%;
	height: auto;
	max-height: 290px;
	overflow: hidden;
	top: auto;
	margin: 6px 0 0;
	list-style-type: none;
	background-color: ${theme('colors.background', '#ffffff')};
	color: ${theme('colors.secondaryText', '#000000')};
	border-radius: ${theme('radii.md')};
	font-size: ${theme('fontSizes.md')};
	line-height: 21px;
	box-shadow: ${theme('shadows.xl')};
`;

const Autocomplete = forwardRef((props, ref) => {
	const {
		id,
		suggestions,
		value,
		onValueChange,
		onSuggestionsFetchRequested,
		onSuggestionsClearRequested,
		onSuggestionSelected,
		inputIcon,
		placeholder,
		label,
		ariaLabel,
		isUnsaved,
		errorMessage,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);

	const onChange = (event, { newValue }) => {
		onValueChange(newValue);
	};

	const inputProps = {
		placeholder,
		value,
		onChange,
	};

	// Teach Autosuggest what should be the input value when suggestion is clicked
	const _getSuggestionValue = (suggestion) => suggestion.label;

	// Get suggestion item view
	const _renderSuggestion = (suggestion) => {
		const { label, hasBadge, iconName, iconColor, badgeColor } = suggestion;

		// If icon exists, render icon or badge
		const _getIcon = () => {
			if (hasBadge) {
				return (
					<Badge
						iconName={iconName}
						iconColor={iconColor}
						fill={badgeColor}
						size="md"
						marginRight="8px"
					/>
				);
			}

			return (
				<Icon
					name={iconName}
					color={iconColor}
					marginRight="8px"
					iconSize="lg"
				/>
			);
		};

		return (
			<Box display="flex" alignItems="center" data-cy="Suggestion">
				{iconName && _getIcon()}
				<Text>{label}</Text>
			</Box>
		);
	};

	// Get input view
	const _renderInputComponent = (inputProps) => (
		<TextInput
			{...inputProps}
			onValueChange={(val) => onValueChange(val)}
			inputIcon={inputIcon}
			errorMessage={errorMessage}
			isUnsaved={isUnsaved}
			ariaLabel={ariaLabel}
			label={label}
		/>
	);

	// Get suggestions container view
	// eslint-disable-next-line react/prop-types
	const _renderSuggestionsContainer = ({ containerProps, children }) => {
		return (
			<SuggestionsContainer data-cy="SuggestionsContainer" {...containerProps}>
				{children}
			</SuggestionsContainer>
		);
	};

	// Get suggestion item padding.
	// If any item has to display icon or badge, reduce padding.
	const _getSuggestionPadding = () => {
		const hasBadgesAndIcons = suggestions.some(
			(suggestion) => suggestion.iconName
		);

		if (hasBadgesAndIcons) return '6px 8px';
		return '6px 12px';
	};

	// Setup Autosuggest styles
	const autosuggestStyles = {
		container: {
			position: 'relative',
		},
		suggestionsContainer: {
			display: 'none',
		},
		suggestionsContainerOpen: {
			display: 'flex',
		},
		suggestionsList: {
			margin: 0,
			padding: '6px 0',
			listStyleType: 'none',
			height: 'auto',
			width: '100%',
			overflowY: 'auto',
		},
		suggestion: {
			cursor: 'pointer',
			padding: _getSuggestionPadding(),
		},
		suggestionHighlighted: {
			color: themeContext.colors.primaryText,
			backgroundColor: themeContext.colors.textInputBG,
		},
	};

	return (
		<StyledAutocomplete ref={ref} {...omittedProps}>
			<Autosuggest
				id={id}
				theme={autosuggestStyles}
				suggestions={suggestions}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				getSuggestionValue={_getSuggestionValue}
				renderSuggestion={_renderSuggestion}
				inputProps={inputProps}
				renderInputComponent={_renderInputComponent}
				renderSuggestionsContainer={_renderSuggestionsContainer}
				onSuggestionSelected={(e, suggestionObj) =>
					onSuggestionSelected(suggestionObj)
				}
				focusInputOnSuggestionClick={false}
			/>
		</StyledAutocomplete>
	);
});

Autocomplete.propTypes = {
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
	suggestions: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			iconName: PropTypes.string,
			iconColor: PropTypes.string,
			hasBadge: PropTypes.bool,
			badgeColor: PropTypes.string,
		})
	).isRequired,
	id: PropTypes.string,
	value: PropTypes.string,
	onValueChange: PropTypes.func.isRequired,
	onSuggestionsFetchRequested: PropTypes.func.isRequired,
	onSuggestionsClearRequested: PropTypes.func.isRequired,
	onSuggestionSelected: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	inputIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	errorMessage: PropTypes.string,
	label: PropTypes.string,
	ariaLabel: PropTypes.string,
	isUnsaved: PropTypes.bool,
};

Autocomplete.displayName = 'Autocomplete';

Autocomplete.defaultProps = {
	'data-cy': 'Autocomplete', // component name
	placeholder: 'Input text',
	value: '',
};

export default Autocomplete;
