import componentDocumentation from './docs.mdx';
import CircleButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Circle Button',
	component: CircleButton,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7129%3A374',
		},
	},
};

export const Default = () => (
	<>
		<CircleButton>4</CircleButton>
	</>
);

export const Disabled = () => (
	<>
		<CircleButton iconName="directions.filled" disabled />
		<br />
		<br />
		<CircleButton disabled>Hello</CircleButton>
	</>
);

export const WithText = () => (
	<>
		<CircleButton size="small">4</CircleButton>
		<br />
		<CircleButton size="small">4000</CircleButton>
		<br />
		<CircleButton size="small">Large Text</CircleButton>
		<br />
		<br />
		<CircleButton size="medium">4</CircleButton>
		<br />
		<CircleButton size="medium">4000</CircleButton>
		<br />
		<CircleButton size="medium">Large Text</CircleButton>
		<br />
		<br />
		<CircleButton>4</CircleButton>
		<br />
		<CircleButton>4000</CircleButton>
		<br />
		<CircleButton>Large Text</CircleButton>
		<br />
	</>
);

export const WithIcon = () => (
	<>
		<CircleButton size="small" iconName="directions.filled" />
		<br /> <br /> <br />
		<CircleButton size="medium" iconName="directions.filled" />
		<br /> <br /> <br />
		<CircleButton iconName="directions.filled" />
	</>
);

export const ButtonSizes = () => (
	<>
		<CircleButton size="small">sm</CircleButton>
		<br /> <br /> <br />
		<CircleButton size="medium">md</CircleButton>
		<br /> <br /> <br />
		<CircleButton>lg</CircleButton>
	</>
);

export const IconNotFound = () => (
	<>
		<CircleButton iconName="invalid-url" />
	</>
);
