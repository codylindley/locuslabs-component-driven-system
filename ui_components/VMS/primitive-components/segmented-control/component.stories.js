import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import ThemeDecorator from '../../storybook-theme-decorator';
import SegmentedControl from '.';

export default {
	title: 'VMS Components/Primitive Components/Segmented Control',
	component: SegmentedControl,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7131%3A20408',
		},
	},
};

const controlsArray = [
	{ text: 'Direct', isActive: true },
	{ text: 'Accessible' },
];

export const SegmentedControlTemplate = (props) => {
	// eslint-disable-next-line react/prop-types
	const { controls: propsControls, ...omittedProps } = props;
	const [controls, setControls] = useState(propsControls || controlsArray);

	const onControlClick = (clickedIndex) => {
		// eslint-disable-next-line react/prop-types
		const c = controls.map((control, index) => {
			return { ...control, isActive: index === clickedIndex };
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
		{ text: 'Departures' },
		{ isActive: true, text: 'Arrivals' },
	];

	return <SegmentedControlTemplate controls={controls} />;
};

export const WithLongText = () => {
	const controls = [
		{ text: 'This text likely will ellipse', isActive: true },
		{ text: 'This text likely will ellipse' },
	];

	const controlsWithOneLongText = [
		{ text: 'This text will likely ellipse', isActive: true },
		{ text: 'Text' },
	];

	return (
		<>
			<SegmentedControlTemplate controls={controls} mb="20px" width="200px" />
			<SegmentedControlTemplate
				controls={controlsWithOneLongText}
				mb="20px"
				width="350px"
			/>
		</>
	);
};
