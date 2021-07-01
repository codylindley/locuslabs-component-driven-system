import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mol-desktop-box';
import Text from '@locus-labs/mol-desktop-text';
import Icon from '@locus-labs/mol-desktop-icon';
import {
	background,
	border,
	color,
	layout,
	position,
	shadow,
	space,
	typography,
	compose,
} from 'styled-system';
import { prop, theme, withProp } from 'styled-tools';

const buttonTypes = {
	microsoft: 'social.microsoft.color',
	twitter: 'social.twitter.color',
	facebook: 'social.facebook.color',
	github: 'social.github.color',
	google: 'social.google.color',
	linkedin: 'social.linkedin.color',
	dropbox: 'social.dropbox.color',
	default: 'lock',
};

const StyledText = styled(Text)`
	word-break: break-all;
`;

const StyledButton = styled('button')`
	height: 46px;
	width: 275px;
	cursor: pointer;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	outline: none;
	padding: 0;
	margin: 0;
	border: 1px solid ${prop('color')};
	color: ${prop('color')};
	background: ${theme('colors.background', '#FFFFFF')};

	&:active:not(:disabled) {
		border: 1px solid
			${withProp(theme('colors.primaryText'), (primaryText) =>
				rgba(primaryText, 0.1)
			)};
		background: ${withProp(theme('colors.secondary'), (secondary) =>
			rgba(secondary, 0.1)
		)};
		box-shadow: ${theme('shadows.lg')};
		opacity: 0.9;
	}

	&:hover:not(:disabled) {
		border: 1px solid
			${withProp(theme('colors.primaryText'), (primaryText) =>
				rgba(primaryText, 0.1)
			)};
		background: ${withProp(theme('colors.secondary'), (secondary) =>
			rgba(secondary, 0.1)
		)};
		opacity: 0.9;
	}

	&:disabled {
		cursor: default;
	}

	${compose(
		background,
		border,
		color,
		layout,
		position,
		shadow,
		space,
		typography
	)}
`;

const SingleSignOnButton = forwardRef((props, ref) => {
	const { type, children, disabled, ...omittedProps } = props;
	const themeContext = useContext(ThemeContext);
	const color = disabled
		? rgba(themeContext.colors.secondaryText || '#000000', 0.3)
		: themeContext.colors.secondaryText || '#000000';
	const isDefault = type === 'default';

	return (
		<StyledButton
			disabled={disabled}
			ref={ref}
			color={color}
			theme={themeContext}
			{...omittedProps}
		>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				margin="0 16px"
				data-cy="Container"
			>
				<Icon
					name={buttonTypes[type]}
					iconSize="sm"
					color={isDefault ? color : undefined}
					display="inline-block"
					mr="7px"
					narrow
				/>
				<StyledText
					ml="4px"
					fontSize="md"
					lineHeight="18px"
					fontWeight="500"
					textAlign="left"
					limitLinesOfTextTo={1}
					color="inherit"
				>
					{children}
				</StyledText>
			</Box>
		</StyledButton>
	);
});

SingleSignOnButton.displayName = 'SingleSignOnButton';

SingleSignOnButton.defaultProps = {
	'data-cy': 'SingleSignOnButton',
	type: 'default',
};

export default SingleSignOnButton;

SingleSignOnButton.propTypes = {
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
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	type: PropTypes.oneOf(Object.keys(buttonTypes)),
};
