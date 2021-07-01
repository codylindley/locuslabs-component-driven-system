import SearchResultsIndicator from './index';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOK Components/Domain Components/Building Level Selector/Subcomponents/Search Results Indicator',
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	component: SearchResultsIndicator,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A24',
		},
	},
};

export const Default = () => {
	return <SearchResultsIndicator />;
};

export const Small = () => {
	return <SearchResultsIndicator />;
};

export const WithNumber = () => {
	return <SearchResultsIndicator resultsNumber={9} />;
};

export const WithLongNumber = () => {
	return <SearchResultsIndicator resultsNumber={999} />;
};
