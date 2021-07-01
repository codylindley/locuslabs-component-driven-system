import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mok-box';
import Text from '@locus-labs/mok-text';
import Icon from '@locus-labs/mok-icon';
import { QRCode as SvgQRCode } from 'react-qr-svg';
import styled from 'styled-components';
import { theme, prop } from 'styled-tools';

const QRCodeContainer = styled(Box)`
	width: 125px;
	height: 125px;
	padding: 5px;
	background-color: white;
`;

const QRCode = forwardRef((props, ref) => {
	const { url, ...omittedProps } = props;
	return (
		<QRCodeContainer ref={ref} {...omittedProps}>
			<SvgQRCode
				value={url}
				style={{ width: '100%', height: '100%' }}
				level="Q"
			/>
		</QRCodeContainer>
	);
});

QRCode.displayName = 'QR Code';

QRCode.defaultProps = {
	'data-cy': 'QRCode',
};

QRCode.propTypes = {
	url: PropTypes.string.isRequired,
};

const StyledLabelContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 30px;
	margin-top: 26px; /* 26px - 10px(arrow's margin bottom) = 16px(space between the arrow and text)*/
`;

const StyledText = styled(Text)`
	text-transform: uppercase;
	text-align: center;
	line-height: 33px;
	color: ${prop('color', theme('colors.primary', '#000000'))};
`;

const StyledIcon = styled(Icon)`
	margin: 0 0 -10px 20px;
	align-self: flex-end;
	color: ${prop('color', theme('colors.primary', '#000000'))};
`;

const QRCodeCallout = forwardRef((props, ref) => {
	const { primaryLabel, secondaryLabel, url, color, ...omittedProps } = props;
	return (
		<Box ref={ref} {...omittedProps}>
			<Box display="flex">
				<QRCode url={url} />
				<StyledIcon name="arrow.qrcode.left" iconSize="xl" color={color} />
			</Box>
			<StyledLabelContainer>
				<StyledText fontWeight="semiBold" fontSize="xl" color={color}>
					{primaryLabel}
				</StyledText>
				{secondaryLabel && (
					<StyledText
						fontWeight="semiBold"
						fontSize="xl"
						marginTop="4px"
						color={color}
					>
						{secondaryLabel}
					</StyledText>
				)}
			</StyledLabelContainer>
		</Box>
	);
});

QRCodeCallout.displayName = 'QR Code Callout';

QRCodeCallout.defaultProps = {
	'data-cy': 'QRCodeCallout',
};

export default QRCodeCallout;

QRCodeCallout.propTypes = {
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
	...QRCode.propTypes,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	primaryLabel: PropTypes.string.isRequired,
	secondaryLabel: PropTypes.string,
};
