import { useState } from 'react';
import BuildingLevelSelector from './index';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOK Components/Domain Components/Building Level Selector',
	decorators: [ThemeDecorator],
	component: BuildingLevelSelector,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A24',
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

const buildingDataLarge = {
	...buildingData,
	levels: [
		...buildingData.levels,
		{
			id: 'bldg-1-lvl4',
			name: 'Level4',
			details: 'Movie',
		},
		{
			id: 'bldg-1-lvl5',
			name: 'Level5',
			details: 'Zoo',
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
	{ ...buildingDataLarge, id: 'bldg-7', name: 'Building 7' },
];

export const Default = () => {
	const [selectedBuildingId, setSelectedBuildingId] = useState(null);
	const [selectedLevelId, setSelectedLevelId] = useState(null);
	const [currentBuildingName, setCurrentBuildingName] = useState(null);
	const [currentLevelName, setCurrentLevelName] = useState(null);
	const [isExpanded, setIsExpanded] = useState(false);

	const onBuildingClick = (id) => {
		setSelectedBuildingId(id);
		setCurrentBuildingName(
			buildings.filter((building) => building.id === id)[0].name
		);
	};

	const onLevelClick = (id) => {
		setSelectedLevelId(id);
		setCurrentLevelName(
			buildings
				.filter((building) => building.id === selectedBuildingId)[0]
				.levels.filter((level) => level.id === id)[0].name
		);
	};

	return (
		<BuildingLevelSelector
			selectedBuildingId={selectedBuildingId}
			selectedLevelId={selectedLevelId}
			onBuildingClick={onBuildingClick}
			onLevelClick={onLevelClick}
			currentBuildingName={currentBuildingName}
			currentLevelName={currentLevelName}
			buildings={buildings}
			isExpanded={isExpanded}
			onTriggerClick={() => setIsExpanded(!isExpanded)}
		/>
	);
};

export const WithLongList = () => {
	const [selectedBuildingId, setSelectedBuildingId] = useState(null);
	const [selectedLevelId, setSelectedLevelId] = useState(null);
	const [currentBuildingName, setCurrentBuildingName] = useState(null);
	const [currentLevelName, setCurrentLevelName] = useState(null);
	const [isExpanded, setIsExpanded] = useState(false);
	const onBuildingClick = (id) => {
		setSelectedBuildingId(id);
		setCurrentBuildingName(
			buildingsLong.filter((building) => building.id === id)[0].name
		);
	};
	const onLevelClick = (id) => {
		setSelectedLevelId(id);
		setCurrentLevelName(
			buildingsLong
				.filter((building) => building.id === selectedBuildingId)[0]
				.levels.filter((level) => level.id === id)[0].name
		);
	};

	return (
		<BuildingLevelSelector
			selectedBuildingId={selectedBuildingId}
			selectedLevelId={selectedLevelId}
			onBuildingClick={onBuildingClick}
			onLevelClick={onLevelClick}
			currentBuildingName={currentBuildingName}
			currentLevelName={currentLevelName}
			buildings={buildingsLong}
			isExpanded={isExpanded}
			onTriggerClick={() => setIsExpanded(!isExpanded)}
		/>
	);
};

export const OpenInitially = () => {
	const [selectedBuildingId, setSelectedBuildingId] = useState(null);
	const [selectedLevelId, setSelectedLevelId] = useState(null);
	const [currentBuildingName, setCurrentBuildingName] = useState(null);
	const [currentLevelName, setCurrentLevelName] = useState(null);
	const [isExpanded, setIsExpanded] = useState(true);

	const onBuildingClick = (id) => {
		setSelectedBuildingId(id);
		setCurrentBuildingName(
			buildingsLong.filter((building) => building.id === id)[0].name
		);
	};

	const onLevelClick = (id) => {
		setSelectedLevelId(id);
		setCurrentLevelName(
			buildingsLong
				.filter((building) => building.id === selectedBuildingId)[0]
				.levels.filter((level) => level.id === id)[0].name
		);
	};

	return (
		<BuildingLevelSelector
			selectedBuildingId={selectedBuildingId}
			selectedLevelId={selectedLevelId}
			onBuildingClick={onBuildingClick}
			onLevelClick={onLevelClick}
			currentBuildingName={currentBuildingName}
			currentLevelName={currentLevelName}
			buildings={buildingsLong}
			isExpanded={isExpanded}
			onTriggerClick={() => setIsExpanded(!isExpanded)}
		/>
	);
};

export const WithSelectedBuilding = () => {
	const [selectedBuildingId, setSelectedBuildingId] = useState('bldg-2');
	const [selectedLevelId, setSelectedLevelId] = useState('bldg-1-lvl1');
	const [currentBuildingName, setCurrentBuildingName] = useState('Building 2');
	const [currentLevelName, setCurrentLevelName] = useState('Level1');
	const [isExpanded, setIsExpanded] = useState(false);

	const onBuildingClick = (id) => {
		setSelectedBuildingId(id);
		setCurrentBuildingName(
			buildings.filter((building) => building.id === id)[0].name
		);
	};

	const onLevelClick = (id) => {
		setSelectedLevelId(id);
		setCurrentLevelName(
			buildings
				.filter((building) => building.id === selectedBuildingId)[0]
				.levels.filter((level) => level.id === id)[0].name
		);
	};

	return (
		<BuildingLevelSelector
			selectedBuildingId={selectedBuildingId}
			selectedLevelId={selectedLevelId}
			currentBuildingName={currentBuildingName}
			currentLevelName={currentLevelName}
			onBuildingClick={onBuildingClick}
			onLevelClick={onLevelClick}
			buildings={buildings}
			isExpanded={true}
			onTriggerClick={() => setIsExpanded(!isExpanded)}
		/>
	);
};

export const WithSearchResults = () => {
	const levelsWithSearchResults = [...buildings[0].levels];
	levelsWithSearchResults[0] = {
		...levelsWithSearchResults[0],
		resultsNumber: 999,
	};
	const buildingsWithSearchResults = [...buildings];

	buildingsWithSearchResults[0] = {
		...buildingsWithSearchResults[0],
		resultsNumber: 999,
		levels: [...levelsWithSearchResults],
	};

	const [selectedBuildingId, setSelectedBuildingId] = useState(null);
	const [selectedLevelId, setSelectedLevelId] = useState(null);
	const [currentBuildingName, setCurrentBuildingName] = useState(null);
	const [currentLevelName, setCurrentLevelName] = useState(null);
	const [isExpanded, setIsExpanded] = useState(false);

	const onBuildingClick = (id) => {
		setSelectedBuildingId(id);
		setCurrentBuildingName(
			buildingsWithSearchResults.filter((building) => building.id === id)[0]
				.name
		);
	};

	const onLevelClick = (id) => {
		setSelectedLevelId(id);
		setCurrentLevelName(
			buildingsWithSearchResults
				.filter((building) => building.id === selectedBuildingId)[0]
				.levels.filter((level) => level.id === id)[0].name
		);
	};

	return (
		<BuildingLevelSelector
			selectedBuildingId={selectedBuildingId}
			selectedLevelId={selectedLevelId}
			onBuildingClick={onBuildingClick}
			onLevelClick={onLevelClick}
			currentBuildingName={currentBuildingName}
			currentLevelName={currentLevelName}
			buildings={buildingsWithSearchResults}
			isExpanded={isExpanded}
			withSearchResults={true}
			onTriggerClick={() => setIsExpanded(!isExpanded)}
		/>
	);
};

export const WithLongNamesAndSearchResults = () => {
	const buildingsData = [
		{
			id: 'bldg-1',
			name: 'Building 1 with a long name',
			resultsNumber: 999,
			levels: [
				{
					id: 'bldg-1-lvl1',
					name: 'Level 1 with a long name',
					details: 'Parking detail with a long name',
				},
				{
					id: 'bldg-1-lvl2',
					name: 'Level 2 with a long name',
					details: 'Check-in/Baggage Claim long name',
					resultsNumber: 1,
				},
				{
					id: 'bldg-1-lvl3',
					name: 'Level3',
					details: 'Restaurants with a long name',
					resultsNumber: 24,
				},
				{
					id: 'bldg-1-lvl4',
					name: 'Level4',
					details: 'Restaurants with a long name',
				},
				{
					id: 'bldg-1-lvl5',
					name: 'Level5',
					details: 'Restaurants',
					resultsNumber: 100,
				},
			],
		},
		{
			id: 'bldg-2',
			name: 'Building 2 with a long name',
			resultsNumber: 10,
			levels: [
				{
					id: 'bldg-2-lvl1',
					name: 'Level 1 with a long name',
					details: 'Restaurants detail with a long name',
				},
				{
					id: 'bldg-2-lvl2',
					name: 'Level 2 with a long name',
					details: 'Check-in/Baggage Claim long name',
					resultsNumber: 1,
				},
				{
					id: 'bldg-2-lvl3',
					name: 'Level3',
					details: 'Parking',
					resultsNumber: 999,
				},
			],
		},
	];

	const [selectedBuildingId, setSelectedBuildingId] = useState(null);
	const [selectedLevelId, setSelectedLevelId] = useState(null);
	const [currentBuildingName, setCurrentBuildingName] = useState(null);
	const [currentLevelName, setCurrentLevelName] = useState(null);
	const [isExpanded, setIsExpanded] = useState(false);

	const onBuildingClick = (id) => {
		setSelectedBuildingId(id);
		setCurrentBuildingName(
			buildingsData.filter((building) => building.id === id)[0].name
		);
	};

	const onLevelClick = (id) => {
		setSelectedLevelId(id);
		setCurrentLevelName(
			buildingsData
				.filter((building) => building.id === selectedBuildingId)[0]
				.levels.filter((level) => level.id === id)[0].name
		);
	};

	return (
		<BuildingLevelSelector
			selectedBuildingId={selectedBuildingId}
			selectedLevelId={selectedLevelId}
			onBuildingClick={onBuildingClick}
			onLevelClick={onLevelClick}
			currentBuildingName={currentBuildingName}
			currentLevelName={currentLevelName}
			buildings={buildingsData}
			isExpanded={isExpanded}
			withSearchResults={true}
			onTriggerClick={() => setIsExpanded(!isExpanded)}
		/>
	);
};
