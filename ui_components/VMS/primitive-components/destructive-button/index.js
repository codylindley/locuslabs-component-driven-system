import { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '@locus-labs/vms-text';
import styledSystemPropTypes from '@styled-system/prop-types';
import Icon from '@locus-labs/vms-icon';
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
	display,
	compose,
} from 'styled-system';
import { ifProp, theme } from 'styled-tools';

const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';
const buttonSizes = [SMALL, MEDIUM, LARGE];

const sizeStyles = {
	padding: { [SMALL]: '3px 6px', [MEDIUM]: '6px 16px', [LARGE]: '9.5px 16px' },
	paddingWithIcon: {
		[SMALL]: '0 6px',
		[MEDIUM]: '4px 16px',
		[LARGE]: '8px 16px',
	},
	maxHeight: { [SMALL]: '24px', [MEDIUM]: '32px', [LARGE]: '40px' },
};

const StyledDestructiveButton = styled('button')`
	/* Destructive */
	font-family: ${theme('fonts.default')};
	font-size: ${(props) =>
		props.theme.fontSizes[props.size === SMALL ? 'md' : 'lg']};
	background-color: ${theme('colors.destructiveButton', '#000000')};
	color: ${theme('colors.primaryButtonText', '#FFFFFF')};
	width: ${ifProp({ size: SMALL }, '120px', '180px')};
	padding: ${(props) =>
		sizeStyles[props.iconName ? 'paddingWithIcon' : 'padding'][props.size]};
	max-height: ${(props) => sizeStyles.maxHeight[props.size]};
	border: none;
	cursor: pointer;
	display: inline-block;
	text-align: center;
	border-radius: ${theme('borderRadius', '6px')};
	font-weight: 500;
	&:hover {
		background-color: ${ifProp(
			'disabled',
			theme('colors.destructiveButton', '#000000'),
			theme('colors.destructiveButtonHover', '#000000')
		)};
	}
	&:active {
		background-color: ${theme('colors.destructiveButton', '#000000')};
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

const DestructiveButton = forwardRef((props, ref) => {
	const { size, ...rest } = props;
	const themeContext = useContext(ThemeContext);
	return (
		<StyledDestructiveButton
			ref={ref}
			aria-label={typeof props.children === 'string' ? props.children : ''}
			size={size}
			{...rest}
		>
			<Content>
				{props.iconName ? (
					<>
						<Icon
							name={props.iconName}
							color={themeContext.colors.primaryButtonText || '#FFFFFF'}
							mr="2px"
							display="inline-box"
						/>
						<Text
							as="div"
							fontSize="inherit"
							textAlign="left"
							display="inline-box"
							lineHeight={props.size === SMALL ? '18px' : '21px'}
							limitLinesOfTextTo={1}
						>
							{props.children}
						</Text>
					</>
				) : (
					<Text
						as="div"
						fontSize="inherit"
						lineHeight={props.size === SMALL ? '18px' : '21px'}
						limitLinesOfTextTo={1}
					>
						{props.children}
					</Text>
				)}
			</Content>
		</StyledDestructiveButton>
	);
});

DestructiveButton.displayName = 'Destructive Button';

DestructiveButton.defaultProps = {
	'data-cy': 'DestructiveButton', // component name
	size: 'medium',
};

export default DestructiveButton;

DestructiveButton.propTypes = {
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
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
};
