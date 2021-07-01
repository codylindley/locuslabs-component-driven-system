import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Tooltip from '@locus-labs/vms-tooltip';
import CircleButton from '@locus-labs/vms-circle-button';

import { layout, position, space, compose } from 'styled-system';
import { theme, ifProp } from 'styled-tools';

const StyledCircleButton = styled(CircleButton)`
	background-color: ${theme('colors.primaryButton', '#FFFFFF')};
	color: ${theme('colors.primaryButtonText', '#000000')};
	border-color: ${theme('colors.primaryButton', '#FFFFFF')};
	filter: drop-shadow(${ifProp('hasDropshadow', theme('shadows.sm'))});

	&:hover:not(:disabled) {
		background-color: ${theme('colors.primaryButtonHover', '#FFFFFF')};
		border-color: ${theme('colors.primaryButtonHover', 'transparent')};
	}

	&:disabled {
		opacity: 0.3;
		& > * {
			opacity: 1;
		}
	}

	/* Styled System Overrides Everything always comes last */
	${compose(layout, position, space)}
`;

const PrimaryCircleButton = forwardRef((props, ref) => {
	const {
		size,
		tooltipContent,
		tooltipPosition,
		iconName,
		children,
		...omittedProps
	} = props;

	return tooltipContent ? (
		<Tooltip content={tooltipContent} placement={tooltipPosition}>
			<StyledCircleButton
				ref={ref}
				size={size}
				iconName={children ? false : iconName} // If children (button content) is present, do not display icon.
				aria-label={typeof props.children === 'string' ? props.children : ''}
				{...omittedProps}
			>
				{children}
			</StyledCircleButton>
		</Tooltip>
	) : (
		<StyledCircleButton
			ref={ref}
			size={size}
			iconName={children ? false : iconName} // If children (button content) is present, do not display icon.
			aria-label={typeof props.children === 'string' ? props.children : ''}
			{...omittedProps}
		>
			{children}
		</StyledCircleButton>
	);
});

PrimaryCircleButton.displayName = 'Primary Circle Button';

PrimaryCircleButton.defaultProps = {
	'data-cy': 'PrimaryCircleButton', // component name
	tooltipPosition: 'right',
	hasDropshadow: true,
	iconName: 'onboarding',
};

export default PrimaryCircleButton;

PrimaryCircleButton.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	size: CircleButton.propTypes.size,
	forwardAs: PropTypes.string,
	iconName: PropTypes.string,
	children: PropTypes.node,
	disabled: PropTypes.bool,
	tooltipPosition: PropTypes.string,
	tooltipContent: PropTypes.string,
	hasDropshadow: PropTypes.bool,
};
