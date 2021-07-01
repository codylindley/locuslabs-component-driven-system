import componentDocumentation from './docs.mdx';
import LaneSelectionButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Lane Selection Button',
	component: LaneSelectionButton,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6773%3A5356',
		},
	},
};

export const Default = () => <LaneSelectionButton>Premium</LaneSelectionButton>;

export const FixedWidth = () => (
	<LaneSelectionButton fixedWidth>Premium</LaneSelectionButton>
);

export const Logo = () => (
	<>
		<LaneSelectionButton logoUrl="https://content.locuslabs.com/airport/spritesheet-svg/lhr/A1JBKAEKZ89XDX/venue-logo.png" />
		<br />
		<br />
		<LaneSelectionButton
			fixedWidth
			logoUrl="https://content.locuslabs.com/airport/spritesheet-svg/lhr/A1JBKAEKZ89XDX/venue-logo.png"
		/>
	</>
);
