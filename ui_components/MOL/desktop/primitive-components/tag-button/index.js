import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '@locus-labs/mol-desktop-text';
import Box from '@locus-labs/mol-desktop-box';
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
import { theme } from 'styled-tools';

const StyledTagButton = styled('button')`
	/* Primary */
	font-family: ${theme('fonts.default')};
	font-size: ${theme('fontSizes.md')};
	font-weight: 400;
	background-color: ${theme('colors.background')};
	border-width: 1px;
	border-style: solid;
	border-color: ${theme('colors.primaryButton')};
	color: ${theme('colors.primaryButton')};
	cursor: pointer;
	padding: 3px 10px;
	text-align: center;
	max-height: 26px;
	border-radius: ${theme('radii.lg')};
	&:hover {
		background-color: ${theme('colors.primaryButton')};
		color: ${theme('colors.primaryButtonText')};
	}
	&:active {
		background-color: ${theme('colors.primaryButtonHover')};
		border-color: ${theme('colors.primaryButtonHover')};
		outline: none;
	}
	&:focus {
		outline: none;
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

const TagButton = forwardRef((props, ref) => {
	return (
		<StyledTagButton
			ref={ref}
			aria-label={typeof props.children === 'string' ? props.children : ''}
			{...props} // has to come last
		>
			<>
				<Box
					as="span"
					fontSize="inherit"
					position="relative"
					maxWidth="274px"
					display="inline-block"
					verticalAlign="middle"
				>
					<Text
						fontSize="inherit"
						textAlign="left"
						lineHeight="18px"
						limitLinesOfTextTo={props.limitLinesOfTextTo || 1}
					>
						{props.children}
					</Text>
				</Box>
			</>
		</StyledTagButton>
	);
});

TagButton.displayName = 'Tag Button';

TagButton.defaultProps = {
	'data-cy': 'TagButton', // component name
};

export default TagButton;

TagButton.propTypes = {
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
	children: PropTypes.node.isRequired,
};
