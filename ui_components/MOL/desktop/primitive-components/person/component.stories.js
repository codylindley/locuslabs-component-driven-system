import componentDocumentation from './docs.mdx';
import Person from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Person',
	component: Person,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=12532%3A62',
		},
	},
};

export const Default = () => <Person />;

export const SizeProp = () => (
	<>
		<Person />
		<br />
		<br />
		<Person large />
	</>
);

export const FillAndBorderProp = () => (
	<>
		<Person border="red" fill="white" />
	</>
);
