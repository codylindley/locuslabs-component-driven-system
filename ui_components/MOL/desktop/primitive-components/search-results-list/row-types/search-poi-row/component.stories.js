import SearchPOIRow from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';
import Box from '@locus-labs/mol-desktop-box';

export default {
	title:
		'MOL Components/Desktop/Primitive Components/Search Results List/Row Types/Search POI Row',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: SearchPOIRow,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=11495%3A487',
		},
	},
};

const searchPOIRow = {
	iconName: 'directions.filled',
	primaryLabel: 'Starbucks',
	secondaryLabel: 'Near Gate C34  •  Level 3',
};

export const Default = () => {
	return <SearchPOIRow {...searchPOIRow} />;
};

export const WithLongLabels = () => {
	const poi = {
		iconName: 'directions.filled',
		primaryLabel: 'Starbucks Starbucks Starbucks Starbucks',
		secondaryLabel: 'Near Gate C34  •  Level 3 Near Gate C34  •  Level 3',
	};
	return <SearchPOIRow {...poi} />;
};

export const WithStatus = () => {
	const poi = {
		...searchPOIRow,
		status: {
			type: 'alert',
			text: '10 minutes wait',
		},
	};
	return <SearchPOIRow {...poi} />;
};

export const Stacked = () => {
	return (
		<Box display="block">
			<SearchPOIRow {...searchPOIRow} />
			<SearchPOIRow
				{...{
					...searchPOIRow,
					status: {
						type: 'active',
						text: 'open',
					},
				}}
			/>
			<SearchPOIRow
				{...{
					...searchPOIRow,
					status: {
						type: 'inactive',
						text: 'closed',
					},
				}}
			/>
			<SearchPOIRow
				{...{
					...searchPOIRow,
					status: {
						type: 'warning',
						text: '10 minutes wait',
					},
				}}
			/>
			<SearchPOIRow
				{...{
					...searchPOIRow,
					status: {
						type: 'info',
						text: '10 minutes wait',
					},
				}}
			/>
			<SearchPOIRow
				{...{
					...searchPOIRow,
					status: {
						type: 'alert',
						text: '10 minutes wait',
					},
				}}
			/>
			<SearchPOIRow
				{...{
					...searchPOIRow,
					status: {
						type: 'alert',
						text: '10 minutes wait',
						pulsingStatusOn: true,
					},
				}}
			/>
		</Box>
	);
};
