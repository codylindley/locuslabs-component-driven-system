import componentDocumentation from './docs.mdx';
import Pin from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Pin',
	component: Pin,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=12334%3A1145',
		},
	},
};

export const Default = () => (
	<>
		<Pin />
		<Pin small={true} />
	</>
);

export const IconName = () => (
	<>
		<Pin iconName="directions.filled" />
	</>
);

export const PinColorAndSize = () => (
	<>
		<Pin
			iconName="directions.filled"
			iconColor="red"
			small
			border="red"
			fill="white"
		/>
		<br />
		<Pin
			iconName="directions.filled"
			iconColor="white"
			border="white"
			fill="purple"
		/>
	</>
);
