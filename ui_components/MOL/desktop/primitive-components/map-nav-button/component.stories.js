import componentDocumentation from './docs.mdx';
import MapNavButton from '.';
import Box from '@locus-labs/mol-desktop-box';
import ThemeDecorator from '../../storybook-theme-decorator';
export default {
	title: 'MOL Components/Desktop/Primitive Components/Map Nav Button',
	component: MapNavButton,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6773%3A724',
		},
	},
};

export const Default = () => <MapNavButton />;

export const WithIcon = () => <MapNavButton iconName="submenu" />;

export const Loading = () => <MapNavButton loader />;

export const RotatedIcon = () => (
	<MapNavButton degreesOfIconRotation={-45} iconName="submenu" />
);

export const WithAriaLabel = () => (
	<MapNavButton ariaLabel="submenu" iconName="submenu" />
);

export const Stacking = () => (
	<Box boxShadow="md" borderRadius="lg">
		<Box width="30px" height="30px">
			<MapNavButton
				iconName="zoom.in"
				boxShadow="none"
				borderBottomLeftRadius="0"
				borderBottomRightRadius="0"
			/>
		</Box>
		<Box width="30px" height="30px">
			<MapNavButton
				iconName="zoom.out"
				boxShadow="none"
				borderTopLeftRadius="0"
				borderTopRightRadius="0"
			/>
		</Box>
	</Box>
);
