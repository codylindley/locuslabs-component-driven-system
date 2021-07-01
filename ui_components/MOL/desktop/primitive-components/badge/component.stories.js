import componentDocumentation from './docs.mdx';
import Badge from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Badge',
	component: Badge,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=12532%3A61',
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
	<>
		<Badge
			iconName="directions.filled"
			iconColor="white"
			border="white"
			fill="purple"
			size="md"
		/>
		<br />
		<Badge
			iconName="directions.filled"
			iconColor="orange"
			border="orange"
			fill="white"
			size="lg"
		/>
		<br />
		<Badge
			iconName="directions.filled"
			iconColor="blue"
			border="gray"
			fill="white"
			size="xl"
		/>
		<br />
	</>
);
