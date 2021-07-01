import componentDocumentation from './docs.mdx';
import LaneSelectionButton from './';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mok-box';
import Text from '@locus-labs/mok-text';

export default {
	title: 'MOK Components/Primitive Components/Lane Selection Button',
	component: LaneSelectionButton,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6625%3A6',
		},
	},
};

export const Default = () => {
	return <LaneSelectionButton>Permanent Resident</LaneSelectionButton>;
};

export const Type = () => (
	<>
		<Text>Default Type:</Text>
		<LaneSelectionButton display="block">Default Type</LaneSelectionButton>
		<LaneSelectionButton
			display="block"
			logoUrl="https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/logo/tsapre.svg"
		/>
		<br />
		<br />
		<Text>Navigation Type:</Text>
		<LaneSelectionButton display="block" type="navigation">
			Navigation Type
		</LaneSelectionButton>
		<LaneSelectionButton
			display="block"
			type="navigation"
			logoUrl="https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/logo/tsapre.svg"
		/>
	</>
);

export const WithLogoUrl = () => {
	return (
		<LaneSelectionButton logoUrl="https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/logo/tsapre.svg" />
	);
};

export const EllipsisWithText = () => {
	return (
		<Box width="300px">
			<LaneSelectionButton>
				This is probably not a short message in any way and should ellipse
			</LaneSelectionButton>
		</Box>
	);
};
