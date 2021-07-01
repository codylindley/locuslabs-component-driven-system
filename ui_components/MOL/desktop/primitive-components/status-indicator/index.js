import { forwardRef, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import Box from '@locus-labs/mol-desktop-box';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/mol-desktop-text';
import { ThemeContext } from 'styled-components';

const pulse = keyframes`
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    }
    
    70% {
        transform: scale(1);
        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.1);
    }
    
    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    }
`;

const PulsingCircle = styled('div')`
	background: white;
	border-radius: 50%;
	height: 6px;
	width: 6px;
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: scale(1);
	animation: ${pulse} 1.5s infinite ease;
`;

const typeBgColors = {
	alert: 'statusErrorBackground',
	active: 'statusActiveBackground',
	inactive: 'statusInactiveBackground',
	warning: 'statusWarningBackground',
	info: 'statusInfoBackground',
};
const typeTextColors = {
	alert: 'statusErrorText',
	active: 'statusActiveText',
	inactive: 'statusInactiveText',
	warning: 'statusWarningText',
	info: 'statusInfoText',
};

const StatusIndicator = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	return (
		<Box
			bg={themeContext.colors[typeBgColors[props.type]] || 'black'}
			display="inline-block"
			color={themeContext.colors[typeTextColors[props.type]] || 'white'}
			position="relative"
			borderRadius="lg"
			px="8px"
			py="2px"
			height="24px"
			textStyle="caps"
			ref={ref}
			{...props}
		>
			{props.pulsingStatusOn && props.pulsingStatusOn !== false && (
				<Box position="absolute" top="9px" left="12px;">
					<PulsingCircle />
				</Box>
			)}

			<Text
				marginLeft={
					props.pulsingStatusOn && props.pulsingStatusOn !== false
						? '18px'
						: '0px'
				}
				lineHeight="20px"
				fontSize="sm"
				style={{ textTransform: 'uppercase' }}
				limitLinesOfTextTo={1}
			>
				{props.children}
			</Text>
		</Box>
	);
});

StatusIndicator.propTypes = {
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
	type: PropTypes.oneOf(['alert', 'active', 'inactive', 'warning', 'info'])
		.isRequired,
	pulsingStatusOn: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

StatusIndicator.displayName = 'StatusIndicator';

StatusIndicator.defaultProps = {
	'data-cy': 'StatusIndicator', // component name
};

export default StatusIndicator;
