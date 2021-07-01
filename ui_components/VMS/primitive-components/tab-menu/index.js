import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import { Tab, TabList } from 'reakit/Tab';
import Box from '@locus-labs/vms-box';
import Text from '@locus-labs/vms-text';
import Icon from '@locus-labs/vms-icon';
import { layout, space, display } from 'styled-system';
import { ifProp, theme } from 'styled-tools';

/**
 * Overflow icon, left and right scroll indicators.
 */
const TabOverflowIcon = styled(Icon)`
	color: ${theme('colors.primaryButton', '#000000')};
	width: 20px;
	margin: 0;
	cursor: pointer;
	visibility: ${ifProp('isHidden', 'hidden', 'visible')};
	&:hover {
		color: ${theme('colors.primaryButtonHover', '#000000')};
	}
	svg {
		margin-left: -7px;
		margin-top: -5px;
	}
`;

/**
 * Wraps a collection of Tab components.
 */
const TabItemsContainer = styled(Box)`
	overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

/**
 * Enhance reakit's TabList component with styling.
 */
const StyledTabList = styled(TabList)`
	display: inline-block;
	width: inherit;
	${layout}
	${space}
	${display}
`;

/**
 * Enhance reakit's Tab component with styling.
 */
const StyledTab = styled(Tab)`
	display: flex;
	flex-direction: column;
	background-color: transparent;
	align-items: center;
	border: none;
	outline: none;
	padding: 0;
	margin: 0px 8px;
	:first-of-type {
		margin-left: 0;
	}
	:last-of-type {
		margin-right: 0;
	}
	cursor: ${ifProp('selected', 'auto', 'pointer')};
`;

const ActiveTabIndicator = styled(Box)`
	display: flex;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	height: 2px;
	width: -webkit-fill-available;
	visibility: ${ifProp('selected', 'visible', 'hidden')};
	background-color: ${theme('colors.primaryButton', '#000000')};
`;

/**
 * Styled label, used within each StyledTab.
 */
const TabLabel = styled(Text)`
	line-height: 21px;
	padding: 0;
	margin: 0;
	margin-bottom: 6px;
	white-space: nowrap;
	color: ${ifProp(
		'selected',
		theme('colors.primaryButton', '#000000'),
		theme('colors.secondaryText', '#000000')
	)};

	&:hover {
		color: ${theme('colors.primaryButton', '#000000')};
	}
`;

/**
 * Small red dot to indicate is a Tab has unsaved changes.
 */
const UnsavedChangesIndicator = styled(Box)`
	width: 6px;
	height: 6px;
	margin-top: 7px;
	margin-left: 2px;
	border-radius: 50%;
	background-color: ${theme('colors.mapNavSearchResults', '#000000')};
`;

const TabMenu = ({ items, selectedIndex, onChange, ...omittedProps }) => {
	/**
	 * Make sure index does not go out of bounce.
	 */
	const isValidIndex = (index) => index >= 0 && index < items.length;

	/**
	 * Index of the selected tab.
	 */
	const [selectedTabIndex, setSelectedTabIndex] = useState(selectedIndex || 0);

	/**
	 * Overflow icons' state.
	 */
	const [showRightOverflowIcon, setShowRightOverflowIcon] = useState(false);
	const [showLeftOverflowIcon, setShowLeftOverflowIcon] = useState(false);

	/**
	 * Store refs of each tabs, so that we can scroll into them when need it.
	 */
	const tabRefs = items.map(() => useRef(null));

	/**
	 * ref to TabItemsContainer in order to access the "scrollLeft" value
	 * and decide whether to show or hide the TabOverflowIcon components.
	 */
	const tabItemsContainerRef = useRef(null);

	/**
	 * ref to overflow icons, used to check if tabs are partially in view
	 */
	const overflowIconRightRef = useRef(null);
	const overflowIconLeftRef = useRef(null);

	/**
	 * Determine if overflow icons should be displayed.
	 */
	const showOverflowIcons = (timer) => {
		if (timer) clearTimeout(timer);
		if (!tabItemsContainerRef?.current) return;
		const { scrollWidth, offsetWidth, scrollLeft } =
			tabItemsContainerRef.current;
		const isLastItemVisible = scrollWidth - offsetWidth < scrollLeft + 5;

		setShowRightOverflowIcon(!isLastItemVisible);
		setShowLeftOverflowIcon(scrollLeft > 0);
	};

	/**
	 * Scrolls into the tab represented by the index.
	 */
	const scrollToTab = (index) => {
		if (!isValidIndex(index)) return;
		const ref = tabRefs[index];
		if (!ref?.current) return;

		// Find out if tab behind icon, and which icon
		const { left, right } = ref.current.getBoundingClientRect();
		const rightIconRect = overflowIconRightRef.current.getBoundingClientRect();
		const leftIconRect = overflowIconLeftRef.current.getBoundingClientRect();
		if (left < rightIconRect.left && rightIconRect.left < right)
			handleIconScroll('right');
		if (left < leftIconRect.right && leftIconRect.right < right)
			handleIconScroll('left');
	};

	/**
	 * Scrolls to the next invisible(or partially visible) tab on the right or left
	 */
	const handleIconScroll = (direction = 'left') => {
		const isLeft = direction === 'left';
		const overflowIconRef = isLeft ? overflowIconLeftRef : overflowIconRightRef;
		if (!overflowIconRef?.current) return;
		const iconRect = overflowIconRef.current.getBoundingClientRect();

		// Find ref of tab if behind a scroll icon
		let ref = tabRefs.find((tabRef) => {
			if (!tabRef?.current) return;
			const { left, right } = tabRef.current.getBoundingClientRect();
			const rightCondition = left < iconRect.left && iconRect.left < right;
			const leftCondition = left < iconRect.right && iconRect.right < right;
			return isLeft ? leftCondition : rightCondition;
		});

		// Else find the first tab to the right or left(based on scroll direction)
		if (!ref) {
			for (let i = 0; i < tabRefs.length; i++) {
				const tabRef = tabRefs[i];
				if (!tabRef?.current) break;

				const { left, right } = tabRef.current.getBoundingClientRect();
				const tabFound = isLeft ? iconRect.right > left : iconRect.left < right;

				// Set the ref
				if (tabFound) ref = tabRef;

				// On right scroll, multiple tabs can be to the right of the icon,
				// therefore stop on the first found tab to the right of the icon
				if (tabFound && !isLeft) break;

				// On left scroll, multiple tabs can be to the left of the icon,
				// therefore stop on the last found tab to the left of the icon
				if (isLeft && ref && !tabFound) break;
			}
		}

		if (!ref) return;
		const refRect = ref.current.getBoundingClientRect();
		const margin = 4;
		const hiddenTabPixels = isLeft
			? iconRect.right - refRect.left
			: refRect.right - iconRect.left;
		const newScrollValue = isLeft
			? tabItemsContainerRef.current.scrollLeft - hiddenTabPixels - margin
			: tabItemsContainerRef.current.scrollLeft + hiddenTabPixels + margin;

		tabItemsContainerRef?.current?.scrollTo({
			left: newScrollValue,
			top: tabItemsContainerRef.current.scrollTop,
			behavior: 'smooth',
		});
	};

	/**
	 * Set selected tab index and call "onChange" if present.
	 */
	const handleTabClick = (index) => {
		setSelectedTabIndex(index);
		scrollToTab(index);
		onChange?.(index);
	};

	/**
	 * When the TabItemsContainer ref is ready, determine if the overflow
	 * icons should be displayed.
	 */
	useEffect(() => {
		tabItemsContainerRef.current?.addEventListener('scroll', showOverflowIcons);
		showOverflowIcons();

		return () =>
			tabItemsContainerRef.current?.removeEventListener(
				'scroll',
				showOverflowIcons
			);
	}, [tabItemsContainerRef]);

	/**
	 * Select tab in a controlled way. Will also scroll into the newly selected tab.
	 */
	useEffect(() => {
		if (isValidIndex(selectedIndex)) {
			setSelectedTabIndex(selectedIndex);
			scrollToTab(selectedIndex);
		}
	}, [selectedIndex]);

	return (
		<StyledTabList {...omittedProps}>
			<Box display="flex" alignItems="center">
				<TabOverflowIcon
					iconSize="xxl"
					flipOnXAxis
					data-cy="RightOverflowIcon"
					isHidden={!showLeftOverflowIcon}
					name="chevron.right"
					ref={overflowIconLeftRef}
					onClick={() => handleIconScroll('left')}
				/>
				<TabItemsContainer
					display="flex"
					alignItems="center"
					data-cy="TabItemsContainer"
					ref={tabItemsContainerRef}
				>
					{items?.map?.((item, index) => (
						<StyledTab
							data-cy="Tab"
							ref={tabRefs[index]}
							key={index}
							selected={index === selectedTabIndex}
							aria-selected={index === selectedTabIndex}
							onClick={() => handleTabClick(index)}
						>
							<Box display="flex">
								<TabLabel
									fontSize="lg"
									fontWeight="reg"
									selected={index === selectedTabIndex}
								>
									{item.label}
								</TabLabel>
								{item.hasUnsavedChanges && (
									<UnsavedChangesIndicator data-cy="UnsavedChangesIndicator" />
								)}
							</Box>
							<ActiveTabIndicator
								data-cy="ActiveTabIndicator"
								selected={index === selectedTabIndex}
								theme={omittedProps.theme}
							/>
						</StyledTab>
					))}
				</TabItemsContainer>
				<TabOverflowIcon
					iconSize="xxl"
					flipOnXAxis
					data-cy="LeftOverflowIcon"
					isHidden={!showRightOverflowIcon}
					name="chevron.left"
					ref={overflowIconRightRef}
					onClick={() => handleIconScroll('right')}
				/>
			</Box>
		</StyledTabList>
	);
};

TabMenu.defaultProps = {
	'data-cy': 'TabMenu', // component name
};

TabMenu.propTypes = {
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
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			hasUnsavedChanges: PropTypes.bool,
		})
	).isRequired,
	selectedIndex: PropTypes.number,
	onChange: PropTypes.func,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	'aria-label': PropTypes.string,
};

TabMenu.displayName = 'TabMenu';

export default TabMenu;
