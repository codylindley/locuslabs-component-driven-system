import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/mol-desktop-text';
import { rgba } from 'polished';
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

const InformationDividerStyled = styled('div')`
	box-sizing: border-box;
	color: ${theme('colors.primaryText')};
	background-color: ${withProp(theme('colors.primary'), (primary) =>
		rgba(primary, 0.05)
	)};
	width: 320px;
	padding: 6px 8px 6px 64px;
	border-top-width: 1px;
	border-top-style: solid;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	line-height: 18px;
	border-top-color: ${withProp(theme('colors.primaryText'), (primaryText) =>
		rgba(primaryText, 0.1)
	)};
	border-bottom-color: ${withProp(theme('colors.primaryText'), (primaryText) =>
		rgba(primaryText, 0.1)
	)};
	text-transform: uppercase;
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

const InformationDivider = forwardRef((props, ref) => {
	return (
		<InformationDividerStyled ref={ref} {...props}>
			<Text limitLinesOfTextTo={1} fontSize={props.FontSize || 'md'}>
				{props.children}
			</Text>
		</InformationDividerStyled>
	);
});

InformationDivider.propTypes = {
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
	children: PropTypes.node.isRequired,
};

InformationDivider.displayName = 'Information Divider';

InformationDivider.defaultProps = {
	'data-cy': 'InformationDivider', // component name
};

export default InformationDivider;
