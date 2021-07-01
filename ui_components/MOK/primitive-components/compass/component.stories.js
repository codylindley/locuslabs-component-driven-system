import componentDocumentation from './docs.mdx';
import Compass from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Primitive Components/Compass',
	decorators: [ThemeDecorator],
	component: Compass,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6931%3A8874',
		},
	},
};

export const Default = () => (
	<Compass
		onCompassClick={() => {
			window.sessionStorage.setItem('Compass was click', true);
		}}
	/>
);

export const IconRotation = () => (
	<Compass
		bearing={45}
		onCompassClick={() => {
			window.sessionStorage.setItem('Compass was click', true);
		}}
	/>
);
