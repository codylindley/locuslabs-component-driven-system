import componentDocumentation from './docs.mdx';
import Text from './';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Text',
	component: Text,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6773%3A6910',
		},
	},
};

export const Default = () => {
	return <Text>text</Text>;
};

export const LimitLinesTo = () => {
	return (
		<>
			<Text limitLinesOfTextTo={3} width="400px">
				Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
				sapientem vel. Elitr admodum vel cu, iudicabit imperdiet incorrupte eu
				sea. An mel animal alienum platonem. Nibh probatus in vis, te sonet
				saperet splendide duo. Et mei nullam altera cotidieque, vis in quaeque
				docendi pertinacia, affert aliquid cu vix. Eum alia tibique
			</Text>
			<br /> <br />
			<Text width="200px">
				Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
				sapientem vel. Elitr admodum vel cu, iudicabit imperdiet incorrupte eu
				sea. An mel animal alienum platonem. Nibh probatus in vis, te sonet
				saperet splendide duo. Et mei nullam altera cotidieque, vis in quaeque
				docendi pertinacia, affert aliquid cu vix. Eum alia tibique
			</Text>
		</>
	);
};

export const Sizes = () => {
	return (
		<>
			<Text>sm</Text>
			<br />
			<Text fontSize="md">md</Text>
			<br />
			<Text fontSize="lg">lg</Text>
			<br />
			<Text fontSize="xl">xl</Text>
			<br />
			<Text fontSize="xxl">xxl</Text>
		</>
	);
};

export const AsProp = () => {
	return (
		<>
			<Text as="i">Italic</Text>
			<br />
			<Text as="u">Underline</Text>
			<br />
			<Text as="abbr">I18N</Text>
			<br />
			<Text as="cite">Citation</Text>
			<br />
			<Text as="del">Deleted</Text>
			<br />
			<Text as="em">Emphasis</Text>
			<br />
			<Text as="ins">Inserted</Text>
			<br />
			<Text as="kbd">Ctrl + C</Text>
			<br />
			<Text as="mark">Highlighted</Text>
			<br />
			<Text as="s">Strikethrough</Text>
			<br />
			<Text as="samp">Sample</Text>
			<br />
			<Text as="sub">sub</Text>
			<br />
			<Text as="sup">sup</Text>
		</>
	);
};
