import { forwardRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mok-box';
import Icon from '@locus-labs/mok-icon';
import Text from '@locus-labs/mok-text';

const StyledWrapper = styled(Box)`
	background-color: ${({ theme, isHovered }) =>
		rgba(theme.colors.primaryButton, isHovered ? 0.25 : 0.1)};
`;

const StyledControl = styled(Box)`
	display: flex;
	align-items: center;
	cursor: pointer;
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
					isActive
						? themeContext.colors.primaryButton || '#FFFFFF'
						: 'transparent'
				}
				color={
					isActive
						? themeContext.colors.primaryButtonText
						: themeContext.colors.primaryButton
				}
				width="50%"
				height="48px"
				padding="8px 8px"
				justifyContent="center"
			>
				{iconName && (
					<Box height="32px" flexShrink="0" mr="8px">
						<Icon
							name={iconName}
							iconSize="sm"
							narrow
							color={
								isActive
									? themeContext.colors.primaryButtonText
									: themeContext.colors.primaryButton
							}
						/>
					</Box>
				)}
				<Text
					fontSize="md"
					fontWeight="500"
					lineHeight="32px"
					limitLinesOfTextTo={1}
				>
					{text}
				</Text>
			</StyledControl>
		);
	};

	return (
		<Box
			background={themeContext.colors.background}
			width="360px"
			height="48px"
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
