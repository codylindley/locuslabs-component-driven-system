import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { css } from 'styled-components';
import { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';
import Icon from '@locus-labs/mol-desktop-icon';
import SearchResultsIndicator from '../search-results-indicator';
import { ifProp, theme, withProp } from 'styled-tools';

const StyledBox = styled(Box)`
	cursor: pointer;
	border-bottom: 1px solid ${theme('colors.mapNavBackground')};

	background-color: ${withProp(
		theme('colors.mapNavBackground'),
		(mapNavBackground) => rgba(mapNavBackground, 0.85)
	)};

	&:hover {
		background-color: ${theme('colors.mapNavBackground')};
	}

	&:focus {
		outline: none;
	}

	${ifProp(
		'isSelected',
		css`
			background-color: ${theme('colors.mapNavBackground')};
		`,
		``
	)}
`;

const StyledText = styled(Text)`
	flex: 1 1 auto;
	word-break: break-all;
`;

const StyledSearchResultsIndicator = styled(SearchResultsIndicator)`
	flex: 0 0 auto;
`;

const BuildingRow = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);

	const {
		id,
		name,
		resultsNumber,
		selectedBuildingId,
		onBuildingClick,
		...omittedProps
	} = props;

	return (
		<StyledBox
			data-cy="BuildingRow"
			ref={ref}
			display="flex"
			alignItems="center"
			color={themeContext.colors.mapNavText}
			padding="2px 6px 1px 2px"
			onClick={() => onBuildingClick(id)}
			isSelected={selectedBuildingId && selectedBuildingId === id}
			{...omittedProps}
		>
			<Icon
				name="triangle.down"
				iconSize="md"
				color={themeContext.colors.mapNavText}
				as="span"
				height="32px"
				width="32px"
				display="inline-block"
				position="relative"
				verticalAlign="middle"
				degreesOfIconRotation={
					selectedBuildingId && selectedBuildingId === id ? 0 : -90
				}
			/>
			<StyledText fontSize="md" fontWeight="500" limitLinesOfTextTo={1}>
				{name}
			</StyledText>
			{resultsNumber && (
				<StyledSearchResultsIndicator
					marginLeft="2px"
					resultsNumber={resultsNumber}
				/>
			)}
		</StyledBox>
	);
});

BuildingRow.displayName = 'Building Row';

BuildingRow.defaultProps = {};

export default BuildingRow;

BuildingRow.propTypes = {
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
	selectedBuildingId: PropTypes.string,
	onBuildingClick: PropTypes.func,
};
