/* eslint-disable react/prop-types */
import { useState } from 'react';
import Box from '@locus-labs/mok-box';

import componentDocumentation from './docs.mdx';
import Modal from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Primitive Components/Modal',
	component: Modal,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6446%3A6',
		},
	},
};

export const Default = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</button>
			<Modal open={open} onClose={() => setOpen(false)}>
				Modal Content
			</Modal>
		</>
	);
};

export const ActionButton = () => {
	const [index, setIndex] = useState(null);
	const handleOnClose = () => setIndex(null);

	return (
		<>
			<button data-cy="OpenModalButton" onClick={() => setIndex(0)}>
				With label
			</button>
			<Modal
				open={index === 0}
				onClose={handleOnClose}
				actionButton={{
					label: 'Continue',
					onClick: () => alert('Clicked'),
				}}
			>
				Modal Content
			</Modal>
			<br />
			<br />
			<button data-cy="OpenModalButton" onClick={() => setIndex(1)}>
				With label and icon to left (default)
			</button>
			<Modal
				open={index === 1}
				onClose={handleOnClose}
				actionButton={{
					label: 'Continue',
					icon: 'home',
					onClick: () => alert('Clicked'),
				}}
			>
				Modal Content
			</Modal>
			<br />
			<br />
			<button data-cy="OpenModalButton" onClick={() => setIndex(2)}>
				With label and icon to right
			</button>
			<Modal
				open={index === 2}
				onClose={handleOnClose}
				actionButton={{
					label: 'Continue',
					icon: 'home',
					iconPosition: 'right',
					onClick: () => alert('Clicked'),
				}}
			>
				Modal Content
			</Modal>
			<br />
			<br />
			<button data-cy="OpenModalButton" onClick={() => setIndex(3)}>
				With long label
			</button>
			<Modal
				open={index === 3}
				onClose={handleOnClose}
				actionButton={{
					onClick: () => alert('Clicked'),
					label:
						'When the text label goues beyond the minimum pixel padding left and has a lot of words asdasddsf asdasd d asdf asdf asasd asd a asdf asd asada',
				}}
			>
				Modal Content
			</Modal>
			<br />
			<br />
			<button data-cy="OpenModalButton" onClick={() => setIndex(4)}>
				With long label and icon
			</button>
			<Modal
				open={index === 4}
				onClose={handleOnClose}
				actionButton={{
					onClick: () => alert('Clicked'),
					label:
						'When the text label goues beyond the minimum pixel padding left and has a lot of words asdasddsf asdasd d asdf asdf asasd asd a asdf asd asada',
					icon: 'home',
				}}
			>
				Modal Content
			</Modal>
		</>
	);
};

export const WithoutCloseButton = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</button>
			<Modal hideCloseButton open={open} onClose={() => setOpen(false)}>
				Modal Content
			</Modal>
		</>
	);
};

export const WithoutBackdrop = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</button>
			<Modal open={open} onClose={() => setOpen(false)} hideBackdrop>
				Modal Content
			</Modal>
		</>
	);
};

export const Overflow = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<button data-cy="OpenModalButton" onClick={() => setOpen(!open)}>
				Open modal
			</button>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				actionButton={{
					label: 'Continue',
				}}
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
