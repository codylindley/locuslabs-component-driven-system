import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext, css } from 'styled-components';
import Box from '@locus-labs/mok-box';
import Text from '@locus-labs/mok-text';
import { rgba } from 'polished';
import SearchResultsIndicator from '../search-results-indicator';
import { withProp, theme, ifProp } from 'styled-tools';

const StyledLevelRow = styled(Box)`
	border-bottom: 1px solid
		${withProp('theme.colors.primaryText', (pt) => rgba(pt, 0.1))};
`;

const Wrapper = styled(Box)`
	cursor: pointer;
	height: inherit;

	&:hover {
		background-color: ${withProp('theme.colors.primary', (p) => rgba(p, 0.05))};
	}

	${ifProp(
		'isSelected',
		css`
			background-color: ${withProp('theme.colors.primary', (p) =>
				rgba(p, 0.05)
			)};

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 3px;
				border-top-right-radius: 4px;
				border-bottom-right-radius: 4px;
				background-color: ${theme('colors.primary')};
			}
		`,
		''
	)}
`;

const StyledText = styled(Text)`
	word-break: break-all;
`;

const LevelRow = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const {
		id,
		name,
		details,
		resultsNumber,
		selectedLevelId,
		onLevelClick,
		...omittedProps
	} = props;

	return (
		<StyledLevelRow
			ref={ref}
			position="relative"
			width="300px"
			height="68px"
			bg={themeContext.colors.background}
			{...omittedProps}
		>
			<Wrapper
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				pl="18px"
				isSelected={selectedLevelId && selectedLevelId === id}
				onClick={() => onLevelClick(id)}
			>
				<Box display="flex" flexDirection="column" alignItems="flex-start">
					<StyledText
						fontSize="md"
						fontWeight="semiBold"
						lineHeight="27px"
						color={themeContext.colors.primaryText}
						limitLinesOfTextTo={1}
					>
						{name}
					</StyledText>
					<StyledText
						fontSize="sm"
						lineHeight="24px"
						fontWeight="normal"
						color={themeContext.colors.secondaryText}
						limitLinesOfTextTo={1}
					>
						{details}
					</StyledText>
				</Box>
				{resultsNumber && (
					<SearchResultsIndicator
						mr="16px"
						ml="4px"
						resultsNumber={resultsNumber}
					/>
				)}
			</Wrapper>
		</StyledLevelRow>
	);
});

LevelRow.displayName = 'Level Row';

LevelRow.defaultProps = {
	'data-cy': 'LevelRow',
	isSelected: false,
};

export default LevelRow;

LevelRow.propTypes = {
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
	details: PropTypes.string,
	selectedLevelId: PropTypes.string,
	onLevelClick: PropTypes.func,
	resultsNumber: PropTypes.number,
};
