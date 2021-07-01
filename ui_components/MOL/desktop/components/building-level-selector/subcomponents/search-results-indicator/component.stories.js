import SearchResultsIndicator from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOL Components/Desktop/Domain Components/Building Level Selector/Subcomponents/Search Results Indicator',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: SearchResultsIndicator,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6793%3A5165',
		},
	},
};

export const Default = () => {
	return <SearchResultsIndicator />;
};

export const Small = () => {
	return <SearchResultsIndicator width="16px" height="16px" />;
};

export const WithNumber = () => {
	return <SearchResultsIndicator resultsNumber={9} />;
};

export const WithLongNumber = () => {
	return <SearchResultsIndicator resultsNumber={999} />;
};
