import componentDocumentation from './docs.mdx';
import PoiCategoryButton from './index';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Primitive Components/Poi Category Button',
	component: PoiCategoryButton,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=7105%3A70816',
		},
	},
};

export const Default = () => <PoiCategoryButton label="Restaurants" />;

export const IconName = () => (
	<PoiCategoryButton iconName="arrow.left" label="Restaurants" bg="red" />
);

export const TextEllipsis = () => (
	<PoiCategoryButton label="When the text label goes beyond the minimum pixel padding left and right, the text will ellipse." />
);
