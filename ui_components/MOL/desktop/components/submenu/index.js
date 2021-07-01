import { forwardRef, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import { rgba } from 'polished';
import Tooltip from '@locus-labs/mol-desktop-tooltip';
import MapNavButton from '@locus-labs/mol-desktop-map-nav-button';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';
import Icon from '@locus-labs/mol-desktop-icon';
import useComponentFocused from '@locus-labs/utils-use-component-focused';
import { theme, withProp } from 'styled-tools';

const ArrowWrapper = styled.div`
	position: absolute;
	height: 17px;
	width: 17px;
	bottom: 11px;
	right: 0;
	transform: translateX(50%);
	filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.2));
`;

const Arrow = styled.div`
	transform: rotate(-135deg);
	display: block;
	height: 100%;
	width: 100%;
	background-color: ${withProp(
		theme('colors.primaryText'),
		(primaryText) => `1px solid ${rgba(primaryText, 0.1)}`
	)};
	clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
	border-radius: 0 0 0 2px;
	position: absolute;
	top: 0;
	z-index: 1;
`;

const ArrowBackground = styled(Arrow)`
	background: ${theme('colors.background')};
	z-index: 0;
`;

const MenuOptions = styled(Box)`
	background-color: ${theme('colors.background')};
	color: ${theme('colors.primaryText')};
	z-index: 1;
`;

const MenuOption = styled(Box)`
	cursor: pointer;

	&::before,
	&::after {
		content: ' ';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 1px;
		left: 0;
		background: ${theme('colors.background')};
	}

	&::after {
		background: ${withProp(theme('colors.primaryText'), (primaryText) =>
			rgba(primaryText, 0.1)
		)};
	}

	&:hover {
		background-color: ${withProp(theme('colors.primaryText'), (primaryText) =>
			rgba(primaryText, 0.1)
		)};
	}
`;

const mergeRefs = (...refs) => {
	const filteredRefs = refs.filter(Boolean);
	if (!filteredRefs.length) return null;
	if (filteredRefs.length === 0) return filteredRefs[0];
	return (inst) => {
		for (const ref of filteredRefs) {
			if (typeof ref === 'function') {
				ref(inst);
			} else if (ref) {
				ref.current = inst;
			}
		}
	};
};

const Submenu = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const {
		ref: componentFocusedRef,
		isComponentFocused,
		setIsComponentFocused,
	} = useComponentFocused(true);
	const { menuItems, tooltipContent, ...omittedProps } = props;

	useEffect(() => {
		if (!isComponentFocused && isMenuOpen) setIsMenuOpen(false); // if the outside click was detected, but menu was open, hide it
	}, [isComponentFocused]);

	const toggleSubmenu = () => {
		setIsMenuOpen(!isMenuOpen);
		setIsComponentFocused(!isMenuOpen);
	};

	const onItemClick = (item) => {
		item.onClick();
		toggleSubmenu();
	};

	return (
		<Box
			display="flex"
			ref={mergeRefs(ref, componentFocusedRef)}
			{...omittedProps}
		>
			{isMenuOpen && (
				<Box position="relative" display="flex">
					<Box
						position="absolute"
						right="19px"
						bottom="-5px"
						display="flex"
						alignItems="flex-end"
						borderRadius="lg"
						boxShadow="md"
					>
						<MenuOptions
							data-cy="MenuOptions"
							display="flex"
							flexDirection="column"
							width="220px"
							borderRadius="lg"
							overflow="hidden"
						>
							{menuItems.map((item, index) => (
								<MenuOption
									key={index}
									data-cy="MenuOption"
									onClick={() => onItemClick(item)}
									display="flex"
									position="relative"
									alignItems="center"
									cursor="pointer"
									padding="12px 8px"
								>
									<Icon
										name={item.iconId}
										iconSize="md"
										color={themeContext.colors.primaryText}
										marginRight="8px"
									/>
									<Text fontSize="md">{item.label}</Text>
								</MenuOption>
							))}
							<Box
								height="40px"
								display="flex"
								alignItems="center"
								background={rgba(themeContext.colors.primaryText, 0.1)}
							>
								<Text fontSize="sm" lineHeight="18px" padding="6px 12px">
									Map Data ©2015-
									{new Date().getFullYear().toString().substr(-2)} LocusLabs,
									Inc.
								</Text>
							</Box>
						</MenuOptions>
						<ArrowWrapper>
							<Arrow />
							<ArrowBackground />
						</ArrowWrapper>
					</Box>
				</Box>
			)}
			<Tooltip content={tooltipContent} cancelTooltip={isMenuOpen}>
				<MapNavButton
					onClick={toggleSubmenu}
					iconName="submenu"
					ariaLabel={tooltipContent}
				/>
			</Tooltip>
		</Box>
	);
});

Submenu.displayName = 'Submenu';

Submenu.defaultProps = {
	'data-cy': 'Submenu', // component name
	tooltipContent: 'View Menu',
};

export default Submenu;

Submenu.propTypes = {
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
	tooltipContent: PropTypes.string,
	tooltipZIndex: PropTypes.number,
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			iconId: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			onClick: PropTypes.func.isRequired,
		})
	),
};
