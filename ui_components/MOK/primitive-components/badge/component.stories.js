import componentDocumentation from './docs.mdx';
import Badge from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Primitive Components/Badge',
	component: Badge,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6329%3A46384',
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
			fill="green"
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
		<Badge
			iconName="directions.filled"
			iconColor="white"
			border="white"
			fill="black"
			size="xxl"
		/>
		<br />
	</>
);

export const CustomBadgeSizes = () => (
	<>
		<Badge iconName="directions.filled" size="156px" />
	</>
);
