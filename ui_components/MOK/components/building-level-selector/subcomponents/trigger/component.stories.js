import Trigger from './index';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOK Components/Domain Components/Building Level Selector/Subcomponents/Trigger',
	decorators: [ThemeDecorator],
	component: Trigger,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=10778%3A78432',
		},
	},
};

const componentProps = {
	currentBuildingName: null,
	currentLevelName: null,
	onClick: () => window.sessionStorage.setItem('Trigger clicked', true),
};

export const Default = () => {
	return <Trigger {...componentProps} />;
};

export const WithBuildingAndLevel = () => {
	return (
		<Trigger
			{...{
				...componentProps,
				currentBuildingName: 'Building 1',
				currentLevelName: 'Level 1',
			}}
		/>
	);
};

export const WithLongBuildingAndLevel = () => {
	return (
		<Trigger
			{...{
				...componentProps,
				currentBuildingName: 'When the text label goes goes',
				currentLevelName:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			}}
		/>
	);
};

export const WithSearchResults = () => {
	return (
		<Trigger
			{...{
				...componentProps,
				withSearchResults: true,
			}}
		/>
	);
};
