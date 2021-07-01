import { useState } from 'react';
import CollapsibleContent from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mol-desktop-box';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Collapsible Content',
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	component: CollapsibleContent,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=11504%3A96361',
		},
	},
};

const CollapsibleContentTemplate = (props) => {
	const [isOpen, setIsOpen] = useState(true);
	const onCollapseButtonClick = () => setIsOpen(!isOpen);

	// eslint-disable-next-line react/prop-types
	const { children, ...omittedProps } = props;
	return (
		<Box height="400px" display="flex" paddingTop="40px">
			<CollapsibleContent
				isContentOpen={isOpen}
				onCollapseButtonClick={onCollapseButtonClick}
				collapsePanelTooltipContent="Collapse Panel"
				expandPanelTooltipContent="Expand Panel"
				{...omittedProps}
			>
				{children}
			</CollapsibleContent>
		</Box>
	);
};

export const Default = () => (
	<CollapsibleContentTemplate>some content</CollapsibleContentTemplate>
);

export const WithScroll = () => (
	<CollapsibleContentTemplate>
		<Box padding="10px">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
			ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
			ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum
		</Box>
	</CollapsibleContentTemplate>
);

export const WithCustomScrollHandler = () => (
	<CollapsibleContentTemplate hasCustomScroll={true}>
		<Box padding="10px">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
			ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
			ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum
		</Box>
	</CollapsibleContentTemplate>
);

export const WithHeightOverride = () => {
	const [height, setHeight] = useState(100);

	const setRandomHeight = () => {
		const height = Math.floor(Math.random() * 400) + 100;
		setHeight(height);
	};

	const contentHeight = height + 24; // add 24px more so there is enough space for collapse button

	return (
		<>
			<Box
				as="button"
				onClick={setRandomHeight}
				padding="10px"
				background="white"
				textAlign="center"
				border="1px solid gray"
				cursor="pointer"
			>
				Click to change height
			</Box>
			<CollapsibleContentTemplate
				hasHeightOverride={true}
				height={contentHeight + 'px'}
			>
				<Box height={height + 'px'}>{height + 'px'} high</Box>
			</CollapsibleContentTemplate>
		</>
	);
};
