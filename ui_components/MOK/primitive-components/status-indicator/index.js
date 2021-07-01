import { forwardRef, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeContext } from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';

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

const statusIndicatorTypes = {
	info: 'info',
	warning: 'warning',
	inactive: 'inactive',
	alert: 'alert',
	active: 'active',
	default: 'default',
};

const typeBgColors = {
	info: 'indicatorInfoBackground',
	warning: 'indicatorWarningBackground',
	inactive: 'indicatorInactiveBackground',
	alert: 'statusErrorBackground',
	active: 'statusActiveBackground',
	default: 'statusDefaultBackground',
};

const typeTextColors = {
	info: 'indicatorInfoText',
	warning: 'indicatorWarningText',
	inactive: 'indicatorInactiveText',
	alert: 'indicatorErrorText',
	active: 'indicatorSuccessText',
	default: 'indicatorInfoText',
};

const StatusIndicator = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	return (
		<Box display="inline-block">
			<Box
				display="flex"
				height="27px"
				alignItems="center"
				bg={themeContext.colors[typeBgColors[props.type]] || 'black'}
				color={themeContext.colors[typeTextColors[props.type]] || 'white'}
				px="8px"
				borderRadius="lg"
				ref={ref}
				{...props}
			>
				{props.pulsingStatusOn && (
					<Box
						data-cy="PulsingCircle"
						display="flex"
						alignItems="center"
						ml="2px"
					>
						<PulsingCircle />
					</Box>
				)}
				<Text
					marginLeft={props.pulsingStatusOn ? '8px' : '0px'}
					lineHeight="21px"
					fontSize="xs"
					style={{ textTransform: 'uppercase' }}
					limitLinesOfTextTo={1}
				>
					{props.children}
				</Text>
			</Box>
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
	type: PropTypes.oneOf(Object.keys(statusIndicatorTypes)),
	pulsingStatusOn: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

StatusIndicator.displayName = 'StatusIndicator';

StatusIndicator.defaultProps = {
	'data-cy': 'StatusIndicator', // component name
	type: 'default',
};

export default StatusIndicator;
