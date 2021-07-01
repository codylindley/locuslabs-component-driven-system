import { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '@locus-labs/mol-mobile-icon';
import { ThemeContext } from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import Ripples from 'react-touch-ripple';
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
import { prop, theme } from 'styled-tools';

const StyledFloatingActionButtonDropShadow = styled('div')`
	box-shadow: ${theme('shadows.md')};
	width: 40px;
	height: 40px;
	padding: 0;
	border-radius: ${theme('radii.full')};
	background-color: transparent;
	overflow: hidden;
	position: relative;
	z-index: 1;

	&:active {
		outline: none;
		border: none;
		box-shadow: ${theme('shadows.lg')};
	}
`;

const StyledFloatingActionButton = styled('button')`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: ${theme('radii.full')};
	background-color: ${theme('colors.background')};
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

	&:focus {
		outline: none;
		border: none;
	}
	&:active {
		outline: none;
		border: none;
		svg {
			fill: ${prop('iconTapColor', theme('colors.primaryText'))};
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
		typography
	)}
`;

const FloatingActionButton = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);

	return (
		<StyledFloatingActionButtonDropShadow data-cy="FloatingActionButtonDropShadow">
			<Ripples
				center={props.isRippleClickEffectCentered ? true : false}
				color="#C0C0C0"
			>
				<StyledFloatingActionButton
					data-cy="FloatingActionButton"
					ref={ref}
					aria-label={
						props.ariaLabel ||
						(typeof props.children === 'string' && props.children) ||
						''
					}
					{...props} // has to come last
				>
					<Icon
						data-cy="Icon"
						name={props.iconName}
						iconSize="md"
						color={props.iconColor || themeContext.colors.secondaryText}
						degreesOfIconRotation={props.degreesOfIconRotation}
					/>
				</StyledFloatingActionButton>
			</Ripples>
		</StyledFloatingActionButtonDropShadow>
	);
});

FloatingActionButton.displayName = 'Floating Action Button';

export default FloatingActionButton;

FloatingActionButton.propTypes = {
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
	iconName: PropTypes.string.isRequired,
	degreesOfIconRotation: PropTypes.number,
	iconColor: PropTypes.string,
	iconTapColor: PropTypes.string,
	isRippleClickEffectCentered: PropTypes.string,
	ariaLabel: PropTypes.string,
};
