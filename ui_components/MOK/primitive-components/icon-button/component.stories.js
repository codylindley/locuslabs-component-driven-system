import React from 'react';
import componentDocumentation from './docs.mdx';
import ThemeDecorator from '../../storybook-theme-decorator';
import IconButton from './';
import Box from '@locus-labs/mok-box';

export default {
	title: 'MOK Components/Primitive Components/Icon Button',
	component: IconButton,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6730%3A4',
		},
	},
};

export const Default = () => <IconButton />;

export const WithText = () => (
	<IconButton iconName="help.outline" label="Help" />
);

export const Icons = () => {
	return (
		<>
			<Box
				width="400px"
				display="flex"
				justifyContent="center"
				alignItems="center"
				backgroundColor="primary"
			>
				<IconButton iconName="help.outline" label="Help" />
				<IconButton iconName="home" label="Home" />
				<IconButton iconName="hotel" label="Hotel" />
			</Box>
		</>
	);
};
