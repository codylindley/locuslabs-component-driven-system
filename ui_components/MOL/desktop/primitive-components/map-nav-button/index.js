import { forwardRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '@locus-labs/mol-desktop-icon';
import { ThemeContext } from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import Ripples from 'react-touch-ripple';
import LoadingIndicator from '@locus-labs/mol-desktop-loading-indicator';
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
import { ifProp, prop, theme } from 'styled-tools';

const StyledMapNavButton = styled('button')`
	background-color: ${theme('colors.mapNavBackground')};
	opacity: 0.85;
	width: 30px;
	height: 30px;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: ${theme('radii.lg')};
	&:hover {
		opacity: 1;
	}
	&:active {
		outline: none;
		border: none;
	}
	&:focus {
		outline: none;
		border: none;
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

/* this component has to be adjusted when the button is stacked. This is about looking for changed to the dropshadow or radius sent to the map nav button via styled components and overiding the these styles (and theme) with props sent to the map nav button */
const StyledMapNavButtonDropShadow = styled.div.attrs((props) => ({
	boxShadow: props.children.props.children.props.boxShadow,
	borderRadius: props.children.props.children.props.borderRadius,
	borderTopLeftRadius: props.children.props.children.props.borderTopLeftRadius,
	borderTopRightRadius:
		props.children.props.children.props.borderTopRightRadius,
	borderBottomLeftRadius:
		props.children.props.children.props.borderBottomLeftRadius,
	borderBottomRightRadius:
		props.children.props.children.props.borderBottomRightRadius,
}))`
	box-shadow: ${ifProp('boxShadow', prop('boxShadow'), theme('shadows.md'))};
	width: 30px;
	height: 30px;
	background-color: none;

	${ifProp(
		'borderRadius',
		css`
			border-radius: ${prop('borderRadius')};
		`,
		css`
			border-radius: ${theme('radii.lg')};
		`
	)};

	${ifProp(
		'borderTopLeftRadius',
		css`
			border-top-left-radius: ${prop('borderTopLeftRadius')};
		`
	)};

	${ifProp(
		'borderTopRightRadius',
		css`
			border-top-right-radius: ${prop('borderTopRightRadius')};
		`
	)};

	${ifProp(
		'borderBottomLeftRadius',
		css`
			border-bottom-left-radius: ${prop('borderBottomLeftRadius')};
		`
	)};

	${ifProp(
		'borderBottomRightRadius',
		css`
			border-bottom-right-radius: ${prop('borderBottomRightRadius')};
		`
	)};
`;

const MapNavButton = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	return (
		<>
			{props.loader ? (
				<StyledMapNavButton
					boxShadow="md"
					ref={ref}
					aria-label={
						props.ariaLabel ||
						(typeof props.children === 'string' && props.children) ||
						''
					}
					{...props} // has to come last
				>
					<LoadingIndicator spinnerColor="white" size="xxsm" />
				</StyledMapNavButton>
			) : (
				<StyledMapNavButtonDropShadow>
					<Ripples
						center={props.isRippleClickEffectCentered ? true : false}
						color="#C0C0C0"
					>
						<StyledMapNavButton
							ref={ref}
							aria-label={
								props.ariaLabel ||
								(typeof props.children === 'string' && props.children) ||
								''
							}
							{...props} // has to come last
						>
							<Icon
								name={props.iconName}
								iconSize="sm"
								degreesOfIconRotation={props.degreesOfIconRotation}
								color={themeContext.colors.mapNavText}
							/>
						</StyledMapNavButton>
					</Ripples>
				</StyledMapNavButtonDropShadow>
			)}
		</>
	);
});

MapNavButton.displayName = 'Map Nav Button';

export default MapNavButton;

MapNavButton.defaultProps = {
	'data-cy': 'MapNavButton', // component name
	loader: false,
};

MapNavButton.propTypes = {
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
	loader: PropTypes.bool,
	isRippleClickEffectCentered: PropTypes.string,
	degreesOfIconRotation: PropTypes.number,
	ariaLabel: PropTypes.string,
};
