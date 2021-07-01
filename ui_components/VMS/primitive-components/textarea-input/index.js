import { forwardRef, useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import Box from '@locus-labs/vms-box';
import Text from '@locus-labs/vms-text';
import Icon from '@locus-labs/vms-icon';
import useComponentFocused from '@locus-labs/utils-use-component-focused';

import { background, border, color, typography, compose } from 'styled-system';
import { ifProp, prop, theme } from 'styled-tools';

const textAreaLineHeight = 21;
const textAreaMaxRows = 10;
const textAreaPaddingY = 19;
const textAreaMaxHeight = textAreaLineHeight * textAreaMaxRows;

const TextAreaWrapper = styled(Box)`
	overflow: auto;
	min-width: 200px;
	border: 1px solid
		${ifProp(
			'isFocused',
			theme('colors.primary'),
			theme('colors.secondaryButton', '#000')
		)};

	border: ${ifProp('disabled', 'none', undefined)};

	&.error {
		border: 1px solid ${theme('colors.indicatorAlertBackground', '#000')};
	}

	${compose(background, border, color)};
`;

const StyledTextArea = styled('textarea')`
	box-sizing: border-box;
	min-height: 40px;
	white-space: pre-wrap;
	overflow: ${({ rows }) => (rows ? 'auto' : 'hidden')};
	max-height: ${({ rows }) =>
		rows ? 'undefined' : `${textAreaMaxHeight + textAreaPaddingY}px`};
	overflow-wrap: break-word;
	flex: 1 1 auto;
	line-height: 21px;
	border: none;
	padding: 10px 12px 9px 12px;
	width: 100%;
	background: transparent;
	resize: none;
	color: ${prop('inputTextColor', theme('colors.primaryText', '#fff'))};
	font-family: ${(props) => props.theme.fonts.default};

	&:active {
		outline: none;
		border: none;
	}

	&:focus {
		outline: none;
		border: none;
	}

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}

	&::placeholder {
		color: ${theme('colors.secondaryText', '#000')};
		opacity: 0.6;
	}
	${compose(typography)};
`;

const MaxCharacterCount = styled(Text)`
	flex: 0 0 auto;
`;

const ErrorMessage = styled(Text)`
	word-break: break-all;
`;

const DeleteIconWrapper = styled(Box)`
	flex: 0 0 auto;
	cursor: pointer;
	align-self: flex-start;
	margin: 8px 8px 0 4px;
	width: 24px;
	visibility: ${ifProp('visible', 'visible', 'hidden')};

	&:focus {
		outline: none;
		border: none;
	}
`;

const TextAreaInput = forwardRef((props, ref) => {
	const {
		label,
		rows,
		placeholder,
		value,
		onValueChange,
		ariaLabel,
		maxCharacterCount,
		isUnsaved,
		errorMessage,
		disabled,
		...omittedProps
	} = props;

	const themeContext = useContext(ThemeContext);

	const {
		ref: componentFocusedRef,
		isComponentFocused,
		setIsComponentFocused,
	} = useComponentFocused(false);

	const inputRef = useRef();
	const deleteButtonRef = useRef();
	let timeoutId;

	useEffect(() => {
		if (isComponentFocused) clearTimeout(timeoutId); // prevent blurring input
	}, [isComponentFocused]);

	const _autoGrow = () => {
		if (rows) return;

		setTimeout(() => {
			// Reset field height
			inputRef.current.style.height = 'inherit';

			// Get the computed styles for the element
			const computed = window.getComputedStyle(inputRef.current);

			// Calculate the new height
			const height =
				parseInt(computed.getPropertyValue('border-top-width'), 10) +
				parseInt(computed.getPropertyValue('padding-top'), 10) +
				inputRef.current.scrollHeight +
				parseInt(computed.getPropertyValue('padding-bottom'), 10) +
				parseInt(computed.getPropertyValue('border-bottom-width'), 10) -
				textAreaLineHeight;

			const newNumberOfRows = Math.floor(
				inputRef.current.scrollHeight / textAreaLineHeight
			);

			const shouldScroll = newNumberOfRows > 10;
			inputRef.current.style.overflow = shouldScroll ? 'auto' : 'hidden';
			inputRef.current.style.height = `${height}px`;
		}, 0);
	};

	const _updateInputValue = (e) => {
		let newText = e.target.value;

		// If text reached max character count
		if (
			typeof maxCharacterCount !== 'undefined' &&
			newText.length > maxCharacterCount
		) {
			// Check if user replaced text, e.g. pasted long text
			if (newText.slice(0, maxCharacterCount) !== value) {
				newText = newText.slice(0, maxCharacterCount);
			} else return; // Skip updating if text didn't change
		}

		onValueChange?.(newText);
		_autoGrow();
	};

	const _getCurrentChars = () => (value ? value.length : 0);

	const _clearInput = () => {
		clearTimeout(timeoutId); // prevent blurring input
		onValueChange('');
		inputRef.current.focus();
		setIsComponentFocused(true);
		_autoGrow();
	};

	const _onInputFocus = () => {
		setIsComponentFocused(true);
		clearTimeout(timeoutId); // prevent blurring input
	};

	const _onBlur = () => {
		timeoutId = setTimeout(() => {
			if (document.activeElement !== deleteButtonRef.current) {
				setIsComponentFocused(false);
			}
		}, 0);
	};

	const _handleKeyDown = (e) => {
		// check if navigating with keyboard
		// if Tab was hit, then assume Text Area Input component lost focus
		// and shouldn't display as focused anymore
		if (e.key === 'Tab') {
			_onBlur();
		}
	};

	const omittedPropswithBgRemove = { ...omittedProps };
	delete omittedPropswithBgRemove.bg;
	delete omittedPropswithBgRemove.backgroundColor;

	return (
		<Box
			ref={ref}
			display="inline"
			minWidth="200px"
			{...omittedPropswithBgRemove}
		>
			<Box display="flex" flexDirection="column" width="100%">
				{label && (
					<Box display="flex" alignItems="center" marginBottom="6px">
						<Text
							data-cy="InputLabel"
							color={
								(errorMessage &&
									themeContext.colors.indicatorAlertBackground) ||
								themeContext.colors.primaryText ||
								'#FFFFFF'
							}
							limitLinesOfTextTo={1}
							fontSize="md"
							fontWeight="500"
							lineHeight="18px"
							opacity={disabled ? '0.5' : undefined}
						>
							{label}
						</Text>
						{isUnsaved && (
							<Box
								data-cy="UnsavedChangesIndicator"
								width="6px"
								height="6px"
								marginLeft="2px"
								borderRadius="50%"
								bg="#E2611A"
							/>
						)}
					</Box>
				)}
				<TextAreaWrapper
					ref={componentFocusedRef}
					className={errorMessage && 'error'}
					display="flex"
					alignItems="center"
					disabled={disabled}
					borderRadius={themeContext.radii.md}
					background={
						props.bg ||
						props.backgroundColor ||
						themeContext.colors.textInputBG ||
						'#FFFFFF'
					}
					isFocused={isComponentFocused}
					onClick={() => {
						if (!isComponentFocused || !inputRef.current.isFocused) {
							setIsComponentFocused(true);
							inputRef.current.focus();
						}
					}}
					data-cy="TextAreaWrapper" // has to be here to override data-cy
				>
					<StyledTextArea
						ref={inputRef}
						placeholder={placeholder}
						value={value}
						onChange={(e) => _updateInputValue(e)}
						onFocus={_onInputFocus}
						onBlur={_onBlur}
						title={placeholder}
						disabled={disabled}
						aria-label={label || ariaLabel}
						rows={rows}
						fontSize="lg"
						fontWeight="500"
						marginRight="4px"
					/>

					<DeleteIconWrapper
						ref={deleteButtonRef}
						as="button"
						aria-label="delete"
						data-cy="DeleteButton"
						visible={!disabled && value && value.length}
						onFocus={
							() => clearTimeout(timeoutId) // prevent blurring input
						}
						onMouseDown={
							(e) => e.preventDefault() // prevent Safari blur event execution order
						}
						onClick={_clearInput}
						onKeyDown={_handleKeyDown}
						width="24px"
						bg="transparent"
						outline="none"
						border="none"
						p="0"
					>
						{value && value.length && (
							<Icon
								name="delete.text"
								iconSize="lg"
								color={
									(errorMessage &&
										themeContext.colors.indicatorAlertBackground) ||
									themeContext.colors.secondary ||
									'#000'
								}
							/>
						)}
					</DeleteIconWrapper>
				</TextAreaWrapper>
				{(maxCharacterCount || errorMessage) && (
					<Box display="flex" marginTop="6px">
						{errorMessage && (
							<ErrorMessage
								data-cy="ErrorMessage"
								color={themeContext.colors.destructiveButton || '#000'}
								limitLinesOfTextTo={1}
								fontSize="md"
								fontWeight="500"
								lineHeight="18px"
								marginRight="4px"
							>
								{errorMessage}
							</ErrorMessage>
						)}
						{maxCharacterCount && (
							<MaxCharacterCount
								data-cy="MaxCharacterCount"
								color={themeContext.colors.secondaryText || '#000'}
								limitLinesOfTextTo={1}
								fontSize="md"
								fontWeight="500"
								lineHeight="18px"
								textAlign="right"
								marginRight="0"
								marginLeft="auto"
							>
								{`${_getCurrentChars()}/${maxCharacterCount}`}
							</MaxCharacterCount>
						)}
					</Box>
				)}
			</Box>
		</Box>
	);
});

TextAreaInput.propTypes = {
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
	placeholder: PropTypes.string.isRequired,
	onValueChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string,
	ariaLabel: PropTypes.string,
	maxCharacterCount: PropTypes.number,
	isUnsaved: PropTypes.bool,
	disabled: PropTypes.bool,
	errorMessage: PropTypes.string,
	rows: PropTypes.number,
};

TextAreaInput.displayName = 'Text Area Input';

TextAreaInput.defaultProps = {
	'data-cy': 'TextAreaInput', // component name
	placeholder: 'Input text area',
	isUnsaved: false,
	disabled: false,
	ariaLabel: 'input text area',
};

export default TextAreaInput;
