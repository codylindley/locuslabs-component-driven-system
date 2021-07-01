import React, { forwardRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';
import Icon from '@locus-labs/mok-icon';
import { rgba } from 'polished';

const EstimatedTimeContainer = styled(Box)`
	width: 100px;
	min-height: 100px;
	border-radius: 4px 0 0 4px;
	background-color: ${({ theme }) => theme.colors.primary || '#FFFFFF'};
	display: flex;
	padding: 20px 30px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledText = styled(Text)`
	color: ${({ theme }) => theme.colors.primaryButtonText || '#FFFFFF'};
`;

const EstimatedTime = forwardRef((props, ref) => {
	const { timeToPOIValue, timeToPOIUnit, ...omittedProps } = props;
	return (
		<EstimatedTimeContainer {...omittedProps} ref={ref}>
			<StyledText lineHeight="39px" fontSize="xxl" fontWight="bold">
				{timeToPOIValue}
			</StyledText>
			<StyledText lineHeight="27px" fontSize="md" fontWight="normal">
				{timeToPOIUnit}
			</StyledText>
		</EstimatedTimeContainer>
	);
});

EstimatedTime.displayName = 'EstimatedTime';

EstimatedTime.defaultProps = {
	'data-cy': 'EstimatedTime',
};

EstimatedTime.propTypes = {
	timeToPOIValue: PropTypes.number.isRequired,
	timeToPOIUnit: PropTypes.string.isRequired,
};

const PoiInformationContainer = styled(Box)`
	width: 260px;
	min-height: 100px;
	padding: 20px 30px;
	border-radius: 0 4px 4px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${({ theme }) => rgba(theme.colors.primary, 0.08)};
`;

const PoiInformation = forwardRef((props, ref) => {
	const { poiName, levelLabel, distanceValue, distanceUnit, ...omittedProps } =
		props;
	const theme = useContext(ThemeContext);
	return (
		<PoiInformationContainer {...omittedProps} ref={ref}>
			<Box>
				<Text
					fontSize="md"
					fontWeight="semiBold"
					lineHeight="27px"
					limitLinesOfTextTo={2}
				>
					{poiName}
				</Text>
			</Box>
			<Box display="flex" justifyContent="space-between" marginTop="8px">
				<Box
					marginRight="24px"
					display="flex"
					alignItems="center"
					color={theme.colors.secondaryText || '#000000'}
				>
					<Icon name="map.layers" iconSize="xs" />
					<Text ml="8px" fontSize="sm" fontWeight="normal" lineHeight="24px">
						{levelLabel}
					</Text>
				</Box>
				<Box
					display="flex"
					alignItems="center"
					color={theme.colors.secondaryText || '#000000'}
				>
					<Icon name="walking" iconSize="xs" />
					<Text ml="8px" fontSize="sm" fontWeight="normal" lineHeight="24px">
						{distanceValue} {distanceUnit}
					</Text>
				</Box>
			</Box>
		</PoiInformationContainer>
	);
});

PoiInformation.displayName = 'PoiInformation';

PoiInformation.defaultProps = {
	'data-cy': 'PoiInformation', // component name
};

PoiInformation.propTypes = {
	poiName: PropTypes.string,
	levelLabel: PropTypes.string,
	distanceValue: PropTypes.number,
	distanceUnit: PropTypes.string,
};

const DirectionsHeaderContainer = styled(Box)`
	min-height: 100px;
	max-height: 122px;
	margin-bottom: 40px;
	border-radius: 4px;
	display: flex;
	align-items: stretch;
	justify-content: center;
`;

const DirectionsHeader = forwardRef((props, ref) => {
	const {
		poiName,
		levelLabel,
		distanceValue,
		distanceUnit,
		timeToPOIValue,
		timeToPOIUnit,
		...omittedProps
	} = props;
	return (
		<DirectionsHeaderContainer {...omittedProps} ref={ref}>
			<EstimatedTime
				timeToPOIValue={timeToPOIValue}
				timeToPOIUnit={timeToPOIUnit}
			/>
			<PoiInformation
				poiName={poiName}
				levelLabel={levelLabel}
				distanceValue={distanceValue}
				distanceUnit={distanceUnit}
			/>
		</DirectionsHeaderContainer>
	);
});

DirectionsHeader.displayName = 'DirectionsHeader';

DirectionsHeader.defaultProps = {
	'data-cy': 'DirectionsHeader', // component name
};

DirectionsHeader.propTypes = {
	...EstimatedTime.propTypes,
	...PoiInformation.propTypes,
};

export default DirectionsHeader;
