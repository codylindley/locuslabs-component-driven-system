import { forwardRef, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import { theme, ifProp, ifNotProp } from 'styled-tools';
import Box from '@locus-labs/vms-box';
import Text from '@locus-labs/vms-text';

const StyledContainer = styled(Box)`
	position: relative;
	width: 34px;
	padding: 2px;
	background-color: ${ifProp(
		'enabled',
		theme('colors.statusActiveBackground', '#000000'),
		theme('colors.secondaryButton', '#FFFFFF')
	)};
	color: ${ifProp(
		'enabled',
		theme('colors.statusActiveBackground', '#FFFFFF'),
		theme('colors.secondaryText', '#000000')
	)};
	&:hover {
		background-color: ${ifNotProp(
			'enabled',
			theme('colors.secondaryButtonHover'),
			null
		)};
	}
	transition-property: background-color;
	transition-duration: 0.5s;
	transition-delay: 0s;
	transition-timing-function: linear;
	border-radius: 16px;
`;

const StyledCircle = styled(Box)`
	position: relative;
	left: ${ifProp('enabled', '50%', '0')};
	height: 16px;
	width: 16px;
	background-color: ${theme('colors.background', '#FFFFFF')};
	border-radius: 50%;
	transition-property: left;
	transition-duration: 0.5s;
	transition-delay: 0s;
	transition-timing-function: linear;
`;

const StyledText = styled(Text)`
	line-height: 24px;
	text-align: left;
	padding-left: 16px;
	color: ${ifProp(
		'enabled',
		theme('colors.primaryText', '#000000'),
		theme('colors.secondaryText', '#000000')
	)};
`;

const ToggleSwitch = forwardRef((props, ref) => {
	const { enabled, label, onChange } = props;
	const [isEnabled, setIsEnabled] = useState(false);

	const theme = useContext(ThemeContext);

	useEffect(() => {
		setIsEnabled(enabled);
	}, [enabled]);

	const handleOnClick = () => {
		setIsEnabled(!isEnabled);
		onChange(!isEnabled);
	};

	return (
		<Box display="inline-block" ref={ref} onClick={handleOnClick} {...props}>
			<Box display="flex" alignItems="center">
				<StyledContainer
					data-cy="ToggleSwitchControl"
					enabled={isEnabled}
					theme={theme}
				>
					<StyledCircle
						data-cy="ToggleSwitchIndicator"
						enabled={isEnabled}
						theme={theme}
					/>
				</StyledContainer>
				<StyledText
					data-cy="ToggleSwitchLabel"
					fontSize="xl"
					fontWeight="medium"
					enabled={isEnabled}
				>
					{label}
				</StyledText>
			</Box>
		</Box>
	);
});

ToggleSwitch.displayName = 'Toggle Switch';

ToggleSwitch.defaultProps = {
	'data-cy': 'ToggleSwitch', // component name
	enabled: false,
};

ToggleSwitch.propTypes = {
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
	enabled: PropTypes.bool,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func,
};

export default ToggleSwitch;
