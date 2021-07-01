import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '@locus-labs/vms-text';
import styledSystemPropTypes from '@styled-system/prop-types';
import Icon from '@locus-labs/vms-icon';
import {
	background,
	border,
	color,
	layout,
	position,
	shadow,
	space,
	typography,
	display,
	compose,
} from 'styled-system';
import { ifProp, theme } from 'styled-tools';

const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';
const buttonSizes = [SMALL, MEDIUM, LARGE];

const sizeStyles = {
	dimensions: { [SMALL]: '24px', [MEDIUM]: '32px', [LARGE]: '40px' },
	fontSizes: { [SMALL]: 'md', [MEDIUM]: 'xl', [LARGE]: 'xxl' },
};

const StyledCircleButton = styled('button')`
	font-family: ${theme('fonts.default')};
	font-size: ${(props) =>
		props.theme.fontSizes[sizeStyles.fontSizes[props.size]]};
	background-color: ${theme('theme.colors.background', '#FFFFFF')};
	color: ${theme('colors.secondaryText', '#000000')};
	height: ${(props) => sizeStyles.dimensions[props.size]};
	width: ${(props) => sizeStyles.dimensions[props.size]};
	border-color: ${theme('colors.secondaryButton', 'transparent')};
	border-width: 1px;
	padding: 0;
	margin: 0;
	display: inline-block;
	line-height: ${ifProp({ size: SMALL }, '21px', '24px')};
	border-style: solid;
	cursor: pointer;
	text-align: center;
	border-radius: 100px;
	&:hover:not(:disabled) {
		background-color: ${theme('colors.primaryButton', '#FFFFFF')};
		color: ${theme('colors.primaryButtonText', '#000000')};
		border-color: ${theme('colors.primaryButton', 'transparent')};
	}
	&:active:not(:disabled) {
		background-color: ${theme('colors.primaryButtonHover', '#FFFFFF')};
		border-color: ${theme('colors.primaryButtonHover', 'transparent')};
		color: ${theme('colors.primaryButtonText', '#000000')};
		outline: none;
	}
	&:focus:not(:disabled) {
		outline: none;
	}
	&:disabled {
		cursor: auto;
		& > * {
			opacity: 0.3;
		}
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
		typography,
		display
	)}
`;

const Content = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const CircleButton = forwardRef((props, ref) => {
	return (
		<StyledCircleButton
			ref={ref}
			aria-label={typeof props.children === 'string' ? props.children : ''}
			{...props}
		>
			<Content>
				{props.iconName ? (
					<Icon name={props.iconName} color="inherit" />
				) : (
					<Text
						as="div"
						fontSize="inherit"
						fontWeight={props.size === SMALL ? 'semiBold' : 'bold'}
						lineHeight={props.size === SMALL ? '21px' : '24px'}
						limitLinesOfTextTo={1}
					>
						{typeof props.children === 'string'
							? props.children.substring(0, 2)
							: ''}
					</Text>
				)}
			</Content>
		</StyledCircleButton>
	);
});

CircleButton.displayName = 'Circle Button';

CircleButton.defaultProps = {
	'data-cy': 'CircleButton', // component name
	size: 'large',
};

export default CircleButton;

CircleButton.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	size: PropTypes.oneOf(buttonSizes),
	forwardAs: PropTypes.string,
	iconName: PropTypes.string,
	children: PropTypes.node,
	disabled: PropTypes.bool,
};
