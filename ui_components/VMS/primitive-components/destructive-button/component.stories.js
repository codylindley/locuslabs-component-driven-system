import componentDocumentation from './docs.mdx';
import DestructiveButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Destructive Button',
	component: DestructiveButton,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7518%3A781',
		},
	},
};

export const Default = () => <DestructiveButton>default</DestructiveButton>;

export const Disabled = () => (
	<>
		<DestructiveButton disabled>disabled</DestructiveButton>
	</>
);

export const WithIcon = () => (
	<>
		<DestructiveButton iconName="directions.filled">
			with icon
		</DestructiveButton>
		<br /> <br /> <br />
		<DestructiveButton iconName="this-Does-Not-Result-In-Valid-Icon-URL">
			icon not found
		</DestructiveButton>
	</>
);

export const Width = () => (
	<>
		<DestructiveButton width="20rem">20rem</DestructiveButton>
	</>
);

export const ButtonSizes = () => (
	<>
		<DestructiveButton size="small">small</DestructiveButton>
		<br /> <br /> <br />
		<DestructiveButton iconName="directions.filled" size="small">
			small
		</DestructiveButton>
		<br /> <br /> <br /> <br />
		<DestructiveButton> medium (default)</DestructiveButton>
		<br /> <br /> <br />
		<DestructiveButton iconName="directions.filled">
			medium (default)
		</DestructiveButton>
		<br /> <br /> <br /> <br />
		<DestructiveButton size="large">large</DestructiveButton>
		<br /> <br /> <br />
		<DestructiveButton iconName="directions.filled" size="large">
			large
		</DestructiveButton>
	</>
);
