import SuggestedSearchRow from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOL Components/Desktop/Primitive Components/Search Results List/Row Types/Suggested Search Row',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: SuggestedSearchRow,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=11433%3A416',
		},
	},
};

export const Default = () => {
	return <SuggestedSearchRow />;
};

export const WithProps = () => {
	return (
		<SuggestedSearchRow
			name="Restaurants"
			badgeIcon="directions.filled"
			badgeColor="#58C173"
		/>
	);
};

export const WithLongName = () => {
	return (
		<SuggestedSearchRow
			name="Restaurants, coffee shops and doughnuts"
			badgeIcon="directions.filled"
			badgeColor="#58C173"
		/>
	);
};
