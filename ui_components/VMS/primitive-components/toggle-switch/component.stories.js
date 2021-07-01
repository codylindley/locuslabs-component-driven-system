import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import ThemeDecorator from '../../storybook-theme-decorator';
import ToggleSwitch from '.';
import Box from '@locus-labs/vms-box';

export default {
	title: 'VMS Components/Primitive Components/Toggle Switch',
	component: ToggleSwitch,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7131%3A20564',
		},
	},
};

export const Default = () => <ToggleSwitch label="Label" />;

export const Enabled = () => <ToggleSwitch label="Label" enabled={true} />;

export const OnChange = () => {
	const [enabled, setEnabled] = useState(false);
	const [label, setLabel] = useState('Click me to change this label!');

	const handleOnChange = (value) => {
		setEnabled(value);
		setLabel(`"onChange" callback was called with: ${value}`);
	};

	return (
		<Box width="400px">
			<ToggleSwitch label={label} enabled={enabled} onChange={handleOnChange} />
		</Box>
	);
};
