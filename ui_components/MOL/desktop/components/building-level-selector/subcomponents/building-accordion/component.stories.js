import { useState } from 'react';
import BuildingAccordion from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOL Components/Desktop/Domain Components/Building Level Selector/Subcomponents/Building Accordion',
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
	component: BuildingAccordion,
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

const Template = (props) => {
	const [selectedBuildingId, setSelectedBuildingId] = useState(
		props.selectedBuildingId || null
	); /* eslint react/prop-types: 0 */
	const onBuildingClick = (id) => setSelectedBuildingId(id);

	return (
		<BuildingAccordion
			onBuildingClick={onBuildingClick}
			selectedBuildingId={selectedBuildingId}
			{...props}
		/>
	);
};

export const Default = () => <Template {...buildingData} />;

export const WithSearchResults = () => (
	<Template resultsNumber={9} {...buildingData} />
);

export const Selected = () => (
	<Template selectedBuildingId="bldg-2" {...buildingData} id="bldg-2" />
);
