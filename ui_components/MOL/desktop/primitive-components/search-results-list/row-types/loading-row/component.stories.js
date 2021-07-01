import LoadingRow from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOL Components/Desktop/Primitive Components/Search Results List/Row Types/Loading Row',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: LoadingRow,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=11506%3A401',
		},
	},
};

export const Default = () => {
	return <LoadingRow />;
};
