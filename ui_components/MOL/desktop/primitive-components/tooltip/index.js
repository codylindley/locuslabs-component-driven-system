import { cloneElement, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { css, keyframes } from 'styled-components';
import {
	background,
	border,
	color,
	layout,
	shadow,
	space,
	typography,
	compose,
	position,
} from 'styled-system';
import {
	useTooltipState,
	Tooltip as ReakitToolTip,
	TooltipArrow,
	TooltipReference,
} from 'reakit/Tooltip';
import { theme, prop } from 'styled-tools';

const blinkKeyframes = keyframes`
  100% {
    opacity: 1;
  }
  80% {
    opacity: .8;
  }
  60% {
    opacity: .6;
  }
  40% {
    opacity: .4;
  }
  20% {
    opacity: .2;
  }
  40% {
    opacity: .4;
  }
  80% {
    opacity: .8;
  }
  100% {
    opacity: 1;
  }
`;

const StyledReakitToolTip = styled(ReakitToolTip).withConfig({
	shouldForwardProp: (prop) =>
		![
			'tooltipZIndex',
			'onShowOpacityAnimation',
			'onHideOpacityAnimation',
			'onShowDelayDuration',
			'onHideDelayDuration',
			'backgroundColor',
			'arrowColor',
			'borderColor',
			'zIndex',
		].includes(prop),
})`
	color: ${theme('colors.toolTipText')};
	line-height: 18px;
	text-align: center;
	font-size: ${theme('fontSizes.md')};
	z-index: ${prop('tooltipZIndex')};
	max-width: 260px;
	background-color: ${theme('colors.toolTipBackground')};
	padding: 8px;
	border: 1px solid ${theme('colors.toolTipBackground')};
	border-radius: ${theme('radii.lg')};
	box-shadow: ${theme('shadows.xl')};
	font-family: ${theme('fonts.default')};
	opacity: 0;
	&[data-enter] {
		transition-property: opacity;
		transition-duration: ${prop('onShowOpacityAnimation.duration')}ms;
		transition-timing-function: ${prop('onShowOpacityAnimation.timing')};
		transition-delay: ${prop('onShowDelayDuration')}ms;
		opacity: 1;
	}
	&[data-leave] {
		transition-property: opacity;
		transition-duration: ${prop('onHideOpacityAnimation.duration')}ms;
		transition-timing-function: ${prop('onHideOpacityAnimation.timing')};
		transition-delay: ${prop('onHideDelayDuration')}ms;
	}
	&.blink {
		animation: ${blinkKeyframes} 300ms ease-in-out 1;
	}

	/* Styled System Overrides Everything always comes last */
	${compose(
		background,
		border,
		color,
		layout,
		shadow,
		space,
		typography,
		position
	)}
`;

const ToolTipArrowStyles = css`
	fill: ${prop('fill', theme('colors.toolTipBackground'))};
	stroke: transparent;
	border: none;
	& svg > .stroke {
		display: none;
	}
`;

const Tooltip = forwardRef((props, ref) => {
	const {
		cancelTooltip,
		clickingTriggerBlinksTooltip,
		onFirstRenderShowTooltip,
		...omittedProps
	} = props;

	// if no content, simply return the children
	if (!props.content) return props.children;

	const tooltipState = useTooltipState({
		placement: props.placement || 'left',
		gutter: props.gutter + 10 || 14,
		visible: onFirstRenderShowTooltip ? true : false,
		animated: true,
	});

	// needed to fix position of tooltip when content prop changes
	useEffect(() => {
		tooltipState.unstable_update();
	}, [props.content]);

	useEffect(() => {
		if (
			onFirstRenderShowTooltip &&
			onFirstRenderShowTooltip.triggerMouseoutAfterXSeconds &&
			onFirstRenderShowTooltip.triggerMouseoutAfterXSeconds !== undefined
		) {
			setTimeout(() => {
				var evt = document.createEvent('MouseEvents');
				evt.initMouseEvent(
					'mouseout',
					true,
					true,
					window,
					0,
					0,
					0,
					0,
					0,
					false,
					false,
					false,
					false,
					0,
					null
				);
				tooltipState.unstable_referenceRef.current.dispatchEvent(evt);
			}, onFirstRenderShowTooltip.triggerMouseoutAfterXSeconds);
		}
	}, []);

	return (
		<>
			{/* wrap trigger with div that will trigger blink */}
			<div
				style={{ display: 'inline-flex', width: '100%' }}
				onClick={() => {
					if (
						clickingTriggerBlinksTooltip === false ||
						tooltipState.animating === true
					) {
						return false;
					}
					const tooltipInDOM = document.getElementById(tooltipState.baseId);
					tooltipInDOM.classList.add('blink');
					setTimeout(() => {
						tooltipInDOM.classList.remove('blink');
					}, 300);
				}}
			>
				{typeof props.children === 'string' ? (
					/* if tooltip trigger is just a string of text */
					<TooltipReference {...tooltipState}>
						<div
							style={{ display: 'inline-block', width: '100%' }}
							data-cy="TooltipTrigger"
						>
							{props.children}
						</div>
					</TooltipReference>
				) : (
					/* if tooltip trigger is not a string of text i.e. text in the DOM */
					<TooltipReference
						{...tooltipState}
						ref={props.children.ref}
						{...props.children.props}
					>
						{(referenceProps) => {
							return (
								<div
									data-cy="TooltipTrigger"
									style={{ display: 'inline-block', width: '100%' }}
								>
									{cloneElement(props.children, referenceProps)}
								</div>
							);
						}}
					</TooltipReference>
				)}
			</div>
			{cancelTooltip ? null : onFirstRenderShowTooltip.sticky ? (
				<StyledReakitToolTip
					id={tooltipState.baseId} // used by blink prop
					{...tooltipState}
					visible={true}
					ref={ref}
					{...omittedProps}
				>
					<TooltipArrow
						data-cy="TooltipArrow"
						{...tooltipState}
						size="35px"
						css={ToolTipArrowStyles}
						fill={props.arrowColor}
					/>
					{props.content}
				</StyledReakitToolTip>
			) : (
				<StyledReakitToolTip
					id={tooltipState.baseId} // used by blink prop
					{...tooltipState}
					ref={ref}
					{...omittedProps}
				>
					<TooltipArrow
						data-cy="TooltipArrow"
						{...tooltipState}
						size="35px"
						css={ToolTipArrowStyles}
						fill={props.arrowColor}
					/>
					{props.content}
				</StyledReakitToolTip>
			)}
		</>
	);
});

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
	'data-cy': 'Tooltip', // component name
	tooltipZIndex: 20100,
	onHideDelayDuration: 200,
	onShowDelayDuration: 500,
	onShowOpacityAnimation: { duration: 200, timing: 'ease' },
	onHideOpacityAnimation: { duration: 200, timing: 'ease' },
	clickingTriggerBlinksTooltip: false,
	onFirstRenderShowTooltip: false,
};

export default Tooltip;

Tooltip.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.node,
	]).isRequired,
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.node,
	]).isRequired,
	onFirstRenderShowTooltip: PropTypes.oneOfType([
		PropTypes.shape({
			triggerMouseoutAfterXSeconds: PropTypes.number,
			sticky: PropTypes.bool,
		}),
		PropTypes.bool,
	]),
	placement: PropTypes.oneOf([
		'auto-start',
		'auto',
		'auto-end',
		'top-start',
		'top',
		'top-end',
		'right-start',
		'right',
		'right-end',
		'bottom-end',
		'bottom',
		'bottom-start',
		'left-end',
		'left',
		'left-start',
	]),
	gutter: PropTypes.number,
	tooltipZIndex: PropTypes.number,
	cancelTooltip: PropTypes.bool,
	onShowDelayDuration: PropTypes.number,
	onHideDelayDuration: PropTypes.number,
	onShowOpacityAnimation: PropTypes.shape({
		duration: PropTypes.number,
		timing: PropTypes.string,
	}),
	onHideOpacityAnimation: PropTypes.shape({
		duration: PropTypes.number,
		timing: PropTypes.string,
	}),
	triggerMouseOutEventToHideTooltip: PropTypes.shape({
		triggerMouseoutAfterXSeconds: PropTypes.number,
	}),
	clickingTriggerBlinksTooltip: PropTypes.bool,
};
