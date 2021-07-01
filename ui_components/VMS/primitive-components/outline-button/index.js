import { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
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
import { ifProp, theme, withProp } from 'styled-tools';

const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';
const buttonSizes = [SMALL, MEDIUM, LARGE];

const sizeStyles = {
	padding: { [SMALL]: '2px 6px', [MEDIUM]: '5px 16px', [LARGE]: '8.5px 16px' },
	paddingWithIcon: {
		[SMALL]: '0 6px',
		[MEDIUM]: '3px 16px',
		[LARGE]: '8px 16px',
	},
	maxHeight: { [SMALL]: '24px', [MEDIUM]: '32px', [LARGE]: '40px' },
};

const StyledOutlineButton = styled('button')`
	/* Outline */
	font-family: ${(props) => props.theme.fonts.default};
	font-size: ${(props) =>
		props.theme.fontSizes[props.size === SMALL ? 'md' : 'lg']};
	background-color: transparent;
	color: ${theme('colors.primaryButton', '#000000')};
	width: ${ifProp({ size: SMALL }, '120px', '180px')};
	padding: ${(props) =>
		sizeStyles[props.iconName ? 'paddingWithIcon' : 'padding'][props.size]};
	max-height: ${(props) => sizeStyles.maxHeight[props.size]};
	border-color: ${theme('colors.primaryButton', 'transparent')};
	border-width: 1px;
	border-style: solid;
	cursor: pointer;
	display: inline-block;
	outline: none;
	text-align: center;
	border-radius: ${theme('borderRadius', '6px')};
	font-weight: 500;
	&:hover {
		border-color: ${theme('colors.primaryButtonHover', 'transparent')};
		color: ${theme('colors.primaryButtonHover', 'transparent')};
		background-color: ${withProp(
			theme('colors.primaryButton', '#000000'),
			(primaryButton) => rgba(primaryButton || '#000000', 0.1)
		)};
	}
	&:active {
		border-color: ${theme('colors.primaryButtonHover', 'transparent')};
		color: ${theme('colors.primaryButtonHover', 'transparent')};
		background-color: ${withProp(
			theme('colors.primaryButton', '#000000'),
			(primaryButton) => rgba(primaryButton, 0.2)
		)};
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

const OutlineButton = forwardRef((props, ref) => {
	const { size, ...rest } = props;
	const themeContext = useContext(ThemeContext);
	return (
		<StyledOutlineButton
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
							color={themeContext.colors.primaryButton || '#000000'}
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
		</StyledOutlineButton>
	);
});

OutlineButton.displayName = 'Outline Button';

OutlineButton.defaultProps = {
	'data-cy': 'OutlineButton', // component name
	size: 'medium',
};

export default OutlineButton;

OutlineButton.propTypes = {
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
