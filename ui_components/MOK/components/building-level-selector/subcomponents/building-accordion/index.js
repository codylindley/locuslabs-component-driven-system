import { forwardRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mok-box';
import BuildingRow from '../building-row';
import LevelsList from '../levels-list';
import smoothscroll from 'smoothscroll-polyfill';

const StyledBox = styled(Box)`
	&::before {
		content: '';
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		box-shadow: inset 0 18px 20px -20px ${rgba('#2e3032', 0.4)},
			inset 0 -18px 20px -20px ${rgba('#2e3032', 0.4)};
	}
`;

const BuildingAccordion = forwardRef((props, ref) => {
	const {
		id,
		name,
		onBuildingClick,
		selectedBuildingId,
		selectedLevelId,
		onLevelClick,
		resultsNumber,
		levels,
		isLastItem,
		...omittedProps
	} = props;

	const accordionRef = useRef(ref);
	const levelsRef = useRef(ref);
	smoothscroll.polyfill();

	useEffect(() => {
		if (
			levelsRef &&
			levelsRef.current &&
			accordionRef &&
			accordionRef.current
		) {
			if (
				accordionRef.current.parentNode.scrollTop >
				accordionRef.current.offsetTop
			) {
				// if accordion was already scrolled past, move the view back to the start of element
				accordionRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			} else if (
				accordionRef.current.offsetTop -
					accordionRef.current.parentNode.scrollTop +
					accordionRef.current.offsetHeight <=
				accordionRef.current.parentNode.offsetHeight
			) {
				// if element fits in the box when expanded, don't move the view
				return;
			} else if (
				accordionRef.current.offsetHeight >
				accordionRef.current.parentNode.offsetHeight
			) {
				// if element is too high to fit in the box move the view to the start of the element
				accordionRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			} else {
				// move the view to the end of the element
				accordionRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'end',
				});
			}
		}
	}, [selectedBuildingId]); // when selected building changed

	return (
		<Box
			ref={accordionRef}
			display="flex"
			flexDirection="column"
			{...omittedProps}
		>
			<BuildingRow
				id={id}
				name={name}
				selectedBuildingId={selectedBuildingId}
				onBuildingClick={() => onBuildingClick(id)}
				resultsNumber={resultsNumber}
				isLast={isLastItem}
			/>

			{selectedBuildingId && selectedBuildingId === id && (
				<StyledBox position="relative">
					<LevelsList
						ref={levelsRef}
						levels={levels}
						onLevelClick={onLevelClick}
						selectedLevelId={selectedLevelId}
					/>
				</StyledBox>
			)}
		</Box>
	);
});

BuildingAccordion.displayName = 'Building Accordion';

BuildingAccordion.defaultProps = {
	'data-cy': 'BuildingAccordion',
};

export default BuildingAccordion;

BuildingAccordion.propTypes = {
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
	id: PropTypes.string,
	name: PropTypes.string,
	resultsNumber: PropTypes.number,
	levels: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			details: PropTypes.string.isRequired,
			resultsNumber: PropTypes.number,
		})
	),
	selectedBuildingId: PropTypes.string,
	selectedLevelId: PropTypes.string,
	onBuildingClick: PropTypes.func,
	onLevelClick: PropTypes.func,
};
