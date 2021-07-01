import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/vms-text';
import PrimaryButton from '@locus-labs/vms-primary-button';
import SecondaryButton from '@locus-labs/vms-secondary-button';
import DestructiveButton from '@locus-labs/vms-destructive-button';
import OutlineButton from '@locus-labs/vms-outline-button';
import Icon from '@locus-labs/vms-icon';
import Box from '@locus-labs/vms-box';

import { useDialogState, Dialog, DialogBackdrop } from 'reakit/Dialog';

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
import { ifProp, theme } from 'styled-tools';

const actionButtonType = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
	OUTLINE: 'outline',
	DESTRUCTIVE: 'destructive',
};

const buttonTypeToButton = {
	[actionButtonType.PRIMARY]: PrimaryButton,
	[actionButtonType.SECONDARY]: SecondaryButton,
	[actionButtonType.DESTRUCTIVE]: DestructiveButton,
	[actionButtonType.OUTLINE]: OutlineButton,
};

const StyledDialogBackdrop = styled(DialogBackdrop)`
	background-color: ${ifProp(
		'showBackdrop',
		'rgba(32, 37, 48, 0.6)',
		'transparent'
	)};
	backdrop-filter: ${ifProp('showBackdrop', 'blur(50px)', 'none')};
	position: fixed;
	inset: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledCloseIcon = styled(Icon)`
	cursor: pointer;
	position: absolute;
	top: 16px;
	right: 16px;
	color: ${theme('colors.secondary', '#000000')};
`;

const StyledDialog = styled(Dialog)`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 40px;
	z-index: 999;
	--dialogHeight: ${ifProp('isFullScreen', 'calc(100% - 80px)', '98px')};
	--dialogWidth: ${ifProp('isFullScreen', 'calc(100% - 80px)', '400px')};
	min-height: var(--dialogHeight);
	min-width: var(--dialogWidth);
	max-height: ${ifProp(
		'isFullScreen',
		'calc(100% - 80px)',
		'calc(100% - 120px)'
	)};
	max-width: ${ifProp(
		'isFullScreen',
		'calc(100% - 80px)',
		'calc(100% - 120px)'
	)};
	background-color: ${theme('colors.background', '#FFFFFF')};
	box-shadow: ${theme('shadows.md')};
	border-radius: ${ifProp('isFullScreen', '0px', theme('radii.md'))};

	&:focus {
		outline: none;
	}

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

const ModalContent = styled(Box)`
	margin: 24px 0px;
	overflow-y: auto;
	padding-right: 18px;
`;

/*function _Modal() {
	const dialog = useDialogState();
	return (
		<>
			<DialogDisclosure {...dialog}>Open dialog</DialogDisclosure>
			<DialogBackdrop {...dialog}>
				<Dialog {...dialog} aria-label="Welcome">
					Welcome to Reakit!
				</Dialog>
			</DialogBackdrop>
		</>
	);
}*/

const Modal = forwardRef((props, ref) => {
	const {
		children,
		open,
		primaryLabel,
		secondaryLabel,
		onClose,
		actions,
		hideCloseBtn,
		showBackdrop,
		isFullScreen,
		closeOnlyWithUserInput,
		...omittedProps
	} = props;
	const dialog = useDialogState();
	const theme = useTheme();

	const { visible } = dialog;

	useEffect(() => {
		if (!visible) onClose?.();
	}, [visible]);

	useEffect(() => {
		(open ? dialog.show : dialog.hide)?.();
	}, [open]);

	return (
		<StyledDialogBackdrop
			ref={ref}
			showBackdrop={showBackdrop}
			{...dialog}
			data-cy="ModalBackdrop"
		>
			<StyledDialog
				data-cy="ModalDialog"
				aria-label="modal-window"
				tabIndex={0}
				isFullScreen={isFullScreen}
				hideOnClickOutside={!closeOnlyWithUserInput}
				hideOnEsc={!closeOnlyWithUserInput}
				{...omittedProps}
				{...dialog}
			>
				{!hideCloseBtn && !closeOnlyWithUserInput && (
					<StyledCloseIcon
						data-cy="ModalCloseIcon"
						name="close"
						iconSize="lg"
						onClick={dialog.hide}
					/>
				)}
				{primaryLabel && (
					<Text
						data-cy="ModalPrimaryLabel"
						fontSize="xl"
						fontWeight="bold"
						color={theme.colors.primaryText || '#000000'}
					>
						{primaryLabel}
					</Text>
				)}
				{secondaryLabel && (
					<Text
						data-cy="ModalSecondaryLabel"
						fontSize="lg"
						fontWeight="medium"
						color={theme.colors.secondaryText || '#000000'}
						mt="2px"
					>
						{secondaryLabel}
					</Text>
				)}
				<ModalContent data-cy="ModalContent">{children}</ModalContent>
				{actions?.length && (
					<Box
						data-cy="ModalActionsContainer"
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						mt="auto"
					>
						{actions
							?.slice?.(0, 3)
							?.map?.(({ label, buttonType, onClick, closeOnClick }, index) => {
								const CustomButton = buttonTypeToButton[buttonType];
								return (
									<CustomButton
										key={index}
										ml={index > 0 ? '40px' : undefined}
										onClick={(e) => {
											onClick?.(e);
											if (closeOnClick) dialog.hide();
										}}
									>
										{label}
									</CustomButton>
								);
							})}
					</Box>
				)}
			</StyledDialog>
		</StyledDialogBackdrop>
	);
});

Modal.propTypes = {
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
	hideCloseBtn: PropTypes.bool,
	showBackdrop: PropTypes.bool,
	isFullScreen: PropTypes.bool,
	children: PropTypes.node.isRequired,
	open: PropTypes.bool,
	onClose: PropTypes.func,
	primaryLabel: PropTypes.string,
	secondaryLabel: PropTypes.string,
	closeOnlyWithUserInput: PropTypes.bool,
	actions: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			buttonType: PropTypes.oneOf(Object.values(actionButtonType)),
			onClick: PropTypes.func,
			closeOnClick: PropTypes.bool,
		})
	),
};

Modal.displayName = 'Modal';

Modal.defaultProps = {
	'data-cy': 'Modal', // component name
	hideCloseBtn: false,
	showBackdrop: true,
	isFullScreen: false,
	closeOnlyWithUserInput: false,
};

export default Modal;
