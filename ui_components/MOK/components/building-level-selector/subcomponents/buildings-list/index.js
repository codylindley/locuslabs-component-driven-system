import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mok-box';
import BuildingAccordion from '../building-accordion';
import styled, { ThemeContext } from 'styled-components';
import { theme } from 'styled-tools';

const BuildingsWrapper = styled(Box)`
	filter: drop-shadow(${theme('shadows.md')});
`;

const Arrow = (props) => (
	<StyleArrow>
		<svg
			width="22"
			height="12"
			viewBox="0 0 22 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity={props.opacity}
				d="M7.99485 0.720175C8.79167 -0.19048 10.2083 -0.190479 11.0052 0.720175L18.25 9H0.75L7.99485 0.720175Z"
				fill={props.iconFill}
			/>
		</svg>
	</StyleArrow>
);

const StyleArrow = styled(Box)`
	position: absolute;
	display: flex;
	bottom: -9px;
	right: 8px;
	height: 12px;
	width: 22px;
	margin-top: 6px;
	transform: rotate(180deg);
`;

const BuildingsList = forwardRef((props, ref) => {
	const {
		buildings,
		selectedBuildingId,
		selectedLevelId,
		onBuildingClick,
		onLevelClick,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);

	return (
		<Box
			ref={ref}
			mb="18px"
			height="auto"
			maxHeight="571px"
			display="flex"
			flexDirection="column"
			{...omittedProps}
		>
			<BuildingsWrapper display="flex" flexDirection="column" overflow="hidden">
				<Box
					data-cy="ScrollableBuildingsList"
					overflow="auto"
					height="auto"
					maxHeight="100%"
				>
					{buildings.map((building, index) => (
						<BuildingAccordion
							key={building.id}
							selectedBuildingId={selectedBuildingId}
							selectedLevelId={selectedLevelId}
							onBuildingClick={onBuildingClick}
							onLevelClick={onLevelClick}
							isLastItem={buildings.length - 1 == index}
							{...building}
						/>
					))}
				</Box>
			</BuildingsWrapper>
			<Arrow iconFill={themeContext.colors.mapNavBackground} opacity="0.85" />
		</Box>
	);
});

BuildingsList.displayName = 'Building Accordion';

BuildingsList.defaultProps = {
	'data-cy': 'BuildingsListView',
};

export default BuildingsList;

BuildingsList.propTypes = {
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
	selectedBuildingId: PropTypes.string,
	selectedLevelId: PropTypes.string,
	onBuildingClick: PropTypes.func,
	onLevelClick: PropTypes.func,
};

Arrow.propTypes = {
	opacity: PropTypes.string,
	iconFill: PropTypes.string,
};
