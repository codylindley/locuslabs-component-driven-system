import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mok-box';
import Trigger from './subcomponents/trigger';
import BuildingsList from './subcomponents/buildings-list';

const BuildingLevelSelector = forwardRef((props, ref) => {
	const {
		buildings,
		selectedBuildingId,
		selectedLevelId,
		onBuildingClick,
		onLevelClick,
		currentBuildingName,
		currentLevelName,
		fallbackBuildingName,
		fallbackLevelName,
		isExpanded,
		onTriggerClick,
		withSearchResults,
		...omittedProps
	} = props;
	return (
		<Box ref={ref} {...omittedProps}>
			<Box display="flex" flexDirection="column">
				{isExpanded && (
					<BuildingsList
						buildings={buildings}
						selectedBuildingId={selectedBuildingId}
						selectedLevelId={selectedLevelId}
						onBuildingClick={onBuildingClick}
						onLevelClick={onLevelClick}
					/>
				)}
				<Trigger
					currentBuildingName={currentBuildingName}
					currentLevelName={currentLevelName}
					fallbackBuildingName={fallbackBuildingName}
					fallbackLevelName={fallbackLevelName}
					onTriggerClick={onTriggerClick}
					isExpanded={isExpanded}
					withSearchResults={withSearchResults}
				/>
			</Box>
		</Box>
	);
});

BuildingLevelSelector.displayName = 'Building Level Selector';

BuildingLevelSelector.defaultProps = {
	'data-cy': 'BuildingLevelSelector',
	fallbackBuildingName: 'Select a Building...',
	fallbackLevelName: '...',
};

export default BuildingLevelSelector;

BuildingLevelSelector.propTypes = {
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
	buildings: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			resultsNumber: PropTypes.number,
			levels: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.string.isRequired,
					name: PropTypes.string.isRequired,
					details: PropTypes.string.isRequired,
					resultsNumber: PropTypes.number,
				})
			),
		})
	).isRequired,
	selectedBuildingId: PropTypes.string,
	selectedLevelId: PropTypes.string,
	onBuildingClick: PropTypes.func.isRequired,
	onLevelClick: PropTypes.func.isRequired,
	currentBuildingName: PropTypes.string,
	currentLevelName: PropTypes.string,
	fallbackBuildingName: PropTypes.string,
	fallbackLevelName: PropTypes.string,
	isExpanded: PropTypes.bool,
	onTriggerClick: PropTypes.func.isRequired,
	withSearchResults: PropTypes.bool,
};
