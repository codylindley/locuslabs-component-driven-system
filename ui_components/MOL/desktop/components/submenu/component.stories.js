import componentDocumentation from './docs.mdx';
import Submenu from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Domain Components/Submenu',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: Submenu,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6734%3A52195',
		},
	},
};

const menuItems = [
	{
		iconId: 'account',
		label: 'Account',
		onClick: () => window.sessionStorage.setItem('Account clicked', true),
	},
	{
		iconId: 'reset',
		label: 'Reset Map',
		onClick: () => window.sessionStorage.setItem('Reset Map clicked', true),
	},
	{
		iconId: '2d',
		label: 'Switch Map View',
		onClick: () =>
			window.sessionStorage.setItem('Switch Map View clicked', true),
	},
	{
		iconId: 'terms.of.service',
		label: 'Terms Of Service',
		onClick: () =>
			window.sessionStorage.setItem('Terms If Service clicked', true),
	},
	{
		iconId: 'language',
		label: 'Select Language',
		onClick: () =>
			window.sessionStorage.setItem('Select Language clicked', true),
	},
	{
		iconId: 'dark.mode',
		label: 'Dark Mode',
		onClick: () => window.sessionStorage.setItem('Light Mode clicked', true),
	},
	{
		iconId: 'logout',
		label: 'Logout',
		onClick: () => window.sessionStorage.setItem('Logout clicked', true),
	},
];

export const Default = () => <Submenu menuItems={menuItems} />;

export const CustomTooltipContent = () => (
	<Submenu menuItems={menuItems} tooltipContent="custom tooltip" />
);

export const NoMenuItems = () => <Submenu menuItems={[]} />;
