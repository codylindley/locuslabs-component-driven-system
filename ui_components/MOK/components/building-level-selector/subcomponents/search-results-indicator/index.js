import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import Box from '@locus-labs/mok-box';

const StyledSearchResultsIndicator = styled(Box)`
	flex: 0 0 auto;
	display: flex;
	font-size: 12px;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	line-height: 18px;
	background-color: ${theme('colors.mapNavSearchResults')};
	color: ${theme('colors.mapNavSearchResultsText')};
`;

const SearchResultsIndicator = forwardRef((props, ref) => {
	const { resultsNumber, ...omittedProps } = props;

	return (
		<StyledSearchResultsIndicator
			ref={ref}
			fontWeight="semiBold"
			{...omittedProps}
		>
			{resultsNumber > 99 ? '99+' : resultsNumber}
		</StyledSearchResultsIndicator>
	);
});

SearchResultsIndicator.displayName = 'SearchResultsIndicator';

SearchResultsIndicator.defaultProps = {
	'data-cy': 'SearchResultsIndicator',
	width: '24px',
	height: '24px',
};

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
