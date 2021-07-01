import componentDocumentation from './docs.mdx';
import LoadingIndicator from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mok-box';

export default {
	title: 'MOK Components/Primitive Components/Loading Indicator',
	component: LoadingIndicator,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A5',
		},
	},
};

export const Default = () => <LoadingIndicator />;

export const Color = () => <LoadingIndicator spinnerColor="magenta" />;

export const Size = () => (
	<Box display="flex" flexDirection="column">
		lg: <LoadingIndicator />
		sm: <LoadingIndicator size="sm" />
	</Box>
);
