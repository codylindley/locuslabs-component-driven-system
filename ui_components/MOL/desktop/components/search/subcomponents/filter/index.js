import { forwardRef, useContext, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { css, ThemeContext } from 'styled-components';
import Tooltip from '@locus-labs/mol-desktop-tooltip';
import Box from '@locus-labs/mol-desktop-box';
import { rgba } from 'polished';
import Text from '@locus-labs/mol-desktop-text';
import Icon from '@locus-labs/mol-desktop-icon';
import { ifProp, theme, withProp } from 'styled-tools';

const StyledDropdownWrapper = styled(Box)`
	flex: 0 0 auto;
`;

const StyledDropdown = styled(Box)`
	cursor: pointer;

	&:focus {
		outline: none;
		border: none;
	}
`;

const StyledOptionsWrapper = styled(Box)`
	transform: translateY(calc(100% - 6px));
	filter: drop-shadow(${theme('shadows.md')});
`;

const StyledText = styled(Text)`
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const StyledOption = styled(StyledText)`
	cursor: pointer;
	background-color: none;
	color: ${theme('colors.primaryText')};

	&:last-of-type {
		margin-bottom: 0;
	}

	&:hover {
		background-color: ${withProp(theme('colors.primaryText'), (primaryText) =>
			rgba(primaryText, 0.1)
		)};
	}

	${ifProp(
		'active',
		css`
			background-color: ${theme('colors.primary')};
			color: ${theme('colors.primaryButtonText')};
			&:hover {
				background-color: ${theme('colors.primary')};
			}
		`
	)};
`;

const Filter = forwardRef((props, ref) => {
	const {
		filterCaption,
		filterTooltipContent,
		filterOptions,
		activeFilterOption,
		onFilterDropdownClick,
		onFilterOptionClick,
		...omittedProps
	} = props;
	const themeContext = useContext(ThemeContext);

	const [isDropdownActive, setIsDropdownActive] = useState(false);

	useImperativeHandle(ref, () => ({
		toggleDropdown(option) {
			setIsDropdownActive(option);
		},
	}));

	const optionClickHandler = (id) => {
		onFilterOptionClick(id);
		setIsDropdownActive(false);
	};

	return (
		<Box
			ref={ref}
			position="relative"
			width="320px"
			p="0 20px 12px"
			bg={themeContext.colors.widgetBackground}
			display="flex"
			justifyContent="flex-end"
			{...omittedProps}
		>
			<StyledText
				limitLinesOfTextTo={1}
				fontSize={props.fontSize || 'lg'}
				padding="6px 16px 0 0"
			>
				{filterCaption}
			</StyledText>
			<StyledDropdownWrapper width="148px">
				<Tooltip content={filterTooltipContent} placement="right" zIndex>
					<StyledDropdown
						data-cy="FilterDropdown"
						p="4px 4px 4px 14px"
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						bg={rgba(themeContext.colors.widgetText, 0.1)}
						borderRadius={themeContext.radii.lg}
						onClick={() => {
							setIsDropdownActive(!isDropdownActive);
							onFilterDropdownClick();
						}}
					>
						<Text
							data-cy="ActiveFilterName"
							limitLinesOfTextTo={1}
							fontSize={props.fontSize || 'lg'}
						>
							{
								filterOptions.filter(
									(option) => option.id === activeFilterOption
								)[0].name
							}
						</Text>
						<Icon
							name="triangle.down"
							iconSize="md"
							color={themeContext.colors.widgetIcons}
						/>
					</StyledDropdown>
				</Tooltip>
			</StyledDropdownWrapper>

			{isDropdownActive && (
				<StyledOptionsWrapper
					data-cy="FilterOptions"
					position="absolute"
					bottom="0"
					width="148px"
					bg={themeContext.colors.background}
					borderRadius={themeContext.radii.lg}
					padding="6px 0"
					display="flex"
					flexDirection="column"
				>
					{filterOptions.map((option) => (
						<StyledOption
							data-cy="FilterOption"
							key={option.id}
							active={option.id === activeFilterOption}
							onClick={() => optionClickHandler(option.id)}
							limitLinesOfTextTo={1}
							fontSize={props.fontSize || 'lg'}
							padding="2px 14px"
							marginBottom="9px"
						>
							{option.name}
						</StyledOption>
					))}
				</StyledOptionsWrapper>
			)}
		</Box>
	);
});

Filter.displayName = 'Filter';

Filter.defaultProps = {
	'data-cy': 'Filter',
	filterCaption: 'Showing',
	filterTooltipContent: 'Filter Results',
};

export default Filter;

Filter.propTypes = {
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
	filterCaption: PropTypes.string,
	filterTooltipContent: PropTypes.string,
	onFilterOptionClick: PropTypes.func.isRequired,
	filterOptions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
	activeFilterOption: PropTypes.string.isRequired,
};
