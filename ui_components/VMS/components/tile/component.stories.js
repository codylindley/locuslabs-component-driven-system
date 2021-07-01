import Box from '@locus-labs/vms-box';
import Text from '@locus-labs/vms-text';
import componentDocumentation from './docs.mdx';
import Tile, { tileTypes } from './index';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Domain Components/Tile',
	component: Tile,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=9762%3A49217',
		},
	},
};

export const Default = () => (
	<Tile
		items={[
			{
				secondaryLabel: 'Nearby Location',
				primaryLabel: 'B Gates',
			},
			{
				secondaryLabel: 'Walk Time',
				primaryLabel: '12-24 Mins',
			},
			{
				secondaryLabel: 'Location Range',
				primaryLabel:
					'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
				tooltipLabel:
					'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
			},
		]}
	/>
);

export const Type = () => (
	<Box>
		<Text>Near by location:</Text>
		<Tile
			items={[
				{
					secondaryLabel: 'Nearby Location',
					primaryLabel: 'B Gates',
				},
				{
					secondaryLabel: 'Walk Time',
					primaryLabel: '12-24 Mins',
				},
				{
					secondaryLabel: 'Location Range',
					primaryLabel:
						'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
					tooltipLabel:
						'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
				},
			]}
			type={tileTypes.nearbyLocation}
		/>
		<br />
		<Text>Map legend:</Text>
		<Tile
			items={[
				{
					iconName: 'services.soapdispenser',
					secondaryLabel: 'Legend Name',
					primaryLabel: 'Covid Testing Station',
				},
				{
					secondaryLabel: 'Points of Interest',
					primaryLabel:
						'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
					tooltipLabel:
						'Covid Testing Station 1 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 2 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 3 • Near Gate 3a • Level 1  •  Terminal 3',
				},
			]}
			type={tileTypes.mapLegend}
		/>
	</Box>
);

export const Disabled = () => (
	<Box>
		<Text>Near by location:</Text>
		<Tile
			disabled
			items={[
				{
					secondaryLabel: 'Nearby Location',
					primaryLabel: 'B Gates',
				},
				{
					secondaryLabel: 'Walk Time',
					primaryLabel: '12-24 Mins',
				},
				{
					secondaryLabel: 'Location Range',
					primaryLabel:
						'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
					tooltipLabel:
						'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
				},
			]}
			type={tileTypes.nearbyLocation}
		/>
		<br />
		<Text>Map legend:</Text>
		<Tile
			disabled
			items={[
				{
					iconName: 'services.soapdispenser',
					secondaryLabel: 'Legend Name',
					primaryLabel: 'Covid Testing Station',
				},
				{
					secondaryLabel: 'Points of Interest',
					primaryLabel:
						'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
					tooltipLabel:
						'Covid Testing Station 1 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 2 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 3 • Near Gate 3a • Level 1  •  Terminal 3',
				},
			]}
			type={tileTypes.mapLegend}
		/>
	</Box>
);

export const BadgeColor = () => (
	<Box>
		<Text>default</Text>
		<Tile
			items={[
				{
					iconName: 'services.soapdispenser',
					secondaryLabel: 'Legend Name',
					primaryLabel: 'Covid Testing Station',
				},
				{
					secondaryLabel: 'Points of Interest',
					primaryLabel:
						'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
					tooltipLabel:
						'Covid Testing Station 1 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 2 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 3 • Near Gate 3a • Level 1  •  Terminal 3',
				},
			]}
			type={tileTypes.mapLegend}
		/>
		<br />
		<Text>red</Text>
		<Tile
			items={[
				{
					iconName: 'services.soapdispenser',
					badgeColor: 'red',
					secondaryLabel: 'Legend Name',
					primaryLabel: 'Covid Testing Station',
				},
				{
					secondaryLabel: 'Points of Interest',
					primaryLabel:
						'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
					tooltipLabel:
						'Covid Testing Station 1 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 2 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 3 • Near Gate 3a • Level 1  •  Terminal 3',
				},
			]}
			type={tileTypes.mapLegend}
		/>
		<br />
		<Text>#6AB3C1</Text>
		<Tile
			items={[
				{
					iconName: 'services.soapdispenser',
					badgeColor: '#6AB3C1',
					secondaryLabel: 'Legend Name',
					primaryLabel: 'Covid Testing Station',
				},
				{
					secondaryLabel: 'Points of Interest',
					primaryLabel:
						'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
					tooltipLabel:
						'Covid Testing Station 1 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 2 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 3 • Near Gate 3a • Level 1  •  Terminal 3',
				},
			]}
			type={tileTypes.mapLegend}
		/>
		<br />
		<Text>rgb(150, 50, 200)</Text>
		<Tile
			items={[
				{
					iconName: 'services.soapdispenser',
					badgeColor: 'rgb(150, 50, 200)',
					secondaryLabel: 'Legend Name',
					primaryLabel: 'Covid Testing Station',
				},
				{
					secondaryLabel: 'Points of Interest',
					primaryLabel:
						'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
					tooltipLabel:
						'Covid Testing Station 1 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 2 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 3 • Near Gate 3a • Level 1  •  Terminal 3',
				},
			]}
			type={tileTypes.mapLegend}
		/>
	</Box>
);

export const OnRemove = () => (
	<Tile
		items={[
			{
				secondaryLabel: 'Nearby Location',
				primaryLabel: 'B Gates',
			},
			{
				secondaryLabel: 'Walk Time',
				primaryLabel: '12-24 Mins',
			},
			{
				secondaryLabel: 'Location Range',
				primaryLabel:
					'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
				tooltipLabel:
					'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
			},
		]}
		onRemove={() => alert('Remove icon clicked!')}
	/>
);

export const EllipsisText = () => (
	<Tile
		width="600px"
		items={[
			{
				iconName: 'services.soapdispenser',
				secondaryLabel: 'Legend Name',
				primaryLabel: 'Covid Testing Station',
			},
			{
				secondaryLabel: 'Points of Interest',
				primaryLabel:
					'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
				tooltipLabel:
					'Covid Testing Station 1 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 2 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 3 • Near Gate 3a • Level 1  •  Terminal 3',
			},
		]}
		type={tileTypes.mapLegend}
	/>
);

export const EllipsisTextWithParentWidth = () => (
	<Box width="600px">
		<Tile
			items={[
				{
					iconName: 'services.soapdispenser',
					secondaryLabel: 'Legend Name',
					primaryLabel: 'Covid Testing Station',
				},
				{
					secondaryLabel: 'Points of Interest',
					primaryLabel:
						'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
					tooltipLabel:
						'Covid Testing Station 1 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 2 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 3 • Near Gate 3a • Level 1  •  Terminal 3',
				},
			]}
			type={tileTypes.mapLegend}
		/>
	</Box>
);

export const Alignment = () => (
	<Box width="600px">
		<Tile
			mb="15px"
			items={[
				{
					secondaryLabel: 'Nearby Location',
					primaryLabel: 'B Gates in Nearby Location',
				},
				{
					secondaryLabel: 'Walk Time',
					primaryLabel: '12-24 Mins But even longer text',
				},
				{
					secondaryLabel: 'Location Range',
					primaryLabel: 'Gate B1 • Level 3',
					tooltipLabel:
						'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
				},
			]}
			type={tileTypes.nearbyLocation}
		/>
		<Tile
			mb="15px"
			items={[
				{
					secondaryLabel: 'Nearby Location',
					primaryLabel: 'B Gates',
				},
				{
					secondaryLabel: 'Walk Time',
					primaryLabel: '12-24 Mins',
				},
				{
					secondaryLabel: 'Location Range',
					primaryLabel:
						'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
					tooltipLabel:
						'Gate B1 • Level 3 • Terminal D-Gate B10 • Level 3 • Terminal D',
				},
			]}
			type={tileTypes.nearbyLocation}
		/>
		<Tile
			mb="15px"
			items={[
				{
					iconName: 'services.soapdispenser',
					secondaryLabel: 'Legend Name',
					primaryLabel: 'Covid Station',
				},
				{
					secondaryLabel: 'Points of Interest',
					primaryLabel:
						'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
					tooltipLabel:
						'Covid Testing Station 1 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 2 • Near Gate 3a • Level 1 • Terminal 3, Covid Testing Station 3 • Near Gate 3a • Level 1  •  Terminal 3',
				},
			]}
			type={tileTypes.mapLegend}
		/>
		<Tile
			items={[
				{
					iconName: 'services.soapdispenser',
					secondaryLabel: 'Legend Name',
					primaryLabel: 'Covid Testing Station Longer Text',
				},
				{
					secondaryLabel: 'Points of Interest',
					primaryLabel:
						'Covid Testing Station 1, Covid Testing Station 2, Covid Testing Station 3',
					tooltipLabel: 'Covid Testing Station 1 • Near Gate 3a • Level 1',
				},
			]}
			type={tileTypes.mapLegend}
		/>
	</Box>
);
