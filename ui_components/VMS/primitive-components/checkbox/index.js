import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/vms-text';
import Box from '@locus-labs/vms-box';
import Icon from '@locus-labs/vms-icon';
import { theme } from 'styled-tools';

const CHECKBOX_SIZE = '16px';

const StyledCheckboxWrapper = styled(Box)`
	display: grid;
	grid-template-columns: min-content auto;
	grid-gap: 12px;
	align-items: center;
`;

const StyledCheckbox = styled('span')`
	display: grid;
	grid-template-areas: 'checkbox';
	width: ${CHECKBOX_SIZE};
	height: ${CHECKBOX_SIZE};

	> * {
		grid-area: checkbox;
	}
`;

const HiddenCheckbox = styled('input')`
	z-index: 1;
	opacity: 0;
	width: 100%;
	height: 100%;

	&[disabled] {
		cursor: not-allowed;
	}

	&:not([disabled]) {
		cursor: pointer;
	}
`;

const VisibleCheckbox = styled('span')`
	display: inline-grid;
	width: ${CHECKBOX_SIZE};
	height: ${CHECKBOX_SIZE};
	box-sizing: border-box;
	border-radius: ${theme('radii.sm')};
	border: 1px solid ${theme('colors.secondaryButton', '#000000')};
	background-color: ${theme('colors.textInputBG', '#FFFFFF')};
	position: relative;

	&:not(.disabled).hovered,
	&.focused {
		border: 1px solid ${theme('colors.primaryButton')};
		background-color: ${theme('colors.secondaryButton')};
	}

	&:not(.disabled).checked {
		background-color: ${theme('colors.primaryButton')};
		border: 1px solid ${theme('colors.primaryButton')};
	}

	&.disabled.checked {
		background-color: ${theme('colors.secondaryButton', '#000000')};
	}
`;

const StyledIcon = styled(Icon)`
	position: absolute;
	display: inline-flex;
	top: -1px;
	left: -1px;
	line-height: ${CHECKBOX_SIZE};
	color: ${theme('colors.primaryButtonText' || '#000000')};
`;

const StyledLabel = styled(Text)`
	font-size: ${theme('fontSizes.lg')};
	font-weight: 400;
	line-height: 20px;
	color: ${theme('colors.primaryText', '#000000')};

	&:not(.checked).disabled {
		color: ${theme('colors.secondaryText' || '#000000')};
	}
`;

const Checkbox = forwardRef((props, ref) => {
	const {
		iconName,
		label,
		isChecked,
		onCheckboxChange,
		disabled,
		...omittedProps
	} = props;

	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	return (
		<Box display="inline-block" ref={ref} {...omittedProps}>
			<StyledCheckboxWrapper as="label" data-cy="CheckboxWrapper">
				<StyledCheckbox>
					<HiddenCheckbox
						type="checkbox"
						name="checkbox"
						checked={isChecked}
						onChange={onCheckboxChange}
						disabled={disabled}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						aria-label={label}
					/>
					<VisibleCheckbox
						data-cy="VisibleCheckbox"
						className={[
							disabled && 'disabled',
							isChecked && 'checked',
							isHovered && 'hovered',
							isFocused && 'focused',
						]}
					>
						{isChecked && <StyledIcon name={iconName} iconSize="sm" />}
					</VisibleCheckbox>
				</StyledCheckbox>
				<StyledLabel
					data-cy="CheckboxLabel"
					className={[disabled && 'disabled', isChecked && 'checked']}
					limitLinesOfTextTo={2}
				>
					{label}
				</StyledLabel>
			</StyledCheckboxWrapper>
		</Box>
	);
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
	'data-cy': 'Checkbox', // component name
	iconName: 'tick',
	label: 'Add label!',
	isChecked: false,
	disabled: false,
};

Checkbox.propTypes = {
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
	label: PropTypes.string.isRequired,
	iconName: PropTypes.string,
	disabled: PropTypes.bool,
	isChecked: false,
	onCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
