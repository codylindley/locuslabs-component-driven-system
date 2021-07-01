import ThemeDecorator from '../../storybook-theme-decorator';
import OffscreenIndicator from '.';
import Box from '@locus-labs/mod-box';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOD Components/Domain Components/Offscreen Indicator',
	decorators: [ThemeDecorator], // connect the mod-default-theme to all stories
	component: OffscreenIndicator,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDisplay-Master-2020?node-id=30%3A85',
		},
	},
};

export const Default = () => <OffscreenIndicator />;
export const Types = () => (
	<Box display="flex" alignItems="center" flexDirection="column">
		<OffscreenIndicator text="A Gates" type="display" marginBottom="20px" />
		<OffscreenIndicator text="A Gates" type="editor" />
	</Box>
);

export const WithTwoLinesOfText = () => (
	<Box display="flex" alignItems="center" flexDirection="column">
		<OffscreenIndicator
			text="Hand Sanitizing Stations"
			type="display"
			marginBottom="20px"
		/>
		<OffscreenIndicator text="Hand Sanitizing Stations" type="editor" />
	</Box>
);

export const WithLongText = () => (
	<Box display="flex" alignItems="center" flexDirection="column">
		<OffscreenIndicator
			text="Really long text that should ellipse if too long"
			type="display"
			marginBottom="20px"
		/>
		<OffscreenIndicator
			text="Really long text that should ellipse if too long"
			type="editor"
		/>
	</Box>
);

export const ArrowDirection = () => (
	<Box>
		<Box
			display="flex"
			alignItems="center"
			flexDirection="row"
			marginBottom="20px"
		>
			<OffscreenIndicator text="A Gates" marginRight="20px" direction="up" />
			<OffscreenIndicator text="A Gates" marginRight="20px" direction="right" />
			<OffscreenIndicator text="A Gates" marginRight="20px" direction="down" />
			<OffscreenIndicator text="A Gates" marginRight="20px" direction="left" />
		</Box>

		<Box display="flex" alignItems="center" flexDirection="row">
			<OffscreenIndicator
				text="A Gates"
				type="editor"
				marginRight="20px"
				direction="up"
			/>
			<OffscreenIndicator
				text="A Gates"
				type="editor"
				marginRight="20px"
				direction="right"
			/>
			<OffscreenIndicator
				text="A Gates"
				type="editor"
				marginRight="20px"
				direction="down"
			/>
			<OffscreenIndicator
				text="A Gates"
				type="editor"
				marginRight="20px"
				direction="left"
			/>
		</Box>
	</Box>
);

export const WithColorChange = () => (
	<OffscreenIndicator text="A Gates" color="pink" bg="darkcyan" />
);
