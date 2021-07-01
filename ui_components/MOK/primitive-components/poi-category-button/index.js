import { forwardRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { theme, prop } from 'styled-tools';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import Text from '@locus-labs/mok-text';
import Icon from '@locus-labs/mok-icon';
import Box from '@locus-labs/mok-box';
import {
	background,
	border,
	color,
	layout,
	position,
	shadow,
	space,
	compose,
} from 'styled-system';

import styledSystemPropTypes from '@styled-system/prop-types';

const StyledButton = styled.button`
	background-color: ${prop(
		'backgroundColor',
		theme('colors.categoryBadgeEat', '#000000')
	)};
	border-radius: 16px;
	border: 1px solid ${rgba('#000000', 0.25)};
	padding: 0;
	padding-top: 20px;
	padding-bottom: 20px;
	width: 210px;
	height: 132px;
	outline: none;

	${compose(background, border, color, layout, position, shadow, space)}
`;

const StyledIcon = styled(Icon)`
	margin-left: 9px;
	margin-right: 153px;
	margin-bottom: 16px;
`;

const TextContainer = styled(Box)`
	text-align: left;
	margin-left: 20px;
	margin-right: 20px;
`;

const PoiCategoryButton = forwardRef((props, ref) => {
	const { iconName, label, ...omittedProps } = props;
	const themeContext = useContext(ThemeContext);

	return (
		<StyledButton ref={ref} boxShadow="md" {...omittedProps}>
			<StyledIcon
				name={iconName}
				iconSize="xl"
				color={themeContext.colors.miscBadgeIconColor || 'white'}
			/>
			<TextContainer>
				<Text
					color={themeContext.colors.miscBadgeIconColor || 'white'}
					fontSize="md"
					fontWeight="normal"
					lineHeight="27px"
					limitLinesOfTextTo={1}
				>
					{label}
				</Text>
			</TextContainer>
		</StyledButton>
	);
});

PoiCategoryButton.displayName = 'Poi Category Button';

PoiCategoryButton.defaultProps = {
	'data-cy': 'PoiCategoryButton', // component name
	iconName: 'eat',
};

export default PoiCategoryButton;

PoiCategoryButton.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	iconName: PropTypes.string,
	label: PropTypes.string.isRequired,
};
