import { forwardRef } from 'react';
import Tooltip from '@locus-labs/mol-desktop-tooltip';
import MapNavButton from '@locus-labs/mol-desktop-map-nav-button';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';

const Compass = forwardRef((props, ref) => {
	const { onCompassClick, tooltipContent, tooltipZIndex, ...omittedProps } =
		props;

	return (
		<Tooltip content={tooltipContent} tooltipZIndex={tooltipZIndex}>
			<MapNavButton
				iconName="compass.color"
				ref={ref}
				degreesOfIconRotation={props.bearing ? props.bearing * -1 : 0}
				onClick={onCompassClick}
				ariaLabel={props.tooltipContent}
				{...omittedProps}
			/>
		</Tooltip>
	);
});

Compass.displayName = 'Compass';

Compass.defaultProps = {
	'data-cy': 'Compass',
	tooltipContent: 'Reset Map Rotation', // component name
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
	tooltipContent: PropTypes.string,
	tooltipZIndex: PropTypes.number,
};
