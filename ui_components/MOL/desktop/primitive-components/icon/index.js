import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import { ReactSVG } from 'react-svg';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';
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

const setFillPropToCurrentColor = (el) =>
	el?.setAttribute?.('fill', 'currentColor');

const errorIcon = (p /* props */, t /* theme */) => {
	const iconDimensions = p.iconSize
		? p.iconSize.match('sm|md|lg|xl|xxl') // reference theme values
			? t.iconSizes[p.iconSize] // theme value
			: p.iconSize.replace(/[\D]/g, '') == false //not theme value, so is it a number
			? t.iconSizes.md //not a number, so use default from theme
			: p.iconSize.replace(/[\D]/g, '') // a number, so use that number
		: t.iconSizes.md; // no iconSize value so use default from theme
	return (
		<StyledSVGBox size={`${iconDimensions}px`} {...p}>
			<svg
				title="Error Loading Icon" // cypress looks for this value
				focusable={p.focusable || false}
				role={p.role || 'presentation'}
				style={{ color: 'red' }}
				fill="currentColor"
				width={`${iconDimensions}px`}
				height={`${iconDimensions}px`}
				viewBox="0 0 24 24"
			>
				<g stroke="currentColor" strokeWidth="1.5">
					<path
						strokeLinecap="full"
						fill="none"
						d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
					></path>
					<path
						fill="none"
						strokeLinecap="full"
						d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
					></path>
					<circle
						fill="none"
						strokeMiterlimit="10"
						cx="12"
						cy="12"
						r="11.25"
					></circle>
				</g>
			</svg>
		</StyledSVGBox>
	);
};

const StyledSVGBox = styled('div')`
	transform: ${(props) => {
		const rotation = props.degreesOfIconRotation
			? `rotate(${props.degreesOfIconRotation}deg)`
			: '';
		const flip =
			props.flipOnXAxis && props.flipOnXAxis !== false ? 'scaleX(-1);' : '';
		const transformValue = `${rotation} ${flip}`;
		return transformValue === '' ? 'none' : transformValue;
	}};
	/* Styled System Overrides Everything always comes last */
	${compose(background, border, color, layout, position, shadow, space)}
`;

const StyledSVG = styled('svg')`
	transform: ${(props) => {
		const rotation = props.degreesOfIconRotation
			? `rotate(${props.degreesOfIconRotation}deg)`
			: '';
		const flip =
			props.flipOnXAxis && props.flipOnXAxis !== false ? 'scaleX(-1);' : '';
		const transformValue = `${rotation} ${flip}`;
		return transformValue === '' ? 'none' : transformValue;
	}};
	/* Styled System Overrides Everything always comes last */
	${compose(background, border, color, layout, position, shadow, space)}
`;

const Icon = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const isIconColored = props?.name?.includes('.color');

	const iconDimensions = props.iconSize
		? props.iconSize.match('sm|md|lg|xl|xxl') // reference theme values
			? themeContext.iconSizes[props.iconSize] // theme value
			: props.iconSize.replace(/[\D]/g, '') == false //not theme value, so is it a number
			? themeContext.iconSizes.md //not a number, so use default from theme
			: props.iconSize.replace(/[\D]/g, '') // a number, so use that number
		: themeContext.iconSizes.md; // no iconSize value so use default from theme

	const iconWidth = props.narrow
		? themeContext.narrowIconSizes[props.iconSize] ||
		  themeContext.narrowIconSizes.md
		: iconDimensions;

	const viewBox = props.viewBox || (props.narrow && '5 0 22 32');

	return (
		<>
			{/* given an icon name it will try and get it from "iconBaseURL"" defined in theme */}
			{props.name && props.isUsingIconFromTheme === undefined && (
				<StyledSVGBox
					ref={ref}
					width={`${iconWidth}px`}
					height={`${iconDimensions}px`}
					{...props}
				>
					<ReactSVG
						focusable={props.focusable || false}
						role={props.role || 'presentation'}
						beforeInjection={(svg) => {
							svg.setAttribute(
								'style',
								'flex-shrink: 0;  backface-visibility: hidden;'
							);
							svg.setAttribute('stroke-width', '0');
							svg.setAttribute('width', props.width || `${iconWidth}px`);
							svg.setAttribute('height', props.height || `${iconDimensions}px`);
							if (viewBox) svg.setAttribute('viewBox', viewBox);
							if (!isIconColored) {
								setFillPropToCurrentColor(svg);
								svg.children?.forEach?.(setFillPropToCurrentColor);
							}
						}}
						src={`${themeContext.iconBaseURL}${props.name}.svg`}
						fallback={() => {
							return errorIcon(props, themeContext);
						}}
					/>
				</StyledSVGBox>
			)}
			{/* this will pull local svg paths for icons from the theme */}
			{props.name &&
				props.isUsingIconFromTheme === true &&
				themeContext.icons[props.name] && (
					<StyledSVG
						title="Icon From Theme"
						fallback={() => {
							return errorIcon(props, themeContext);
						}}
						ref={ref}
						fill="currentColor"
						focusable={props.focusable || false}
						role={props.role || 'presentation'}
						strokeWidth="0"
						width={`${iconDimensions}px`}
						height={`${iconDimensions}px`}
						viewBox="0 0 32 32"
						{...props}
					>
						{themeContext.icons[props.name].path}
					</StyledSVG>
				)}
			{/* what you get when you don't provide an icon name */}
			{props.name === undefined && errorIcon(props, themeContext)}
		</>
	);
});

Icon.displayName = 'Icon';

Icon.defaultProps = {
	'data-cy': 'Icon', // component name
	narrow: false,
};

Icon.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	name: PropTypes.string.isRequired,
	isUsingIconFromTheme: PropTypes.bool,
	role: PropTypes.string,
	focusable: PropTypes.bool,
	iconSize: PropTypes.string,
	degreesOfIconRotation: PropTypes.number,
	flipOnXAxis: PropTypes.bool,
	narrow: PropTypes.bool,
};

export default Icon;
