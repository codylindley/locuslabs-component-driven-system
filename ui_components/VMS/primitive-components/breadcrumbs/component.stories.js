import { useState } from 'react';
import Text from '@locus-labs/vms-text';
import Box from '@locus-labs/vms-box';
import Button from '@locus-labs/vms-secondary-button';
import componentDocumentation from './docs.mdx';
import Breadcrumbs from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Breadcrumbs',
	component: Breadcrumbs,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=7347%3A0',
		},
	},
};

const items = [
	{ label: 'Breadcrumbs' },
	{ label: 'Are' },
	{ label: 'Awesome' },
];

export const Default = () => {
	return (
		<>
			<Breadcrumbs
				items={[
					{ label: 'Breadcrumbs' },
					{ label: 'Are' },
					{ label: 'Awesome' },
				]}
			/>
		</>
	);
};

export const OnBreadcrumbClick = () => {
	const [selectedIndex, setSelectedIndex] = useState();

	return (
		<>
			<Text id="selectedLabel">
				{selectedIndex > -1 && items?.[selectedIndex]
					? `Breadcrumb clicked: ${items[selectedIndex].label}`
					: 'Click on a breadcrumb...'}
			</Text>
			<br />
			<Breadcrumbs
				items={[
					{ label: 'Breadcrumbs' },
					{ label: 'Are' },
					{ label: 'Awesome' },
				]}
				onBreadcrumbClick={setSelectedIndex}
			/>
		</>
	);
};
