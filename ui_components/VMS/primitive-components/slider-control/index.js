import { forwardRef, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import { layout, display } from 'styled-system';
import Box from '@locus-labs/vms-box';
import styled, { css } from 'styled-components';
import { ifProp, theme } from 'styled-tools';

const grabCSS = css`
	cursor: grab;
	cursor: -webkit-grab;
	cursor: -moz-grab;
`;

const grabbingCSS = css`
	cursor: grabbing;
	cursor: -webkit-grabbing;
	cursor: -moz-grabbing;
`;

const Container = styled(Box)`
	display: inline-block;
	${layout};
	${display};
`;

const SliderContainer = styled(Box)`
	position: relative;
	align-items: center;
	min-width: 100px;
	height: 20px;
	width: inherit;
`;

const Bar = styled(Box)`
	position: absolute;
	border-radius: 10px;
	top: 8px;
	height: 4px;
	pointer-events: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

const TrackBar = styled(Bar)`
	right: 0;
	background-color: ${theme('colors.secondaryButton', '#FFFFFF')};
`;

const ProgressBar = styled(Bar)`
	left: 0;
	background-color: ${({ theme, disabled, hovering }) =>
		theme.colors[
			disabled
				? 'secondaryButtonHover'
				: hovering
				? 'primaryButtonHover'
				: 'primaryButton'
		] || '#000000'};
`;

const Knob = styled(Box)`
	z-index: 1;
	position: absolute;
	top: 0;
	border-radius: 50%;
	box-shadow: ${theme('shadows.lg')};
	background-color: ${theme('colors.background', '#FFFFFF')};
	&:active {
		border: ${ifProp(
			'disabled',
			'none',
			`solid 1px ${theme('colors.primaryButton', '#FFFFFF')}`
		)};
	}
	&:focus {
		outline: none;
	}
	-webkit-user-drag: none;
	-webkit-user-select: none;
	cursor: ${({ disabled, grabbing }) =>
		disabled ? 'cursor' : grabbing ? grabbingCSS : grabCSS};
`;

/**
 * The SliderControl component's state props e.g. "grabbing" or "knobLeftPosition" values,
 * are not accessible inside the document listeners such as "handleMouseMove". However,
 * by using refs, we can access such values using the ref's "current" prop.
 */
const makeRefs = (setRefState) => {
	const refState = useRef(null);

	return [
		refState,
		(value) => {
			refState.current = value;
			setRefState(value);
		},
	];
};

const getValue = (value, min, max) => {
	if (value === undefined && min) return min;
	if (value < min) return min;
	if (value > max) return max;
	return value;
};

const SliderControl = forwardRef((props, ref) => {
	const { value, min, max, onChange, disabled, ...omittedProps } = props;

	/**
	 * Get a fresh "clientWidth" value.
	 */
	const getWidth = () => sliderRef?.current?.clientWidth;

	/**
	 * 	Given the left position of the knob, calculate and return the new Slider's value.
	 */
	const getValueFromLeftPosition = (left) =>
		Math.floor((left * (max - min)) / getWidth() + min);

	/**
	 * 	Given the Slider's value, calculate and return new left position of the knob.
	 */
	const getLeftPositionFromValue = (val) =>
		((val - min) / (max - min)) * getWidth();

	const sliderRef = useRef(null);
	const [hovering, setIsHovering] = useState(false);

	/**
	 * "grabbing" represents whether the user is grabbing the knob or not.
	 */
	const [grabbing, _setGrabbing] = useState(false);
	const [grabbingRef, setGrabbing] = makeRefs(_setGrabbing);

	/**
	 * "mouseX" value is used to calculate the value in the case the mouse leaves
	 * the component. See the "handleMouseMove" function for usage.
	 */
	const [, _setMouseX] = useState(0);
	const [mouseXRef, setMouseX] = makeRefs(_setMouseX);

	/**
	 * "knobLeftPosition" represents the left property's value of the knob.
	 */
	const [knobLeftPosition, _setKnobLeftPos] = useState(0);
	const [knobLeftPositionRef, setKnobLeftPosition] = makeRefs(_setKnobLeftPos);

	/**
	 * Sets the new knob left position and and calls onChange after an update
	 * on the knob
	 */
	const handleKnobUpdate = (left) => {
		setKnobLeftPosition(left);
		onChange?.(getValueFromLeftPosition(left));
	};

	/**
	 * Calculate and set "knobLeftPosition" and "clientX" values when the user
	 * clicks on the slider(not necessarily grabbing the knob).
	 */
	const handleSliderMouseDown = ({ clientX, currentTarget }) => {
		if (disabled) return;

		const left = clientX - currentTarget.getBoundingClientRect().left;
		if (left < 0) {
			handleKnobUpdate(0);
			return;
		}

		const currentWidth = getWidth();
		if (left > currentWidth) {
			handleKnobUpdate(currentWidth);
			return;
		}

		handleKnobUpdate(left);
		setMouseX(clientX);
	};

	/**
	 * Calculate and set "knobLeftPosition" and "clientX" values when the user
	 * drags the knob. This account for edge cases such as when the mouse leaves
	 * the SliderControl component, e.g. the user starts grabbing and leaves the
	 * component without releasing the click.
	 */
	const handleMouseMove = ({ clientX }) => {
		if (!grabbingRef.current) return;

		const diff = clientX - mouseXRef.current;
		const currentValue = knobLeftPositionRef.current + diff;
		if (currentValue < 0) {
			handleKnobUpdate(0);
			return;
		}

		const currentWidth = getWidth();
		if (currentValue > currentWidth) {
			handleKnobUpdate(currentWidth);
			return;
		}

		handleKnobUpdate(currentValue);
		setMouseX(clientX);
	};

	/**
	 * On mouse down set "grabbing" to true and "mouseX" based on the event's "clientX" prop.
	 */
	const handleKnobMouseDown = ({ clientX }) => {
		if (disabled) return;

		setGrabbing(true);
		setMouseX(clientX);
	};

	/**
	 * On mouse up set "grabbing" to false.
	 */
	const handleMouseUp = () => {
		setGrabbing(false);
	};

	/**
	 * Add event listeners to the document because the slider's value and
	 * knob's position need to change even if the mouse leaves components,
	 * e.g. the user starts grabbing and leaves the component without
	 * releasing the click.
	 */
	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, []);

	/**
	 * If the slider's value changes, e.g. the parent component changes the
	 * value for the "value" prop, calculate knob's left position based on
	 * this value and set it as the new left position for the knob.
	 */
	useEffect(() => {
		const localValue = getValueFromLeftPosition(knobLeftPosition);
		const newValue = getValue(value, min, max);

		if (localValue !== newValue)
			setKnobLeftPosition(getLeftPositionFromValue(newValue));

		if (value !== newValue) onChange?.(newValue);
	}, [value]);

	return (
		<Container ref={ref} {...omittedProps}>
			<SliderContainer
				ref={sliderRef}
				onMouseDown={handleSliderMouseDown}
				disabled={disabled}
			>
				<ProgressBar
					data-cy="SliderControlProgressBar"
					disabled={disabled}
					hovering={hovering}
					style={{ right: `${getWidth() - knobLeftPosition}px` }}
				/>
				<Knob
					data-cy="SliderControlKnob"
					style={{ left: `${knobLeftPosition - 10}px` }}
					size="20px"
					grabbing={grabbing}
					onMouseDown={handleKnobMouseDown}
					onMouseOver={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
					disabled={disabled}
				/>
				<TrackBar
					style={{ left: `${knobLeftPosition}px` }}
					data-cy="SliderControlTrackBar"
				/>
			</SliderContainer>
		</Container>
	);
});

SliderControl.displayName = 'SliderControl';

SliderControl.defaultProps = {
	'data-cy': 'SliderControl', // component name
	min: 0,
	max: 100,
	disabled: false,
};

SliderControl.propTypes = {
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
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
};

export default SliderControl;
