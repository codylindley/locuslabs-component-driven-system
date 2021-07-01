import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mod-box';
import Text from '@locus-labs/mod-text';
import { QRCode as SvgQRCode } from 'react-qr-svg';
import styled, { useTheme } from 'styled-components';
import { ifProp, theme } from 'styled-tools';

const types = { DISPLAY: 'display', EDITOR: 'editor' };

const qrContainerProps = (theme) => ({
	[types.DISPLAY]: {
		filter: `drop-shadow(${theme.shadows.md})`,
		width: '320px',
		height: '320px',
		border: `4px solid ${theme.colors.mapNavBackground || '#000000'}`,
		borderRadius: '0px 0px 8px 8px',
	},
	[types.EDITOR]: {
		filter: `drop-shadow(${theme.shadows.xs})`,
		width: '160px',
		height: '160px',
		border: `2px solid ${theme.colors.mapNavBackground || '#000000'}`,
		borderRadius: '0px 0px 4px 4px',
	},
});

const titleContainerProps = {
	[types.DISPLAY]: {
		width: '320px',
		height: '54px',
		borderRadius: '8px 8px 0px 0px',
		padding: '0 10px',
	},
	[types.EDITOR]: {
		width: '160px',
		height: '27px',
		borderRadius: '4px 4px 0px 0px',
		padding: '0 5px',
	},
};

const titleTextProps = {
	[types.DISPLAY]: { lineHeight: '33px', fontSize: 'xl' },
	[types.EDITOR]: { lineHeight: '15px', fontSize: 'xs' },
};

const qrCodePlaceholderProps = {
	[types.DISPLAY]: { margin: '10px' },
	[types.EDITOR]: { margin: '5px' },
};

const Container = styled(Box)`
	background-color: ${theme('colors.background', '#FFFFFF')};
`;

const TitleContainer = styled(Box)`
	background-color: ${theme('colors.mapNavBackground', '#000000')};
`;

const TitleText = styled(Text)`
	text-transform: uppercase;
	font-weight: 500;
	align-self: center;
	color: ${theme('colors.mapNavText', '#000000')};
`;

const QRCodeContainer = styled(Box)`
	margin-right: ${ifProp({ type: types.DISPLAY }, '20px', '10px')};
	filter: drop-shadow(
		${ifProp({ type: types.DISPLAY }, theme('shadows.md'), theme('shadows.xs'))}
	);
`;

const QRCode = forwardRef((props, ref) => {
	const { qrCodeTitle, type, url, ...omittedProps } = props;
	const theme = useTheme();
	return (
		<QRCodeContainer ref={ref} {...omittedProps} type={type} theme={theme}>
			<TitleContainer
				data-cy="TitleContainer"
				display="flex"
				justifyContent="center"
				{...titleContainerProps[type]}
			>
				<TitleText
					data-cy="TitleText"
					limitLinesOfTextTo={1}
					{...titleTextProps[type]}
				>
					{qrCodeTitle}
				</TitleText>
			</TitleContainer>
			<Container {...qrContainerProps(theme)[type]} data-cy="Container">
				<Box
					{...qrCodePlaceholderProps[type]}
					display="flex"
					data-cy="QRCodePlaceholder"
				>
					<SvgQRCode
						value={url}
						style={{ width: '100%', height: '100%' }}
						level="Q"
					/>
				</Box>
			</Container>
		</QRCodeContainer>
	);
});

QRCode.displayName = 'QR Code Container';

QRCode.defaultProps = {
	'data-cy': 'QRCode',
	qrCodeTitle: 'POINT CAMERA HERE',
};

QRCode.propTypes = {
	type: PropTypes.oneOf(Object.values(types)),
	qrCodeTitle: PropTypes.string,
	url: PropTypes.string.isRequired,
};

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Description

const descriptionContainerProps = {
	[types.DISPLAY]: { width: '698px', height: '374px', borderRadius: '8px' },
	[types.EDITOR]: { width: '349px', height: '187px', borderRadius: '4px' },
};

const primaryTextProps = {
	[types.DISPLAY]: {
		lineHeight: '66px',
		fontSize: 'xxxxl',
		margin: '0 32px 24px',
	},
	[types.EDITOR]: { lineHeight: '33px', fontSize: 'xl', margin: '0 16px 12px' },
};

const secondaryTextProps = {
	[types.DISPLAY]: { lineHeight: '33px', fontSize: 'xl', margin: '0 32px' },
	[types.EDITOR]: { lineHeight: '16.5px', fontSize: 'xs', margin: '0 16px' },
};

const DescriptionContainer = styled(Box)`
	filter: drop-shadow(
		${ifProp({ type: types.DISPLAY }, theme('shadows.md'), theme('shadows.xs'))}
	);
	background-color: ${theme('colors.widgetBackground', '#FFFFFF')};
`;

const StyledTextCommon = styled(Text)`
	color: ${theme('colors.widgetText', '#000000')};
	text-align: center;
	justify-content: center;
`;

const PrimaryText = styled(StyledTextCommon)`
	font-weight: 700;
	max-height: 71px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	display: inline-block;
`;

const SecondaryText = styled(StyledTextCommon)`
	font-weight: 400;
`;

const Description = forwardRef((props, ref) => {
	const { primaryText, type, secondaryText, ...omittedProps } = props;
	const theme = useTheme();
	return (
		<DescriptionContainer
			display="flex"
			justifyContent="center"
			flexDirection="column"
			type={type}
			theme={theme}
			{...descriptionContainerProps[type]}
			ref={ref}
			{...omittedProps}
		>
			<PrimaryText
				display="flex"
				justifyContent="center"
				data-cy="PrimaryText"
				{...primaryTextProps[type]}
			>
				{primaryText}
			</PrimaryText>
			<SecondaryText
				display="flex"
				justifyContent="center"
				maxHeight="165px"
				data-cy="SecondaryText"
				limitLinesOfTextTo={5}
				{...secondaryTextProps[type]}
			>
				{secondaryText}
			</SecondaryText>
		</DescriptionContainer>
	);
});

Description.displayName = 'Description Container';

Description.defaultProps = {
	'data-cy': 'DescriptionContainer',
};

Description.propTypes = {
	type: PropTypes.oneOf(Object.values(types)),
	primaryText: PropTypes.string.isRequired,
	secondaryText: PropTypes.string.isRequired,
};

/////////////////////////////////////////////////////////////////////
// QRCodeCard

const qrCodeCardContainerProps = {
	[types.DISPLAY]: { width: '1039px', height: '374px' },
	[types.EDITOR]: { width: '520px', height: '187px' },
};

const QRCodeCard = forwardRef((props, ref) => {
	const {
		qrCodeTitle,
		primaryText,
		secondaryText,
		url,
		type,
		...omittedProps
	} = props;
	return (
		<Box {...omittedProps}>
			<Box {...qrCodeCardContainerProps[type]} ref={ref} display="flex">
				<QRCode qrCodeTitle={qrCodeTitle} url={url} type={type} />
				<Description
					primaryText={primaryText}
					secondaryText={secondaryText}
					type={type}
				/>
			</Box>
		</Box>
	);
});

QRCodeCard.displayName = 'QR Code Card';

QRCodeCard.defaultProps = {
	'data-cy': 'QRCodeCard',
	type: 'display',
	qrCodeTitle: 'POINT CAMERA HERE',
};

export default QRCodeCard;

QRCodeCard.propTypes = {
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
	...Description.propTypes,
	...QRCode.propTypes,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
};
