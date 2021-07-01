import componentDocumentation from './docs.mdx';
import Pin from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mok-box';

export default {
	title: 'MOK Components/Primitive Components/Pin',
	component: Pin,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6414%3A0',
		},
	},
};

export const Default = () => <Pin />;

export const IconName = () => <Pin iconName="directions.filled" />;

export const Sizes = () => (
	<>
		<Box margin="10px">
			<Box>md: </Box>
			<Pin pinSize="md" />
		</Box>
		<br />
		<Box margin="10px">
			<Box>xl: </Box>
			<Pin pinSize="xl" />
		</Box>
	</>
);

export const PinColor = () => (
	<Pin iconName="directions.filled" iconColor="red" border="red" fill="white" />
);
