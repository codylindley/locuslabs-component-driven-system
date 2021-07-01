// in .storybook/manager.js
import addons from '@storybook/addons';
import theme from './theme';

addons.setConfig({
	sidebar: {
		showRoots: true,
	},
	theme: theme,
});