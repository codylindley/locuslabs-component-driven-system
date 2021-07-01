import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import TabMenu from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/vms-box';
import Text from '@locus-labs/vms-text';
import Button from '@locus-labs/vms-secondary-button';

export default {
	title: 'VMS Components/Primitive Components/Tab Menu',
	component: TabMenu,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
			design: {
				type: 'figma',
				url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=7601%3A34845',
			},
		},
	},
};

const items = [1, 2, 3, 4, 5, 6].map((index) => ({
	label: `Tab ${index}`,
	hasUnsavedChanges: [2, 3, 4].includes(index),
}));

export const Default = () => (
	<TabMenu items={[{ label: 'Tab 1' }, { label: 'Tab 2' }]} />
);

export const WithUnsavedChanges = () => (
	<TabMenu
		items={[{ label: 'Tab 1' }, { label: 'Tab 2', hasUnsavedChanges: true }]}
	/>
);

export const Width = () => <TabMenu items={items} width="300px" />;

export const WithParentWidth = () => (
	<Box width="300px">
		<TabMenu items={items} />
	</Box>
);

export const WithTabContent = () => {
	const items = [
		{ label: 'A tab' },
		{ label: 'A long tab' },
		{ label: 'A very long tab' },
		{ label: 'A very very long tab' },
		{ label: 'A very very long long tab' },
		{ label: 'A tab' },
		{ label: 'A long tab' },
		{ label: 'A very long tab' },
		{ label: 'A very very long tab' },
		{ label: 'A very very long long tab' },
		{ label: 'A tab' },
		{ label: 'A long tab' },
		{ label: 'A very long tab' },
		{ label: 'A very very long tab' },
		{ label: 'A very very long long tab' },
	];
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<Box width="500px">
			<TabMenu items={items} onChange={setSelectedIndex} />
			<Box bg="white" padding="1rem" data-cy="TabContent">
				{items[selectedIndex].label} was selected
			</Box>
		</Box>
	);
};

export const OnChange = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<>
			<Text>{`Selected Index: ${selectedIndex}`}</Text>
			<br />
			<TabMenu items={items} onChange={setSelectedIndex} />
		</>
	);
};

export const ControlledComponent = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Box display="flex">
				<Button mr="15px" size="small" onClick={() => setSelectedIndex(0)}>
					Select first
				</Button>
				<Button mr="15px" size="small" onClick={() => setSelectedIndex(1)}>
					Select Tab #2
				</Button>
				<Button size="small" mr="15px" onClick={() => setSelectedIndex(3)}>
					Select Tab #4
				</Button>
				<Button size="small" onClick={() => setSelectedIndex(items.length - 1)}>
					Select last
				</Button>
			</Box>
			<br />
			<TabMenu
				width="20rem"
				items={items}
				selectedIndex={selectedIndex}
				onChange={setSelectedIndex}
			/>
		</Box>
	);
};
