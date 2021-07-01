import componentDocumentation from './docs.mdx';
import Badge from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mod-box';

export default {
	title: 'MOD Components/Primitive Components/Badge',
	component: Badge,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDisplay-Master-2020?node-id=288%3A1',
		},
	},
};

export const Default = () => (
	<>
		<Badge />
	</>
);

export const IconName = () => (
	<>
		<Badge iconName="directions.filled" />
	</>
);

export const BadgeSizesAndColor = () => (
	<Box display="flex" flexDirection="column">
		Editor small 16x16px:
		<Badge
			iconName="directions.filled"
			iconColor="white"
			border="white"
			fill="purple"
			size="editor"
			small={true}
		/>
		<br />
		Editor 28x28px:
		<Badge
			iconName="directions.filled"
			iconColor="white"
			border="white"
			fill="purple"
			size="editor"
		/>
		<br />
		Display small 32x32px:
		<Badge
			iconName="directions.filled"
			iconColor="orange"
			border="orange"
			fill="white"
			size="display"
			small
		/>
		<br />
		Display (default) 56x56px:
		<Badge
			iconName="directions.filled"
			iconColor="orange"
			border="orange"
			fill="white"
			size="display"
		/>
		<br />
	</Box>
);

export const CustomBadgeSizes = () => (
	<>
		<Badge iconName="directions.filled" size="156px" />
	</>
);
