import MapLegend from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';
import Box from '@locus-labs/mod-box';

export default {
	title: 'MOD Components/Domain Components/Map Legend',
	decorators: [ThemeDecorator], // connect the mod-default-theme to all stories
	component: MapLegend,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDisplay-Master-2020?node-id=22%3A0',
		},
	},
};

const legendItems = [
	{
		label: 'Coffee Locations',
		badge: 'eat.coffee',
		badgeColor: '#58C173',
	},
	{
		label: 'Restaurants & Bars',
		badge: 'eat',
		badgeColor: '#58C173',
	},
	{
		label: 'Restrooms',
		badge: 'restroom',
		badgeColor: '#FF9F48',
	},
	{
		label: 'Shared Ride Location',
		badge: 'transport.sharedride',
		badgeColor: '#525466',
	},
	{
		label: 'Baggage Claim',
		badge: 'baggage.claim',
		badgeColor: '#525466',
	},
	{
		label: 'Lounges',
		badge: 'relax',
		badgeColor: '#A386DB',
	},
];
const legendItemsLong = [
	{
		label:
			'Coffee Locations with really long name that should ellipse if max width reached',
		badge: 'eat.coffee',
		badgeColor: '#58C173',
	},
	{
		label:
			'Restaurants & Bars with really long name that should ellipse if max width reached',
		badge: 'eat',
		badgeColor: '#58C173',
	},
	{
		label:
			'Restrooms with really long name that should ellipse if max width reached',
		badge: 'restroom',
		badgeColor: '#FF9F48',
	},
	{
		label:
			'Shared Ride Location with really long name that should ellipse if max width reached',
		badge: 'transport.sharedride',
		badgeColor: '#525466',
	},
	{
		label:
			'Baggage Claim with really long name that should ellipse if max width reached',
		badge: 'baggage.claim',
		badgeColor: '#525466',
	},
	{
		label:
			'Lounges with really long name that should ellipse if max width reached',
		badge: 'relax',
		badgeColor: '#A386DB',
	},
];

export const Default = () => <MapLegend />;
export const Items6 = () => (
	<Box>
		<MapLegend items={legendItems} marginBottom="40px" />
		<MapLegend items={legendItemsLong} />
	</Box>
);
export const Items5 = () => (
	<Box>
		<MapLegend items={legendItems.slice(0, 5)} marginBottom="40px" />
		<MapLegend items={legendItemsLong.slice(0, 5)} />
	</Box>
);

export const Items4 = () => (
	<Box>
		<MapLegend items={legendItems.slice(0, 4)} marginBottom="40px" />
		<MapLegend items={legendItemsLong.slice(0, 4)} />
	</Box>
);

export const Items3 = () => (
	<Box>
		<MapLegend items={legendItems.slice(0, 3)} marginBottom="40px" />
		<MapLegend items={legendItemsLong.slice(0, 3)} />
	</Box>
);
export const Items2 = () => (
	<Box>
		<MapLegend items={legendItems.slice(0, 2)} marginBottom="40px" />
		<MapLegend items={legendItemsLong.slice(0, 2)} />
	</Box>
);
export const Items1 = () => (
	<Box>
		<MapLegend items={legendItems.slice(0, 1)} marginBottom="40px" />
		<MapLegend items={legendItemsLong.slice(0, 1)} />
	</Box>
);

export const EditorItems6 = () => (
	<Box>
		<MapLegend type="editor" items={legendItems} marginBottom="40px" />
		<MapLegend type="editor" items={legendItemsLong} />
	</Box>
);

export const EditorItems5 = () => (
	<Box>
		<MapLegend
			type="editor"
			items={legendItems.slice(0, 5)}
			marginBottom="40px"
		/>
		<MapLegend type="editor" items={legendItemsLong.slice(0, 5)} />
	</Box>
);

export const EditorItems4 = () => (
	<Box>
		<MapLegend
			type="editor"
			items={legendItems.slice(0, 4)}
			marginBottom="40px"
		/>
		<MapLegend type="editor" items={legendItemsLong.slice(0, 4)} />
	</Box>
);

export const EditorItems3 = () => (
	<Box>
		<MapLegend
			type="editor"
			items={legendItems.slice(0, 3)}
			marginBottom="40px"
		/>
		<MapLegend type="editor" items={legendItemsLong.slice(0, 3)} />
	</Box>
);

export const EditorItems2 = () => (
	<Box>
		<MapLegend
			type="editor"
			items={legendItems.slice(0, 2)}
			marginBottom="40px"
		/>
		<MapLegend type="editor" items={legendItemsLong.slice(0, 2)} />
	</Box>
);

export const EditorItems1 = () => (
	<Box>
		<MapLegend
			type="editor"
			items={legendItems.slice(0, 1)}
			marginBottom="40px"
		/>
		<MapLegend type="editor" items={legendItemsLong.slice(0, 1)} />
	</Box>
);

export const WithLongText = () => {
	const items = [
		{
			label: 'Grab & Go Coffee Location',
			badge: 'eat.coffee',
			badgeColor: '#58C173',
		},
		{
			label: 'Restaurants & Bars',
			badge: 'eat',
			badgeColor: '#58C173',
		},
		{
			label: 'Restrooms',
			badge: 'restroom',
			badgeColor: '#FF9F48',
		},
		{
			label: 'Shared Ride Location',
			badge: 'transport.sharedride',
			badgeColor: '#525466',
		},
		{
			label: 'Baggage Claim',
			badge: 'baggage.claim',
			badgeColor: '#525466',
		},
		{
			label: 'Lounges',
			badge: 'relax',
			badgeColor: '#A386DB',
		},
	];

	return (
		<>
			<MapLegend type="display" items={items} marginBottom="20px" />
			<MapLegend type="editor" items={items} />
		</>
	);
};
