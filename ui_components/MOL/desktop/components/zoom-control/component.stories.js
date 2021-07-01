import componentDocumentation from './docs.mdx';
import ZoomControl from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Domain Components/Zoom Control',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: ZoomControl,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=5659%3A44745',
		},
	},
};

export const Default = () => (
	<ZoomControl
		onZoomIn={() => {
			window.sessionStorage.setItem('Zoom in was click', true);
		}}
		onZoomOut={() => {
			window.sessionStorage.setItem('Zoom out was click', true);
		}}
	/>
);

export const CustomTooltipContent = () => (
	<ZoomControl
		zoomInTooltipContent="test 1"
		zoomOutTooltipContent="test 2"
		onZoomIn={() => {
			window.sessionStorage.setItem('Zoom in was click', true);
		}}
		onZoomOut={() => {
			window.sessionStorage.setItem('Zoom out was click', true);
		}}
	/>
);
