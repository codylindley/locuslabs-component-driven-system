import componentDocumentation from './docs.mdx';
import Person from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Person',
	component: Person,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7431%3A25835',
		},
	},
};

export const Default = () => <Person />;

export const WidthAndHeightProp = () => (
	<>
		<Person />
		<br />
		<br />
		<Person width="40px" height="100px" />
	</>
);

export const FillAndBorderProp = () => (
	<>
		<Person border="red" fill="white" />
	</>
);
