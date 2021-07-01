import Box from '@locus-labs/mok-box';
import Text from '@locus-labs/mok-text';
import componentDocumentation from './docs.mdx';
import InformationDivider from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Primitive Components/Information Divider',
	component: InformationDivider,
	decorators: [ThemeDecorator], // connect the mok-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A2',
		},
	},
};

export const Default = () => <InformationDivider>Default</InformationDivider>;

export const Type = () => (
	<Box bg="white" p="25px">
		<Text as="i"> Type: nearbyResults(default)</Text>
		<InformationDivider>building name - results</InformationDivider>
		<br />
		<br />
		<Text as="i"> Type: otherResults</Text>
		<InformationDivider type="otherResults">other results</InformationDivider>
		<br />
		<br />
		<Text as="i"> Type: poiDetail</Text>
		<InformationDivider type="poiDetail">information</InformationDivider>
	</Box>
);

export const TextEllipsis = () => (
	<Box maxWidth="200px">
		<InformationDivider>
			Test text here long very long text test here
		</InformationDivider>
	</Box>
);
