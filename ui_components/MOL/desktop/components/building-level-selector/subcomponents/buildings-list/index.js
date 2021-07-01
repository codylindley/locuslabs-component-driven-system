import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mol-desktop-box';
import BuildingAccordion from '../building-accordion';
import styled, { ThemeContext } from 'styled-components';
import { theme } from 'styled-tools';

const BuildingsWrapper = styled(Box)`
	filter: drop-shadow(${theme('shadows.md')});
	border-radius: ${theme('radii.lg')};
`;

const Arrow = (props) => (
	<Box
		position="absolute"
		display="flex"
		top="-9px"
		right="8px"
		height="9px"
		width="19px"
	>
		<svg
			width="19"
			height="9"
			viewBox="0 0 19 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity={props.opacity}
				d="M7.99485 0.720175C8.79167 -0.19048 10.2083 -0.190479 11.0052 0.720175L18.25 9H0.75L7.99485 0.720175Z"
				fill={props.iconFill}
			/>
		</svg>
	</Box>
);

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
			data-cy="BuildingsListView"
			ref={ref}
			position="relative"
			height="auto"
			maxHeight="100%"
			minHeight="0"
			display="flex"
			flexDirection="column"
			{...omittedProps}
		>
			<Arrow
				iconFill={themeContext.colors.mapNavBackground}
				opacity={selectedBuildingId === buildings[0].id ? '1' : '0.85'}
			/>

			<BuildingsWrapper display="flex" flexDirection="column" overflow="hidden">
				<Box
					data-cy="ScrollableBuildingsList"
					overflow="auto"
					height="auto"
					maxHeight="100%"
				>
					{buildings.map((building) => (
						<BuildingAccordion
							data-cy="BuildingAccordion"
							key={building.id}
							selectedBuildingId={selectedBuildingId}
							selectedLevelId={selectedLevelId}
							onBuildingClick={onBuildingClick}
							onLevelClick={onLevelClick}
							{...building}
						/>
					))}
				</Box>
			</BuildingsWrapper>
		</Box>
	);
});

BuildingsList.displayName = 'Building Accordion';

BuildingsList.defaultProps = {};

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
