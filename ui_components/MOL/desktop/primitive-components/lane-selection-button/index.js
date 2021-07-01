import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '@locus-labs/mol-desktop-text';
import { rgba } from 'polished';
import styledSystemPropTypes from '@styled-system/prop-types';
import { ifProp, theme, withProp } from 'styled-tools';

import {
	background,
	border,
	color,
	layout,
	position,
	shadow,
	space,
	typography,
	compose,
} from 'styled-system';

const StyledLaneSelectionButton = styled('button')`
	/* Primary */
	font-family: ${theme('fonts.default')};
	font-size: ${theme('fontSizes.lg')};
	background-color: ${theme('colors.background')};
	color: ${theme('colors.primaryButton')};
	font-weight: 500;
	width: ${ifProp('fixedWidth', '351px', 'auto')};
	max-height: 52px;
	height: 52px;
	border-width: 1px;
	border-style: solid;
	border-color: ${withProp(theme('colors.primaryText'), (primaryText) =>
		rgba(primaryText, 0.1)
	)};
	cursor: pointer;
	padding: 11px 16px;
	text-align: center;
	border-radius: ${theme('radii.lg')};
	img {
		max-height: 28px;
		min-height: 28px;
		height: 100%;
		display: inline-block;
	}
	&:hover {
		background-color: ${withProp(theme('colors.secondary'), (secondary) =>
			rgba(secondary, 0.1)
		)};
	}
	&:active {
		background-color: ${withProp(theme('colors.primaryText'), (primaryText) =>
			rgba(primaryText, 0.1)
		)};
		outline: none;
	}
	&:focus {
		outline: none;
	}
	&:disabled {
		cursor: auto;
		opacity: 0.3;
	}

	/* Styled System Overrides Everything always comes last */
	${compose(
		background,
		border,
		color,
		layout,
		position,
		shadow,
		space,
		typography
	)}
`;

const LaneSelectionButton = forwardRef((props, ref) => {
	return (
		<StyledLaneSelectionButton
			ref={ref}
			aria-label={typeof props.children === 'string' ? props.children : ''}
			{...props} // has to come last
		>
			{props.logoUrl ? (
				<img src={props.logoUrl} />
			) : (
				<Text
					fontSize="inherit"
					textAlign="center"
					lineHeight="18px"
					limitLinesOfTextTo={1}
				>
					{props.children}
				</Text>
			)}
		</StyledLaneSelectionButton>
	);
});

LaneSelectionButton.displayName = 'Lane Selection Button';

LaneSelectionButton.defaultProps = {
	'data-cy': 'LaneSelectionButton', // component name
};

export default LaneSelectionButton;

LaneSelectionButton.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	logoUrl: PropTypes.node.isRequired,
	fixedWidth: PropTypes.bool,
};
