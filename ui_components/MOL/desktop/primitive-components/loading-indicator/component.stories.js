import componentDocumentation from './docs.mdx';
import LoadingIndicator from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mol-desktop-box';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Loading Indicator',
	component: LoadingIndicator,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=14583%3A74',
		},
	},
};

export const Default = () => <LoadingIndicator />;

export const WithColorChange = () => (
	<LoadingIndicator spinnerColor="magenta" />
);

export const WithSizeChange = () => (
	<Box display="flex" flexDirection="column">
		lg: <LoadingIndicator />
		sm: <LoadingIndicator size="sm" />
		xxsm: <LoadingIndicator size="xxsm" />
	</Box>
);
