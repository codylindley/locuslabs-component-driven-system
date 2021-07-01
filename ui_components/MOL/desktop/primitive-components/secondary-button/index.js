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

const StyledSecondaryButton = styled('button')`
	/* Primary */
	font-family: ${theme('fonts.default')};
	font-size: ${theme('fontSizes.lg')};
	font-weight: 500;
	background-color: ${theme('colors.secondaryButton')};
	color: ${theme('colors.secondaryButtonText')};
	width: 351px;
	max-height: 48px;
	border: none;
	cursor: pointer;
	padding: ${ifProp('iconName', '12px 16px', '14px 16px')};
	text-align: center;
	border-radius: ${theme('radii.lg')};
	word-break: break-all;
	&:hover {
		background-color: ${ifProp(
			'disabled',
			theme('colors.secondaryButton'),
			theme('colors.secondaryButtonHover')
		)};
	}
	&:active {
		background-color: ${theme('colors.secondaryButton')};
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

const StyledSecondaryStackedButton = styled('button')`
	/* Primary */
	font-family: ${theme('fonts.default')};
	font-size: ${theme('fontSizes.md')};
	font-weight: 500;
	background-color: ${theme('colors.secondaryButton')};
	color: ${theme('colors.secondaryButtonText')};
	width: ${ifProp({ type: 'stackedWide' }, '162px', '109px')};
	border: none;
	cursor: pointer;
	padding: 0px 4px 4px 4px;
	text-align: center;
	border-radius: ${theme('radii.lg')};
	&:hover {
		background-color: ${ifProp(
			'disabled',
			theme('colors.secondaryButton'),
			theme('colors.secondaryButtonHover')
		)};
	}
	&:active {
		background-color: ${theme('colors.secondaryButton')};
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

const StyledSecondarySmallButton = styled('button')`
	/* Primary */
	font-family: ${theme('fonts.default')};
	font-size: ${theme('fontSizes.md')};
	font-weight: 500;
	background-color: ${theme('colors.secondaryButton')};
	color: ${theme('colors.secondaryButtonText')};
	width: 138px;
	border: none;
	cursor: pointer;
	padding: 4px;
	text-align: center;
	border-radius: ${theme('radii.lg')};
	&:hover {
		background-color: ${ifProp(
			'disabled',
			theme('colors.secondaryButton'),
			theme('colors.secondaryButtonHover')
		)};
	}
	&:active {
		background-color: ${theme('colors.secondaryButton')};
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

const SecondaryButton = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);

	if (props.type === 'small') {
		return (
			<StyledSecondarySmallButton
				ref={ref}
				aria-label={typeof props.children === 'string' ? props.children : ''}
				{...props} // has to come last
			>
				{props.iconName && props.iconToTheRight === undefined && (
					<Icon
						name={props.iconName}
						iconSize="sm"
						color={themeContext.colors.secondaryButtonText}
						display="inline-block"
						mr="7px"
						verticalAlign="middle"
						narrow
					/>
				)}
				<Box
					as="span"
					fontSize="inherit"
					position="relative"
					display="inline-block"
					maxWidth="90px"
					verticalAlign="middle"
				>
					<Text fontSize="inherit" lineHeight="20px" limitLinesOfTextTo={1}>
						{props.children}
					</Text>
				</Box>
				{props.iconName && props.iconToTheRight === true && (
					<Icon
						name={props.iconName}
						iconSize="sm"
						color={themeContext.colors.secondaryButtonText}
						display="inline-block"
						ml="8px"
						verticalAlign="middle"
						narrow
					/>
				)}
			</StyledSecondarySmallButton>
		);
	}

	if (props.type === 'stacked' || props.type === 'stackedWide') {
		return (
			<StyledSecondaryStackedButton
				ref={ref}
				aria-label={typeof props.children === 'string' ? props.children : ''}
				{...props} // has to come last
			>
				{props.iconName && (
					<Icon
						name={props.iconName}
						iconSize="md"
						color={themeContext.colors.secondaryButtonText}
						as="div"
						height="32px"
						width="32px"
						display="inline-block"
						position="relative"
						verticalAlign="middle"
					/>
				)}
				<Text
					fontSize="inherit"
					textAlign="center"
					lineHeight="18px"
					limitLinesOfTextTo={2}
				>
					{props.children}
				</Text>
			</StyledSecondaryStackedButton>
		);
	}
	if (props.type === 'normal' || props.type === undefined) {
		return (
			<StyledSecondaryButton
				ref={ref}
				aria-label={typeof props.children === 'string' ? props.children : ''}
				{...props} // has to come last
			>
				{props.iconName && props.iconToTheRight === undefined && (
					<Icon
						name={props.iconName}
						iconSize="sm"
						color={themeContext.colors.secondaryButtonText}
						display="inline-block"
						mr="8px"
						verticalAlign="middle"
						narrow
					/>
				)}
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
				{props.iconName && props.iconToTheRight === true && (
					<Icon
						name={props.iconName}
						iconSize="sm"
						color={themeContext.colors.secondaryButtonText}
						display="inline-block"
						ml="8px"
						verticalAlign="middle"
						narrow
					/>
				)}
			</StyledSecondaryButton>
		);
	}
});

SecondaryButton.displayName = 'Secondary Button';

SecondaryButton.defaultProps = {
	'data-cy': 'SecondaryButton', // component name
};

export default SecondaryButton;

SecondaryButton.propTypes = {
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
	disabled: PropTypes.bool,
	iconName: PropTypes.string,
	iconToTheRight: PropTypes.bool,
	type: PropTypes.oneOf(['normal', 'stacked', 'stackedWide', 'small']),
};
