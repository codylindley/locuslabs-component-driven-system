import componentDocumentation from './docs.mdx';
import FullscreenBackgroundImage from './index';
import ThemeDecorator from '../../../../MOL/desktop/storybook-theme-decorator';
import Box from '@locus-labs/mol-desktop-box';

export default {
	title:
		'MOL Components/Desktop/Primitive Components/Fullscreen Background Image',
	component: FullscreenBackgroundImage,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=20927%3A99410',
		},
	},
};

const url =
	'https://locuslabs.com/wp-content/uploads/2020/10/home-hero-bg-no-lines-1920x1080.png';

export const Default = () => <FullscreenBackgroundImage url={url} />;

export const WithContent = () => (
	<FullscreenBackgroundImage
		url={url}
		display="flex"
		justifyContent="center"
		alignItems="center"
	>
		<Box bg="white" display="flex" padding="180px 150px">
			Sample Content
		</Box>
	</FullscreenBackgroundImage>
);
