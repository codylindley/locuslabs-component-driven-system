import BuildingRow from './index';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOK Components/Domain Components/Building Level Selector/Subcomponents/Building Row',
	decorators: [ThemeDecorator],
	component: BuildingRow,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6924%3A52275',
		},
	},
};

const buildingData = {
	id: 'bldg-1',
	name: 'Building 1',
	selectedBuildingId: 'bldg-2',
};

export const Default = () => {
	return <BuildingRow {...buildingData} />;
};

export const WithSearchResults = () => {
	const props = { ...buildingData, resultsNumber: 16 };
	return <BuildingRow {...props} />;
};

export const WithLongText = () => {
	const props = {
		...buildingData,
		name: 'Building 1 - Departures Terminals',
	};
	return <BuildingRow {...props} />;
};

export const WithLongTextAndSearchResults = () => {
	const props = {
		...buildingData,
		name: 'Building 1 - Departures Terminals',
		resultsNumber: 10,
	};
	return <BuildingRow {...props} />;
};

export const Selected = () => {
	const props = { ...buildingData, id: 'bldg-2' };
	return <BuildingRow {...props} />;
};

export const SelectedWithSearchResults = () => {
	const props = { ...buildingData, id: 'bldg-2', resultsNumber: 9 };
	return <BuildingRow {...props} />;
};
