const path = require('path');
module.exports = {
	stories: [
		'../ui_components/**/*.stories.mdx',
		'../ui_components/**/*.stories.js',
	],
	addons: [
		'storybook-addon-designs',
		'@storybook/addon-a11y',
		'storybook-addon-outline',
		'@storybook/addon-viewport',
		'@storybook/addon-docs',
		'@storybook/addon-links',
		'@storybook/addon-backgrounds',
		{
			name: '@storybook/addon-storysource',
			options: {
				rule: {
					test: [/\.stories\.jsx?$/],
					include: [path.resolve(__dirname, '../src')], // You can specify directories
				},
				loaderOptions: {
					prettierConfig: { printWidth: 100, singleQuote: true },
				},
			},
		},
	],
};
