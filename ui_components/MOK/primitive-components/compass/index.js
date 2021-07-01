import { forwardRef, useContext } from 'react';
import MapNavButton from '@locus-labs/mok-map-navigation-button';

import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import { ThemeContext } from 'styled-components';

const Compass = forwardRef((props, ref) => {
	const { onCompassClick, fillColor, ...omittedProps } = props;
	const { colors } = useContext(ThemeContext);

	return (
		<MapNavButton
			height="48px"
			width="48px"
			iconName="compass.color"
			borderColor={colors.mapNavBackground || '#000000'}
			color={colors.mapNavBackground || '#000000'}
			bg={fillColor}
			borderRadius="0"
			ref={ref}
			degreesOfIconRotation={props.bearing ? props.bearing * -1 : 0}
			onClick={onCompassClick}
			{...omittedProps}
		/>
	);
});

Compass.displayName = 'Compass';

Compass.defaultProps = {
	'data-cy': 'Compass',
};

export default Compass;

Compass.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.flexbox,
	...styledSystemPropTypes.grid,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	onCompassClick: PropTypes.func.isRequired,
	bearing: PropTypes.number,
	fillColor: PropTypes.string,
};
