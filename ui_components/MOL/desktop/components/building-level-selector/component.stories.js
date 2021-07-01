import { useState, useEffect } from 'react';
import BuildingLevelSelector from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOL Components/Desktop/Domain Components/Building Level Selector',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: BuildingLevelSelector,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6793%3A5165',
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
];

const componentProps = {
	currentBuildingName: null,
	currentLevelName: null,
	buildings,
};

const Template = (props) => {
	const {
		selectedBuildingId: preSelectedBuildingId,
		selectedLevelId: preSelectedLevelId,
		currentBuildingName: initialBuildingName,
		currentLevelName: initialLevelName,
		isExpanded: initialIsExpanded,
		buildings,
		...omittedProps
	} = props;
	const [selectedBuildingId, setSelectedBuildingId] = useState(
		preSelectedBuildingId || null
	); /* eslint react/prop-types: 0 */
	const [selectedLevelId, setSelectedLevelId] = useState(
		preSelectedLevelId || null
	); /* eslint react/prop-types: 0 */
	const [currentBuildingName, setCurrentBuildingName] = useState(
		initialBuildingName || null
	); /* eslint react/prop-types: 0 */
	const [currentLevelName, setCurrentLevelName] = useState(
		initialLevelName || null
	); /* eslint react/prop-types: 0 */
	const [isExpanded, setIsExpanded] = useState(
		initialIsExpanded || false
	); /* eslint react/prop-types: 0 */

	useEffect(() => {
		setSelectedBuildingId(preSelectedBuildingId);
	}, [preSelectedBuildingId]);
	useEffect(() => {
		setSelectedLevelId(preSelectedLevelId);
	}, [preSelectedLevelId]);
	useEffect(() => {
		setCurrentBuildingName(initialBuildingName);
	}, [initialBuildingName]);
	useEffect(() => {
		setCurrentLevelName(initialLevelName);
	}, [initialLevelName]);
	useEffect(() => {
		setIsExpanded(initialIsExpanded);
	}, [initialIsExpanded]);

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
			height="350px"
			{...omittedProps}
		/>
	);
};

export const Default = () => {
	return <Template {...componentProps} />;
};

export const WithLongList = () => {
	return (
		<Template
			{...{
				...componentProps,
				buildings: buildingsLong,
			}}
		/>
	);
};

export const OpenInitially = () => {
	return <Template {...componentProps} isExpanded={true} />;
};

export const WithSelectedBuilding = () => {
	return (
		<Template
			{...componentProps}
			isExpanded={true}
			selectedBuildingId="bldg-2"
			selectedLevelId="bldg-1-lvl1"
			currentBuildingName="Building 2"
			currentLevelName="Level1"
		/>
	);
};

export const WithSearchResults = () => {
	const levelsWithSearchResults = [...componentProps.buildings[0].levels];
	levelsWithSearchResults[0] = {
		...levelsWithSearchResults[0],
		resultsNumber: 999,
	};
	const buildingsWithSearchResults = [...componentProps.buildings];
	buildingsWithSearchResults[0] = {
		...buildingsWithSearchResults[0],
		resultsNumber: 999,
		levels: [...levelsWithSearchResults],
	};

	return (
		<Template
			{...{
				...componentProps,
				buildings: buildingsWithSearchResults,
			}}
			withSearchResults={true}
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

	return (
		<Template
			{...{
				...componentProps,
				buildings: buildingsData,
			}}
			withSearchResults={true}
		/>
	);
};

export const WithDynamicDataProvider = () => {
	const [selectedBuildingId, setSelectedBuildingId] =
		useState(null); /* eslint react/prop-types: 0 */

	return (
		<div>
			<button
				data-cy="ExternalBuildingLevelSelectorTrigger"
				onClick={() =>
					setSelectedBuildingId(selectedBuildingId ? null : 'bldg-2')
				}
				style={{ marginBottom: '20px', padding: '10px' }}
			>
				{selectedBuildingId ? 'de-' : ''}select building
			</button>
			<Template
				{...componentProps}
				selectedBuildingId={selectedBuildingId}
				currentBuildingName={selectedBuildingId && 'Building 2'}
				selectedLevelId={selectedBuildingId && 'bldg-1-lvl1'}
				currentLevelName={selectedBuildingId && 'Level1'}
				isExpanded={!!selectedBuildingId}
			/>
		</div>
	);
};
