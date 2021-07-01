import componentDocumentation from './docs.mdx';
import TagButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Tag Button',
	component: TagButton,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=5893%3A899',
		},
	},
};

export const Default = () => <TagButton>Tag</TagButton>;

export const EllipsedText = () => (
	<TagButton>This is an example of very long text inside this button</TagButton>
);
