import { useState } from 'react';
import componentDocumentation from './docs.mdx';
import Popover from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/mok-box';

export default {
	title: 'MOK Components/Primitive Components/Popover',
	component: Popover,
	decorators: [ThemeDecorator], // connect the mok-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6813%3A65641',
		},
	},
};

export const Default = () => (
	<Popover content="Content" title="Primary Label">
		<button>Click me</button>
	</Popover>
);

export const hideOnClickOutside = () => (
	<>
		<Popover content="Content" title="Primary Label">
			<button>I hide on click outside</button>
		</Popover>
		<br />
		<Popover content="Content" title="Primary Label" hideOnClickOutside={false}>
			<button>I do not hide on click outside</button>
		</Popover>
	</>
);

export const onClose = () => {
	const [closeClicked, setCloseClicked] = useState(false);

	return (
		<>
			<i>Close button clicked: </i>
			<code>{closeClicked.toString()}</code>
			<br />
			<br />
			<Popover
				content="Content"
				title="Primary Label"
				onClose={() => setCloseClicked(true)}
				hideOnClickOutside={false}
			>
				<button style={{ width: '100%' }}>Click me</button>
			</Popover>
		</>
	);
};

export const hideCloseBtn = () => (
	<Popover content="Content" title="Primary Label" hideCloseBtn>
		<button>
			Popover without <code>close</code> button
		</button>
	</Popover>
);

export const Placement = () => {
	return (
		<Box width="500px">
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			>
				<Box margin="0" boxSizing="border-box">
					<Popover
						content="Content"
						title="Primary Label"
						placement="top-start"
					>
						<Box as="button" mx="5px">
							Top-Start
						</Box>
					</Popover>
					<Popover content="Content" title="Primary Label" placement="top">
						<Box as="button" mx="5px">
							Top
						</Box>
					</Popover>
					<Popover content="Content" title="Primary Label" placement="top-end">
						<Box as="button" mx="5px">
							Top-End
						</Box>
					</Popover>
				</Box>
			</Box>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			>
				<Box
					margin="0"
					boxSizing="border-box"
					flexGrow="0"
					maxWidth="50%"
					flexBasis="50%"
					display="flex"
					flexWrap="wrap"
					width="100%"
					alignItems="flex-start"
					flexDirection="column"
				>
					<Popover
						content="Content"
						title="Primary Label"
						placement="left-start"
					>
						<button>Left-Start</button>
					</Popover>
					<br />
					<Popover content="Content" title="Primary Label" placement="left">
						<button>Left</button>
					</Popover>
					<br />
					<Popover content="Content" title="Primary Label" placement="left-end">
						<button>Left-End</button>
					</Popover>
				</Box>
				<Box
					margin="0"
					boxSizing="border-box"
					flexGrow="0"
					maxWidth="50%"
					flexBasis="50%"
					alignItems="flex-end"
					flexDirection="column"
					display="flex"
					flexWrap="wrap"
					width="100%"
				>
					<Popover
						content="Content"
						title="Primary Label"
						placement="right-start"
					>
						<button>Right-Start</button>
					</Popover>

					<br />
					<Popover content="Content" title="Primary Label" placement="right">
						<button>Right</button>
					</Popover>

					<br />
					<Popover
						content="Content"
						title="Primary Label"
						placement="right-end"
					>
						<button>Right-End</button>
					</Popover>
				</Box>
			</Box>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			/>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			>
				<Box margin="0" boxSizing="border-box">
					<Popover
						content="Content"
						title="Primary Label"
						placement="bottom-start"
					>
						<Box as="button" mx="5px">
							Bottom-Start
						</Box>
					</Popover>
					<Popover content="Content" title="Primary Label" placement="bottom">
						<Box as="button" mx="5px">
							Bottom
						</Box>
					</Popover>
					<Popover
						content="Content"
						title="Primary Label"
						placement="bottom-end"
					>
						<Box as="button" mx="5px">
							Bottom-End
						</Box>
					</Popover>
				</Box>
			</Box>
		</Box>
	);
};

export const PlacementAuto = () => {
	return (
		<Box width="500px">
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			>
				<Box margin="0" boxSizing="border-box">
					<Popover
						content="Content"
						title="Primary Label"
						placement="auto-start"
					>
						<Box as="button" mx="5px">
							Auto-Start
						</Box>
					</Popover>
					<Popover content="Content" title="Primary Label" placement="auto">
						<Box as="button" mx="5px">
							Auto
						</Box>
					</Popover>
					<Popover content="Content" title="Primary Label" placement="auto-end">
						<Box as="button" mx="5px">
							Top-End
						</Box>
					</Popover>
				</Box>
			</Box>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			>
				<Box
					margin="0"
					boxSizing="border-box"
					flexGrow="0"
					maxWidth="50%"
					flexBasis="50%"
					display="flex"
					flexWrap="wrap"
					width="100%"
					alignItems="flex-start"
					flexDirection="column"
				>
					<Popover
						content="Content"
						title="Primary Label"
						placement="auto-start"
					>
						<button>Auto-Start</button>
					</Popover>
					<br />
					<Popover content="Content" title="Primary Label" placement="auto">
						<button>Auto</button>
					</Popover>
					<br />
					<Popover content="Content" title="Primary Label" placement="auto-end">
						<button>Auto-End</button>
					</Popover>
				</Box>
				<Box
					margin="0"
					boxSizing="border-box"
					flexGrow="0"
					maxWidth="50%"
					flexBasis="50%"
					alignItems="flex-end"
					flexDirection="column"
					display="flex"
					flexWrap="wrap"
					width="100%"
				>
					<Popover
						content="Content"
						title="Primary Label"
						placement="auto-start"
					>
						<button>Auto-Start</button>
					</Popover>

					<br />
					<Popover content="Content" title="Primary Label" placement="auto">
						<button>Auto</button>
					</Popover>

					<br />
					<Popover content="Content" title="Primary Label" placement="auto-end">
						<button>Auto-End</button>
					</Popover>
				</Box>
			</Box>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			/>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			>
				<Box margin="0" boxSizing="border-box">
					<Popover
						content="Content"
						title="Primary Label"
						placement="auto-start"
					>
						<Box as="button" mx="5px">
							Auto-Start
						</Box>
					</Popover>
					<Popover content="Content" title="Primary Label" placement="auto">
						<Box as="button" mx="5px">
							Auto
						</Box>
					</Popover>
					<Popover content="Content" title="Primary Label" placement="auto-end">
						<Box as="button" mx="5px">
							Auto-End
						</Box>
					</Popover>
				</Box>
			</Box>
		</Box>
	);
};
