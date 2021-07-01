import Trigger from '.';
import ThemeDecorator from '../../../../storybook-theme-decorator';

export default {
	title:
		'MOL Components/Desktop/Domain Components/Building Level Selector/Subcomponents/Trigger',
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
				currentBuildingName: 'Building 1 Building 1 Building 1',
				currentLevelName: 'Level 1 Level 1 Level 1 Level 1',
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
