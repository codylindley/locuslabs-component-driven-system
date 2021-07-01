import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import PrimaryNavigationButton from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Text from '@locus-labs/mok-text';

export default {
	title: 'MOK Components/Primitive Components/Primary Navigation Button',
	component: PrimaryNavigationButton,
	decorators: [ThemeDecorator], // connect the mok-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A27',
		},
	},
};

export const Default = () => <PrimaryNavigationButton />;

export const PrimaryLabel = () => (
	<PrimaryNavigationButton primaryLabel="Get Started" />
);

export const WithIconAndPrimaryLabel = () => (
	<PrimaryNavigationButton iconName="search.ios" primaryLabel="Book a room" />
);

export const WithSecondaryLabel = () => (
	<PrimaryNavigationButton
		iconName="directions.filled"
		primaryLabel="Directions"
		secondaryLabel="10 mins"
	/>
);

export const Type = () => {
	return (
		<>
			<Text>Default Type</Text>
			<br />
			<PrimaryNavigationButton iconName="home" primaryLabel="Get Started" />
			<br />
			<br />
			<Text>Admin Type</Text>
			<br />
			<PrimaryNavigationButton
				iconName="home"
				type="admin"
				primaryLabel="Get Started"
			/>
		</>
	);
};

export const OnClick = () => {
	const [count, setCount] = useState(0);
	const [adminCount, setAdminCount] = useState(0);

	return (
		<>
			<Text>{`Default click count: ${count}`}</Text>
			<br />
			<Text>{`Admin click count: ${adminCount}`}</Text>
			<br />
			<br />
			<PrimaryNavigationButton
				iconName="home"
				type="admin"
				primaryLabel="Click me"
				onClick={() => setCount(count + 1)}
				onInfoButtonClick={() => setAdminCount(adminCount + 1)}
			/>
		</>
	);
};

export const Ellipsis = () => (
	<>
		<PrimaryNavigationButton primaryLabel="When the text label goes beyond this point it should ellipse" />
		<br />
		<br />
		<PrimaryNavigationButton
			iconName="kiosk"
			primaryLabel="When the text label goes beyond this point it should ellipse"
		/>
		<br />
		<br />
		<PrimaryNavigationButton
			iconName="home"
			type="admin"
			primaryLabel="When the text label goes beyond this point it should ellipse"
		/>
	</>
);
