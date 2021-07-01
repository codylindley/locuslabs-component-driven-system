import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@locus-labs/mok-text';
import Icon from '@locus-labs/mok-icon';
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

export const iconPositions = {
	left: 'left',
	right: 'right',
};

const StyledModalButton = styled('button')`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 16px;
	background-color: ${({ theme }) => theme.colors.primaryButton || '#000000'};
	color: ${({ theme }) => theme.colors.primaryButtonText || '#FFFFFF'};
	width: 100%;
	height: 63px;
	min-height: 63px;
	border: none;
	cursor: pointer;
	&:focus {
		outline: none;
		border: none;
	}

	&:active {
		outline: none;
		border: none;
		background-color: ${({ theme }) => theme.colors.primaryButtonHover};
	}

	/* Styled System Overrides Everything always comes last */
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

export const ModalButton = (props) => {
	const { label, icon, iconPosition, ...omittedProps } = props;

	const iconToLeft = iconPosition === iconPositions.left;

	return (
		<StyledModalButton data-cy="ModalButton" {...omittedProps}>
			{icon && iconToLeft && (
				<Icon
					data-cy="ModalButtonIcon"
					name={icon || 'reserve'}
					mr="8px"
					iconSize="sm"
					narrow
				/>
			)}
			<Text
				data-cy="ModalButtonLabel"
				as="div"
				fontSize={icon ? 'sm' : 'md'}
				fontWeight="semiBold"
				lineHeight={icon ? '24px' : '27px'}
				limitLinesOfTextTo={1}
			>
				{label}
			</Text>
			{icon && !iconToLeft && (
				<Icon
					data-cy="ModalButtonIcon"
					name={icon || 'reserve'}
					ml="8px"
					iconSize="sm"
					narrow
				/>
			)}
		</StyledModalButton>
	);
};

ModalButton.defaultProps = {
	iconPosition: iconPositions.left,
};

ModalButton.propTypes = {
	icon: PropTypes.string,
	iconPosition: PropTypes.oneOf(Object.values(iconPositions)),
	label: PropTypes.string,
};
