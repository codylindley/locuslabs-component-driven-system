import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';
import Badge from '@locus-labs/mol-desktop-badge';
import StatusIndicator from '@locus-labs/mol-desktop-status-indicator';

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

const StyledSearchPOIRow = styled(Box)`
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

const SearchPOIRow = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);

	const {
		iconName,
		primaryLabel,
		secondaryLabel,
		status,
		onPoiRowClick,
		...omittedProps
	} = props;
	return (
		<StyledSearchPOIRow
			ref={ref}
			position="relative"
			width="320px"
			padding={`10px 14px ${status ? '11px' : '12px'} 20px`}
			display="flex"
			flexDirection="row"
			onClick={onPoiRowClick}
			{...omittedProps}
		>
			<Badge
				flex={'0 0 auto'}
				iconName={iconName}
				size="lg"
				marginRight="14px"
				paddingTop="2px"
			/>
			<Box>
				<Text
					data-cy="PrimaryLabel"
					limitLinesOfTextTo={1}
					fontSize={props.fontSize || 'lg'}
					fontWeight="500"
					lineHeight="24px"
					color={themeContext.colors.primaryText}
				>
					{primaryLabel}
				</Text>
				<Text
					data-cy="SecondaryLabel"
					limitLinesOfTextTo={1}
					fontSize="md"
					lineHeight="18px"
					color={themeContext.colors.secondaryText}
				>
					{secondaryLabel}
				</Text>
				{status && (
					<StatusIndicator
						display="inline-flex"
						marginTop="8px"
						type={status.type}
						pulsingStatusOn={status.pulsingStatusOn || false}
					>
						{status.text}
					</StatusIndicator>
				)}
			</Box>
		</StyledSearchPOIRow>
	);
});

SearchPOIRow.displayName = 'Search POI Row';

SearchPOIRow.defaultProps = {
	'data-cy': 'SearchPOIRow',
	hasDivider: true,
};

export default SearchPOIRow;

SearchPOIRow.propTypes = {
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
	iconName: PropTypes.string.isRequired,
	primaryLabel: PropTypes.string.isRequired,
	secondaryLabel: PropTypes.string.isRequired,
	status: PropTypes.shape({
		type: PropTypes.oneOf(['alert', 'active', 'inactive', 'warning', 'info'])
			.isRequired,
		text: PropTypes.string.isRequired,
		pulsingStatusOn: PropTypes.bool,
	}),
	onPoiRowClick: PropTypes.func.isRequired,
};
