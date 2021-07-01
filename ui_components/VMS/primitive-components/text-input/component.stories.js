import { useState } from 'react';
import ThemeDecorator from '../../storybook-theme-decorator';
import TextInput from '.';
import componentDocumentation from './docs.mdx';
import Box from '@locus-labs/vms-box';

export default {
	title: 'VMS Components/Primitive Components/Text Input',
	component: TextInput,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=7155%3A32',
		},
	},
};

export const Default = () => <TextInput />;

export const WithLabel = () => {
	const [value, setValue] = useState('');

	return (
		<TextInput
			label="Label"
			value={value}
			onValueChange={(val) => setValue(val)}
		/>
	);
};

export const Disabled = () => (
	<>
		<TextInput label="Label" disabled />
		<br />
		<TextInput label="Label" value="Disabled value" disabled />
	</>
);

export const WithDefaultIcon = () => {
	const [value, setValue] = useState('');

	return (
		<TextInput
			inputIcon={true}
			value={value}
			onValueChange={(val) => setValue(val)}
		/>
	);
};

export const WithCustomIcon = () => {
	const [value, setValue] = useState('');

	return (
		<TextInput
			inputIcon="search.web"
			value={value}
			onValueChange={(val) => setValue(val)}
		/>
	);
};

export const WithMaxCharacterCount = () => {
	const [value, setValue] = useState('');

	return (
		<TextInput
			label="Label"
			inputIcon="search.web"
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
		<TextInput
			label="Label"
			inputIcon="search.web"
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
			<TextInput
				label="Label"
				inputIcon="search.web"
				placeholder="Input text"
				value={value}
				onValueChange={(val) => setValue(val)}
				errorMessage="*Error message"
				maxCharacterCount={20}
				marginBottom="20px"
			/>
			<TextInput
				label="Label"
				inputIcon="search.web"
				placeholder="Input text"
				value={value}
				onValueChange={(val) => setValue(val)}
				errorMessage="*Long error message, that should ellipse"
				maxCharacterCount={20}
				marginBottom="20px"
			/>

			<TextInput
				label="Label"
				inputIcon="search.web"
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
				<TextInput
					display="block"
					className="short"
					marginBottom="20px"
					inputIcon="search.web"
					placeholder="Input text"
					value={value}
					onValueChange={(val) => setValue(val)}
				/>
			</Box>
			<Box width="200px">
				<TextInput
					display="block"
					className="short"
					marginBottom="20px"
					label="Label"
					inputIcon="search.web"
					placeholder="Input text"
					value={value}
					onValueChange={(val) => setValue(val)}
				/>
			</Box>
			<Box width="200px">
				<TextInput
					display="block"
					className="short"
					marginBottom="20px"
					label="Label"
					inputIcon="search.web"
					placeholder="Input text"
					value={value.slice(0, 20)}
					onValueChange={(val) => setValue(val)}
					errorMessage="*Error message"
					maxCharacterCount={20}
				/>
			</Box>
			<Box width="500px">
				<TextInput
					display="block"
					className="long"
					marginBottom="20px"
					inputIcon="search.web"
					placeholder="Input text"
					value={value}
					onValueChange={(val) => setValue(val)}
				/>
			</Box>
			<Box width="500px">
				<TextInput
					display="block"
					className="long"
					marginBottom="20px"
					label="Label"
					inputIcon="search.web"
					placeholder="Input text"
					value={value}
					onValueChange={(val) => setValue(val)}
				/>
			</Box>
			<Box width="500px">
				<TextInput
					display="block"
					className="long"
					label="Label"
					inputIcon="search.web"
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
