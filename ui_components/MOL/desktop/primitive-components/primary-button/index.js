import { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '@locus-labs/mol-desktop-text';
import Box from '@locus-labs/mol-desktop-box';
import styledSystemPropTypes from '@styled-system/prop-types';
import Icon from '@locus-labs/mol-desktop-icon';
import { ThemeContext } from 'styled-components';
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
import { ifProp, theme } from 'styled-tools';

const StyledPrimaryButton = styled('button')`
	/* Primary */
	font-family: ${theme('fonts.default')};
	font-size: ${theme('fontSizes.lg')};
	font-weight: 500;
	background-color: ${theme('colors.primaryButton')};
	color: ${theme('colors.primaryButtonText')};
	width: 351px;
	max-height: 48px;
	border: none;
	cursor: pointer;
	padding: ${ifProp('iconName', '12px 16px', '14px 16px')};
	text-align: center;
	border-radius: ${theme('radii.lg')};
	&:hover {
		background-color: ${ifProp(
			'disabled',
			theme('colors.primaryButton'),
			theme('colors.primaryButtonHover')
		)};
	}
	&:active {
		background-color: ${theme('colors.primaryButton')};
		box-shadow: ${theme('shadows.lg')};
		outline: none;
		border: none;
	}
	&:focus {
		outline: none;
		border: none;
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

const PrimaryButton = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	return (
		<StyledPrimaryButton
			ref={ref}
			aria-label={typeof props.children === 'string' ? props.children : ''}
			{...props} // has to come last
		>
			{props.iconName ? (
				<>
					<Icon
						name={props.iconName}
						iconSize="sm"
						color={themeContext.colors.primaryButtonText}
						display="inline-block"
						mr="7px"
						verticalAlign="middle"
						narrow
					/>
					<Box
						as="span"
						fontSize="inherit"
						position="relative"
						maxWidth="278px"
						display="inline-block"
						verticalAlign="middle"
					>
						<Text
							fontSize="inherit"
							textAlign="left"
							lineHeight="20px"
							limitLinesOfTextTo={1}
						>
							{props.children}
						</Text>
					</Box>
				</>
			) : (
				<Text
					as="div"
					fontSize="inherit"
					lineHeight="20px"
					limitLinesOfTextTo={1}
				>
					{props.children}
				</Text>
			)}
		</StyledPrimaryButton>
	);
});

PrimaryButton.displayName = 'Primary Button';

PrimaryButton.defaultProps = {
	'data-cy': 'PrimaryButton', // component name
};

export default PrimaryButton;

PrimaryButton.propTypes = {
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
	iconName: PropTypes.string,
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
};
