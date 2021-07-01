import QRCodeCallout from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOK Components/Primitive Components/QR Code Callout',
	decorators: [ThemeDecorator], // connect the mod-default-theme to all stories
	component: QRCodeCallout,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A29',
		},
	},
};

export const Default = () => (
	<QRCodeCallout
		url="http://locuslabs.com/"
		primaryLabel="qrcode callout primary label"
	/>
);

export const Labels = () => (
	<QRCodeCallout
		url="http://locuslabs.com/"
		primaryLabel="point camera here"
		secondaryLabel="for touchless experience"
	/>
);

export const Color = () => (
	<QRCodeCallout
		url="http://locuslabs.com/"
		primaryLabel="qrcode callout primary label"
		color="red"
	/>
);
