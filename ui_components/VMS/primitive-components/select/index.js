import { forwardRef, useContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import { ThemeContext } from 'styled-components';
import Box from '@locus-labs/vms-box';
import Text from '@locus-labs/vms-text';
import ReactSelect, { createFilter } from 'react-select'; // https://react-select.com/home

import * as subcomponents from './subcomponents';

const Select = forwardRef((props, ref) => {
	const {
		label,
		ariaLabel,
		placeholder,
		inputIcon,
		isSearchable,
		isMulti,
		allowCreating,
		options,
		value,
		customOptionText,
		isUnsaved,
		disabled,
		errorMessage,
		onInputChange,
		onSelectChange,
		filterOption,
		filterConfig,
		noResultsInfo,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);
	const [internalInputValue, setInternalInputValue] = useState();
	const [mappedOptions, setMappedOptions] = useState(options);
	const [currentValue, setCurrentValue] = useState();

	useEffect(() => {
		setMappedOptions(options);
	}, [options]); // handle initial options change

	useEffect(() => {
		setCurrentValue(value);
	}, [value]);

	// Used to manipulate options list
	const _addNewOptionToTheList = () => {
		const _doesItemExist = () =>
			mappedOptions.filter((el) => el.value === internalInputValue?.trim())[0];

		// If item already exists on the list
		if (internalInputValue && _doesItemExist()) return mappedOptions;

		let suggestions = [];
		// if custom option was not yet created,
		// or there is a custom option on the list but it was added previously
		// ensure it is created
		if (
			!mappedOptions[0]?.isCustomOption ||
			(mappedOptions[0]?.isCustomOption && mappedOptions[0]?.wasCreated)
		) {
			suggestions = [
				{ isCustomOption: true, wasCreated: false },
				...mappedOptions,
			];
		} else {
			suggestions = [...mappedOptions];
		}

		// populate custom suggestion
		suggestions[0] = {
			...suggestions[0],
			value: internalInputValue,
			label: `${customOptionText} '${internalInputValue}'`,
		};

		return suggestions;
	};

	useEffect(() => {
		// If custom creation is allowed
		if (allowCreating) {
			// if input was emptied and custom option exists on the list but was not yet confirmed remove it
			if (
				!internalInputValue &&
				mappedOptions.length &&
				mappedOptions[0]?.isCustomOption &&
				!mappedOptions[0]?.wasCreated
			) {
				setMappedOptions(mappedOptions.slice(1));
			} else if (internalInputValue) {
				setMappedOptions(_addNewOptionToTheList());
			}
		}
	}, [internalInputValue]); // handle input value change

	// Change custom option label to confirmed (created) one
	const _changeCustomOptionLabel = (selected) => {
		let hasNotCreatedElement = selected.isCustomOption; // check if element is custom element

		// if multi select, check if any of the elements is custom and was not yet created
		if (isMulti) {
			hasNotCreatedElement = selected.some(
				(el) => el.isCustomOption && !el.wasCreated
			);
		}

		// if there is no custom elements that were not created yet, return
		if (!hasNotCreatedElement) return;

		const newMappedOptions = [...mappedOptions];

		// Replace temporary option with confirmed one
		newMappedOptions[0].label = newMappedOptions[0].value;
		newMappedOptions[0] = {
			...newMappedOptions[0],
			label: newMappedOptions[0].value, // replace temporary label
			wasCreated: true,
		};

		setMappedOptions(newMappedOptions);
	};

	// Called when selection changes, i.e. user selects option from the list
	const _onSelectChange = (selected) => {
		onSelectChange?.(selected);
		setInternalInputValue(false);
		_changeCustomOptionLabel(selected);
		setCurrentValue(selected);
	};

	// Called when input value changes, i.e. user is typing
	const _onInputChange = (inputValue) => {
		onInputChange?.(inputValue);
		setInternalInputValue(inputValue);
	};

	// Use either custom filter config or filter function
	const _setFilter = () => {
		if (filterConfig) return createFilter(filterConfig);
		return filterOption;
	};

	// Check if custom filter should be applied,
	// otherwise return undefined so default ReactSelect filter will be applied
	const hasCustomFilter = useMemo(
		() => (filterOption || filterConfig) && _setFilter(),
		[filterConfig, filterOption]
	);

	const hasBadgesAndIcons = useMemo(
		() => mappedOptions && mappedOptions.some((option) => option.iconName),
		[mappedOptions]
	);

	const optionPadding = useMemo(
		() => (hasBadgesAndIcons ? '6px 8px' : '6px 12px'),
		[hasBadgesAndIcons]
	);

	const selectStyles = {
		indicatorSeparator: (provided) => ({
			...provided,
			display: 'none',
		}),
		menu: (provided) => ({
			...provided,
			padding: 0,
			overflow: 'hidden',
			border: 'none',
			boxShadow: themeContext.shadows.xl,
			borderRadius: themeContext.radii.md,
		}),
		menuList: (provided) => ({
			...provided,
			maxHeight: '290px',
			padding: '4px 0',
		}),
		option: (provided, state) => {
			const pointerEvents = state.isSelected && state.isMulti ? 'none' : 'auto';

			return {
				...provided,
				display: 'flex',
				padding: optionPadding,
				margin: '2px 0',
				background:
					state.isFocused || state.isSelected
						? themeContext.colors.textInputBG
						: 'none',
				color:
					state.isFocused || state.isSelected
						? themeContext.colors.primaryText
						: themeContext.colors.secondaryText || '#000',
				pointerEvents,
				fontFamily: themeContext.fonts.default,
				fontSize: themeContext.fontSizes.lg,
				fontWeight: 500,
				lineHeight: '21px',

				':hover': {
					color: themeContext.colors.primaryText || '#000',
					background: themeContext.colors.textInputBG,
				},
			};
		},
		placeholder: (provided) => ({
			...provided,
			color: themeContext.colors.secondaryText || '#000',
			padding: '0 5px',
			margin: 0,
		}),
		control: (provided, state) => {
			let borderColor = state.isFocused
				? themeContext.colors.primary
				: themeContext.colors.secondaryButton || '#000';

			if (state.selectProps.hasError)
				borderColor = themeContext.colors.indicatorAlertBackground || '#000';

			return {
				...provided,
				backgroundColor: themeContext.colors.textInputBG || '#FFFFFF',
				minHeight: '40px',
				color: themeContext.colors.primaryText || '#fff',
				border: `1px solid ${borderColor}`,
				borderRadius: themeContext.radii.md,
				fontFamily: themeContext.fonts.default,
				fontSize: themeContext.fontSizes.lg,
				opacity: state.isDisabled ? 0.5 : 1,
				padding: state.isMulti && state.hasValue ? '1px 2px' : '0 8px',
				boxShadow: 'none',
				transition: 'none',

				':hover': {
					borderColor: themeContext.colors.primary,
				},
				':active': {
					borderColor: themeContext.colors.primary,
				},
				':focus': {
					borderColor: themeContext.colors.primary,
				},
			};
		},
		input: (provided) => ({
			...provided,
			padding: '7px 5px',
			margin: 0,
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			padding: 0,
			margin: 0,
		}),
		valueContainer: (provided) => ({
			...provided,
			padding: 0,
		}),
		multiValue: (provided) => ({
			...provided,
			borderRadius: themeContext.radii.md,
			color: themeContext.colors.primaryButtonText || '#fff',
			backgroundColor: themeContext.colors.primaryButton || '#000',
			padding: '4px 5px 4px 8px',
			alignItems: 'center',
			margin: 0,

			'&:hover': {
				backgroundColor: themeContext.colors.primaryButtonHover || '#000000',
			},
		}),
		multiValueLabel: (provided) => ({
			...provided,
			color: themeContext.colors.primaryButtonText || '#fff',
			lineHeight: '21px',
			fontSize: themeContext.fontSizes.lg,
			padding: '0',
			paddingLeft: 0,
			marginRight: '3px',
		}),
		multiValueRemove: (provided) => ({
			...provided,
			padding: '0',

			':hover': {
				backgroundColor: 'none',
				cursor: 'pointer',
			},
		}),
		noOptionsMessage: (provided) => ({
			...provided,
			fontFamily: "'proxima-nova', sans-serif",
			fontSize: themeContext.fontSizes.lg,
			fontWeight: 500,
			color: themeContext.colors.primaryText || '#fff',
			opacity: 0.5,
			textAlign: 'left',
		}),
		singleValue: (provided) => ({
			...provided,
			margin: 0,
			padding: '0 5px',
		}),
	};

	const selectTheme = (theme) => ({
		...theme,
		borderRadius: themeContext.radii.md,
	});

	return (
		<Box ref={ref} {...omittedProps}>
			<Box minWidth="200px">
				{label && (
					<Box display="flex" alignItems="center" marginBottom="6px">
						<Text
							data-cy="InputLabel"
							color={
								(errorMessage &&
									themeContext.colors.indicatorAlertBackground) ||
								themeContext.colors.primaryText ||
								'#FFFFFF'
							}
							limitLinesOfTextTo={1}
							fontSize="md"
							fontWeight="500"
							lineHeight="18px"
						>
							{label}
						</Text>
						{isUnsaved && (
							<Box
								data-cy="UnsavedChangesIndicator"
								width="6px"
								height="6px"
								marginLeft="2px"
								borderRadius="50%"
								bg="#E2611A"
							></Box>
						)}
					</Box>
				)}
				<ReactSelect
					placeholder={placeholder}
					theme={selectTheme}
					styles={selectStyles}
					options={mappedOptions}
					isSearchable={isSearchable}
					isMulti={isMulti}
					closeMenuOnSelect={!isMulti} // close dropdown on selection only when it is single select
					onChange={_onSelectChange}
					value={currentValue}
					onInputChange={_onInputChange}
					isClearable={false}
					components={{
						...subcomponents,
					}}
					filterOption={hasCustomFilter}
					isDisabled={disabled}
					hideSelectedOptions={false}
					themeContext={themeContext}
					inputIcon={inputIcon}
					noResultsInfo={noResultsInfo}
					hasError={!!errorMessage}
					ariaLabel={label || ariaLabel}
				/>
				{errorMessage && (
					<Box display="flex" marginTop="6px">
						{errorMessage && (
							<Text
								data-cy="ErrorMessage"
								color={themeContext.colors.destructiveButton || '#000'}
								limitLinesOfTextTo={1}
								fontSize="md"
								fontWeight="500"
								lineHeight="18px"
								marginRight="4px"
							>
								{errorMessage}
							</Text>
						)}
					</Box>
				)}
			</Box>
		</Box>
	);
});

Select.propTypes = {
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
	placeholder: PropTypes.string,
	label: PropTypes.string,
	ariaLabel: PropTypes.string,
	inputIcon: PropTypes.shape({
		iconName: PropTypes.string,
		iconColor: PropTypes.string,
		hasBadge: PropTypes.bool,
		badgeColor: PropTypes.string,
	}),
	isUnsaved: PropTypes.bool,
	isSearchable: PropTypes.bool,
	isMulti: PropTypes.bool,
	allowCreating: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			iconName: PropTypes.string,
			iconColor: PropTypes.string,
			hasBadge: PropTypes.bool,
			badgeColor: PropTypes.string,
			tooltipContent: PropTypes.string,
		}),
		PropTypes.arrayOf(
			PropTypes.shape({
				value: PropTypes.string.isRequired,
				label: PropTypes.string.isRequired,
				iconName: PropTypes.string,
				iconColor: PropTypes.string,
				hasBadge: PropTypes.bool,
				badgeColor: PropTypes.string,
				tooltipContent: PropTypes.string,
			})
		),
	]),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			iconName: PropTypes.string,
			iconColor: PropTypes.string,
			hasBadge: PropTypes.bool,
			badgeColor: PropTypes.string,
			tooltipContent: PropTypes.string,
		})
	),
	customOptionText: PropTypes.string,
	errorMessage: PropTypes.string,
	noResultsInfo: PropTypes.string,
	disabled: PropTypes.bool,
	onInputChange: PropTypes.func,
	onSelectChange: PropTypes.func,
	filterOption: PropTypes.func,
	filterConfig: PropTypes.shape({
		ignoreCase: PropTypes.bool,
		ignoreAccents: PropTypes.bool,
		stringify: PropTypes.func,
		trim: PropTypes.bool,
		matchFrom: PropTypes.oneOf(['any', 'start']),
	}),
};

Select.displayName = 'Select';

Select.defaultProps = {
	'data-cy': 'Select', // component name
	isMulti: false,
	isUnsaved: false,
	isSearchable: false,
	disabled: false,
	allowCreating: false,
	placeholder: 'Select option',
	customOptionText: 'Create new',
	noResultsInfo: 'Sorry, no results were found.',
	ariaLabel: 'input text',
};

export default Select;
