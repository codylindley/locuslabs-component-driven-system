/* eslint-disable react/prop-types */
import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import ThemeDecorator from '../../storybook-theme-decorator';
import SegmentedControl from '.';

export default {
	title: 'MOK Components/Primitive Components/Segmented Control',
	component: SegmentedControl,
	decorators: [ThemeDecorator], // connect the mok-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A4',
		},
	},
};

export const Default = () => {
	const [controls, setControls] = useState([
		{
			iconName: 'walking',
			text: 'Direct',
			isActive: true,
		},
		{
			iconName: 'accessible',
			text: 'Accessible',
		},
	]);

	const onControlClick = (clickedIndex) => {
		const c = controls.map((control, index) => {
			return { ...control, isActive: index === clickedIndex };
		});
		setControls(c);
	};

	return (
		<SegmentedControl controls={controls} onControlClick={onControlClick} />
	);
};

export const WithActiveChanged = () => {
	const [controls, setControls] = useState([
		{
			text: 'Departures',
		},
		{
			isActive: true,
			text: 'Arrivals',
		},
	]);

	const onControlClick = (clickedIndex) => {
		const c = controls.map((control, index) => {
			return { ...control, isActive: index === clickedIndex };
		});
		setControls(c);
	};

	return (
		<SegmentedControl controls={controls} onControlClick={onControlClick} />
	);
};

export const WithLongText = () => {
	const controlsArray = [
		{
			text: 'Lorem Ipsum is simply dummy',
			isActive: true,
		},
		{
			text: 'Lorem Ipsum is simply dummy',
		},
	];

	const controlsWithIcons = [
		{
			iconName: 'walking',
			text: 'Lorem Ipsum is simply dummy',
			isActive: true,
		},
		{
			iconName: 'accessible',
			text: 'Lorem Ipsum is simply dummy',
		},
	];

	const controlsWithOneLongText = [
		{
			iconName: 'walking',
			text: 'Lorem Ipsum is simply dummy',
			isActive: true,
		},
		{
			iconName: 'accessible',
			text: 'Text',
		},
	];

	return (
		<>
			<SegmentedControl controls={controlsArray} />
			<br />
			<SegmentedControl controls={controlsWithIcons} />
			<br />
			<SegmentedControl controls={controlsWithOneLongText} />
		</>
	);
};
