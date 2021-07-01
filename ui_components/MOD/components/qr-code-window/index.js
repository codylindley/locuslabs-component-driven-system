import { forwardRef, useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mod-box';
import Text from '@locus-labs/mod-text';
import { QRCode as SvgQRCode } from 'react-qr-svg';
import styled, { useTheme } from 'styled-components';
import {
	background,
	border,
	color,
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	typography,
	compose,
} from 'styled-system';
import { ifProp, theme } from 'styled-tools';

const types = {
	DISPLAY: 'display',
	EDITOR: 'editor',
};

const textContainerProps = {
	[types.DISPLAY]: {
		height: '278px',
		borderRadius: '8px',
		padding: '32px',
		marginRight: '32px',
		marginLeft: '32px',
	},
	[types.EDITOR]: {
		height: '139px',
		borderRadius: '4px',
		padding: '16px',
		marginRight: '16px',
		marginLeft: '16px',
	},
};

const primaryTextProps = {
	[types.DISPLAY]: {
		fontSize: 'xxxxl',
		fontWeight: 'bold',
		height: '75px',
		lineHeight: '66px',
	},
	[types.EDITOR]: {
		fontSize: 'xl',
		fontWeight: 'bold',
		height: '38px',
		lineHeight: '33px',
	},
};

const secondaryTextProps = {
	[types.DISPLAY]: {
		lineHeight: '39px',
		fontSize: 'xxl',
		fontWeight: 'lighter',
		maxHeight: '131px',
	},
	[types.EDITOR]: {
		lineHeight: '19px',
		fontSize: 'sm',
		fontWeight: 'lighter',
		maxHeight: '66px',
	},
};

const TextContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: ${theme('shadows.md')};
`;

const StrokeContainer = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: ${ifProp('isDisplay', '30px 0px', '15px 0px')};
`;

const QrContainer = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${theme('colors.background', '#FFFFFF')};
	padding: 10px;
	border-radius: 6px;
	margin: ${ifProp('isDisplay', '14px', '7px')};
`;

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f4f4f4;
	height: 100%;
	width: 100%;
	padding: ${ifProp('isDisplay', '32px 0px', '16px 0px')};

	${compose(
		background,
		border,
		color,
		flexbox,
		grid,
		layout,
		position,
		shadow,
		space,
		typography
	)};
`;

const arrowProps = {
	[types.DISPLAY]: { width: '54px', height: '54px', top: '11px' },
	[types.EDITOR]: { width: '27px', height: '27px', top: '6px' },
};

const Arrow = styled(Box)`
	transform: translateX(-70.7%) rotate(45deg);
	background-color: ${theme('colors.background', '#FFFFFF')};
	position: absolute;
	left: 50%;
`;

const linesProps = {
	[types.DISPLAY]: {
		strokeWidth: '4px',
		hLineLength: '189px',
		vLineLength: '216px',
	},
	[types.EDITOR]: {
		strokeWidth: '2px',
		hLineLength: '94px',
		vLineLength: '104px',
	},
};

const SvgLines = ({ transform, type }) => {
	const theme = useTheme();
	const stroke = theme.colors.primaryButton || '#000000';
	const { strokeWidth, hLineLength, vLineLength } = linesProps[type] || {};
	const commonProps = {
		x1: '0',
		y1: '0',
		x2: '0',
		y2: '0',
		stroke,
		strokeWidth,
	};
	return (
		<svg
			data-cy="SvgLines"
			style={{ position: 'absolute', transform }}
			width="100%"
			height="100%"
		>
			<line {...commonProps} y2={vLineLength} />
			<line {...commonProps} x2={hLineLength} />
		</svg>
	);
};

SvgLines.propTypes = {
	transform: PropTypes.string,
	type: PropTypes.oneOf(Object.values(types)),
};

const QRCodeWindow = forwardRef((props, ref) => {
	const {
		primaryText,
		secondaryText,
		url,
		type,
		qrCodeDescription,
		qrCodeTitle,
		...omittedProps
	} = props;

	const theme = useTheme();
	const containerRef = ref || useRef(null);
	const isDisplay = type === types.DISPLAY;

	const [squareBoxSizes, setSquareBoxSizes] = useState({
		stroke: {},
		qrCode: {},
	});

	useLayoutEffect(() => {
		if (containerRef?.current) {
			const height = containerRef.current.offsetHeight;
			const width = containerRef.current.offsetWidth;
			const strokePaddingX = isDisplay ? 32 : 16;
			const qrCodePaddingX = isDisplay ? 64 : 32;
			const strokePaddingY = isDisplay ? 96 : 64;
			const qrCodePaddingY = isDisplay ? 128 : 80;
			const titleHeight = isDisplay ? 278 : 139;
			const descriptionHeight = isDisplay ? 316 : 158;
			const verticalContent = height - titleHeight - descriptionHeight;
			const isBoxPortrait = verticalContent > width;

			setSquareBoxSizes({
				stroke: {
					width: isBoxPortrait
						? `${width - strokePaddingX}px`
						: `${verticalContent - strokePaddingY}px`,
					height: isBoxPortrait
						? `${width - strokePaddingX}px`
						: `${verticalContent - strokePaddingY}px`,
				},
				qrCode: {
					width: isBoxPortrait
						? `${width - qrCodePaddingX}px`
						: `${verticalContent - qrCodePaddingY}px`,
					height: isBoxPortrait
						? `${width - qrCodePaddingX}px`
						: `${verticalContent - qrCodePaddingY}px`,
				},
			});
		}
	}, []);

	return (
		<Container ref={containerRef} isDisplay={isDisplay} {...omittedProps}>
			<TextContainer
				data-cy="HeadlineContainer"
				backgroundColor={theme.colors.primaryButton || '#000000'}
				boxShadow={theme.shadows[isDisplay ? 'md' : 'xs']}
				{...(textContainerProps[type] || {})}
				width={squareBoxSizes.qrCode.width}
			>
				<Text
					data-cy="PrimaryText"
					textAlign="center"
					color={theme.colors.primaryButtonText || '#FFFFFF'}
					limitLinesOfTextTo={1}
					{...(primaryTextProps[type] || {})}
				>
					{primaryText}
				</Text>
				<Text
					data-cy="SecondaryText"
					mt={isDisplay ? '8px' : '4px'}
					textAlign="center"
					color={theme.colors.primaryButtonText || '#FFFFFF'}
					limitLinesOfTextTo={3}
					{...(secondaryTextProps[type] || {})}
				>
					{secondaryText}
				</Text>
			</TextContainer>
			<StrokeContainer data-cy="StrokeContainer" {...squareBoxSizes.stroke}>
				<SvgLines type={type} />
				<SvgLines type={type} transform="scaleX(-1)" />
				<SvgLines type={type} transform="scaleY(-1)" />
				<SvgLines type={type} transform="scale(-1, -1)" />
				<QrContainer
					data-cy="QrContainer"
					boxShadow={theme.shadows[isDisplay ? 'md' : 'xs']}
					{...squareBoxSizes.qrCode}
				>
					<SvgQRCode
						margin={isDisplay ? '14px' : '7px'}
						value={url}
						style={{ width: '100%', height: '100%' }}
						level="Q"
					/>
				</QrContainer>
			</StrokeContainer>
			<Box position="relative" width={squareBoxSizes.qrCode.width}>
				<Arrow
					data-cy="Arrow"
					boxShadow="-1px -1px 2px rgba(47, 54, 71, 0.2)"
					{...(arrowProps[type] || {})}
				/>
				<TextContainer
					data-cy="InstructionsContainer"
					mt={isDisplay ? '38px' : '19px'}
					boxShadow={theme.shadows[isDisplay ? 'md' : 'xs']}
					backgroundColor={theme.colors.background || '#000000'}
					{...(textContainerProps[type] || {})}
					mx="0px"
				>
					<Text
						data-cy="PrimaryText"
						textAlign="center"
						color={theme.colors.primaryText || '#FFFFFF'}
						{...(primaryTextProps[type] || {})}
					>
						{qrCodeTitle}
					</Text>
					<Text
						data-cy="SecondaryText"
						mt={isDisplay ? '20px' : '10px'}
						textAlign="center"
						color={theme.colors.secondaryText || '#FFFFFF'}
						{...(secondaryTextProps[type] || {})}
					>
						{qrCodeDescription}
					</Text>
				</TextContainer>
			</Box>
		</Container>
	);
});

QRCodeWindow.displayName = 'QR Code Window';

QRCodeWindow.defaultProps = {
	'data-cy': 'QRCodeWindow',
	type: types.DISPLAY,
};

QRCodeWindow.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.flexbox,
	...styledSystemPropTypes.grid,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	type: PropTypes.oneOf(Object.values(types)),
	url: PropTypes.string.isRequired,
	primaryText: PropTypes.string.isRequired,
	secondaryText: PropTypes.string.isRequired,
	qrCodeDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
		.isRequired,
	qrCodeTitle: PropTypes.string.isRequired,
};

export default QRCodeWindow;
