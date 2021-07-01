import componentDocumentation from './docs.mdx';
import StatusIndicator from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Status Indicator',
	component: StatusIndicator,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=12251%3A98293',
		},
	},
};

export const Default = () => (
	<>
		<StatusIndicator>14 minute wait</StatusIndicator>
	</>
);

export const TypeProp = () => (
	<>
		<StatusIndicator type="alert">
			text super long test keeps going to fill until parent restricts size
		</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="active">14 minute wait</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="inactive">14 minute wait</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="warning">14 minute wait</StatusIndicator>
		<br />
		<br />
		<StatusIndicator type="info">14 minute wait</StatusIndicator>
	</>
);

export const PulsingWarning = () => (
	<>
		<StatusIndicator type="alert" pulsingStatusOn>
			14 minute wait
		</StatusIndicator>
	</>
);

export const EllipsisText = () => (
	<div style={{ width: '160px' }}>
		<StatusIndicator type="info">
			super long text will get ellipsis by parent
		</StatusIndicator>
	</div>
);
