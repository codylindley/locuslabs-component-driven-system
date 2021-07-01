import { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import { ifProp, prop, theme } from 'styled-tools';
import { ThemeContext } from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import Icon from '@locus-labs/mok-icon';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';

const StyledMapNavigationButton = styled('button')`
	background-color: ${ifProp(
		'disabled',
		theme('colors.mapNavText'),
		theme('colors.mapNavBackground', '#000000')
	)};
	opacity: 0.85;
	width: 46px;
	height: 46px;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:active {
		opacity: ${ifProp('disabled', '0.85', '1')};
		outline: none;
		border: none;
	}

	&:focus {
		outline: none;
		border: none;
	}
`;

/* this component has to be adjusted when the button is stacked. This is about looking for changed to the dropshadow or radius sent to the Map Navigation Button via styled components and overiding the these styles (and theme) with props sent to the Map Navigation Button */
const StyledMapNavigationButtonDropShadow = styled.div.attrs((props) => ({
	boxShadow: props.children.props.children.props.boxShadow,
}))`
	box-shadow: ${prop('boxShadow', theme('shadows.md'))};
	width: 46px;
	height: 46px;
	background-color: none;
	border: 1px solid ${theme('colors.mapNavBackground', '#000000')};
`;

const StyledText = styled(Text)`
	line-height: 24px;
`;

const MapNavigationButton = forwardRef((props, ref) => {
	const {
		iconName,
		label,
		disabled,
		degreesOfIconRotation,
		ariaLabel,
		children,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);

	return (
		<>
			<Box display="inline-box" {...omittedProps}>
				<StyledMapNavigationButtonDropShadow>
					<StyledMapNavigationButton
						ref={ref}
						disabled={disabled}
						theme={themeContext}
						aria-label={
							ariaLabel || (typeof children === 'string' && children) || ''
						}
					>
						{label ? (
							<StyledText
								color={
									disabled
										? themeContext.colors.mapNavBackground
										: themeContext.colors.mapNavText || '#FFFFFF'
								}
								fontSize="sm"
								fonrWeight="medium"
							>
								{label}
							</StyledText>
						) : (
							<Icon
								name={iconName || 'invalid-name'}
								degreesOfIconRotation={degreesOfIconRotation}
								color={themeContext.colors.mapNavText}
								iconSize={iconName ? 'sm' : '24px'}
							/>
						)}
					</StyledMapNavigationButton>
				</StyledMapNavigationButtonDropShadow>
			</Box>
		</>
	);
});

MapNavigationButton.displayName = 'Map Navigation Button';

export default MapNavigationButton;

MapNavigationButton.defaultProps = {
	'data-cy': 'MapNavigationButton', // component name
};

MapNavigationButton.propTypes = {
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
	label: PropTypes.string,
	disabled: PropTypes.bool,
	degreesOfIconRotation: PropTypes.number,
	ariaLabel: PropTypes.string,
};
