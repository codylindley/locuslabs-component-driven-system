import Logo from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Logo',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: Logo,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=11348%3A10203',
		},
	},
};

const logoUrl =
	'https://content.locuslabs.com/airport/spritesheet-svg/man/A1XZYA7TH0U45L/venue-logo.svg';

export const Default = () => {
	return <Logo />;
};

export const WithLogoUrl = () => {
	return <Logo url={logoUrl} />;
};

export const WithCustomAlt = () => {
	return (
		<>
			<Logo url={logoUrl} alt="Custom alt text" m="0 0 20px" />
			<Logo alt="Custom alt text" />
		</>
	);
};

export const WithCustomPadding = () => {
	return <Logo url={logoUrl} p="0px 20px" />;
};

export const WithAlignment = () => {
	return (
		<>
			<Logo url={logoUrl} m="0 0 20px" />

			<Logo url={logoUrl} position="left" m="0 0 20px" />

			<Logo url={logoUrl} position="right" m="0 0 20px" />
		</>
	);
};

export const MinHeight = () => {
	return (
		<>
			<Logo url={logoUrl} m="0 0 20px" logoHeight="10px" />
			<Logo
				url="https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/spritesheet-svg/A1RUZZWCB76TNU/venue-logo.svg"
				m="0 0 20px"
				logoHeight="10px"
			/>
			<Logo
				url="https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/spritesheet-svg/A1GU9WBVS35VHT/venue-logo.svg"
				m="0 0 20px"
				logoHeight="10px"
			/>
		</>
	);
};

export const MaxHeight = () => {
	return (
		<Logo
			url="https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/spritesheet-svg/A1RUZZWCB76TNU/venue-logo.svg"
			logoHeight="200px"
		/>
	);
};

export const MaxWidth = () => {
	return (
		<Logo
			url="https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/spritesheet-svg/A1GU9WBVS35VHT/venue-logo.svg"
			logoHeight="200px"
		/>
	);
};
