import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/vms-text';
import Box from '@locus-labs/vms-box';
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
import { ifNotProp, ifProp, theme } from 'styled-tools';

const Container = styled(Box)`
	display: inline-block;
	cursor: pointer;
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

const StyledRadio = styled(Box)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	height: 16px;
	width: 16px;
	border: solid 1px;
	color: ${theme('colors.primaryText', '#000000')};
	background-color: ${({ selected }) => {
		if (!selected) return theme('colors.textInputBG' || '#FFFFFF');
		return ifProp(
			'disabled',
			theme('colors.secondaryButton', '#000000'),
			theme('colors.primaryButton')
		);
	}};
	border-color: ${({ selected }) => {
		if (!selected) return theme('colors.secondaryButton' || '#000000');
		return ifProp(
			'disabled',
			theme('colors.secondaryButton', '#000000'),
			theme('colors.primaryButton')
		);
	}};
	&:hover {
		background-color: ${({ disabled }) => {
			if (disabled) return;
			ifProp(
				'selected',
				theme('colors.primaryButtonHover'),
				theme('colors.secondaryButton')
			);
		}};
		border-color: ${ifNotProp('selected', theme('colors.primaryButton'))};
	}
`;

const Ellipse = styled(Box)`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	flex-shrink: 0;
	background-color: ${theme('colors.primaryButtonText' || '#FFFFFF')};
`;

const Label = styled(Text)`
	display: inline-flex;
	margin-left: 12px;
	line-height: 20px;
	color: ${({ disabled }) => {
		return !disabled
			? theme('colors.primaryText', '#FFFFFF')
			: ifProp(
					'selected',
					theme('colors.primaryText', '#000000'),
					theme('colors.secondaryText', '#000000')
			  );
	}};
`;

const Radio = forwardRef((props, ref) => {
	const { label, selected, disabled, onRadioChange, ...omittedProps } = props;

	const handleChangeSelected = () => {
		if (disabled) return;
		onRadioChange?.(!selected);
	};

	return (
		<Container ref={ref} onClick={handleChangeSelected} {...omittedProps}>
			<Box display="flex" alignItems="center">
				<StyledRadio
					data-cy="RadioButton"
					borderRadius="full"
					selected={selected}
					disabled={disabled}
				>
					{selected && <Ellipse data-cy="RadioEllipse" />}
				</StyledRadio>
				<Label
					data-cy="RadioLabel"
					fontSize="lg"
					fontWeight="light"
					disabled={disabled}
					selected={selected}
				>
					{label}
				</Label>
			</Box>
		</Container>
	);
});

Radio.displayName = 'Radio';

Radio.defaultProps = {
	'data-cy': 'Radio', // component name
	selected: false,
	disabled: false,
};

Radio.propTypes = {
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
	selected: PropTypes.bool,
	disabled: PropTypes.bool,
	onRadioChange: PropTypes.func,
};

export default Radio;
