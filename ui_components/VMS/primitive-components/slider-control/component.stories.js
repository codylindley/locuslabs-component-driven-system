import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import SliderControl from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Text from '@locus-labs/vms-text';
import Box from '@locus-labs/vms-box';

export default {
	title: 'VMS Components/Primitive Components/Slider Control',
	component: SliderControl,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7131%3A20706',
		},
	},
};

export const Default = () => <SliderControl />;

export const Disabled = () => <SliderControl disabled value={40} />;

export const Width = () => (
	<Box width="500px">
		<Text>
			Inherits from parent&apos;s <code>width</code>
		</Text>
		<SliderControl value={40} display="block" />
		<br />
		<Text>
			Passing <code>width=&quot;200px&quot;</code>
		</Text>
		<SliderControl value={40} width="200px" display="block" />
	</Box>
);

export const Value = () => {
	const [value, setValue] = useState(0);

	return (
		<>
			<Text>
				Master: <code>{value}</code>
			</Text>
			<SliderControl onChange={(v) => setValue(v)} display="block" />
			<br />
			<Text>
				Slave: <code>{100 - value}</code>
			</Text>
			<SliderControl value={100 - value} display="block" />
			<br />
			<Text>Non Controlled:</Text>
			<SliderControl value={60} display="block" />
		</>
	);
};

export const OnChange = () => {
	const initialValue = 0;
	const [label, setLabel] = useState(initialValue);
	const onChange = (value) => setLabel(value);

	return (
		<>
			<Text>
				Value: <code>{label}</code>
			</Text>
			<br />
			<br />
			<SliderControl onChange={onChange} value={initialValue} display="block" />
		</>
	);
};

export const MinAndMax = () => {
	const min = -200;
	const max = 100;
	const [value, setValue] = useState(-300);
	const onChange = (value) => setValue(value);

	return (
		<>
			<Text>
				Maximum value: <code>{max}</code>
			</Text>
			<br />
			<Text>
				Minimum value: <code>{min}</code>
			</Text>
			<br />
			<Text>
				Current value: <code>{value}</code>
			</Text>
			<SliderControl
				min={min}
				max={max}
				onChange={onChange}
				value={value}
				display="block"
				width="200px"
			/>
		</>
	);
};

export const ControlledComponent = () => {
	const [value, setValue] = useState(20);

	return (
		<>
			<Text>
				Value: <code>{value}</code>
			</Text>
			<SliderControl
				display="block"
				value={value}
				onChange={setValue}
				width="20rem"
			/>
		</>
	);
};
