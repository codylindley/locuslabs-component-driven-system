import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';
import Badge from '@locus-labs/mol-desktop-badge';
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
import { theme, withProp } from 'styled-tools';

const StyledBox = styled(Box)`
	cursor: pointer;
	background-color: ${theme('colors.background')};
	color: ${theme('colors.primaryText')};

	&:hover,
	&:active {
		background-color: ${withProp(theme('colors.primary'), (primary) =>
			rgba(primary, 0.05)
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

const StyledBadge = styled(Badge)`
	flex: 0 0 auto;
`;

const SuggestedSearchRow = forwardRef((props, ref) => {
	const {
		name,
		badgeIcon,
		badgeIconColor,
		badgeColor,
		badgeOutlineColor,
		onSuggestedSearchRowClick,
		...omittedProps
	} = props;

	return (
		<StyledBox
			ref={ref}
			width="320px"
			p="8px 20px"
			display="flex"
			alignItems="center"
			onClick={onSuggestedSearchRowClick}
			{...omittedProps}
		>
			<StyledBadge
				iconName={badgeIcon}
				iconColor={badgeIconColor}
				border={badgeOutlineColor}
				fill={badgeColor}
				size="lg"
				marginRight="16px"
			/>
			<Text limitLinesOfTextTo={1} fontSize={props.fontSize || 'lg'}>
				{name}
			</Text>
		</StyledBox>
	);
});

SuggestedSearchRow.displayName = 'Suggested Search Row';

SuggestedSearchRow.defaultProps = {
	'data-cy': 'SuggestedSearchRow',
};

export default SuggestedSearchRow;

SuggestedSearchRow.propTypes = {
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
	onSuggestedSearchRowClick: PropTypes.func.isRequired,
	name: PropTypes.string,
	badgeIcon: PropTypes.string,
	badgeIconColor: PropTypes.string,
	badgeColor: PropTypes.string,
	badgeOutlineColor: PropTypes.string,
};
