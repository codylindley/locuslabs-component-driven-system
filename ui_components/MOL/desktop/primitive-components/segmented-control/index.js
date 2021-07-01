import { forwardRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mol-desktop-box';
import Icon from '@locus-labs/mol-desktop-icon';
import Text from '@locus-labs/mol-desktop-text';
import { theme, withProp } from 'styled-tools';

const StyledWrapper = styled(Box)`
	background-color: ${withProp(
		['theme.colors.widgetText', 'isHovered'],
		(widgetText, isHovered) => rgba(widgetText, isHovered ? 0.25 : 0.1)
	)};
	border-radius: ${theme('radii.lg')};
`;

const StyledControl = styled(Box)`
	display: flex;
	align-items: center;
	cursor: pointer;
	border-radius: ${theme('radii.lg')};
`;

const SegmentedControl = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const { controls, onControlClick, ...omittedProps } = props;
	const [isHovered, setIsHovered] = useState(false);

	const getControlView = ({ index, iconName, text, isActive = false }) => {
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
					isActive ? themeContext.colors.widgetIcons : 'transparent'
				}
				color={
					isActive
						? themeContext.colors.widgetBackground
						: themeContext.colors.widgetIcons
				}
				width="50%"
				height="30px"
				padding="3px 8px"
				justifyContent="center"
			>
				{iconName && (
					<Icon
						name={iconName}
						iconSize="sm"
						color={
							isActive
								? themeContext.colors.widgetBackground
								: themeContext.colors.widgetIcons
						}
						mr="5px"
						narrow
					/>
				)}
				<Text
					fontSize="md"
					fontWeight="500"
					lineHeight="18px"
					limitLinesOfTextTo={1}
				>
					{text}
				</Text>
			</StyledControl>
		);
	};

	return (
		<Box
			borderRadius={themeContext.radii.lg}
			background={themeContext.colors.background}
			width="280px"
		>
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
			iconName: PropTypes.string,
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
