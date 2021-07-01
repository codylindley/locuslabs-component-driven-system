import componentDocumentation from './docs.mdx';
import Compass from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Domain Components/Compass',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: Compass,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6734%3A51056',
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

export const CustomTooltipContent = () => (
	<Compass
		tooltipContent="test 1"
		onCompassClick={() => {
			window.sessionStorage.setItem('Compass was click', true);
		}}
	/>
);
