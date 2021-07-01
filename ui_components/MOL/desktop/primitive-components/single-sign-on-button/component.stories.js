import SingleSignOnButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Single Sign On Button',
	decorators: [ThemeDecorator],
	component: SingleSignOnButton,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=21429%3A99219',
		},
	},
};

export const Default = () => (
	<SingleSignOnButton>Sign in with SSO</SingleSignOnButton>
);

export const Disabled = () => (
	<SingleSignOnButton disabled>Sign in with SSO</SingleSignOnButton>
);

export const Type = () => {
	const variants = [
		{
			type: 'default',
			text: 'Sign in with SSO',
		},
		{
			type: 'facebook',
			text: 'Sign in with Facebook',
		},
		{
			type: 'microsoft',
			text: 'Sign in with Microsoft',
		},
		{
			type: 'github',
			text: 'Sign in with GitHub',
		},
		{
			type: 'twitter',
			text: 'Sign in with Twitter',
		},
		{
			type: 'google',
			text: 'Sign in with Google',
		},
		{
			type: 'dropbox',
			text: 'Sign in with Dropbox',
		},
		{
			type: 'linkedin',
			text: 'Sign in with Linkedin',
		},
	];

	return variants.map(({ type, text }, index) => (
		<SingleSignOnButton key={index} type={type} margin="10px" display="block">
			{text}
		</SingleSignOnButton>
	));
};

export const WithTextEllipsis = () => (
	<SingleSignOnButton type="facebook">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	</SingleSignOnButton>
);
