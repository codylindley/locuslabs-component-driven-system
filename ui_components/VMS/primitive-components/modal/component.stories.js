/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '@locus-labs/vms-secondary-button';
import Box from '@locus-labs/vms-box';

import componentDocumentation from './docs.mdx';
import Modal from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Modal',
	component: Modal,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=9275%3A0',
		},
	},
};

export const Default = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</Button>
			<Modal open={open} onClose={() => setOpen(false)}>
				Modal Content
			</Modal>
		</>
	);
};

export const WithoutCloseButton = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</Button>
			<Modal hideCloseBtn open={open} onClose={() => setOpen(false)}>
				Modal Content
			</Modal>
		</>
	);
};

export const WithoutBackdrop = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</Button>
			<Modal open={open} onClose={() => setOpen(false)} showBackdrop={false}>
				Modal Content
			</Modal>
		</>
	);
};

export const Labels = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</Button>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				primaryLabel="Primary Label"
				secondaryLabel="Secondary Label"
			>
				Modal Content
			</Modal>
		</>
	);
};

export const Widths = () => {
	const [openId, setOpenId] = useState(null);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpenId(0)}>
				Default
			</Button>
			<br />
			<br />
			<Button data-cy="OpenModalButton" onClick={() => setOpenId(1)}>
				40rem
			</Button>
			<br />
			<br />
			<Button data-cy="OpenModalButton" onClick={() => setOpenId(2)}>
				100%
			</Button>

			<Modal open={openId === 0} onClose={() => setOpenId(null)}>
				Default Width
			</Modal>
			<Modal open={openId === 1} onClose={() => setOpenId(null)} width="40rem">
				Width 40rem
			</Modal>
			<Modal open={openId === 2} onClose={() => setOpenId(null)} width="100%">
				Width 100%
			</Modal>
		</>
	);
};

export const FullScreen = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</Button>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				primaryLabel="Primary Label"
				secondaryLabel="Secondary Label"
				isFullScreen={true}
			>
				This is a full screen modal
			</Modal>
		</>
	);
};

export const ForceUserSelection = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</Button>
			<Modal
				closeOnlyWithUserInput
				open={open}
				onClose={() => setOpen(null)}
				actions={[
					{
						label: 'I Close',
						closeOnClick: true,
						buttonType: 'secondary',
					},
					{
						label: 'I Close too',
						closeOnClick: true,
						buttonType: 'primary',
					},
				]}
			>
				Modal Content
			</Modal>
		</>
	);
};

export const HideOnClickOrEscKey = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</Button>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				primaryLabel="Primary Label"
				secondaryLabel="Secondary Label"
			>
				I hide on ESC key
			</Modal>
		</>
	);
};

export const Overflow = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</Button>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				actions={[
					{
						label: 'Secondary Button',
						buttonType: 'secondary',
						onClick: () => {
							alert('Secondary Example');
						},
					},
					{
						label: 'Primary Button',
						buttonType: 'primary',
						onClick: () => {
							alert('Primary Example');
						},
					},
				]}
			>
				<Box fontSize="xxl" fontWeight="bld">
					What is Lorem Ipsum?
				</Box>
				<br />
				<Box width="30rem">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum
				</Box>
				<br />
				<Box fontSize="xxl" fontWeight="bld">
					Where does it come from?
				</Box>
				<br />
				<Box width="30rem">
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
					Evil) by Cicero, written in 45 BC. This book is a treatise on the
					theory of ethics, very popular during the Renaissance. The first line
					of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
					section 1.10.32. The standard chunk of Lorem Ipsum used since the
					1500s is reproduced below for those interested. Sections 1.10.32 and
					1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
					reproduced in their exact original form, accompanied by English
					versions from the 1914 translation by H. Rackham.
				</Box>
			</Modal>
		</>
	);
};

export const Actions = () => {
	const [openId, setOpenId] = useState(null);

	return (
		<>
			<Button data-cy="OpenModalButton" onClick={() => setOpenId(0)}>
				Primary
			</Button>
			<br />
			<br />
			<Button data-cy="OpenModalButton" onClick={() => setOpenId(1)}>
				Secondary
			</Button>
			<br />
			<br />
			<Button data-cy="OpenModalButton" onClick={() => setOpenId(2)}>
				Outline
			</Button>
			<br />
			<br />
			<Button data-cy="OpenModalButton" onClick={() => setOpenId(3)}>
				Destructive
			</Button>
			<br />
			<br />
			<Button data-cy="OpenModalButton" onClick={() => setOpenId(4)}>
				Two Actions
			</Button>
			<br />
			<br />
			<Button data-cy="OpenModalButton" onClick={() => setOpenId(5)}>
				Close On Click
			</Button>

			<Modal
				open={openId === 0}
				onClose={() => setOpenId(null)}
				actions={[
					{
						label: 'Primary Button',
						buttonType: 'primary',
						closeOnClick: true,
						onClick: () => {
							alert('Example');
						},
					},
				]}
			>
				Modal Content
			</Modal>
			<Modal
				open={openId === 1}
				onClose={() => setOpenId(null)}
				actions={[
					{
						label: 'Secondary Button',
						buttonType: 'secondary',
						onClick: () => {
							alert('Example');
						},
					},
				]}
			>
				Modal Content
			</Modal>
			<Modal
				open={openId === 2}
				onClose={() => setOpenId(null)}
				actions={[
					{
						label: 'Outline Button',
						buttonType: 'outline',
						onClick: () => {
							alert('Example');
						},
					},
				]}
			>
				Modal Content
			</Modal>
			<Modal
				open={openId === 3}
				onClose={() => setOpenId(null)}
				actions={[
					{
						label: 'Destructive Button',
						buttonType: 'destructive',
						onClick: () => {
							alert('Example');
						},
					},
				]}
			>
				Modal Content
			</Modal>
			<Modal
				open={openId === 4}
				onClose={() => setOpenId(null)}
				actions={[
					{
						label: 'Secondary Button',
						buttonType: 'secondary',
						onClick: () => {
							alert('Secondary Example');
						},
					},
					{
						label: 'Primary Button',
						buttonType: 'primary',
						onClick: () => {
							alert('Primary Example');
						},
					},
				]}
			>
				Modal Content
			</Modal>
			<Modal
				open={openId === 5}
				onClose={() => setOpenId(null)}
				actions={[
					{
						label: 'I Close',
						closeOnClick: true,
						buttonType: 'secondary',
					},
					{
						label: 'I Close too',
						closeOnClick: true,
						buttonType: 'primary',
					},
				]}
			>
				Modal Content
			</Modal>
		</>
	);
};
