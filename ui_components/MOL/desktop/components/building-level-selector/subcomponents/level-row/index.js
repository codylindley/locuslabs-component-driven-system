import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { css, ThemeContext } from 'styled-components';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';
import { rgba } from 'polished';
import SearchResultsIndicator from '../search-results-indicator';
import { ifProp, theme, withProp } from 'styled-tools';

const StyledLevelRow = styled(Box)`
	border-bottom: ${withProp(
		theme('colors.primaryText'),
		(primaryText) => `1px solid ${rgba(primaryText, 0.1)}`
	)};
`;

const Wrapper = styled(Box)`
	cursor: pointer;

	&:hover {
		background-color: ${withProp(theme('colors.primary'), (primary) =>
			rgba(primary, 0.05)
		)};
	}

	${ifProp(
		'isSelected',
		css`
			background-color: ${withProp(theme('colors.primary'), (primary) =>
				rgba(primary, 0.05)
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
		``
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
			data-cy="LevelRow"
			ref={ref}
			bg={themeContext.colors.background}
			{...omittedProps}
		>
			<Wrapper
				display="flex"
				position="relative"
				alignItems="center"
				justifyContent="space-between"
				p="6px 0px 5px 16px"
				isSelected={selectedLevelId && selectedLevelId === id}
				onClick={() => onLevelClick(id)}
			>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
					paddingRight="6px"
				>
					<StyledText
						fontSize="md"
						fontWeight={500}
						lineHeight="18px"
						color={themeContext.colors.primaryText}
						limitLinesOfTextTo={1}
					>
						{name}
					</StyledText>
					<StyledText
						fontSize="sm"
						color={themeContext.colors.secondaryText}
						limitLinesOfTextTo={1}
					>
						{details}
					</StyledText>
				</Box>

				{resultsNumber && (
					<SearchResultsIndicator
						marginRight="6px"
						resultsNumber={resultsNumber}
					/>
				)}
			</Wrapper>
		</StyledLevelRow>
	);
});

LevelRow.displayName = 'Level Row';

LevelRow.defaultProps = {
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
