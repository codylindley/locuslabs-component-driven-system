import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import FilterSwitch from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';

export default {
	title: 'MOK Components/Primitive Components/Filter Switch',
	component: FilterSwitch,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A13',
		},
	},
};

export const Default = () => (
	<FilterSwitch leftLabel="Left Label" rightLabel="Right Label" />
);

export const OnChange = () => {
	const [label, setLabel] = useState('Left Label');

	return (
		<>
			<Text>{`Active label: ${label}`}</Text>
			<br />
			<br />
			<FilterSwitch
				leftLabel="Left Label"
				rightLabel="Right Label"
				onChange={setLabel}
			/>
		</>
	);
};

export const ControlledComponent = () => {
	const [label, setLabel] = useState('Left Label');

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Box display="flex" alignItems="center">
				<button
					id="set_left_label"
					onClick={() => setLabel('Left Label')}
					style={{ marginRight: '20px', height: '35px' }}
				>
					Set Left Label
				</button>
				<button
					id="set_right_label"
					onClick={() => setLabel('Right Label')}
					style={{ height: '35px' }}
				>
					Set Right Label
				</button>
			</Box>
			<br />
			<br />
			<FilterSwitch
				leftLabel="Left Label"
				rightLabel="Right Label"
				onChange={setLabel}
				value={label}
			/>
		</Box>
	);
};
