import componentDocumentation from './docs.mdx';
import PrimaryButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Primary Button',
	component: PrimaryButton,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6773%3A2853',
		},
	},
};

export const Default = () => <PrimaryButton>button</PrimaryButton>;

export const Disabled = () => <PrimaryButton disabled>button</PrimaryButton>;

export const WithIcon = () => (
	<>
		<PrimaryButton iconName="directions.filled">
			Button long text in button
		</PrimaryButton>
		<br />
		<br />
		<PrimaryButton iconName="directions.filled">
			Button very very very very long text In button
		</PrimaryButton>
		<br />
		<br />
		<PrimaryButton iconName="directions.filled">button</PrimaryButton>
	</>
);

export const IconNotFound = () => (
	<>
		<PrimaryButton iconName="this-Does-Not-Result-In-Valid-Icon-URL">
			Button long text in button
		</PrimaryButton>
	</>
);
