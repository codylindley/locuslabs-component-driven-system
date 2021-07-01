import componentDocumentation from './docs.mdx';
import LoadingIndicator from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/vms-box';

export default {
	title: 'VMS Components/Primitive Components/Loading Indicator',
	component: LoadingIndicator,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=7341%3A0',
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
	</Box>
);
