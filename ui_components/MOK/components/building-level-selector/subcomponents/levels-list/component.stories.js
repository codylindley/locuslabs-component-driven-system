import LevelsList from './index';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOK Components/Domain Components/Building Level Selector/Subcomponents/Levels List',
	decorators: [ThemeDecorator],
	component: LevelsList,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6924%3A52608',
		},
	},
};

const levels = [
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
];

export const Default = () => {
	return <LevelsList levels={levels} />;
};

export const WithSearchResults = () => {
	levels[1] = { ...levels[1], resultsNumber: 10 };

	return <LevelsList levels={levels} />;
};

export const WithSelectedLevel = () => {
	levels[1] = { ...levels[1], resultsNumber: 100 };

	return <LevelsList levels={levels} selectedLevelId="bldg-1-lvl2" />;
};

export const WithScrollBar = () => {
	const aditionalLevel = [
		{
			id: 'bldg-1-lvl4',
			name: 'Level4',
			details: 'Parks',
		},
		{
			id: 'bldg-1-lvl5',
			name: 'Level5',
			details: 'Movies',
		},
	];

	const listLevels = [...levels, ...aditionalLevel];
	console.log(listLevels);

	return <LevelsList levels={listLevels} />;
};
