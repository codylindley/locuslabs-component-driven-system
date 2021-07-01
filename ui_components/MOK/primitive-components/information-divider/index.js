import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp, theme, withProp } from 'styled-tools';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';
import { rgba } from 'polished';

const informationDividerTypes = {
	nearbyResults: 'nearbyResults', // default
	otherResults: 'otherResults',
	poiDetail: 'poiDetail',
};
const { poiDetail } = informationDividerTypes;

const InformationDividerStyled = styled(Box)`
	display: flex;
	align-items: center;
	height: 32px;
	color: ${theme('colors.primaryText', '#FFFFFF')};
	background-color: ${withProp(theme('colors.primary', '#000000'), (primary) =>
		rgba(primary, 0.05)
	)};
	width: 440px;
	max-width: 440px;
	padding-right: 8px;
	padding-left: ${ifProp({ type: poiDetail }, '66px', '40px')};
	border-top-width: 1px;
	border-top-style: solid;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	line-height: 21px;
	border-top-color: ${withProp(
		theme('colors.primaryText', '#FFFFFF'),
		(primaryText) => rgba(primaryText, 0.15)
	)};
	border-bottom-color: ${withProp(
		theme('colors.primaryText', '#FFFFFF'),
		(primaryText) => rgba(primaryText, 0.15)
	)};
	text-transform: uppercase;
`;

const InformationDivider = forwardRef((props, ref) => {
	const { children, type, ...omittedProps } = props;

	return (
		<Box {...omittedProps}>
			<InformationDividerStyled ref={ref} type={type}>
				<Text
					limitLinesOfTextTo={1}
					fontWeight="semiBold"
					lineHeight="21px"
					fontSize={props.fontSize || 'xs'}
				>
					{children}
				</Text>
			</InformationDividerStyled>
		</Box>
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
	type: PropTypes.oneOf(Object.keys(informationDividerTypes)),
};

InformationDivider.displayName = 'Information Divider';

InformationDivider.defaultProps = {
	'data-cy': 'InformationDivider', // component name
	type: 'nearbyResults', // component name
};

export default InformationDivider;
