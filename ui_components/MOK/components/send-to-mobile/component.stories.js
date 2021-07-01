import React from 'react';
import componentDocumentation from './docs.mdx';
import SendToMobile from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Domain Components/Send To Mobile',
	component: SendToMobile,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A23',
		},
	},
};

export const Default = () => (
	<SendToMobile
		timeToPOIValue={4}
		timeToPOIUnit={'mins'}
		poiName="When the text label goes beyond the minimum this have to ellipsis the text"
		levelLabel="Level 10"
		distanceValue="1034"
		distanceUnit="ft"
		url="http://locuslabs.com/"
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
