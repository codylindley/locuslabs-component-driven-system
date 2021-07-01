import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import Box from '@locus-labs/mok-box';
import LevelRow from '../level-row';

const StyledLevelRow = styled(LevelRow)`
	&:last-of-type {
		border-bottom: none;
	}
`;

const LevelsList = forwardRef((props, ref) => {
	const { levels, onLevelClick, selectedLevelId, ...omittedProps } = props;

	return (
		<Box ref={ref} {...omittedProps}>
			{Object.values(levels).map((level) => (
				<StyledLevelRow
					key={level.id}
					selectedLevelId={selectedLevelId}
					onLevelClick={onLevelClick}
					{...level}
				/>
			))}
		</Box>
	);
});

LevelsList.displayName = 'Levels List';

LevelsList.defaultProps = {
	'data-cy': 'LevelsList',
};

export default LevelsList;

LevelsList.propTypes = {
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
	levels: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			details: PropTypes.string.isRequired,
			resultsNumber: PropTypes.number,
		})
	),
	selectedLevelId: PropTypes.string,
	onLevelClick: PropTypes.func,
};
