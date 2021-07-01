import ThemeDecorator from '../../storybook-theme-decorator';
import LocationMarker from '.';
import Box from '@locus-labs/mod-box';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOD Components/Domain Components/Location Marker',
	component: LocationMarker,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDisplay-Master-2020?node-id=30%3A86',
		},
	},
};

export const Default = () => <LocationMarker />;

export const TypeSizes = () => (
	<>
		<LocationMarker type="editor" label="Label" />
		<br />
		<LocationMarker type="display" label="Label" />
	</>
);

export const LabelPosition = () => (
	<>
		Top:
		<LocationMarker label="Label" labelPosition="top" />
		<br />
		Right:
		<LocationMarker label="Label" labelPosition="right" />
		<br />
		Bottom:
		<LocationMarker label="Label" labelPosition="bottom" />
		<br />
		Left:
		<LocationMarker label="Label" labelPosition="left" />
	</>
);

export const LabelPositionEditor = () => (
	<>
		Top:
		<LocationMarker type="editor" label="Label" labelPosition="top" />
		<br />
		Right:
		<LocationMarker type="editor" label="Label" labelPosition="right" />
		<br />
		Bottom:
		<LocationMarker type="editor" label="Label" labelPosition="bottom" />
		<br />
		Left:
		<LocationMarker type="editor" label="Label" labelPosition="left" />
	</>
);

export const WithLongText = () => (
	<Box display="flex" alignItems="center" flexDirection="column">
		<LocationMarker
			label="Really really really really really long text that should ellipse if too long"
			marginBottom="20px"
		/>
		<LocationMarker
			labelPosition="right"
			label="Really really really really really long text that should ellipse if too long"
			marginBottom="20px"
		/>

		<LocationMarker
			labelPosition="bottom"
			label="Really really really really really long text that should ellipse if too long"
			marginBottom="20px"
		/>

		<LocationMarker
			labelPosition="left"
			label="Really really really really really long text that should ellipse if too long"
			marginBottom="20px"
		/>
		<LocationMarker
			type="editor"
			label="Really really really really really long text that should ellipse if too long"
			marginBottom="20px"
		/>
		<LocationMarker
			labelPosition="right"
			type="editor"
			label="Really really really really really long text that should ellipse if too long"
			marginBottom="20px"
		/>
		<LocationMarker
			labelPosition="bottom"
			type="editor"
			label="Really really really really really long text that should ellipse if too long"
			marginBottom="20px"
		/>
		<LocationMarker
			labelPosition="left"
			type="editor"
			label="Really really really really really long text that should ellipse if too long"
			marginBottom="20px"
		/>
	</Box>
);

export const WithAllProps = () => (
	<Box display="flex" alignItems="center" flexDirection="column">
		<LocationMarker
			type="display"
			label="Label"
			marginBottom="20px"
			markerFill="pink"
			markerBorder="darkcyan"
			labelBorderRadius="20px"
			labelBackgroundColor="darkcyan"
			labelColor="pink"
		/>
		<LocationMarker
			type="editor"
			label="Label"
			markerFill="darkcyan"
			markerBorder="pink"
			labelBorderRadius="0"
			labelBackgroundColor="pink"
			labelColor="darkcyan"
		/>
	</Box>
);
