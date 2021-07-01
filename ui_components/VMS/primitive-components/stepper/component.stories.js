import { useState } from 'react';
import Stepper from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Text from '@locus-labs/vms-text';

import componentDocumentation from './docs.mdx';

export default {
	title: 'VMS Components/Primitive Components/Stepper',
	decorators: [ThemeDecorator], // connect the vms-desktop-default-theme to all stories
	component: Stepper,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=7827%3A41324',
		},
	},
};

export const Default = () => (
	<Stepper
		items={[
			{ tooltipContent: 'Item 1', status: 'completed' },
			{ tooltipContent: 'Item 2', status: 'completed' },
			{ tooltipContent: 'Item 3', status: 'active' },
			{ tooltipContent: 'Item 4', status: 'inactive' },
		]}
	/>
);

export const OnStepClick = () => {
	const [selectedIndex, setSelectedIndex] = useState(null);
	const items = [
		{ tooltipContent: 'Item 1', status: 'completed' },
		{ tooltipContent: 'Item 2', status: 'completed' },
		{ tooltipContent: 'Item 3', status: 'active' },
		{ tooltipContent: 'Item 4', status: 'inactive' },
	];

	return (
		<>
			{items[selectedIndex]?.tooltipContent ? (
				<Text>{`Step: ${items[selectedIndex].tooltipContent} selected`}</Text>
			) : (
				<Text>Please click on a step...</Text>
			)}
			<br />
			<Stepper items={items} onStepClick={(index) => setSelectedIndex(index)} />
		</>
	);
};
