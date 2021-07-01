import componentDocumentation from './docs.mdx';
import MapNavigationButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mok-box';

export default {
	title: 'MOK Components/Primitive Components/Map Navigation Button',
	component: MapNavigationButton,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6625%3A2317',
		},
	},
};

export const Default = () => <MapNavigationButton />;

export const WithIcon = () => <MapNavigationButton iconName="submenu" />;

export const WithText = () => <MapNavigationButton label="2D" />;

export const WithTextDisabled = () => (
	<MapNavigationButton disabled label="2D" />
);

export const RotatedIcon = () => (
	<MapNavigationButton degreesOfIconRotation={-45} iconName="submenu" />
);

export const WithAriaLabel = () => (
	<MapNavigationButton ariaLabel="submenu" iconName="submenu" />
);

export const Stacking = () => (
	<Box boxShadow="md" borderRadius="lg">
		<Box width="48px" height="48px">
			<MapNavigationButton iconName="zoom.in" boxShadow="none" />
		</Box>
		<Box width="48px" height="48px">
			<MapNavigationButton iconName="zoom.out" boxShadow="none" />
		</Box>
	</Box>
);
