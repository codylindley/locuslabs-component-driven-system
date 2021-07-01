import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import {
	border,
	shadow,
	layout as ssLayout,
	compose,
	space,
} from 'styled-system';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';
import Icon from '@locus-labs/mok-icon';

const layouts = {
	iconOnly: 'iconOnly',
	textOnly: 'textOnly',
	iconAndPrimaryText: 'iconTextOne',
	iconAndSecondaryText: 'iconTextTwo',
};

const layoutToContainerProps = {
	[layouts.iconOnly]: {
		padding: '0px 16px',
		width: '64px',
	},
	[layouts.textOnly]: {
		padding: '0px 20px',
		maxWidth: '310px',
	},
	[layouts.iconAndPrimaryText]: {
		padding: '0px 20px',
		minWidth: '109px',
	},
	[layouts.iconAndSecondaryText]: {
		padding: '0px 20px',
		maxWidth: '310px',
	},
};

const layoutToTextContainerProps = {
	[layouts.textOnly]: {
		fontSize: 'md',
		fontWeight: 'semiBold',
		lineHeight: '27px',
		maxWidth: '271px',
	},
	[layouts.iconAndPrimaryText]: {
		lineHeight: '24px',
		fontSize: 'sm',
		fontWeight: 'semiBold',
		maxWidth: '237px',
		ml: '10px',
	},
	[layouts.iconAndSecondaryText]: {
		lineHeight: '24px',
		fontSize: 'sm',
		fontWeight: 'semiBold',
		ml: '12px',
	},
};

const StyledButton = styled('button')`
	outline: none;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 56px;
	color: ${theme('colors.primaryButton', '#000000')};
	background-color: ${theme('colors.primaryButtonText', '#FFFFFF')};

	&:active {
		color: ${theme('colors.primaryButtonText')};
		background-color: ${theme('colors.primaryButtonHover')};
	}

	${compose(border, shadow, ssLayout, space)}
`;

const getLayout = (icon, primaryLabel, secondaryLabel) => {
	if (icon && primaryLabel && secondaryLabel)
		return layouts.iconAndSecondaryText;
	if (icon && primaryLabel) return layouts.iconAndPrimaryText;
	if (icon) return layouts.iconOnly;
	return layouts.textOnly;
};

const PrimaryNavigationButton = forwardRef((props, ref) => {
	const {
		iconName,
		primaryLabel,
		secondaryLabel,
		type,
		borderRadius,
		onClick,
		onInfoButtonClick,
		...omittedProps
	} = props;
	const icon = !iconName && !primaryLabel ? 'home' : iconName;
	const layout = getLayout(icon, primaryLabel, secondaryLabel);
	const isAdminMode = type === 'admin';

	return (
		<Box display="inline-block" ref={ref} {...omittedProps}>
			<Box display="flex">
				<StyledButton
					data-cy="PrimaryNavigationButtonContainer"
					boxShadow="lg"
					borderRadius={
						borderRadius || (isAdminMode && '4px 0px 0px 4px') || '4px'
					}
					onClick={onClick}
					{...(layoutToContainerProps[layout] || {})}
				>
					{icon && <Icon name={icon} iconSize="sm" narrow />}
					<Box
						data-cy="TextContainer"
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						{...(layoutToTextContainerProps[layout] || {})}
					>
						{primaryLabel && (
							<Text
								data-cy="PrimaryLabel"
								fontSize="inherit"
								fontWeight="inherit"
								lineHeight="inherit"
								limitLinesOfTextTo={1}
							>
								{primaryLabel}
							</Text>
						)}
						{secondaryLabel && (
							<Text
								data-cy="SecondaryLabel"
								fontSize="xs"
								fontWeight="normal"
								lineHeight="21px"
								limitLinesOfTextTo={1}
							>
								{secondaryLabel}
							</Text>
						)}
					</Box>
				</StyledButton>
				{isAdminMode && (
					<PrimaryNavigationButton
						data-cy="PrimaryNavigationButtonAdmin"
						iconName="help.outline"
						onClick={onInfoButtonClick}
						borderRadius="0px 4px 4px 0px"
						width="unset"
					/>
				)}
			</Box>
		</Box>
	);
});

PrimaryNavigationButton.displayName = 'PrimaryNavigationButton';

PrimaryNavigationButton.defaultProps = {
	'data-cy': 'PrimaryNavigationButton',
	type: 'default',
};

export default PrimaryNavigationButton;

PrimaryNavigationButton.propTypes = {
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
	iconName: PropTypes.string,
	type: PropTypes.oneOf(['default', 'admin']),
	primaryLabel: PropTypes.string,
	secondaryLabel: PropTypes.string,
	onClick: PropTypes.func,
	onInfoButtonClick: PropTypes.func,
};
