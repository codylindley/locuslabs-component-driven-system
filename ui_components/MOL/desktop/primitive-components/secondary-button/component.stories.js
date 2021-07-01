import componentDocumentation from './docs.mdx';
import SecondaryButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Secondary Button',
	component: SecondaryButton,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6773%3A3812',
		},
	},
};

export const Default = () => <SecondaryButton>button</SecondaryButton>;

export const Disabled = () => (
	<SecondaryButton disabled>button</SecondaryButton>
);

export const WithIcon = () => (
	<>
		<SecondaryButton iconName="menu">Menu</SecondaryButton>
		<br />
		<br />
		<SecondaryButton iconName="menu" iconToTheRight>
			Menu
		</SecondaryButton>
		<br />
		<br />
		<SecondaryButton iconName="menu">
			Button with very long text that will be ellipsed
		</SecondaryButton>
	</>
);

export const IconNotFound = () => (
	<>
		<SecondaryButton iconName="this-Does-Not-Result-In-Valid-Icon-URL">
			button long text in button
		</SecondaryButton>
	</>
);

export const StackedButtons = () => (
	<>
		<SecondaryButton iconName="menu" type="stacked">
			Menu
		</SecondaryButton>
		<br />
		<br />
		<SecondaryButton iconName="menu" type="stacked">
			Button with very, I mean very, long text in the button
		</SecondaryButton>
		<br />
		<br />
		<SecondaryButton iconName="menu" type="stackedWide">
			Menu
		</SecondaryButton>
		<br />
		<br />
		<SecondaryButton iconName="menu" type="stackedWide">
			Button with very, I mean very, long text in the button
		</SecondaryButton>
	</>
);

export const SmallSecondaryButton = () => (
	<>
		<SecondaryButton iconName="chevron.left" type="small">
			Prev
		</SecondaryButton>
		<br />
		<br />
		<SecondaryButton iconName="chevron.right" type="small" iconToTheRight>
			Next
		</SecondaryButton>
		<br />
		<br />
		<SecondaryButton iconName="chevron.left" type="small">
			Prev longer text that will
		</SecondaryButton>
		<br />
		<br />
		<SecondaryButton iconName="chevron.right" type="small" iconToTheRight>
			Next longer text that will
		</SecondaryButton>
	</>
);
