import Box from '@locus-labs/mok-box';
import componentDocumentation from './docs.mdx';
import StatusIndicator from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Primitive Components/Status Indicator',
	component: StatusIndicator,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A3',
		},
	},
};

export const Default = () => (
	<>
		<StatusIndicator>14 minute wait</StatusIndicator>
	</>
);

export const TypeProp = () => (
	<Box bg="white" p="25px">
		<StatusIndicator>Default</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="info">Info</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="active">Active</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="inactive">Inactive</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="warning">Warning</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="alert">Alert</StatusIndicator>
	</Box>
);

export const PulsingStatus = () => (
	<>
		<StatusIndicator pulsingStatusOn>14 minute wait</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="alert" pulsingStatusOn>
			14 minute wait
		</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="active" pulsingStatusOn>
			14 minute wait
		</StatusIndicator>
	</>
);

export const EllipsisText = () => (
	<Box width="160px">
		<StatusIndicator type="info">
			super long text will get ellipsis by parent
		</StatusIndicator>
		<br />
		<br />
		<StatusIndicator pulsingStatusOn>
			super long text will get ellipsis by parent
		</StatusIndicator>
	</Box>
);
