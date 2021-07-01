import NoSearchResultsInfo from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOL Components/Desktop/Primitive Components/Search Results List/Row Types/No Search Results Info',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: NoSearchResultsInfo,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=7366%3A0',
		},
	},
};

export const Default = () => {
	return (
		<NoSearchResultsInfo
			noSearchResultsInfo={{
				primaryLabel: 'Sorry, no matches were found',
				secondaryLabel: 'Try searching a different phrase',
			}}
		/>
	);
};
