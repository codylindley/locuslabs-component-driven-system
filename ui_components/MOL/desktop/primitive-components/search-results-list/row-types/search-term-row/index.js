import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';
import Icon from '@locus-labs/mol-desktop-icon';
import {
	background,
	border,
	color,
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	typography,
	compose,
} from 'styled-system';
import { ifProp, theme, withProp } from 'styled-tools';

const StyledSearchTermRow = styled(Box)`
	cursor: pointer;
	background-color: ${theme('colors.background')};
	color: ${theme('colors.primaryText')};

	&:hover,
	&:active {
		background-color: ${withProp(theme('colors.primary'), (primary) =>
			rgba(primary, 0.05)
		)};
	}

	&::before {
		display: ${ifProp('hasDivider', 'block', 'none')};
		content: '';
		position: absolute;
		top: 0;
		height: 1px;
		width: auto;
		margin: auto;
		left: 16px;
		right: 16px;
		background-color: ${withProp(theme('colors.primaryText'), (primaryText) =>
			rgba(primaryText, 0.1)
		)};
	}

	${compose(
		background,
		border,
		color,
		flexbox,
		grid,
		layout,
		position,
		shadow,
		space,
		typography
	)};
`;

const SearchTermRow = forwardRef((props, ref) => {
	const { term, onSearchTermClick, ...omittedProps } = props;
	return (
		<StyledSearchTermRow
			ref={ref}
			position="relative"
			width="320px"
			padding="8px 20px"
			display="flex"
			alignItems="center"
			onClick={onSearchTermClick}
			{...omittedProps}
		>
			<Icon name="search.web" marginRight="16px" />
			<Text limitLinesOfTextTo={1} fontSize={props.fontSize || 'lg'}>
				{term}
			</Text>
		</StyledSearchTermRow>
	);
});

SearchTermRow.displayName = 'Search Term Row';

SearchTermRow.defaultProps = {
	'data-cy': 'SearchTermRow',
};

export default SearchTermRow;

SearchTermRow.propTypes = {
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
	term: PropTypes.string,
	onSearchTermClick: PropTypes.func,
};
