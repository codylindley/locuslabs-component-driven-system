import React, { forwardRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';
import Icon from '@locus-labs/mok-icon';
import { rgba } from 'polished';
import { QRCode as SvgQRCode } from 'react-qr-svg';

const QrCodeWrapper = styled(Box)`
	position: absolute;
	left: 157.74px;
	top: 74.74px;
`;

const QrCodeCorners = styled(Box)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 191px;
	height: 191px;

	&:before,
	&:after,
	& > :last-child:before,
	& > :last-child:after {
		position: absolute;
		width: 43.41px;
		height: 43.41px;
		border-color: white;
		border-style: solid;
		content: ' ';
	}

	&:before {
		top: 0px;
		left: 0px;
		border-width: 4px 0 0 4px;
		border-color: ${({ theme }) => theme.colors.primaryButton || '#000000'};
	}

	&:after {
		top: 0px;
		right: 0px;
		border-width: 4px 4px 0 0;
		border-color: ${({ theme }) => theme.colors.primaryButton || '#000000'};
	}

	& > :last-child:before {
		bottom: 0px;
		right: 0px;
		border-width: 0 4px 4px 0;
		border-color: ${({ theme }) => theme.colors.primaryButton || '#000000'};
	}

	& > :last-child:after {
		bottom: 0px;
		left: 0px;
		border-width: 0 0 4px 4px;
		border-color: ${({ theme }) => theme.colors.primaryButton || '#000000'};
	}
`;

const QrCodeContainer = styled(Box)`
	width: 170px;
	height: 170px;
	padding: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.background || '#FFFFFF'};
`;

const QrCode = forwardRef((props, ref) => {
	const { url, ...omittedProps } = props;
	return (
		<QrCodeWrapper>
			<QrCodeCorners>
				<QrCodeContainer boxShadow="md" {...omittedProps} ref={ref}>
					<SvgQRCode
						value={url}
						style={{ width: '160px', height: '160px' }}
						level="Q"
					/>
				</QrCodeContainer>
			</QrCodeCorners>
		</QrCodeWrapper>
	);
});

QrCode.displayName = 'QrCode';

QrCode.defaultProps = {
	'data-cy': 'QrCode', // component name
};

QrCode.propTypes = {
	url: PropTypes.string,
};

const QrCodeCardContainer = styled(Box)`
	position: relative;
	width: 360px;
	height: 340px;
	margin-bottom: 40px;
	padding: 13px;
	background-color: ${({ theme }) =>
		rgba(theme.colors.primary, 0.1) || '#000000'};
`;

const QrCodeCardLabel = styled(Text)`
	margin-top: 23px;
	margin-bottom: 23px;
	line-height: 30px;
	color: ${({ theme }) => theme.colors.primary || '#000000'};
`;

const BottomContainer = styled(Box)`
	position: absolute;
	bottom: 0;
`;

const TopContainer = styled(Box)``;

const QrCodeCard = forwardRef((props, ref) => {
	const { url, qrCodeLabel, ...omittedProps } = props;
	const theme = useContext(ThemeContext);
	return (
		<QrCodeCardContainer {...omittedProps} ref={ref}>
			<TopContainer>
				<QrCode url={url} />
			</TopContainer>
			<BottomContainer>
				<Box width="51px" height="45px" ml="auto" mr="56px">
					<Icon
						name="arrow.qrcode.right"
						color={theme.colors.primary || '#000000'}
						iconSize="xl"
					/>
				</Box>
				<Box>
					<QrCodeCardLabel fontSize="lg" fontWeight="semiBold">
						{qrCodeLabel}
					</QrCodeCardLabel>
				</Box>
			</BottomContainer>
		</QrCodeCardContainer>
	);
});

QrCodeCard.displayName = 'QrCodeCard';

QrCodeCard.defaultProps = {
	qrCodeLabel: 'Point Camera Here',
	'data-cy': 'QrCodeCard', // component name
};

QrCodeCard.propTypes = {
	...QrCode.propTypes,
	qrCodeLabel: PropTypes.string,
};

export default QrCodeCard;
