import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';
import Icon from '@locus-labs/mol-desktop-icon';
import { rgba } from 'polished';
import Tooltip from '@locus-labs/mol-desktop-tooltip';
import SearchResultsIndicator from '../search-results-indicator';
import { theme } from 'styled-tools';

const StyledWrapper = styled(Box)`
	filter: drop-shadow(${theme('shadows.md')});
`;

const StyledBox = styled(Box)`
	border-radius: ${theme('radii.lg')};
	overflow: hidden;
`;

const StyledText = styled(Text)`
	word-break: break-all;
`;

const Toggler = styled(Box)`
	cursor: pointer;

	&:focus {
		outline: none;
		border: none;
	}

	&:hover {
		background-color: ${theme('colors.mapNavBackground')};
	}
`;

const StyledSearchResultsIndicator = styled(SearchResultsIndicator)`
	pointer-events: none;
`;

const Trigger = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const {
		tooltipContent,
		currentBuildingName,
		fallbackBuildingName,
		currentLevelName,
		fallbackLevelName,
		isExpanded,
		onTriggerClick,
		withSearchResults,
		...omittedProps
	} = props;

	return (
		<StyledWrapper
			ref={ref}
			data-cy="BuildingLevelSelectorTrigger"
			{...omittedProps}
		>
			<StyledBox
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				position="relative"
			>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
					padding="6px 8px"
					bg={themeContext.colors.background}
					flex="1 1 auto"
				>
					<StyledText
						fontSize="md"
						fontWeight={500}
						lineHeight="18px"
						color={themeContext.colors.primaryText}
						limitLinesOfTextTo={1}
					>
						{currentBuildingName || fallbackBuildingName}
					</StyledText>
					<StyledText
						fontSize="sm"
						color={themeContext.colors.secondaryText}
						limitLinesOfTextTo={1}
					>
						{currentLevelName || fallbackLevelName}
					</StyledText>
				</Box>

				<Box flex="0 0 auto" display="flex" alignItems="stretch">
					<Tooltip
						content={tooltipContent}
						placement="bottom-end"
						cancelTooltip={isExpanded}
					>
						<Toggler
							data-cy="TriggerButton"
							as="button"
							onClick={onTriggerClick}
							display="flex"
							alignItems="stretch"
							height="100%"
							bg={rgba(themeContext.colors.mapNavBackground, 0.85)}
							outline="none"
							border="none"
							padding="0"
							aria-label="Show Buildings & Levels"
						>
							<Box
								padding="2px"
								height="100%"
								display="flex"
								alignItems="center"
							>
								<Icon
									name="triangle.down"
									iconSize="md"
									degreesOfIconRotation={props.degreesOfIconRotation}
									color={themeContext.colors.mapNavText}
								/>
							</Box>
						</Toggler>
					</Tooltip>
				</Box>
			</StyledBox>

			{withSearchResults && (
				<StyledSearchResultsIndicator
					position="absolute"
					top="36px"
					right="-4px"
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
	fallbackBuildingName: 'Select a building...',
	fallbackLevelName: '...',
	tooltipContent: 'Show Building & Levels',
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
	tooltipContent: PropTypes.string,
	currentBuildingName: PropTypes.string,
	fallbackBuildingName: PropTypes.string,
	currentLevelName: PropTypes.string,
	fallbackLevelName: PropTypes.string,
	isExpanded: PropTypes.bool,
	onTriggerClick: PropTypes.func,
	withSearchResults: PropTypes.bool,
};
