import React from 'react';
import InstructionsContainer from './index';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOK Components/Domain Components/Send To Mobile/Subcomponents/Instructions Container',
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	component: InstructionsContainer,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A23',
		},
	},
};

export const Default = () => (
	<InstructionsContainer
		instructions={{
			title: 'Instructions',
			labels: [
				'Open your camera on your device',
				'Hold your phone up to the screen',
				'Point the camera at the QRCode',
			],
		}}
	/>
);
