import { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';
import styledSystemPropTypes from '@styled-system/prop-types';
import Icon from '@locus-labs/mok-icon';
import Box from '@locus-labs/mok-box';
import { useDialogState, Dialog, DialogBackdrop } from 'reakit/Dialog';
import { ModalButton, iconPositions } from './subcomponents';

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

const StyledCloseIcon = styled(Icon)`
	cursor: pointer;
	position: absolute;
	color: ${theme('colors.secondary', '#000000')};
	top: 16px;
	right: 16px;
`;

const StyledDialog = styled(Dialog)`
	display: flex;
	flex-direction: column;
	position: relative;
	max-height: 90%;
	z-index: 999;
	background-color: ${theme('colors.background', '#FFFFFF')};
	box-shadow: ${theme('shadows.md')};

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
	margin: 64px 16px;
	padding: 0 44px;
	overflow-y: auto;
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
				hideOnEsc={false}
				{...omittedProps}
				{...dialog}
			>
				{!hideCloseButton && (
					<StyledCloseIcon
						data-cy="ModalCloseIcon"
						name="close"
						iconSize="xl"
						onClick={dialog.hide}
					/>
				)}
				<ModalContent data-cy="ModalContent">{children}</ModalContent>
				{actionButton && <ModalButton {...actionButton} />}
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
		icon: PropTypes.string,
		iconPosition: PropTypes.oneOf(Object.values(iconPositions)),
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
