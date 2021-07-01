import componentDocumentation from './docs.mdx';
import Pin from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Pin',
	component: Pin,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=7431%3A25834',
		},
	},
};

export const Default = () => <Pin />;

export const IconName = () => <Pin iconName="directions.filled" />;

export const PinColor = () => (
	<Pin iconName="directions.filled" iconColor="red" border="red" fill="white" />
);
