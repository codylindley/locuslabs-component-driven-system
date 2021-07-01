import FloatingActionButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOL Components/Mobile/Primitive Components/Floating Action Button',
	component: FloatingActionButton,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=9369%3A20',
		},
	},
};

export const Default = () => <FloatingActionButton />;

export const WithIcon = () => <FloatingActionButton iconName="menu" />;

export const WithRotatedIcon = () => (
	<FloatingActionButton iconName="menu" degreesOfIconRotation={90} />
);

export const WithCustomIconColor = () => (
	<FloatingActionButton
		iconName="menu"
		iconColor="#2266DD"
		iconTapColor="#124CB1"
	/>
);

export const WithAriaLabel = () => (
	<FloatingActionButton ariaLabel="Menu" iconName="menu" />
);
