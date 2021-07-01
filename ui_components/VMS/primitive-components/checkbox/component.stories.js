import { useState } from 'react';
import Checkbox from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/vms-box';
import componentDocumentation from './docs.mdx';

export default {
	title: 'VMS Components/Primitive Components/Checkbox',
	component: Checkbox,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=7831%3A3304',
		},
	},
};

export const Default = () => <Checkbox />;

export const Checked = () => {
	const [isChecked, setIsChecked] = useState(true);
	const _onCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	return (
		<Checkbox isChecked={isChecked} onCheckboxChange={_onCheckboxChange} />
	);
};

export const WithCustomIcon = () => {
	const [isChecked, setIsChecked] = useState(false);
	const _onCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	return (
		<Checkbox
			isChecked={isChecked}
			onCheckboxChange={_onCheckboxChange}
			iconName={'eat'}
		/>
	);
};

export const WithCustomLabel = () => {
	const [isChecked, setIsChecked] = useState(false);
	const _onCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	return (
		<Checkbox
			isChecked={isChecked}
			onCheckboxChange={_onCheckboxChange}
			label="Checkbox"
		/>
	);
};

export const WithParentWidth = () => {
	const [isChecked, setIsChecked] = useState(false);
	const _onCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	return (
		<Box width="180px">
			<Checkbox
				isChecked={isChecked}
				onCheckboxChange={_onCheckboxChange}
				label="Checkbox label that should be 2 lines and ellipse if too long"
			/>
		</Box>
	);
};
export const Disabled = () => {
	const [isChecked, setIsChecked] = useState(false);
	const _onCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	return (
		<Box>
			<Checkbox
				display="block"
				isChecked={!isChecked}
				onCheckboxChange={_onCheckboxChange}
				label="Checked and disabled"
				disabled
				marginBottom="6px"
			/>
			<Checkbox
				isChecked={isChecked}
				onCheckboxChange={_onCheckboxChange}
				label="Unchecked and disabled"
				disabled
			/>
		</Box>
	);
};
