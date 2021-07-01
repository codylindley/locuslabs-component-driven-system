import { useState } from 'react';
import Radio from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Text from '@locus-labs/vms-text';
import Box from '@locus-labs/vms-box';
import Button from '@locus-labs/vms-secondary-button';

import componentDocumentation from './docs.mdx';

export default {
	title: 'VMS Components/Primitive Components/Radio',
	component: Radio,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=8391%3A48990',
		},
	},
};

export const Default = () => <Radio label="Default" />;

export const Selected = () => <Radio label="Selected" selected />;

export const Disabled = () => (
	<>
		<Radio label="Disabled" disabled />
		<br />
		<Radio label="Disabled and Selected" selected disabled />
	</>
);

export const OnRadioChange = () => {
	const [selected, setSelected] = useState();

	return (
		<>
			<Text>{`Selected: ${selected ? 'true' : 'false'}`}</Text>
			<br />
			<Radio label="Select" onRadioChange={setSelected} selected={selected} />
		</>
	);
};

export const ControlledComponent = () => {
	const [selectedIndex, setSelectedIndex] = useState();

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Box display="flex">
				<Button
					display="inline-flex"
					mr="15px"
					size="small"
					onClick={() => setSelectedIndex(0)}
				>
					Select Radio #1
				</Button>
				<Button
					display="inline-flex"
					mr="15px"
					size="small"
					onClick={() => setSelectedIndex(1)}
				>
					Select Radio #2
				</Button>
				<Button
					size="small"
					mr="15px"
					display="inline-flex"
					onClick={() => setSelectedIndex(2)}
				>
					Select Radio #3
				</Button>
				<Button
					display="inline-flex"
					size="small"
					onClick={() => setSelectedIndex(3)}
				>
					Select Radio #4
				</Button>
			</Box>

			<Box display="flex">
				<Radio
					m="2rem"
					label="Radio 1"
					selected={selectedIndex === 0}
					onRadioChange={() => setSelectedIndex(0)}
				/>
				<Radio
					m="2rem"
					label="Radio 2"
					selected={selectedIndex === 1}
					onRadioChange={() => setSelectedIndex(1)}
				/>
				<Radio
					m="2rem"
					label="Radio 3"
					selected={selectedIndex === 2}
					onRadioChange={() => setSelectedIndex(2)}
				/>
				<Radio
					m="2rem"
					label="Radio 4"
					selected={selectedIndex === 3}
					onRadioChange={() => setSelectedIndex(3)}
				/>
			</Box>
		</Box>
	);
};
