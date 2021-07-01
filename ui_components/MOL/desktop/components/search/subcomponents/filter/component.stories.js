import { useState } from 'react';
import Filter from '.';
import componentDocumentation from './docs.mdx';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Domain Components/Search/Subcomponents/Filter',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: Filter,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=11396%3A444',
		},
	},
};

const options = [
	{
		id: 'open',
		name: 'Open',
	},
	{ id: 'all', name: 'All' },
];

const Template = (props) => {
	const [activeOption, setActiveOption] = useState('open');
	const onOptionClick = (id) => {
		setActiveOption(id);
	};
	return (
		<Filter
			filterOptions={options}
			onFilterOptionClick={onOptionClick}
			activeFilterOption={activeOption}
			{...props}
		/>
	);
};

export const Default = () => {
	return <Template />;
};

export const WithLongOptionName = () => {
	return (
		<Template
			filterOptions={[
				{
					id: 'open',
					name: 'Option long name',
				},
				{ id: 'all', name: 'All' },
			]}
		/>
	);
};

export const WithLongFilterCaption = () => {
	return <Template filterCaption="Really long name" />;
};
