import componentDocumentation from './docs.mdx';
import InformationDivider from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Information Divider',
	component: InformationDivider,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=7423%3A54647',
		},
	},
};

export const Default = () => (
	<InformationDivider>Test text here</InformationDivider>
);

export const EllipseText = () => (
	<InformationDivider>
		Test text here long very long text test here
	</InformationDivider>
);

export const PaddingPropAndEllipse = () => (
	<InformationDivider pl="16px">
		Test text here Test text here long very long text test here
	</InformationDivider>
);
