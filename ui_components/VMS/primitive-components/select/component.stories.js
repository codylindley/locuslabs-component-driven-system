import { useState, useEffect } from 'react';
import ThemeDecorator from '../../storybook-theme-decorator';
import Select from '.';
import Box from '@locus-labs/vms-box';
import Button from '@locus-labs/vms-secondary-button';
import componentDocumentation from './docs.mdx';

export default {
	title: 'VMS Components/Primitive Components/Select',
	component: Select,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=7829%3A634',
		},
	},
};

const options = [
	{
		value: 'mozarella',
		label: 'mozarella',
		tooltipContent: 'Example tooltip',
	},
	{ value: 'parmesan', label: 'parmesan', tooltipContent: 'Example tooltip' },
	{ value: 'basil', label: 'basil', tooltipContent: 'Example tooltip' },
	{ value: 'olives', label: 'olives', tooltipContent: 'Example tooltip' },
	{ value: 'oregano', label: 'oregano', tooltipContent: 'Example tooltip' },
	{ value: 'redOnion', label: 'red onion', tooltipContent: 'Example tooltip' },
	{ value: 'onion', label: 'onion', tooltipContent: 'Example tooltip' },
	{
		value: 'prosciutto',
		label: 'prosciutto',
		tooltipContent: 'Example tooltip',
	},
	{ value: 'mushrooms', label: 'mushrooms', tooltipContent: 'Example tooltip' },
	{
		value: 'evo',
		label: 'extra virgin olive oil',
		tooltipContent: 'Example tooltip',
	},
	{
		value: 'longItem',
		label: 'really long item that should ellipse when too long',
		tooltipContent: 'Example tooltip',
	},
];

const optionsWithIcons = options.map((el) => {
	return {
		...el,
		iconName: 'eat',
		iconColor: '#58C173',
	};
});

const optionsWithBadges = options.map((el) => {
	return {
		...el,
		iconName: 'eat',
		iconColor: '#fff',
		hasBadge: true,
		badgeColor: '#58C173',
	};
});

export const Default = () => <Select />;
export const Single = () => <Select options={options} />;
export const ShortList = () => <Select options={options.slice(0, 4)} />;
export const WithLabelAndPlaceholder = () => (
	<Select
		label="Choose your pizza toppings"
		placeholder="Choose topping"
		options={options}
	/>
);

export const Searchable = () => (
	<Select
		isSearchable={true}
		label="Search and choose your pizza topping"
		options={options}
	/>
);

export const Multi = () => <Select options={options} isMulti={true} />;

export const MultiSearchable = () => (
	<Select
		isSearchable={true}
		isMulti={true}
		label="Search and choose your pizza toppings"
		options={options}
	/>
);

export const WithPredefinedValue = () => {
	const [singleValue, setSingleValue] = useState();
	const [multiValue, setMultiValue] = useState();

	return (
		<Box display="flex">
			<Box display="flex" flexDirection="column" alignItems="center">
				<Button onClick={() => setSingleValue(null)} mb="1rem">
					Reset single
				</Button>
				<Select
					value={singleValue}
					onSelectChange={setSingleValue}
					options={options}
				/>
			</Box>
			<Box ml="1rem" display="flex" flexDirection="column" alignItems="center">
				<Button onClick={() => setMultiValue(null)} mb="1rem">
					Reset multi
				</Button>
				<Select
					isMulti
					value={multiValue}
					onSelectChange={setMultiValue}
					options={options}
				/>
			</Box>
		</Box>
	);
};

export const WithCustomSearchFilter = () => {
	const filterOption = (candidate, input) => {
		// If input is populated, check if matches candidate (option)
		if (input) {
			return candidate.label.toLowerCase().includes(input);
		}
		// Otherwise make all candidates pass the check
		return true;
	};

	return (
		<Select options={options} isSearchable={true} filterOption={filterOption} />
	);
};

export const Disabled = () => {
	return (
		<Select
			disabled
			label="Single select:"
			marginBottom="20px"
			options={options}
			value={[options[0]]}
		/>
	);
};

export const MultipleWithCreateOption = () => {
	const [mappedOptions, setMappedOptions] = useState(options);

	const _onSelectChange = (selected) => {
		// If it wasn't custom option, don't add it to the list
		const notCreatedElement = selected.filter(
			(el) => el.isCustomOption && !el.wasCreated
		)[0];
		if (!notCreatedElement) return;

		setMappedOptions([
			{
				value: notCreatedElement.value,
				label: notCreatedElement.value,
				wasCreated: true,
			},
			...mappedOptions,
		]);
	};

	return (
		<Select
			isMulti={true}
			isSearchable={true}
			allowCreating={true}
			label="Search and choose your pizza topping"
			options={mappedOptions}
			onSelectChange={_onSelectChange}
		/>
	);
};

export const SingleWithCreateOption = () => {
	const [mappedOptions, setMappedOptions] = useState(options);

	const _onSelectChange = (selected) => {
		// If it wasn't custom option, don't add it to the list
		if (!selected.isCustomOption) return;

		// Else confirm creating new option
		setMappedOptions([
			{
				value: selected.value,
				label: selected.value,
			},
			...mappedOptions,
		]);
	};

	return (
		<Select
			isSearchable={true}
			allowCreating={true}
			label="Search and choose your pizza topping"
			options={mappedOptions}
			onSelectChange={_onSelectChange}
			marginBottom="20px"
		/>
	);
};

export const WithParentWidth = () => (
	<Box width="240px">
		Choose long item from the list
		<Select
			label="Multi select:"
			isSearchable={true}
			isMulti={true}
			options={options}
			value={[options[0], options[4]]}
		/>
	</Box>
);

export const WithIcons = () => (
	<Select
		label="Select:"
		inputIcon={{ iconName: 'eat' }}
		isSearchable={true}
		options={optionsWithIcons}
	/>
);

export const WithBadges = () => (
	<Select
		label="Select:"
		inputIcon={{
			iconName: 'eat',
			iconColor: '#fff',
			hasBadge: true,
			badgeColor: 'violet',
		}}
		isSearchable={true}
		options={optionsWithBadges}
	/>
);

export const WithErrorMessage = () => {
	const [hasError, setHasError] = useState(true);

	return (
		<Box>
			<Box
				as="button"
				onClick={() => setHasError(!hasError)}
				padding="10px 20px"
				marginBottom="20px"
			>
				Toggle error state
			</Box>
			<Select
				label="Choose your pizza toppings"
				placeholder="Choose topping"
				errorMessage={hasError && '* Error message'}
				options={options}
			/>
		</Box>
	);
};

export const MultipleCreateCustomFilterOptionsReplace = () => {
	const [mappedOptions, setMappedOptions] = useState(options);
	const [customOptions, setCustomOptions] = useState([]);
	const [optionsFilterOn, setOptionsFilterOn] = useState(false);

	useEffect(() => {
		if (optionsFilterOn) {
			setMappedOptions(
				[...customOptions, ...options].filter(
					(option) => option.value[0] === 'o'
				)
			);
		} else {
			setMappedOptions([...customOptions, ...options]);
		}
	}, [options, customOptions, optionsFilterOn]);

	const filterOption = (candidate, input) => {
		// If input is populated, check if matches candidate (option)
		if (input) {
			return candidate.label.toLowerCase().includes(input);
		}
		// Otherwise make all candidates pass the check
		return true;
	};

	const _onSelectChange = (selected) => {
		// If it wasn't custom option or it was already added as custom option, don't add it to the list
		const notCreatedElement = selected.filter(
			(el) =>
				el.isCustomOption &&
				!customOptions.some((option) => option.value === el.value)
		)[0];
		if (!notCreatedElement) return;
		setCustomOptions([
			...customOptions,
			{
				value: notCreatedElement.value,
				label: notCreatedElement.value,
			},
		]);
	};

	return (
		<Box>
			<Box
				as="button"
				onClick={() => setOptionsFilterOn(!optionsFilterOn)}
				padding="10px 20px"
				marginBottom="20px"
			>
				Toggle options!
			</Box>

			<Select
				isMulti={true}
				isSearchable={true}
				allowCreating={true}
				label="Search and choose your pizza topping"
				options={mappedOptions}
				onSelectChange={_onSelectChange}
				filterOption={filterOption}
			/>
		</Box>
	);
};
