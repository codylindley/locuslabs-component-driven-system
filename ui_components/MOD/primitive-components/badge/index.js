import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import Icon from '@locus-labs/mod-icon';
import Box from '@locus-labs/mod-box';
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
		props.size
			? props.size.match('editor|display') // reference theme values
				? props.badgeSizes[props.size] // theme value
				: props.size.replace(/[\D]/g, '') == false //not theme value, so is it a number
				? props.badgeSizes['display'] //not a number, so use default from theme
				: props.size.replace(/[\D]/g, '') // a number, so use that number
			: props.badgeSizes['display']};
	height: ${(props) =>
		props.size
			? props.size.match('editor|display') // reference theme values
				? props.badgeSizes[props.size] // theme value
				: props.size.replace(/[\D]/g, '') == false //not theme value, so is it a number
				? props.badgeSizes['display'] //not a number, so use default from theme
				: props.size.replace(/[\D]/g, '') // a number, so use that number
			: props.badgeSizes['display']};
	position: relative;
	${compose(flexbox, grid, layout, position, shadow, space)};
`;

const Badge = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);

	const badgeSizes = {
		editor:
			(props.small ? themeContext.iconSizes.xs : themeContext.iconSizes.sm) +
			'px',
		display:
			(props.small ? themeContext.iconSizes.md : themeContext.iconSizes.lg) +
			'px',
	};

	const badgeDimensions = props.size
		? props.size.match('editor|display') // reference theme values
			? badgeSizes[props.size] // theme value
			: props.size.replace(/[\D]/g, '') == false //not theme value, so is it a number
			? badgeSizes['display'] //not a number, so use default from theme
			: props.size.replace(/[\D]/g, '') // a number, so use that number
		: badgeSizes['display'];
	return (
		<BadgeStyled ref={ref} badgeSizes={badgeSizes} {...props}>
			<Box position="absolute">
				<svg
					width={badgeDimensions}
					height={badgeDimensions}
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.5 16C0.5 24.5604 7.43959 31.5 16 31.5C24.5604 31.5 31.5 24.5604 31.5 16C31.5 7.43959 24.5604 0.5 16 0.5C7.43959 0.5 0.5 7.43959 0.5 16Z"
						fill={
							props.fill || themeContext.colors.categoryBadgeBaggage || 'black'
						}
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
					iconSize={badgeDimensions}
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
	small: PropTypes.bool,
};

Badge.displayName = 'Badge';

Badge.defaultProps = {
	'data-cy': 'Badge', // component name
	size: 'display',
	small: false,
};

export default Badge;
