import componentDocumentation from './docs.mdx';
import OutlineButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Outline Button',
	component: OutlineButton,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7518%3A1151',
		},
	},
};

export const Default = () => <OutlineButton>default</OutlineButton>;

export const Disabled = () => (
	<>
		<OutlineButton disabled>disabled</OutlineButton>
	</>
);

export const WithIcon = () => (
	<>
		<OutlineButton iconName="directions.filled">with icon</OutlineButton>
		<br /> <br /> <br />
		<OutlineButton iconName="this-Does-Not-Result-In-Valid-Icon-URL">
			icon not found
		</OutlineButton>
	</>
);

export const Width = () => (
	<>
		<OutlineButton width="20rem">width 20rem</OutlineButton>
	</>
);

export const ButtonSizes = () => (
	<>
		<OutlineButton size="small">small</OutlineButton>
		<br /> <br /> <br />
		<OutlineButton iconName="directions.filled" size="small">
			small
		</OutlineButton>
		<br /> <br /> <br /> <br />
		<OutlineButton> medium (default)</OutlineButton>
		<br /> <br /> <br />
		<OutlineButton iconName="directions.filled">medium (default)</OutlineButton>
		<br /> <br /> <br /> <br />
		<OutlineButton size="large">large</OutlineButton>
		<br /> <br /> <br />
		<OutlineButton iconName="directions.filled" size="large">
			large
		</OutlineButton>
	</>
);
