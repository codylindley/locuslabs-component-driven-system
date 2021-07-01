import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import Badge from '@locus-labs/mod-badge';
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
import { prop } from 'styled-tools';

const PinStyled = styled('div')`
	display: inline-block;
	width: ${prop('width')};
	height: ${prop('height')};
	position: relative;
	${compose(flexbox, grid, layout, position, shadow, space)};
`;

const Pin = forwardRef((props, ref) => {
	const {
		type,
		iconName,
		border,
		fill,
		iconColor,
		badgeFillColor,
		badgeBorderColor,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);

	const sizes = {
		editor: {
			width: '22px',
			height: '28px',
			strokeWidth: '1',
			badgeTopMargin: '2px',
		},
		display: {
			width: '42px',
			height: '56px',
			strokeWidth: '2',
			badgeTopMargin: '4px',
		},
	};

	return (
		<PinStyled
			ref={ref}
			width={sizes[type].width}
			height={sizes[type].height}
			{...omittedProps}
		>
			<Box position="absolute">
				<svg
					data-cy="PinShape"
					width={sizes[type].width}
					height={sizes[type].height}
					viewBox="0 0 42 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M31 52.5C31 54.4329 26.5225 56 21 56C15.4775 56 11 54.4329 11 52.5C11 50.5671 15.4775 49 21 49C26.5225 49 31 50.5671 31 52.5Z"
						fill="#231F20"
						fillOpacity="0.3"
					/>
					<path
						d="M37.5431 28.929L37.5429 28.9295C36.0307 31.3672 33.9893 33.4114 31.6495 35.7362C31.1451 36.237 30.6308 36.7321 30.1027 37.2403L30.1021 37.2409L30.1 37.2429L30.0896 37.2528L30.0875 37.2549L30.0663 37.2752C26.7781 40.4395 23.1833 43.8989 21.0003 50C18.8215 43.9082 15.236 40.4562 11.9533 37.2956L11.9346 37.2776L11.9323 37.2754L11.9222 37.2656L11.9199 37.2634C11.3843 36.7478 10.8626 36.2453 10.3511 35.7368L10.3509 35.7366C8.01099 33.4115 5.96953 31.3675 4.45733 28.9297L4.45707 28.9292C2.78226 26.2322 2 23.418 2 19.9864C2 14.9235 3.96464 10.1646 7.55103 6.57366C11.1387 2.98145 15.9093 1 21 1C26.0907 1 30.8613 2.98145 34.4491 6.57367C38.0353 10.1646 40 14.9235 40 19.9864C40 23.418 39.2179 26.232 37.5431 28.929Z"
						fill={fill || themeContext.colors.miscSelectedbgColor || '#FFFFFF'}
						stroke={
							border || themeContext.colors.miscSelectedbgStroke || '#000000'
						}
						strokeWidth={sizes[type].strokeWidth}
					/>
				</svg>
			</Box>

			<Box
				position="absolute"
				top={sizes[type].badgeTopMargin}
				display="flex"
				justifyContent="center"
				left="0"
				right="0"
			>
				<Badge
					iconColor={
						iconColor || themeContext.colors.miscBadgeIconColor || 'black'
					}
					fill={
						badgeFillColor || themeContext.colors.categoryBadgeEat || 'black'
					}
					border={badgeBorderColor}
					iconName={iconName}
					size={type}
					small
					degreesOfIconRotation={props.degreesOfIconRotation || 0}
				/>
			</Box>
		</PinStyled>
	);
});

Pin.displayName = 'Pin';

Pin.defaultProps = {
	'data-cy': 'Pin', // component name
	iconName: 'eat',
	type: 'display',
};

Pin.propTypes = {
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
	iconName: PropTypes.string,
	iconColor: PropTypes.string,
	badgeFillColor: PropTypes.string,
	badgeBorderColor: PropTypes.string,
	degreesOfIconRotation: PropTypes.number,
	type: PropTypes.oneOf(['editor', 'display']),
};

export default Pin;
