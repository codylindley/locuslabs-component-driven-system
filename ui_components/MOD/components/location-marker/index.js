import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { prop, theme } from 'styled-tools';
import Box from '@locus-labs/mod-box';
import Text from '@locus-labs/mod-text';
import Person from './person';
import Triangle from './triangle';

import { border, color, compose } from 'styled-system';

const StyledWrapper = styled(Box)`
	flex-direction: column;

	&.left {
		flex-direction: row;
	}

	&.right {
		flex-direction: row-reverse;
	}

	&.bottom {
		flex-direction: column-reverse;
	}
`;

const StyledLabel = styled(Box)`
	max-width: 640px;
	filter: drop-shadow(${theme('shadows.lg')});

	&.editor {
		max-width: 320px;
		filter: drop-shadow(${theme('shadows.sm')});
	}

	&.top {
		margin-bottom: 8px;
	}
	&.top.editor {
		margin-bottom: 4px;
	}

	&.left {
		flex-direction: row;
		margin-right: 3px;
	}
	&.left.editor {
		margin-right: 1px;
	}

	&.right {
		flex-direction: row-reverse;
		margin-left: 3px;
	}
	&.right.editor {
		margin-left: 1px;
	}

	&.bottom {
		flex-direction: column-reverse;
		margin-top: 8px;
	}

	&.bottom.editor {
		flex-direction: column-reverse;
		margin-top: 4px;
	}
`;

const StyledTriangle = styled(Triangle)`
	&.left {
		transform: rotate(270deg);
		margin-left: -4px;
	}

	&.left.editor {
		margin-left: -2px;
	}

	&.right {
		transform: rotate(90deg);
		margin-right: -4px;
	}

	&.right.editor {
		margin-right: -2px;
	}

	&.bottom {
		transform: rotate(180deg);
	}
`;

const StyledTextWrapper = styled(Box)`
	padding: 10px 20px;
	border-radius: ${prop('labelBorderRadius', '12px')};
	background-color: ${theme('colors.primaryButton', '#000')};

	&.editor {
		padding: 5px 10px;
		border-radius: ${prop('labelBorderRadius', '6px')};
		${compose(border)}
	}

	${compose(color, border)}
`;

const StyledText = styled(Text)`
	color: ${theme('colors.primaryButtonText', '#fff')};
	font-size: ${theme('fontSizes.xl')};
	word-break: break-all;

	&.editor {
		font-size: ${theme('fontSizes.xs')};
	}

	${compose(color)}
`;

const LocationMarker = forwardRef((props, ref) => {
	const {
		type,
		label,
		labelPosition,
		markerFill,
		markerBorder,
		labelBorderRadius,
		labelColor,
		labelBackgroundColor,
		...omittedProps
	} = props;
	return (
		<StyledWrapper
			ref={ref}
			className={[type, labelPosition]}
			display="flex"
			alignItems="center"
			{...omittedProps}
		>
			{label && (
				<StyledLabel
					data-cy="LocationMarkerLabel"
					className={[type, labelPosition]}
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<StyledTextWrapper
						className={type}
						borderRadius={labelBorderRadius}
						bg={labelBackgroundColor}
					>
						<StyledText
							className={type}
							color={labelColor}
							fontWeight="500"
							limitLinesOfTextTo={1}
						>
							{label}
						</StyledText>
					</StyledTextWrapper>
					<StyledTriangle
						className={[type, labelPosition]}
						small={type && type === 'editor'}
						fill={labelBackgroundColor}
					/>
				</StyledLabel>
			)}
			<Person
				fill={markerFill}
				border={markerBorder}
				small={type && type === 'editor'}
			/>
		</StyledWrapper>
	);
});

LocationMarker.displayName = 'Location Marker';

LocationMarker.defaultProps = {
	'data-cy': 'LocationMarker', // component name
	type: 'display',
	label: 'Add Label !!!',
	labelPosition: 'top',
};

LocationMarker.propTypes = {
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
	type: PropTypes.oneOf(['display', 'editor']),
	label: PropTypes.string.isRequired,
	labelPosition: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
	markerFill: PropTypes.string,
	markerBorder: PropTypes.string,
	labelBorderRadius: PropTypes.string,
	labelColor: PropTypes.string,
	labelBackgroundColor: PropTypes.string,
};

export default LocationMarker;
