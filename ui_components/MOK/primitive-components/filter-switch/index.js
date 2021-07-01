import { forwardRef, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import { ifProp, theme } from 'styled-tools';
import Box from '@locus-labs/mok-box';
import Text from '@locus-labs/mok-text';

const sides = {
	left: 'left',
	right: 'right',
};

const ControlContainer = styled(Box)`
	cursor: pointer;
	position: relative;
	width: 84px;
	height: 48px;
	padding: 6px;
	background-color: ${theme('colors.primaryButtonText', '#FFFFFF')};
	border-radius: 24px;
`;

const StyledCircle = styled(Box)`
	position: relative;
	left: ${ifProp({ side: sides.right }, '50%', '0')};
	height: 36px;
	width: 36px;
	background-color: ${theme('colors.primaryButton', '#000000')};
	border-radius: 50%;
	transition-property: left;
	transition-duration: 0.5s;
	transition-delay: 0s;
	transition-timing-function: linear;
`;

const Label = styled(Text)`
	line-height: 27px;
	color: ${theme('colors.primaryButtonText', '#FFFFFF')};
`;

const FilterSwitch = forwardRef((props, ref) => {
	const [side, setSides] = useState(sides.left);
	const { leftLabel, rightLabel, value, onChange, ...omittedProps } = props;
	const theme = useContext(ThemeContext);

	useEffect(() => {
		setSides(value === rightLabel ? sides.right : sides.left);
	}, [value]);

	const handleOnClick = () => {
		const newSide = side === sides.left ? sides.right : sides.left;
		setSides(newSide);
		onChange?.(newSide === sides.left ? leftLabel : rightLabel);
	};

	return (
		<Box display="inline-block" ref={ref} {...omittedProps}>
			<Box display="flex" alignItems="center">
				<Label
					data-cy="FilterSwitchLabel"
					fontSize="md"
					fontWeight={side === sides.left ? 'bold' : 'normal'}
					mr="20px"
				>
					{leftLabel}
				</Label>
				<ControlContainer
					data-cy="FilterSwitchControl"
					theme={theme}
					onClick={handleOnClick}
					boxShadow="md"
				>
					<StyledCircle
						data-cy="FilterSwitchIndicator"
						theme={theme}
						side={side}
						boxShadow="sm"
					/>
				</ControlContainer>
				<Label
					data-cy="FilterSwitchLabel"
					fontSize="md"
					fontWeight={side === sides.right ? 'bold' : 'normal'}
					ml="20px"
				>
					{rightLabel}
				</Label>
			</Box>
		</Box>
	);
});

FilterSwitch.displayName = 'FilterSwitch';

FilterSwitch.defaultProps = {
	'data-cy': 'FilterSwitch', // component name
};

FilterSwitch.propTypes = {
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
	leftLabel: PropTypes.string.isRequired,
	rightLabel: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default FilterSwitch;
