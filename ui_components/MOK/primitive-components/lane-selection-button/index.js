import { forwardRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { ifProp, theme, withProp } from 'styled-tools';
import PropTypes from 'prop-types';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';
import { rgba } from 'polished';
import styledSystemPropTypes from '@styled-system/prop-types';

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

const laneSelectionTypes = {
	default: 'default',
	navigation: 'navigation',
};

const StyledLaneSelectionButton = styled('button')`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${theme('fonts.default')};
	font-size: ${theme('fontSizes.sm')};
	background-color: ${theme('colors.background', '#FFFFFF')};
	color: ${theme('colors.primaryButton')};
	font-weight: 500;
	max-height: ${ifProp(
		{ type: laneSelectionTypes.navigation },
		'64px',
		'54px'
	)};
	height: ${ifProp({ type: laneSelectionTypes.navigation }, '66px', '54px')};
	width: ${ifProp({ type: laneSelectionTypes.navigation }, '480px', 'auto')};
	border: 1px solid
		${withProp(theme('colors.primaryText', '#000000'), (primaryText) =>
			rgba(primaryText, 0.1)
		)};
	padding: ${ifProp(
		{ type: laneSelectionTypes.navigation },
		'16px 18px',
		'15px 16px'
	)};
	cursor: pointer;
	text-align: center;
	img {
		max-height: 26px;
		min-height: 26px;
		height: 100%;
		display: inline-block;
	}
	&:active {
		background-color: ${(props) => rgba(props.theme.colors.primaryText, 0.1)};
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

const StyledImage = styled('img')`
	max-height: 26px;
`;

const LaneSelectionButton = forwardRef((props, ref) => {
	const { type, ...omittedProps } = props;
	const themeContext = useContext(ThemeContext);

	return (
		<Box display="inline-box" {...omittedProps}>
			<StyledLaneSelectionButton
				ref={ref}
				aria-label={typeof props.children === 'string' ? props.children : ''}
				theme={themeContext}
				type={type}
			>
				{props.logoUrl ? (
					<StyledImage src={props.logoUrl} />
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
		</Box>
	);
});

LaneSelectionButton.displayName = 'Lane Selection Button';

LaneSelectionButton.defaultProps = {
	'data-cy': 'LaneSelectionButton', // component name
	type: laneSelectionTypes.default, // component name
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
	type: PropTypes.oneOf(Object.keys(laneSelectionTypes)),
};
