import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import ScrollingNavigationButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Text from '@locus-labs/mok-text';

export default {
	title: 'MOK Components/Primitive Components/Scrolling Navigation Button',
	component: ScrollingNavigationButton,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6743%3A65021',
		},
	},
};

export const Default = () => <ScrollingNavigationButton label="Directions" />;

export const Ellipsis = () => (
	<ScrollingNavigationButton label="When the text label goes beyond" />
);

export const OnClick = () => {
	const [direction, setDirection] = useState('left');

	return (
		<>
			<Text>{`The current direction is: ${direction}`}</Text>
			<br />
			<br />
			<ScrollingNavigationButton label="Directions" onClick={setDirection} />
		</>
	);
};
