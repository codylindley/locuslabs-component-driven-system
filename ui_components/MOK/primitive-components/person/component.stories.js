import componentDocumentation from './docs.mdx';
import Person from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mok-box';
import Text from '@locus-labs/mok-text';

export default {
	title: 'MOK Components/Primitive Components/Person',
	component: Person,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-On-Kiosk-Master-2020?node-id=6414%3A1',
		},
	},
};

export const Default = () => <Person />;

export const Label = () => (
	<Box>
		<Box margin="15px" padding="10px">
			<Text>Without labels</Text>
			<Person />
		</Box>
		<Box margin="15px" padding="10px">
			<Text>With one label</Text>
			<Person primaryLabel="You are in Level 2" />
		</Box>
		<Box margin="15px" padding="10px">
			<Text>With two labels</Text>
			<Person
				primaryLabel="You are in Level 2"
				secondaryLabel="in Terminal 1"
			/>
		</Box>
	</Box>
);

export const FillAndBorderProp = () => <Person border="red" fill="white" />;
