import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { ifProp, theme, withProp } from 'styled-tools';
import { ThemeContext, css } from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mok-box';
import Text from '@locus-labs/mok-text';
import Icon from '@locus-labs/mok-icon';
import SearchResultsIndicator from '../search-results-indicator';

const largeStyles = () => {
	return css`
		color: ${theme('colors.mapNavText')};
		border-bottom: 1px ${ifProp('isLast', 'hidden', 'solid')}
			${theme('colors.mapNavBackground')};
		background-color: ${ifProp(
			'isSelected',
			theme('colors.mapNavBackground'),
			withProp('theme.colors.mapNavBackground', (mapNavBackground) =>
				rgba(mapNavBackground, 0.85)
			)
		)};
	`;
};

const StyledBox = styled(Box)`
	cursor: pointer;
	display: flex;
	align-items: center;
	${largeStyles}

	&:focus {
		outline: none;
	}
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
			ref={ref}
			padding="18px 0px"
			onClick={() => onBuildingClick(id)}
			isSelected={selectedBuildingId && selectedBuildingId === id}
			{...omittedProps}
		>
			<Icon
				name={
					selectedBuildingId && selectedBuildingId === id
						? 'triangle.down'
						: 'triangle.right'
				}
				iconSize="sm"
				color={themeContext.colors.mapNavText}
				as="span"
				m="0px 8px"
				height="32px"
				width="32px"
				display="inline-block"
				position="relative"
				verticalAlign="middle"
			/>
			<StyledText
				fontSize="md"
				fontWeight="500"
				lineHeight="27px"
				maxWidth="208px"
				limitLinesOfTextTo={1}
			>
				{name}
			</StyledText>
			{resultsNumber && (
				<StyledSearchResultsIndicator
					m="22px 16px 22px 4px"
					resultsNumber={resultsNumber}
				/>
			)}
		</StyledBox>
	);
});

BuildingRow.displayName = 'Building Row';

BuildingRow.defaultProps = {
	'data-cy': 'BuildingRow',
	width: '300px',
	height: '68px',
	isLast: false,
};

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
