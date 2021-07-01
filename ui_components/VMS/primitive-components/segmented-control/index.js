import { forwardRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import Box from '@locus-labs/vms-box';
import Text from '@locus-labs/vms-text';

const StyledWrapper = styled(Box)`
	background-color: ${ifProp(
		'isHovered',
		theme('colors.secondaryButton', '#FFFFFF'),
		theme('colors.widgetBackground', '#FFFFFF')
	)};
	border-color: ${theme('colors.textInputBG', '#FFFFFF')};
	border-width: 1px;
	border-style: solid;
	border-radius: ${theme('borderRadius', '6px')};
	min-width: 232px;
`;

const StyledControl = styled(Box)`
	display: flex;
	align-items: center;
	cursor: pointer;
	border-radius: ${theme('borderRadius', '6px')};
`;

const SegmentedControl = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const { controls: allControls, onControlClick, ...omittedProps } = props;
	const [isHovered, setIsHovered] = useState(false);
	const controls = allControls.slice(0, 2);

	const getControlView = ({ index, text, isActive = false }) => {
		return (
			<StyledControl
				data-cy="Control"
				key={index}
				onClick={() => {
					setIsHovered(false);
					onControlClick(index);
				}}
				onMouseEnter={() => !isActive && setIsHovered(true)}
				onMouseLeave={() => !isActive && setIsHovered(false)}
				backgroundColor={
					isActive
						? themeContext.colors.primaryButton || '#000000'
						: 'transparent'
				}
				color={
					isActive
						? themeContext.colors.primaryButtonText || '#FFFFFF'
						: isHovered
						? themeContext.colors.primaryText || '#FFFFFF'
						: themeContext.colors.secondaryText || '#FFFFFF'
				}
				width="50%"
				height="38px"
				padding="8px 16px"
				justifyContent="center"
			>
				<Text
					fontSize="lg"
					fontWeight="light"
					lineHeight="24px"
					limitLinesOfTextTo={1}
				>
					{text}
				</Text>
			</StyledControl>
		);
	};

	return (
		<Box borderRadius="6px" minWidth="232px">
			<StyledWrapper
				ref={ref}
				display="flex"
				alignItems="center"
				isHovered={isHovered}
				{...omittedProps}
			>
				{controls.map((control, index) =>
					getControlView({ index, ...control })
				)}
			</StyledWrapper>
		</Box>
	);
});

SegmentedControl.propTypes = {
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
	controls: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			isActive: PropTypes.bool,
		})
	).isRequired,
	onControlClick: PropTypes.func.isRequired,
};

SegmentedControl.displayName = 'Segmented Control';

SegmentedControl.defaultProps = {
	'data-cy': 'SegmentedControl', // component name
};

export default SegmentedControl;
