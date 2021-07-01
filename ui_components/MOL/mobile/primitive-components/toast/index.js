import { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { keyframes } from 'styled-components';
import Icon from '@locus-labs/mol-mobile-icon';
import Text from '@locus-labs/mol-mobile-text';
import Box from '@locus-labs/mol-mobile-box';
import { ifProp } from 'styled-tools';

const EASE_OUT_DURATION = 200;

const showKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledToast = styled(Box)`
	animation: ${showKeyframe} 100ms ease-in;

	&.hide {
		transition: opacity ${EASE_OUT_DURATION}ms ease-out;
		opacity: 0;
	}

	&.withVerticalTransition {
		transition: transform 200ms linear, opacity ${EASE_OUT_DURATION}ms ease-out;
	}

	&.withHorizontalTransition {
		transition: transform 500ms linear, opacity ${EASE_OUT_DURATION}ms ease-out;
	}
`;

const StyledText = styled(Text)`
	overflow: hidden;
	text-align: left;
	white-space: ${ifProp('limitLinesOfTextTo', 'normal', 'nowrap')};
`;

const Toast = forwardRef((props, ref) => {
	const [isVisible, setIsVisible] = useState(false);
	const toastRef = useRef(ref);
	const textRef = useRef();
	const [isTextSmall, setIsTextSmall] = useState(false);
	const [mousePos, setMousePos] = useState(null);
	const [isDragging, setIsDragging] = useState(false);
	let dragDirection = null;
	const directions = { horizontal: 'horizontal', vertical: 'vertical' };
	const {
		hideDelay,
		iconName,
		onToastDismiss,
		shouldDisplay,
		children,
		...omittedProps
	} = props;

	useEffect(() => {
		let id;
		if (shouldDisplay) {
			setIsVisible(true);
			if (toastRef && toastRef.current)
				toastRef.current.classList.remove('hide'); // remove fade out animation
		} else hideToast();
		return () => id && clearTimeout(id);
	}, [shouldDisplay]); // when parent requests visibility change

	useEffect(() => {
		let id;
		if (isVisible) {
			if (textRef && textRef.current)
				setIsTextSmall(
					textRef.current.offsetWidth < textRef.current.scrollWidth
				); // set text to small if it overflows container

			if (!hideDelay) return; // if the component shouldn't fade out after some delay, don't add animation
			id = setTimeout(() => {
				hideToast();
			}, hideDelay); // add delayed fade out when component becomes visible
		}
		return () => id && clearTimeout(id);
	}, [isVisible]); // when component visibility changes

	const hideToast = () => {
		if (toastRef && toastRef.current) toastRef.current.classList.add('hide'); // add fade-out animation
		setTimeout(() => {
			if (typeof onToastDismiss === 'function') onToastDismiss();
			setIsVisible(false);
		}, EASE_OUT_DURATION); // fire toast dismiss action and remove toast from DOM after animation has ended
	};

	const handleMouseDown = (e) => {
		e.preventDefault();

		if (e.type === 'touchstart') {
			setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
		} else {
			setMousePos({ x: e.clientX, y: e.clientY });
		}
		setIsDragging(true);

		toastRef.current.classList.remove(
			'withHorizontalTransition',
			'withVerticalTransition'
		);
		dragDirection = null;
	};
	const handleDrag = (e) => {
		e.preventDefault();
		if (!isDragging) return; // if the drag wasn't started, don't move the toast

		let currentX, currentY;
		if (e.type === 'touchmove') {
			currentX = e.touches[0].clientX;
			currentY = e.touches[0].clientY;
		} else {
			currentX = e.clientX;
			currentY = e.clientY;
		}

		// if drag direction wasn't detected yet
		if (dragDirection === null) {
			// handle both left and right
			if (Math.abs(currentX - mousePos.x) >= 10)
				dragDirection = directions.horizontal;
			else if (mousePos.y - currentY >= 10) dragDirection = directions.vertical; // handle only move to top
		}

		if (dragDirection === directions.horizontal) {
			// if drag was horizontal
			const moveBy =
				currentX > mousePos.x ? window.innerWidth : -window.innerWidth; // move to the right or left
			animateToastSwipe({
				direction: directions.horizontal,
				moveBy,
			});
		} else if (dragDirection === directions.vertical) {
			// if drag was vertical
			animateToastSwipe({
				direction: directions.vertical,
				moveBy: '-100%', // move only to the top
			});
		}
	};

	const animateToastSwipe = ({ direction, moveBy }) => {
		if (direction === directions.horizontal) {
			// if drag was horizontal
			toastRef.current.classList.add('withHorizontalTransition');
			toastRef.current.style.transform = `translateX(${moveBy}px)`;
			setTimeout(() => {
				hideToast();
			}, 300); // allow drag-off animation to play for 300ms before fade-out will be added
		} else if (direction === directions.vertical) {
			// if drag was vertical
			toastRef.current.classList.add('withVerticalTransition');
			toastRef.current.style.transform = `translateY(${moveBy})`;
			setTimeout(() => {
				hideToast();
			}, 100); // allow drag-off animation to play for 100ms before fade-out will be added
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	if (!isVisible) return null;
	return (
		<StyledToast
			ref={toastRef}
			onMouseDown={handleMouseDown}
			onTouchStart={handleMouseDown}
			onMouseMove={handleDrag}
			onTouchMove={handleDrag}
			onMouseUp={handleMouseUp}
			onMouseOut={handleMouseUp}
			onTouchEnd={handleMouseUp}
			display="flex"
			height="44px"
			width="100%"
			p="0px 4px"
			color="#ffffff"
			bg="#000"
			textAlign="center"
			alignItems="center"
			justifyContent="center"
			{...omittedProps}
		>
			<Icon
				name={iconName}
				iconSize="md"
				color={props.color || '#FFFFFF'}
				as="span"
				height="32px"
				width="32px"
				display="inline-block"
				marginRight="4px"
				position="relative"
				verticalAlign="middle"
			/>
			<StyledText
				data-cy="ToastText"
				ref={textRef}
				fontSize={isTextSmall ? 'sm' : 'md'}
				fontWeight="500"
				limitLinesOfTextTo={isTextSmall ? 1 : 0}
			>
				{children}
			</StyledText>
		</StyledToast>
	);
});

Toast.displayName = 'Toast';

Toast.defaultProps = {
	'data-cy': 'Toast', // component name
	hideDelay: 4000,
	iconName: 'info',
	children: 'This is a generic alert message',
	shouldDisplay: false,
};

Toast.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	hideDelay: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
	iconName: PropTypes.string,
	onToastDismiss: PropTypes.func,
	shouldDisplay: PropTypes.bool,
};

export default Toast;
