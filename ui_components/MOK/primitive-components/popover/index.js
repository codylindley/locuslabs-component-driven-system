import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { ThemeContext } from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mok-box';
import Text from '@locus-labs/mok-text';
import Icon from '@locus-labs/mok-icon';

import {
	usePopoverState,
	Popover as ReakitPopover,
	PopoverDisclosure,
	PopoverArrow,
} from 'reakit/Popover';

const PopoverContainer = styled(Box)`
	position: relative;
	width: 500px;
	min-height: 202px;
	margin: -3px;
	padding: 35px 20px;
	border-radius: 6px;
	background-color: ${theme('colors.background', '#FFFFFF')};
`;

const IconWrapper = styled(Box)`
	position: absolute;
	cursor: pointer;
	top: 14px;
	right: 20px;
`;

const StyledPopoverArrow = styled(PopoverArrow)`
	svg {
		fill: ${theme('colors.background', '#FFFFFF')};
		filter: drop-shadow(${theme('shadows.md', undefined)});
	}
`;

const StyledPopover = styled(ReakitPopover)`
	outline: none;
	background: none;
	padding: 0;
	border-radius: 6px;
	box-shadow: ${theme('shadows.md', undefined)};
	border: 3px solid ${theme('colors.background', '#FFFFFF')};
	background-color: ${theme('colors.background', '#FFFFFF')};
`;

const Popover = forwardRef((props, ref) => {
	const {
		title,
		content,
		hideCloseBtn,
		onClose,
		hideOnClickOutside,
		placement,
		children,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);
	const popover = usePopoverState({ placement, gutter: 30 });

	const handleClose = () => {
		popover?.setVisible?.(false);
		onClose?.();
	};

	return (
		<>
			<PopoverDisclosure data-cy="PopoverDisclosure" as="div" {...popover}>
				{children}
			</PopoverDisclosure>
			<StyledPopover
				data-cy="StyledPopover"
				{...popover}
				aria-label={title || 'popover'}
				hideOnClickOutside={hideOnClickOutside}
			>
				<StyledPopoverArrow size={62} {...popover} />
				<PopoverContainer ref={ref} {...omittedProps}>
					{!hideCloseBtn && (
						<IconWrapper onClick={handleClose} data-cy="PopoverClose">
							<Icon
								name="close"
								iconSize="lg"
								color={themeContext.colors.secondary || '#000000'}
							/>
						</IconWrapper>
					)}
					<Box height="100%" display="flex" flexDirection="column">
						{title && (
							<Text
								color={themeContext.colors.primaryText || '#000000'}
								fontSize="xxl"
								fontWeights="normal"
								textAlign="left"
								lineHeight="42px"
								marginBottom="25px"
							>
								{title}
							</Text>
						)}
						<Box height="100%">{content}</Box>
					</Box>
				</PopoverContainer>
			</StyledPopover>
		</>
	);
});

Popover.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.flexbox,
	...styledSystemPropTypes.grid,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	children: PropTypes.node.isRequired,
	content: PropTypes.node,
	title: PropTypes.string,
	hideCloseBtn: PropTypes.bool,
	hideOnClickOutside: PropTypes.bool,
	onClose: PropTypes.func,
	placement: PropTypes.oneOf([
		'auto-start',
		'auto',
		'auto-end',
		'top-start',
		'top',
		'top-end',
		'right-start',
		'right',
		'right-end',
		'bottom-end',
		'bottom',
		'bottom-start',
		'left-end',
		'left',
		'left-start',
	]),
};

Popover.displayName = 'Popover';

Popover.defaultProps = {
	'data-cy': 'Popover', // component name
	placement: 'bottom',
	hideCloseBtn: false,
	closeOnClickOutside: true,
};

export default Popover;
