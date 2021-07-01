import React from 'react';
import DirectionsHeader from './index';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOK Components/Domain Components/Send To Mobile/Subcomponents/Directions Header',
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	component: DirectionsHeader,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A23',
		},
	},
};

export const Default = () => (
	<DirectionsHeader
		timeToPOIValue={4}
		timeToPOIUnit={'mins'}
		poiName="When the text label goes beyond the minimum this have to ellipsis the text"
		levelLabel="Level 10"
		distanceValue="1034"
		distanceUnit="ft"
	/>
);
