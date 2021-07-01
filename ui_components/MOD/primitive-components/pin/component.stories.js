import componentDocumentation from './docs.mdx';
import Pin from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOD Components/Primitive Components/Pin',
	component: Pin,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDisplay-Master-2020?node-id=2982%3A18403',
		},
	},
};

export const Default = () => <Pin />;

export const Sizes = () => (
	<>
		<Pin type="display" />
		<Pin type="editor" />
	</>
);

export const WithIconName = () => <Pin iconName="directions.filled" />;

export const WithCustomColors = () => (
	<Pin
		iconName="directions.filled"
		iconColor="orange"
		badgeFillColor="pink"
		border="orange"
		fill="white"
		badgeBorderColor="orange"
	/>
);
