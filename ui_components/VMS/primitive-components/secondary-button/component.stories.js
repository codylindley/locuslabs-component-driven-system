import componentDocumentation from './docs.mdx';
import SecondaryButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Secondary Button',
	component: SecondaryButton,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7108%3A1',
		},
	},
};

export const Default = () => <SecondaryButton>default</SecondaryButton>;

export const Disabled = () => (
	<>
		<SecondaryButton disabled>disabled</SecondaryButton>
	</>
);

export const WithIcon = () => (
	<>
		<SecondaryButton iconName="directions.filled">with icon</SecondaryButton>
		<br /> <br /> <br />
		<SecondaryButton iconName="this-Does-Not-Result-In-Valid-Icon-URL">
			icon not found
		</SecondaryButton>
	</>
);

export const Width = () => (
	<>
		<SecondaryButton width="20rem">20rem</SecondaryButton>
	</>
);

export const ButtonSizes = () => (
	<>
		<SecondaryButton size="small">small</SecondaryButton>
		<br /> <br /> <br />
		<SecondaryButton iconName="directions.filled" size="small">
			small
		</SecondaryButton>
		<br /> <br /> <br /> <br />
		<SecondaryButton> medium (default)</SecondaryButton>
		<br /> <br /> <br />
		<SecondaryButton iconName="directions.filled">
			medium (default)
		</SecondaryButton>
		<br /> <br /> <br /> <br />
		<SecondaryButton size="large">large</SecondaryButton>
		<br /> <br /> <br />
		<SecondaryButton iconName="directions.filled" size="large">
			large
		</SecondaryButton>
	</>
);
