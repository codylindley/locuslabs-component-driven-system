import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import Icon from '@locus-labs/mol-desktop-icon';
import Box from '@locus-labs/mol-desktop-box';
import PrimaryButton from '@locus-labs/mol-desktop-primary-button';
import Tooltip from '@locus-labs/mol-desktop-tooltip';
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

const StyledDialogBackdrop = styled(DialogBackdrop)`
	background-color: ${ifProp(
		'hideBackdrop',
		'transparent',
		'rgba(0, 0, 0, 0.45)'
	)};
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

const StyledDialog = styled(Dialog)`
	display: flex;
	flex-direction: column;
	position: relative;
	max-height: 90%;
	z-index: 999;
	background-color: ${theme('colors.background', '#FFFFFF')};
	box-shadow: ${theme('shadows.md')};
	border-radius: 8px;

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

const StyledCloseIcon = styled(Icon)`
	cursor: pointer;
	position: absolute;
	color: ${theme('colors.secondaryText', '#000000')};
	top: 14px;
	right: 14px;
	&:hover {
		color: ${theme('colors.primaryText')};
	}
`;

const ModalContent = styled(Box)`
	margin: 64px 12px;
	padding: 0 18px;
	overflow-y: auto;
	${space};
`;

const Modal = forwardRef((props, ref) => {
	const {
		actionButton,
		children,
		open,
		onClose,
		hideCloseButton,
		hideBackdrop,
		...omittedProps
	} = props;
	const dialog = useDialogState();
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
			hideBackdrop={hideBackdrop}
			{...dialog}
			data-cy="ModalBackdrop"
		>
			<StyledDialog
				data-cy="ModalDialog"
				aria-label="modal-window"
				tabIndex={0}
				{...omittedProps}
				{...dialog}
			>
				{!hideCloseButton && (
					<Tooltip content="Close" placement="right" onHideDelayDuration={0}>
						<StyledCloseIcon
							data-cy="ModalCloseIcon"
							name="close"
							iconSize="md"
							onClick={dialog.hide}
						/>
					</Tooltip>
				)}
				<ModalContent
					{...(actionButton ? { mb: '24px' } : {})}
					data-cy="ModalContent"
				>
					{children}
				</ModalContent>
				{actionButton && (
					<PrimaryButton
						width="inherit"
						m="0 32px 32px 32px"
						onClick={actionButton?.onClick}
					>
						{actionButton?.label}
					</PrimaryButton>
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
	hideCloseButton: PropTypes.bool,
	hideBackdrop: PropTypes.bool,
	children: PropTypes.node.isRequired,
	open: PropTypes.bool,
	onClose: PropTypes.func,
	actionButton: PropTypes.shape({
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func,
	}),
};

Modal.displayName = 'Modal';

Modal.defaultProps = {
	'data-cy': 'Modal', // component name
	hideCloseButton: false,
	hideBackdrop: false,
};

export default Modal;
