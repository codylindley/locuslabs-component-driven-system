import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box from '@locus-labs/mok-box';
import styledSystemPropTypes from '@styled-system/prop-types';
import { theme } from 'styled-tools';

import DirectionsHeader from './subcomponents/directions-header';
import QrCodeCard from './subcomponents/qrcode-card';
import InstructionsContainer from './subcomponents/instructions-container';

const SendToMobileContainer = styled(Box)`
	width: 440px;
	background-color: ${theme('colors.background', '#FFFFFF')};
	padding: 40px;
`;

const SendToMobile = forwardRef((props, ref) => {
	const {
		instructions,
		url,
		poiName,
		levelLabel,
		distanceValue,
		distanceUnit,
		timeToPOIValue,
		timeToPOIUnit,
		...omittedProps
	} = props;
	return (
		<SendToMobileContainer
			boxShadow="md"
			display="inline-block"
			{...omittedProps}
			ref={ref}
		>
			<DirectionsHeader
				poiName={poiName}
				levelLabel={levelLabel}
				distanceUnit={distanceUnit}
				distanceValue={distanceValue}
				timeToPOIValue={timeToPOIValue}
				timeToPOIUnit={timeToPOIUnit}
			/>
			<QrCodeCard url={url} />
			<InstructionsContainer instructions={instructions} />
		</SendToMobileContainer>
	);
});

SendToMobile.displayName = 'Send To Mobile';

SendToMobile.defaultProps = {
	'data-cy': 'SendToMobile', // component name
};

SendToMobile.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	...InstructionsContainer.propTypes,
	...DirectionsHeader.propTypes,
	...QrCodeCard.propTypes,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
};

export default SendToMobile;
