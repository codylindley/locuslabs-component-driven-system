import componentDocumentation from './docs.mdx';
import PrimaryCircleButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/vms-box';

export default {
	title: 'VMS Components/Primitive Components/Primary Circle Button',
	component: PrimaryCircleButton,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=15730%3A26',
		},
	},
};

export const Default = () => <PrimaryCircleButton />;

export const WithTooltip = () => (
	<PrimaryCircleButton tooltipContent="Example tooltip" />
);

export const Disabled = () => (
	<Box>
		<PrimaryCircleButton disabled />
		<br />
		<br />
		<PrimaryCircleButton disabled>8</PrimaryCircleButton>
	</Box>
);
export const WithoutDropshadow = () => (
	<PrimaryCircleButton hasDropshadow={false} />
);

export const WithText = () => (
	<Box>
		<PrimaryCircleButton size="small">4</PrimaryCircleButton>
		<PrimaryCircleButton size="small">4000</PrimaryCircleButton>
		<PrimaryCircleButton size="small">Large Text</PrimaryCircleButton>
		<br />
		<br />
		<PrimaryCircleButton size="medium">4</PrimaryCircleButton>
		<PrimaryCircleButton size="medium">4000</PrimaryCircleButton>
		<PrimaryCircleButton size="medium">Large Text</PrimaryCircleButton>
		<br />
		<br />
		<PrimaryCircleButton>4</PrimaryCircleButton>
		<PrimaryCircleButton>4000</PrimaryCircleButton>
		<PrimaryCircleButton>Large Text</PrimaryCircleButton>
	</Box>
);

export const WithIcon = () => (
	<Box>
		<PrimaryCircleButton size="small" iconName="directions.filled" />
		<br /> <br />
		<PrimaryCircleButton size="medium" iconName="directions.filled" />
		<br /> <br />
		<PrimaryCircleButton iconName="directions.filled" />
	</Box>
);

export const ButtonSizes = () => (
	<Box>
		<PrimaryCircleButton size="small">sm</PrimaryCircleButton>
		<br /> <br />
		<PrimaryCircleButton size="medium">md</PrimaryCircleButton>
		<br /> <br />
		<PrimaryCircleButton>lg</PrimaryCircleButton>
	</Box>
);

export const IconNotFound = () => (
	<Box>
		<PrimaryCircleButton iconName="invalid-url" />
	</Box>
);
