import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { theme } from 'styled-tools';
import Box from '@locus-labs/mok-box';
import Pin from '@locus-labs/mok-pin';
import Text from '@locus-labs/mok-text';
import styledSystemPropTypes from '@styled-system/prop-types';

const LocationPinContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LabelContainer = styled(Box)`
	height: 56px;
	width: 100%;
	margin-bottom: 16px;
	border-radius: 4px;
	background-color: ${theme('colors.background', '#FFFFFF')};
	padding: 14px 20px;
	text-align: center;
`;

const StyledText = styled(Text)`
	line-height: 27px;
	color: ${theme('colors.primaryText', '#000000')};
`;

const KioskLocationPin = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const { label, ...omittedProps } = props;
	return (
		<Box ref={ref} {...omittedProps}>
			<LocationPinContainer height="128px">
				<LabelContainer boxShadow="md" data-cy="LabelContainer">
					<StyledText fontSize="md" fontWeight="semiBold">
						{label}
					</StyledText>
				</LabelContainer>
				<Pin
					pinSize="xl"
					iconName="kiosk"
					iconColor={themeContext.colors.miscBadgeIconColor || '#FFFFFF'}
				/>
			</LocationPinContainer>
		</Box>
	);
});

KioskLocationPin.displayName = 'KioskLocationPin';

KioskLocationPin.defaultProps = {
	'data-cy': 'KioskLocationPin', // component name
};

KioskLocationPin.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.flexbox,
	...styledSystemPropTypes.grid,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	label: PropTypes.string,
};

export default KioskLocationPin;
