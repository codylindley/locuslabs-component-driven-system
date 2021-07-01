import componentDocumentation from './docs.mdx';
import KioskLocationPin from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Primitive Components/Kiosk Location Pin',
	component: KioskLocationPin,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=7080%3A69785',
		},
	},
};

export const WithLabel = () => <KioskLocationPin label="A Kiosk Name" />;
export const Width = () => (
	<KioskLocationPin label="A Kiosk Name" width="300px" />
);
