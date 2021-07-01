import componentDocumentation from './docs.mdx';
import Tooltip from './';
import Text from '@locus-labs/mol-desktop-text';
import Box from '@locus-labs/mol-desktop-box';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOL Components/Desktop/Primitive Components/Tooltip',
	component: Tooltip,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=5893%3A900',
		},
	},
};

export const Default = () => {
	return (
		<Tooltip
			content="Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
		sapientem vel. Elitr admo"
		>
			Hover/Mouse Over Me!
		</Tooltip>
	);
};

export const ZIndex = () => {
	return (
		<Tooltip
			tooltipZIndex={30000}
			onFirstRenderShowTooltip={true}
			onShowDelayDuration={0}
			content="Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
		sapientem vel. Elitr admo"
		>
			Z-index
		</Tooltip>
	);
};

export const CancelTooltip = () => {
	return (
		<Tooltip
			cancelTooltip={true}
			content="Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
		sapientem vel. Elitr admo"
		>
			Hover/Mouse Over Me. I will never show a tooltip!!!!
		</Tooltip>
	);
};

export const OnFirstRenderShowTooltip = () => {
	return (
		<Tooltip
			onFirstRenderShowTooltip={true}
			content="Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
		sapientem vel. Elitr admo"
		>
			No hover needed the first time. I open once, to start with.
		</Tooltip>
	);
};

export const OnFirstRenderShowTooltipThenHideAfterDelay = () => {
	return (
		<Tooltip
			onFirstRenderShowTooltip={{ triggerMouseoutAfterXSeconds: 3000 }}
			onShowOpacityAnimation={{ duration: 0, timing: 'ease-in-out' }}
			onHideOpacityAnimation={{ duration: 5000, timing: 'ease-in-out' }}
			content="Don't forget to click!!!"
			backgroundColor="red"
			arrowColor="red"
			borderColor="red"
		>
			<a href="#">click here</a>
		</Tooltip>
	);
};

export const OnFirstRenderShowTooltipPermanently = () => {
	return (
		<Tooltip
			onFirstRenderShowTooltip={{ sticky: true }}
			onShowOpacityAnimation={{ duration: 0, timing: 'ease-in-out' }}
			content="Your mouse can't stop me !!!"
		>
			<a href="#">tooltip trigger</a>
		</Tooltip>
	);
};

export const WrappingAComponent = () => {
	return (
		<Tooltip
			content="Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
		sapientem vel. Elitr admo"
		>
			<Text fontSize="lg" as="a" href="" onClick={() => alert('link clicked')}>
				Hover/Mouse Over Me!
			</Text>
		</Tooltip>
	);
};

export const PassingComponentAsContent = () => {
	return (
		<Tooltip
			onFirstRenderShowTooltip
			content={
				<Text as="div" fontSize="md" limitLinesOfTextTo={2}>
					Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
					sapientem vel. Elitr admoLorem ipsum dolor sit amet, ei vis adhuc
					libris phaedrum, eu appetere sapientem vel. Elitr admoLorem ipsum
					dolor sit amet, ei vis adhuc libris phaedrum, eu appetere sapientem
					vel. Elitr admo
				</Text>
			}
		>
			Hover/Mouse Over Me!
		</Tooltip>
	);
};

export const WithColorsOverride = () => {
	return (
		<Tooltip
			content="Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
		sapientem vel. Elitr admo"
			backgroundColor="skyblue"
			arrowColor="skyblue"
			borderColor="skyblue"
		>
			Hover/Mouse Over Me!
		</Tooltip>
	);
};

export const Delay = () => {
	return (
		<Tooltip
			onShowDelayDuration={2000}
			onHideDelayDuration={2000}
			content="Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
		sapientem vel. Elitr admo"
		>
			Hover/Mouse Over Me!
		</Tooltip>
	);
};

export const Animation = () => {
	return (
		<Tooltip
			onShowOpacityAnimation={{ duration: 2000, timing: 'ease-in-out' }}
			onHideOpacityAnimation={{ duration: 2000, timing: 'ease-in-out' }}
			content="Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
		sapientem vel. Elitr admo"
		>
			Hover/Mouse Over Me!
		</Tooltip>
	);
};

export const WithBlink = () => {
	return (
		<Tooltip
			content="Lorem ipsum dolor sit amet, ei vis adhuc libris phaedrum, eu appetere
		sapientem vel. Elitr admo"
			clickingTriggerBlinksTooltip={true}
		>
			<div>Click me to see the blink!</div>
		</Tooltip>
	);
};

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
					<Tooltip content="example tooltip placement" placement="top-start">
						<Box as="button" mx="5px">
							Top-Start
						</Box>
					</Tooltip>
					<Tooltip content="example tooltip placement" placement="top">
						<Box as="button" mx="5px">
							Top
						</Box>
					</Tooltip>
					<Tooltip content="example tooltip placement" placement="top-end">
						<Box as="button" mx="5px">
							Top-End
						</Box>
					</Tooltip>
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
					<Tooltip content="example tooltip placement" placement="left-start">
						<button>Left-Start</button>
					</Tooltip>
					<br />
					<Tooltip content="example tooltip placement" placement="left">
						<button>Left</button>
					</Tooltip>
					<br />
					<Tooltip content="example tooltip placement" placement="left-end">
						<button>Left-End</button>
					</Tooltip>
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
					<Tooltip content="example tooltip placement" placement="right-start">
						<button>Right-Start</button>
					</Tooltip>

					<br />
					<Tooltip content="example tooltip placement" placement="right">
						<button>Right</button>
					</Tooltip>

					<br />
					<Tooltip content="example tooltip placement" placement="right-end">
						<button>Right-End</button>
					</Tooltip>
				</Box>
			</Box>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			></Box>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			>
				<Box margin="0" boxSizing="border-box">
					<Tooltip content="example tooltip placement" placement="bottom-start">
						<Box as="button" mx="5px">
							Bottom-Start
						</Box>
					</Tooltip>
					<Tooltip content="example tooltip placement" placement="bottom">
						<Box as="button" mx="5px">
							Bottom
						</Box>
					</Tooltip>
					<Tooltip content="example tooltip placement" placement="bottom-end">
						<Box as="button" mx="5px">
							Bottom-End
						</Box>
					</Tooltip>
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
					<Tooltip content="example tooltip placement" placement="auto-start">
						<Box as="button" mx="5px">
							Auto-Start
						</Box>
					</Tooltip>
					<Tooltip content="example tooltip placement" placement="auto">
						<Box as="button" mx="5px">
							Auto
						</Box>
					</Tooltip>
					<Tooltip content="example tooltip placement" placement="auto-end">
						<Box as="button" mx="5px">
							Top-End
						</Box>
					</Tooltip>
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
					<Tooltip content="example tooltip placement" placement="auto-start">
						<button>Auto-Start</button>
					</Tooltip>
					<br />
					<Tooltip content="example tooltip placement" placement="auto">
						<button>Auto</button>
					</Tooltip>
					<br />
					<Tooltip content="example tooltip placement" placement="auto-end">
						<button>Auto-End</button>
					</Tooltip>
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
					<Tooltip content="example tooltip placement" placement="auto-start">
						<button>Auto-Start</button>
					</Tooltip>

					<br />
					<Tooltip content="example tooltip placement" placement="auto">
						<button>Auto</button>
					</Tooltip>

					<br />
					<Tooltip content="example tooltip placement" placement="auto-end">
						<button>Auto-End</button>
					</Tooltip>
				</Box>
			</Box>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			></Box>
			<Box
				width="100%"
				justifyContent="center"
				display="flex"
				flexWrap="wrap"
				boxSizing="border-box"
			>
				<Box margin="0" boxSizing="border-box">
					<Tooltip content="example tooltip placement" placement="auto-start">
						<Box as="button" mx="5px">
							Auto-Start
						</Box>
					</Tooltip>
					<Tooltip content="example tooltip placement" placement="auto">
						<Box as="button" mx="5px">
							Auto
						</Box>
					</Tooltip>
					<Tooltip content="example tooltip placement" placement="auto-end">
						<Box as="button" mx="5px">
							Auto-End
						</Box>
					</Tooltip>
				</Box>
			</Box>
		</Box>
	);
};
