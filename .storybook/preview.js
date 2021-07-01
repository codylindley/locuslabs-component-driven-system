/* config.js has been renamed to preview.js. preview.js configures the "preview" iframe that renders your components. */

// Can include css that would get applied to all stories here
// import '../some/css.css';

import 'cypress-storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
	layout: 'centered',
	backgrounds: {
		default: 'Light Gray',
		values: [
			{ name: 'White', value: '#ffffff' },
			{ name: 'Light Gray', value: '#D3D3D3' },
			{ name: 'Dark Grey', value: '#A9A9A9' },
			{ name: 'Gray', value: '#808080' },
			{ name: 'Black', value: '#000000' },
		],
	},
	storySort: (a, b) =>
		a[1].kind === b[1].kind
			? 0
			: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
};
