import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import ThemeDecorator from '../../storybook-theme-decorator';
import SegmentedControl from '.';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Segmented Control',
	component: SegmentedControl,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=13772%3A1109',
		},
	},
};

const controlsArray = [
	{
		iconName: 'walking',
		text: 'Direct',
		isActive: true,
	},
	{
		iconName: 'accessible',
		text: 'Accessible',
	},
];

export const SegmentedControlTemplate = (props) => {
	// eslint-disable-next-line react/prop-types
	const { controls: propsControls, ...omittedProps } = props;
	const [controls, setControls] = useState(propsControls || controlsArray);

	const onControlClick = (clickedIndex) => {
		// eslint-disable-next-line react/prop-types
		const c = controls.map((control, index) => {
			return { ...control, isActive: index === clickedIndex ? true : false };
		});
		setControls(c);
	};

	return (
		<SegmentedControl
			controls={controls}
			onControlClick={onControlClick}
			{...omittedProps}
		/>
	);
};

export const Default = () => <SegmentedControlTemplate />;

export const WithActiveChanged = () => {
	const controls = [
		{
			text: 'Departures',
		},
		{
			isActive: true,
			text: 'Arrivals',
		},
	];

	return <SegmentedControlTemplate controls={controls} />;
};

export const WithoutIcons = () => {
	const controls = [
		{
			text: 'Departures',
			isActive: true,
		},
		{
			text: 'Arrivals',
		},
	];

	return <SegmentedControlTemplate controls={controls} />;
};

export const WithLongText = () => {
	const controls = [
		{
			text: 'This text will ellipse',
			isActive: true,
		},
		{
			text: 'This text will ellipse',
		},
	];

	const controlsWithIcons = [
		{
			iconName: 'walking',
			text: 'This text will ellipse',
			isActive: true,
		},
		{
			iconName: 'accessible',
			text: 'This text will ellipse',
		},
	];

	const controlsWithOneLongText = [
		{
			iconName: 'walking',
			text: 'This text will ellipse',
			isActive: true,
		},
		{
			iconName: 'accessible',
			text: 'Text',
		},
	];

	return (
		<>
			<SegmentedControlTemplate controls={controls} mb="20px" />
			<SegmentedControlTemplate controls={controlsWithIcons} mb="20px" />
			<SegmentedControlTemplate controls={controlsWithOneLongText} mb="20px" />
		</>
	);
};
