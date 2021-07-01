import React from 'react';
import QRCodeCard from './index';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOK Components/Domain Components/Send To Mobile/Subcomponents/QRCode Card',
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	component: QRCodeCard,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A23',
		},
	},
};

export const Default = () => <QRCodeCard url="http://locuslabs.com" />;
