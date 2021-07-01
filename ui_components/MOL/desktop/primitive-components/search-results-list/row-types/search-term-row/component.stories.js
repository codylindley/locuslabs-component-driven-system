import SearchTermRow from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOL Components/Desktop/Primitive Components/Search Results List/Row Types/Search Term Row',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: SearchTermRow,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=11439%3A65',
		},
	},
};

export const Default = () => {
	return <SearchTermRow />;
};

export const WithTerm = () => {
	return (
		<SearchTermRow
			term="coffee"
			onSearchTermClick={window.sessionStorage.setItem(
				'Search term was clicked',
				true
			)}
		/>
	);
};

export const WithLongTerm = () => {
	return <SearchTermRow term="really long search term that will ellipse" />;
};
