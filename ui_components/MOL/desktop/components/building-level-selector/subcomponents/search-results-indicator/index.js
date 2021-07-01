import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';

const StyledSearchResultsIndicator = styled(Box)`
	flex: 0 0 auto;
`;

const SearchResultsIndicator = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const { resultsNumber, ...omittedProps } = props;

	return (
		<StyledSearchResultsIndicator
			data-cy="SearchResultsIndicator"
			ref={ref}
			display="flex"
			alignItems="center"
			justifyContent="center"
			width="24px"
			height="24px"
			borderRadius="100%"
			bg={themeContext.colors.mapNavSearchResults}
			color={themeContext.colors.mapNavSearchResultsText}
			{...omittedProps}
		>
			{typeof resultsNumber !== 'undefined' && (
				<Text fontSize="sm">{resultsNumber > 99 ? '99+' : resultsNumber}</Text>
			)}
		</StyledSearchResultsIndicator>
	);
});

SearchResultsIndicator.displayName = 'SearchResultsIndicator';

SearchResultsIndicator.defaultProps = {};

export default SearchResultsIndicator;

SearchResultsIndicator.propTypes = {
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
	resultsNumber: PropTypes.number,
};
