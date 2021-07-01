import LevelRow from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOL Components/Desktop/Domain Components/Building Level Selector/Subcomponents/Level Row',
	decorators: [
		(storyFn) => (
			<div
				style={{
					width: '180px',
				}}
			>
				{ThemeDecorator(storyFn)}
			</div>
		),
	], // connect the mol-desktop-default-theme to all stories
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
		name: 'Level1 with long level name',
		details: 'Level details that has long text',
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
