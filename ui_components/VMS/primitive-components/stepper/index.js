import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@locus-labs/vms-tooltip';
import Box from '@locus-labs/vms-box';
import Badge from '@locus-labs/vms-badge';
import CircleButton from '@locus-labs/vms-circle-button';
import styled, { useTheme, css } from 'styled-components';
import { theme } from 'styled-tools';
import {
	background,
	border,
	color,
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	typography,
	compose,
} from 'styled-system';

export const itemStatus = {
	COMPLETED: 'completed',
	ACTIVE: 'active',
	INACTIVE: 'inactive',
};

const ConnectorLine = styled(Box)`
	flex-shrink: 0;
	border-top: solid 1px;
	margin: 4px;
	height: 0;
	width: 32px;
	border-color: ${({ isActive, isCompleted }) =>
		isActive || isCompleted
			? theme('colors.primaryButtonHover', '#000000')
			: theme('colors.secondaryButton', '#000000')};
`;

const StepsContainer = styled(Box)`
	display: flex;
	align-items: center;
	padding: 26px 0;
	${compose(
		background,
		border,
		color,
		flexbox,
		grid,
		layout,
		position,
		shadow,
		space,
		typography
	)};
`;

const StyledBadge = styled(Badge)`
	position: absolute;
	top: -6px;
	left: -6px;
`;

const noActiveCircleButtonStyles = css`
	cursor: inherit;
	border: ${`solid 1px ${theme('colors.secondaryButton', '#000000')}`};
	background-color: ${({ isActive, isCompleted }) =>
		isActive || isCompleted
			? theme('colors.primaryButton', '#000000')
			: '#F9F9F9'};
	color: ${({ isActive, isCompleted }) =>
		isActive || isCompleted
			? theme('colors.primaryButtonText', '#FFFFFF')
			: theme('colors.secondaryText', '#000000')};
`;

const StyledCircleButton = styled(CircleButton)`
	div {
		line-height: 20px;
	}
	${noActiveCircleButtonStyles};
	&:hover:not(:disabled) {
		${noActiveCircleButtonStyles};
		background-color: ${({ isActive, isCompleted }) =>
			(isActive || isCompleted) &&
			theme('colors.primaryButtonHover', '#FFFFFF')};
	}
`;

const Stepper = forwardRef(({ items, onStepClick, ...omittedProps }, ref) => {
	const theme = useTheme();

	return (
		<StepsContainer ref={ref} {...omittedProps}>
			{items?.map((item, index) => (
				<Box
					display="flex"
					alignItems="center"
					key={index}
					data-cy="StepContainer"
				>
					{index > 0 && (
						<ConnectorLine
							data-cy="ConnectorLine"
							isActive={item.status === itemStatus.ACTIVE}
							isCompleted={item.status === itemStatus.COMPLETED}
						/>
					)}
					<Tooltip content={item.tooltipContent} placement="bottom">
						<Box
							data-cy="Step"
							position="relative"
							onClick={() => onStepClick?.(index)}
						>
							{item.status === itemStatus.COMPLETED && (
								<StyledBadge
									size="xs"
									iconName="tick"
									iconColor={theme.colors.statusSuccessText || '#FFFFFF'}
									fill={theme.colors.statusSuccessBackground || '#000000'}
								/>
							)}
							<StyledCircleButton
								size="small"
								isActive={item.status === itemStatus.ACTIVE}
								isCompleted={item.status === itemStatus.COMPLETED}
							>
								{`${index + 1}`}
							</StyledCircleButton>
						</Box>
					</Tooltip>
				</Box>
			))}
		</StepsContainer>
	);
});

Stepper.displayName = 'Stepper';

Stepper.defaultProps = {
	'data-cy': 'Stepper', // component name
};

Stepper.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			tooltipContent: PropTypes.string,
			status: PropTypes.oneOf(Object.values(itemStatus)),
		})
	).isRequired,
	onStepClick: PropTypes.func,
};

export default Stepper;
