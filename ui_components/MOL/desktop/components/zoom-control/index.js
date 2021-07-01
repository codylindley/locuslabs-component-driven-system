import { forwardRef } from 'react';
import Tooltip from '@locus-labs/mol-desktop-tooltip';
import Box from '@locus-labs/mol-desktop-box';
import MapNavButton from '@locus-labs/mol-desktop-map-nav-button';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import omit from 'lodash.omit';

const ZoomControl = forwardRef((props, ref) => {
	// don't pass box props unique to Zoom Control
	let zoomInInterval;
	let zoomOutInterval;
	const omitedProps = omit(props, ['onZoomIn', 'onZoomOut']);
	const zoomIn = () => {
		props.onZoomIn();
		zoomInInterval = setInterval(props.onZoomIn, 1000);
	};
	const zoomInCancel = () => {
		clearInterval(zoomInInterval);
	};
	const zoomOut = () => {
		props.onZoomOut();
		zoomOutInterval = setInterval(props.onZoomOut, 1000);
	};
	const zoomOutCancel = () => {
		clearInterval(zoomOutInterval);
	};

	return (
		<Box
			boxShadow="md"
			borderRadius="lg"
			display="inline-block"
			ref={ref}
			{...omitedProps}
		>
			<Box width="30px" height="30px">
				<Tooltip content={props.zoomInTooltipContent}>
					<MapNavButton
						onMouseDown={zoomIn}
						onMouseUp={zoomInCancel}
						onMouseOut={zoomInCancel}
						iconName="zoom.in"
						boxShadow="none"
						borderBottomLeftRadius="0"
						borderBottomRightRadius="0"
						ariaLabel={props.zoomInTooltipContent}
					/>
				</Tooltip>
			</Box>
			<Box width="30px" height="30px">
				<Tooltip content={props.zoomOutTooltipContent}>
					<MapNavButton
						onMouseDown={zoomOut}
						onMouseUp={zoomOutCancel}
						onMouseOut={zoomOutCancel}
						iconName="zoom.out"
						boxShadow="none"
						borderTopLeftRadius="0"
						borderTopRightRadius="0"
						ariaLabel={props.zoomOutTooltipContent}
					/>
				</Tooltip>
			</Box>
		</Box>
	);
});

ZoomControl.displayName = 'Zoom Control';

ZoomControl.defaultProps = {
	'data-cy': 'ZoomControl', // component name
	zoomOutTooltipContent: 'Zoom Out',
	zoomInTooltipContent: 'Zoom In',
};

export default ZoomControl;

ZoomControl.propTypes = {
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
	onZoomOut: PropTypes.func.isRequired,
	onZoomIn: PropTypes.func.isRequired,
	zoomOutTooltipContent: PropTypes.string,
	zoomInTooltipContent: PropTypes.string,
	tooltipZIndex: PropTypes.number,
};
