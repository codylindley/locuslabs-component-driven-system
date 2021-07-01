import LevelRow from './index';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOK Components/Domain Components/Building Level Selector/Subcomponents/Level Row',
	decorators: [ThemeDecorator],
	component: LevelRow,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6924%3A52608',
		},
	},
};

const levelData = {
	id: 'bldg-1-lvl1',
	name: 'Level1',
	details: 'Check-in/Baggage Claim',
};

export const Default = () => {
	return <LevelRow {...levelData} />;
};

export const WithSearchResults = () => {
	const props = { ...levelData, resultsNumber: 16 };
	return <LevelRow {...props} />;
};

export const WithLongText = () => {
	const props = {
		...levelData,
		name: 'Level1 with long long level name',
		details: 'Level details that has long long text',
	};
	return <LevelRow {...props} />;
};

export const WithLongTextAndResult = () => {
	const props = {
		...levelData,
		name: 'Level1 with long long level name',
		details: 'Level details that has long long text',
		resultsNumber: 16,
	};
	return <LevelRow {...props} />;
};

export const Selected = () => {
	const props = { ...levelData, selectedLevelId: 'bldg-1-lvl1' };
	return <LevelRow {...props} />;
};

export const SelectedWithSearchResults = () => {
	const props = {
		...levelData,
		selectedLevelId: 'bldg-1-lvl1',
		resultsNumber: 9,
	};
	return <LevelRow {...props} />;
};
