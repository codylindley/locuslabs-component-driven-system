import { useState } from 'react';
import ThemeDecorator from '../../storybook-theme-decorator';
import TextAreaInput from '.';
import componentDocumentation from './docs.mdx';
import Box from '@locus-labs/vms-box';

export default {
	title: 'VMS Components/Primitive Components/Text Area Input',
	component: TextAreaInput,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=18332%3A15',
		},
	},
};

export const Default = () => <TextAreaInput />;

export const WithLabel = () => {
	const [value, setValue] = useState('');

	return (
		<TextAreaInput
			label="Label"
			value={value}
			onValueChange={(val) => setValue(val)}
		/>
	);
};

export const Disabled = () => (
	<>
		<TextAreaInput disabled label="Disabled " value="text area input" />
		<br />
		<TextAreaInput disabled value="I'm disabled with no label" />
	</>
);

export const Rows = () => {
	const [value, setValue] = useState('');

	return (
		<>
			<TextAreaInput
				placeholder="No rows. Defaults to 2, will grow until 10"
				value={value}
				onValueChange={(val) => setValue(val)}
			/>
			<br />
			<TextAreaInput
				placeholder="5 rows, will scroll after"
				rows={5}
				value={value}
				onValueChange={(val) => setValue(val)}
			/>
		</>
	);
};

export const WithMaxCharacterCount = () => {
	const [value, setValue] = useState('');

	return (
		<TextAreaInput
			label="Label"
			placeholder="Input text"
			maxCharacterCount={20}
			value={value}
			onValueChange={(val) => setValue(val)}
		/>
	);
};

export const WithUnsavedChanges = () => {
	const [value, setValue] = useState('Unsaved text');

	return (
		<TextAreaInput
			label="Label"
			placeholder="Input text"
			value={value}
			onValueChange={(val) => setValue(val)}
			isUnsaved={true}
		/>
	);
};

export const WithErrorMessage = () => {
	const [value, setValue] = useState('Unsaved text');

	return (
		<Box display="flex" flexDirection="column" width="210px">
			<TextAreaInput
				label="Label"
				placeholder="Input text"
				value={value}
				onValueChange={(val) => setValue(val)}
				errorMessage="*Error message"
				maxCharacterCount={20}
				marginBottom="20px"
			/>
			<TextAreaInput
				label="Label"
				placeholder="Input text"
				value={value}
				onValueChange={(val) => setValue(val)}
				errorMessage="*Long error message, that should ellipse"
				maxCharacterCount={20}
				marginBottom="20px"
			/>

			<TextAreaInput
				label="Label"
				placeholder="Input text"
				value={value}
				onValueChange={(val) => setValue(val)}
				errorMessage="*Long error message, that should ellipse"
			/>
		</Box>
	);
};

export const VariousWidth = () => {
	const [value, setValue] = useState('Unsaved text');

	return (
		<Box display="flex" flexDirection="column">
			<Box width="200px">
				<TextAreaInput
					display="block"
					className="short"
					marginBottom="20px"
					placeholder="Input text"
					value={value}
					onValueChange={(val) => setValue(val)}
				/>
			</Box>
			<Box width="200px">
				<TextAreaInput
					display="block"
					className="short"
					marginBottom="20px"
					label="Label"
					placeholder="Input text"
					value={value}
					onValueChange={(val) => setValue(val)}
				/>
			</Box>
			<Box width="200px">
				<TextAreaInput
					display="block"
					className="short"
					marginBottom="20px"
					label="Label"
					placeholder="Input text"
					value={value.slice(0, 20)}
					onValueChange={(val) => setValue(val)}
					errorMessage="*Error message"
					maxCharacterCount={20}
				/>
			</Box>
			<Box width="500px">
				<TextAreaInput
					display="block"
					className="long"
					marginBottom="20px"
					placeholder="Input text"
					value={value}
					onValueChange={(val) => setValue(val)}
				/>
			</Box>
			<Box width="500px">
				<TextAreaInput
					display="block"
					className="long"
					marginBottom="20px"
					label="Label"
					placeholder="Input text"
					value={value}
					onValueChange={(val) => setValue(val)}
				/>
			</Box>
			<Box width="500px">
				<TextAreaInput
					display="block"
					className="long"
					label="Label"
					placeholder="Input text"
					value={value.slice(0, 20)}
					onValueChange={(val) => setValue(val)}
					errorMessage="*Error message"
					maxCharacterCount={20}
				/>
			</Box>
		</Box>
	);
};
