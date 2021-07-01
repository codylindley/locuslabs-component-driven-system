import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import Icon from '@locus-labs/vms-icon';
import Box from '@locus-labs/vms-box';
import styledSystemPropTypes from '@styled-system/prop-types';
import {
	background,
	border,
	color,
	layout,
	position,
	shadow,
	space,
	typography,
	display,
	compose,
} from 'styled-system';

const badgeSizes = {
	xs: '16px',
	sm: '20px',
	md: '24px',
	lg: '28px',
	xl: '32px',
};

const BadgeStyled = styled(Box)`
	display: inline-block;
	width: ${(props) =>
		props.size
			? props.size.match('xs|sm|md|lg|xl') // reference theme values
				? badgeSizes[props.size] // theme value
				: props.size.replace(/[\D]/g, '') == false // not theme value, so is it a number
				? badgeSizes['md'] // not a number, so use default from theme
				: props.size.replace(/[\D]/g, '') // a number, so use that number
			: badgeSizes['md']};
	height: ${(props) =>
		props.size
			? props.size.match('xs|sm|md|lg') // reference theme values
				? badgeSizes[props.size] // theme value
				: props.size.replace(/[\D]/g, '') == false // not theme value, so is it a number
				? badgeSizes['md'] // not a number, so use default from theme
				: props.size.replace(/[\D]/g, '') // a number, so use that number
			: badgeSizes['md']};
	position: relative;

	${compose(
		background,
		border,
		color,
		layout,
		position,
		shadow,
		space,
		typography,
		display
	)}
`;

const Badge = forwardRef((props, ref) => {
	const {
		fill,
		border,
		iconName,
		iconColor,
		degreesOfIconRotation,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);
	const badgeDimensions = props.size
		? props.size.match('xs|sm|md|lg|xl') // reference theme values
			? badgeSizes[props.size] // theme value
			: props.size.replace(/[\D]/g, '') == false // not theme value, so is it a number
			? badgeSizes['md'] // not a number, so use default from theme
			: props.size.replace(/[\D]/g, '') // a number, so use that number
		: badgeSizes['md'];

	return (
		<BadgeStyled ref={ref} {...omittedProps}>
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
						fill={fill || themeContext.colors.categoryBadgeEat || 'black'}
						stroke={
							border || themeContext.colors.miscBadgeIconStroke || 'white'
						}
					/>
				</svg>
			</Box>
			<Box position="absolute">
				<Icon
					color={iconColor || themeContext.colors.miscBadgeIconColor || 'white'}
					name={iconName || undefined}
					iconSize={badgeDimensions}
					degreesOfIconRotation={degreesOfIconRotation || 0}
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
