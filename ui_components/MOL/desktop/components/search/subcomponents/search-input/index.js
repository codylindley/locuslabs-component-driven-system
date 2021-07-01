import { forwardRef, useContext, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import Tooltip from '@locus-labs/mol-desktop-tooltip';
import Box from '@locus-labs/mol-desktop-box';
import Icon from '@locus-labs/mol-desktop-icon';
import { rgba } from 'polished';
import { theme } from 'styled-tools';

const StyledButton = styled('button')`
	display: flex;
	flex: 0 1 auto;
	cursor: pointer;
	border: none;
	background: transparent;
	padding: 0;

	&:active {
		outline: none;
		border: none;
		color: ${theme('colors.widgetIcons')};
	}
	&:focus {
		outline: none;
		border: none;
	}

	div:focus {
		outline: none;
		border: none;
	}
`;

const StyledInput = styled('input')`
	flex: 1 1 auto;
	height: 24px;
	padding: 0;
	margin: 0 6px;
	overflow: hidden;
	border: none;
	background: transparent;
	color: ${theme('colors.widgetText')};
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: ${theme('fontSizes.lg')};
	font-weight: 400;
	line-height: 24px;
	font-family: ${(props) => props.theme.fonts.default};

	&:active {
		outline: none;
		border: none;
	}
	&:focus {
		outline: none;
		border: none;
	}

	&::placeholder {
		color: ${theme('colors.widgetText')};
		opacity: 0.6;
	}
`;

const Separator = styled.span`
	flex: 0 1 auto;
	background-color: ${theme('colors.widgetText')};
	width: 1px;
	height: 30px;
	margin: 0 6px;
`;

const SearchInput = forwardRef((props, ref) => {
	const {
		isComponentFocused,
		isContentOpen,
		placeholder,
		term,
		onSearchTermChange,
		searchIconTooltipContent,
		directionsIconTooltipContent,
		clearIconTooltipContent,
		backIconTooltipContent,
		onDirectionsIconClick,
		onBackButtonClick,
		onReturnKeyPress,
		onClearButtonClick,
		onInputFocus,
		onInputBlur,
		...omittedProps
	} = props;

	const [isSearchActive, setIsSearchActive] = useState(false);
	const themeContext = useContext(ThemeContext);
	const inputRef = useRef(ref);

	useEffect(() => {
		setIsSearchActive(isInputFocused() || !!term.length); // If term exists or input was focused component should remain active, otherwise set to inactive
	}, [term]);

	useEffect(() => {
		if (!isComponentFocused && !term.length) setIsSearchActive(false);
	}, [isComponentFocused]); // If component was unfocused and there was no search term, set input as inactive

	useEffect(() => {
		if (!isSearchActive && inputRef.current) {
			inputRef.current.blur();
			onInputBlur();
		} // if search became inactive then blur the input
	}, [isSearchActive]);

	useEffect(() => {
		if (!isContentOpen && !isInputFocused() && !term.length)
			setIsSearchActive(false);
	}, [isContentOpen]); // if content collapsed, input wasn't focused and there was no search term, set input as inactive

	const isInputFocused = () => document.activeElement === inputRef.current;

	const focusInput = () => inputRef.current && inputRef.current.focus();

	const handleFocus = () => {
		setIsSearchActive(true);
		onInputFocus();
	};

	const handleBackClick = () => {
		inputRef.current.blur();
		setIsSearchActive(false);
		onBackButtonClick();
	};

	const handleClearClick = () => {
		focusInput();
		onClearButtonClick();
	};

	const handleKeyUp = (event) => {
		if (event.key === 'Enter' || event.keyCode === 13) onReturnKeyPress();
		if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27)
			handleBackClick();
	};

	return (
		<Box width="320px" p="20px" bg={themeContext.colors.widgetBackground}>
			<Box
				p="6px"
				bg={rgba(themeContext.colors.widgetText, 0.1)}
				borderRadius={themeContext.radii.lg}
				display="flex"
				alignItems="center"
				flexWrap="nowrap"
				{...omittedProps}
			>
				{isSearchActive ? (
					<StyledButton
						data-cy="BackButton"
						aria-label={backIconTooltipContent}
						onClick={handleBackClick}
					>
						<Tooltip content={backIconTooltipContent} placement="bottom">
							<Icon
								name="arrow.left"
								iconSize="md"
								color={themeContext.colors.widgetIcons}
							/>
						</Tooltip>
					</StyledButton>
				) : (
					<StyledButton
						data-cy="SearchButton"
						aria-label={searchIconTooltipContent}
						onClick={focusInput}
					>
						<Tooltip content={searchIconTooltipContent} placement="bottom">
							<Icon
								name="search.web"
								iconSize="md"
								color={themeContext.colors.widgetText}
							/>
						</Tooltip>
					</StyledButton>
				)}
				<StyledInput
					ref={inputRef}
					placeholder={placeholder}
					value={term}
					onChange={(e) => onSearchTermChange(e.target.value)}
					onFocus={handleFocus}
					onKeyUp={handleKeyUp}
					title={placeholder}
					aria-label="Search"
				/>

				{!!term.length && (
					<StyledButton
						data-cy="ClearButton"
						aria-label={clearIconTooltipContent}
						onClick={handleClearClick}
					>
						<Tooltip content={clearIconTooltipContent} placement="bottom">
							<Icon
								name="close"
								iconSize="md"
								color={themeContext.colors.widgetIcons}
							/>
						</Tooltip>
					</StyledButton>
				)}

				<Separator />

				<StyledButton
					data-cy="DirectionsButton"
					aria-label={directionsIconTooltipContent}
					onClick={onDirectionsIconClick}
				>
					<Tooltip content={directionsIconTooltipContent} placement="right">
						<Icon
							name="directions.filled"
							iconSize="md"
							color={themeContext.colors.widgetIcons}
						/>
					</Tooltip>
				</StyledButton>
			</Box>
		</Box>
	);
});

SearchInput.displayName = 'Search Input';

SearchInput.defaultProps = {
	'data-cy': 'SearchInput',
	placeholder: 'Search',
	searchIconTooltipContent: 'Search',
	directionsIconTooltipContent: 'Get Directions',
	clearIconTooltipContent: 'Clear Search',
	backIconTooltipContent: 'Home',
	onBackButtonClick: () => {},
	onClearButtonClick: () => {},
	onDirectionsIconClick: () => {},
	onInputFocus: () => {},
	onReturnKeyPress: () => {},
	onInputBlur: () => {},
};

export default SearchInput;

SearchInput.propTypes = {
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
	isComponentFocused: PropTypes.bool.isRequired,
	isContentOpen: PropTypes.bool.isRequired,
	term: PropTypes.string.isRequired,
	onSearchTermChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	searchIconTooltipContent: PropTypes.string.isRequired,
	clearIconTooltipContent: PropTypes.string.isRequired,
	directionsIconTooltipContent: PropTypes.string.isRequired,
	backIconTooltipContent: PropTypes.string.isRequired,
	onBackButtonClick: PropTypes.func.isRequired,
	onClearButtonClick: PropTypes.func.isRequired,
	onDirectionsIconClick: PropTypes.func.isRequired,
	onInputFocus: PropTypes.func.isRequired,
	onReturnKeyPress: PropTypes.func.isRequired,
	onInputBlur: PropTypes.func.isRequired,
};
