import componentDocumentation from './docs.mdx';
import PrimaryButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Primary Button',
	component: PrimaryButton,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7108%3A0',
		},
	},
};

export const Default = () => <PrimaryButton>default</PrimaryButton>;

export const Disabled = () => (
	<>
		<PrimaryButton disabled>disabled</PrimaryButton>
	</>
);

export const WithIcon = () => (
	<>
		<PrimaryButton iconName="directions.filled">with icon</PrimaryButton>
		<br /> <br /> <br />
		<PrimaryButton iconName="this-Does-Not-Result-In-Valid-Icon-URL">
			icon not found
		</PrimaryButton>
	</>
);

export const Width = () => (
	<>
		<PrimaryButton width="20rem">20rem</PrimaryButton>
	</>
);

export const ButtonSizes = () => (
	<>
		<PrimaryButton size="small">small</PrimaryButton>
		<br /> <br /> <br />
		<PrimaryButton iconName="directions.filled" size="small">
			small
		</PrimaryButton>
		<br /> <br /> <br /> <br />
		<PrimaryButton> medium (default)</PrimaryButton>
		<br /> <br /> <br />
		<PrimaryButton iconName="directions.filled">medium (default)</PrimaryButton>
		<br /> <br /> <br /> <br />
		<PrimaryButton size="large">large</PrimaryButton>
		<br /> <br /> <br />
		<PrimaryButton iconName="directions.filled" size="large">
			large
		</PrimaryButton>
	</>
);
