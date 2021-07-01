import { forwardRef, useContext, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import Tooltip from '@locus-labs/mol-desktop-tooltip';
import Box from '@locus-labs/mol-desktop-box';
import Icon from '@locus-labs/mol-desktop-icon';
import { ifProp, theme } from 'styled-tools';

const StyledCollapsibleContent = styled(Box)`
	transition: 0.2s height;
`;

const StyledContentWrapper = styled(Box)`
	&::before {
		display: ${ifProp('isScrolled', 'block', 'none')};
		pointer-events: none;
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		transform: translateY(-20px);
		width: 100%;
		height: 20px;
		box-shadow: ${theme('shadows.xl')};
	}
`;

const StyledCollapseButton = styled(Box)`
	cursor: pointer;
	opacity: 0.85;

	&:hover {
		opacity: 1;
	}

	&:active,
	&:focus {
		outline: none;
		border: none;
	}
`;

const CollapsibleContent = forwardRef((props, ref) => {
	const {
		isContentOpen,
		onCollapseButtonClick,
		children,
		collapsePanelTooltipContent,
		expandPanelTooltipContent,
		hasHeightOverride,
		isContentScrolled,
		hasCustomScroll,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);
	const contentRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(isContentScrolled || false);

	const tooltipProps = isContentOpen
		? { content: collapsePanelTooltipContent, placement: 'top' }
		: { content: expandPanelTooltipContent, placement: 'bottom' };

	useEffect(() => {
		setIsScrolled(isContentScrolled);
	}, [isContentScrolled]);

	const onScrollHandler = () => {
		if (hasCustomScroll || !contentRef.current) return;
		const didScroll = contentRef.current.scrollTop > 0;
		if (didScroll !== isScrolled) setIsScrolled(didScroll);
	};

	return (
		<StyledCollapsibleContent
			ref={ref}
			position="relative"
			width="320px"
			display="flex"
			flexDirection="column"
			alignItems="center"
			overflow="hidden"
			maxHeight="100%"
			{...omittedProps}
		>
			<StyledContentWrapper
				data-cy="InnerContent"
				position="relative"
				zIndex="0"
				display={isContentOpen ? 'flex' : 'none'}
				width="100%"
				flexDirection="column"
				bg={themeContext.colors.background}
				borderBottomLeftRadius={themeContext.radii.lg}
				borderBottomRightRadius={themeContext.radii.lg}
				overflow="hidden"
				isScrolled={isScrolled}
				height={hasHeightOverride ? '100%' : 'auto'}
			>
				<Box
					ref={contentRef}
					height={hasHeightOverride ? '100%' : 'auto'}
					overflowY={hasCustomScroll ? 'hidden' : 'auto'}
					onScroll={onScrollHandler}
				>
					{children}
				</Box>
			</StyledContentWrapper>
			<Box flex="0 0 auto" display="flex">
				<Tooltip key={tooltipProps.placement} {...tooltipProps}>
					<StyledCollapseButton
						data-cy="CollapseButton"
						bg={themeContext.colors.mapNavBackground}
						width="48px"
						margin="auto"
						display="flex"
						alignItems="center"
						justifyContent="center"
						borderBottomLeftRadius={themeContext.radii.lg}
						borderBottomRightRadius={themeContext.radii.lg}
						onClick={onCollapseButtonClick}
					>
						<Icon
							name="chevron.up"
							iconSize="sm"
							color={themeContext.colors.mapNavText}
							degreesOfIconRotation={isContentOpen ? '0' : '180'}
						/>
					</StyledCollapseButton>
				</Tooltip>
			</Box>
		</StyledCollapsibleContent>
	);
});

CollapsibleContent.displayName = 'Collapsible Content';

CollapsibleContent.defaultProps = {
	'data-cy': 'CollapsibleContent',
	hasHeightOverride: false,
	hasCustomScroll: false,
};

export default CollapsibleContent;

CollapsibleContent.propTypes = {
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
	isContentOpen: PropTypes.bool.isRequired,
	onCollapseButtonClick: PropTypes.func.isRequired,
	collapsePanelTooltipContent: PropTypes.string.isRequired,
	expandPanelTooltipContent: PropTypes.string.isRequired,
	hasHeightOverride: PropTypes.bool,
	hasCustomScroll: PropTypes.bool,
	isContentScrolled: PropTypes.bool,
	children: PropTypes.node.isRequired,
};
