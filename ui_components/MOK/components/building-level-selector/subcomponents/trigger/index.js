import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import { theme } from 'styled-tools';
import Box from '@locus-labs/mok-box';
import Text from '@locus-labs/mok-text';
import Icon from '@locus-labs/mok-icon';
import { rgba } from 'polished';
import SearchResultsIndicator from '../search-results-indicator';

const StyledWrapper = styled(Box)`
	filter: drop-shadow(${theme('shadows.md')});
	height: 64px;
`;

const StyledBox = styled(Box)`
	border-radius: 2px;
	overflow: hidden;
	height: inherit;
	cursor: pointer;

	&:focus {
		outline: none;
		border: none;
	}
`;

const StyledText = styled(Text)`
	word-break: break-all;
`;

const StyledSearchResultsIndicator = styled(SearchResultsIndicator)`
	pointer-events: none;
`;

const Trigger = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const {
		currentBuildingName,
		fallbackBuildingName,
		currentLevelName,
		fallbackLevelName,
		onTriggerClick,
		withSearchResults,
		...omittedProps
	} = props;

	return (
		<StyledWrapper ref={ref} {...omittedProps}>
			<StyledBox
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				position="relative"
				onClick={onTriggerClick}
			>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
					padding="0 12px"
					justifyContent="center"
					width="244px"
					color={themeContext.colors.mapNavText || '#FFFFFF'}
					bg={rgba(themeContext.colors.mapNavBackground || '#000000', 0.85)}
				>
					<StyledText
						fontSize="md"
						fontWeight="semiBold"
						lineHeight="27px"
						limitLinesOfTextTo={1}
					>
						{currentBuildingName || fallbackBuildingName}
					</StyledText>
					<StyledText fontSize="sm" lineHeight="24px" limitLinesOfTextTo={1}>
						{currentLevelName || fallbackLevelName}
					</StyledText>
				</Box>
				<Box
					width="56px"
					display="flex"
					alignItems="center"
					justifyContent="center"
					data-cy="TriggerButton"
					bg={themeContext.colors.mapNavBackground || '#000000'}
				>
					<Icon
						iconSize="sm"
						color={themeContext.colors.mapNavText || '#FFFFFF'}
						name="triangle.up"
						degreesOfIconRotation={props.degreesOfIconRotation}
					/>
				</Box>
			</StyledBox>
			{withSearchResults && (
				<StyledSearchResultsIndicator
					position="absolute"
					bottom="-6px"
					right="-8px"
					width="16px"
					height="16px"
				/>
			)}
		</StyledWrapper>
	);
});

Trigger.displayName = 'Trigger';

Trigger.defaultProps = {
	isExpanded: false,
	withSearchResults: false,
	fallbackBuildingName: 'Select a building',
	fallbackLevelName: '...',
	'data-cy': 'BuildingLevelSelectorTrigger',
};

export default Trigger;

Trigger.propTypes = {
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
	currentBuildingName: PropTypes.string,
	fallbackBuildingName: PropTypes.string,
	currentLevelName: PropTypes.string,
	fallbackLevelName: PropTypes.string,
	isExpanded: PropTypes.bool,
	onTriggerClick: PropTypes.func,
	withSearchResults: PropTypes.bool,
};
