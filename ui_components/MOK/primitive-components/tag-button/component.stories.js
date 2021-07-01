import componentDocumentation from './docs.mdx';
import TagButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Primitive Components/Tag Button',
	component: TagButton,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A1',
		},
	},
};

export const Default = () => <TagButton>Tag</TagButton>;

export const TextEllipsis = () => (
	<TagButton>This is an example of very long text inside this button</TagButton>
);
