import { useState } from 'react';
import BuildingsList from './index';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOK Components/Domain Components/Building Level Selector/Subcomponents/Buildings List',
	decorators: [ThemeDecorator],
	component: BuildingsList,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6793%3A6546',
		},
	},
};

const buildingData = {
	id: 'bldg-1',
	name: 'Building 1',
	levels: [
		{
			id: 'bldg-1-lvl1',
			name: 'Level1',
			details: 'Parking',
		},
		{
			id: 'bldg-1-lvl2',
			name: 'Level2',
			details: 'Check-in/Baggage Claim',
		},
		{
			id: 'bldg-1-lvl3',
			name: 'Level3',
			details: 'Restaurants',
		},
	],
};

const buildings = [
	{ ...buildingData },
	{ ...buildingData, id: 'bldg-2', name: 'Building 2' },
	{ ...buildingData, id: 'bldg-3', name: 'Building 3' },
];

const buildingsLong = [
	...buildings,
	{ ...buildingData, id: 'bldg-4', name: 'Building 4' },
	{ ...buildingData, id: 'bldg-5', name: 'Building 5' },
	{ ...buildingData, id: 'bldg-6', name: 'Building 6' },
	{ ...buildingData, id: 'bldg-7', name: 'Building 7' },
];

const Template = (props) => {
	const {
		selectedBuildingId: preSelectedBuildingId,
		selectedLevelId: preSelectedLevelId,
		...omittedProps
	} = props;
	const [selectedBuildingId, setSelectedBuildingId] = useState(
		preSelectedBuildingId || null
	); /* eslint react/prop-types: 0 */
	const [selectedLevelId, setSelectedLevelId] = useState(
		preSelectedLevelId || null
	); /* eslint react/prop-types: 0 */

	const onBuildingClick = (id) => setSelectedBuildingId(id);
	const onLevelClick = (id) => setSelectedLevelId(id);

	return (
		<BuildingsList
			selectedBuildingId={selectedBuildingId}
			selectedLevelId={selectedLevelId}
			onBuildingClick={onBuildingClick}
			onLevelClick={onLevelClick}
			{...omittedProps}
		/>
	);
};

export const Default = () => <Template buildings={buildings} />;

export const WithSelectedLevel = () => (
	<Template
		buildings={buildings}
		selectedBuildingId="bldg-1"
		selectedLevelId="bldg-1-lvl1"
	/>
);

export const WithLongList = () => (
	<Template
		buildings={buildingsLong}
		selectedBuildingId="bldg-1"
		selectedLevelId="bldg-1-lvl1"
	/>
);
