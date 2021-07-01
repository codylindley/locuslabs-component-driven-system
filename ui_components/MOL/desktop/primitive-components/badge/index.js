import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import Icon from '@locus-labs/mol-desktop-icon';
import Box from '@locus-labs/mol-desktop-box';
import styledSystemPropTypes from '@styled-system/prop-types';
import {
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	compose,
} from 'styled-system';

const BadgeStyled = styled('div')`
	display: inline-block;
	width: ${(props) =>
		props.size ? props.theme.iconSizes[props.size] + 'px' : '36px'};
	height: ${(props) =>
		props.size ? props.theme.iconSizes[props.size] + 'px' : '36px'};
	position: relative;
	${compose(flexbox, grid, layout, position, shadow, space)};
`;

const Badge = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	return (
		<BadgeStyled ref={ref} {...props}>
			<Box position="absolute">
				<svg
					width={themeContext.iconSizes[props.size] || 36}
					height={themeContext.iconSizes[props.size] || 36}
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.5 16C0.5 24.5604 7.43959 31.5 16 31.5C24.5604 31.5 31.5 24.5604 31.5 16C31.5 7.43959 24.5604 0.5 16 0.5C7.43959 0.5 0.5 7.43959 0.5 16Z"
						fill={props.fill || themeContext.colors.categoryBadgeEat || 'black'}
						stroke={
							props.border || themeContext.colors.miscBadgeIconStroke || 'white'
						}
					/>
				</svg>
			</Box>

			<Box position="absolute">
				<Icon
					color={
						props.iconColor || themeContext.colors.miscBadgeIconColor || 'white'
					}
					name={props.iconName || undefined}
					iconSize={props.size || 'lg'}
					degreesOfIconRotation={props.degreesOfIconRotation || 0}
				/>
			</Box>
		</BadgeStyled>
	);
});

Badge.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.flexbox,
	...styledSystemPropTypes.grid,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	fill: PropTypes.string,
	border: PropTypes.string,
	size: PropTypes.string,
	iconName: PropTypes.string.isRequired,
	iconColor: PropTypes.string,
	degreesOfIconRotation: PropTypes.number,
};

Badge.displayName = 'Badge';

Badge.defaultProps = {
	'data-cy': 'Badge', // component name
};

export default Badge;
