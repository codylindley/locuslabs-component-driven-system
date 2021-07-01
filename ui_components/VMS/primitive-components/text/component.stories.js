import componentDocumentation from './docs.mdx';
import Text from './';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Text',
	component: Text,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=461%3A228',
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
			<Text fontSize="sm">sm</Text>
			<br />
			<br />
			<Text fontSize="md">md</Text>
			<br />
			<br />
			<Text>lg (default)</Text>
			<br />
			<br />
			<Text fontSize="xl">xl</Text>
			<br />
			<br />
			<Text fontSize="xxl">xxl</Text>
			<br />
			<br />
			<Text fontSize="xxxl">xxxl</Text>
		</>
	);
};

export const Weights = () => {
	return (
		<>
			<Text fontWeight="light">light</Text>
			<br />
			<br />
			<Text>medium (default)</Text>
			<br />
			<br />
			<Text fontWeight="semiBold">semi bold</Text>
			<br />
			<br />
			<Text fontWeight="bold">bold</Text>
		</>
	);
};

export const AsProp = () => {
	return (
		<>
			<Text as="i">Italic</Text>
			<br />
			<br />
			<Text as="u">Underline</Text>
			<br />
			<br />
			<Text as="abbr">I18N</Text>
			<br />
			<br />
			<Text as="cite">Citation</Text>
			<br />
			<br />
			<Text as="del">Deleted</Text>
			<br />
			<br />
			<Text as="em">Emphasis</Text>
			<br />
			<br />
			<Text as="ins">Inserted</Text>
			<br />
			<br />
			<Text as="kbd">Ctrl + C</Text>
			<br />
			<br />
			<Text as="mark">Highlighted</Text>
			<br />
			<br />
			<Text as="s">Strikethrough</Text>
			<br />
			<br />
			<Text as="samp">Sample</Text>
			<br />
			<br />
			<Text as="sub">sub</Text>
			<br />
			<br />
			<Text as="sup">sup</Text>
		</>
	);
};
