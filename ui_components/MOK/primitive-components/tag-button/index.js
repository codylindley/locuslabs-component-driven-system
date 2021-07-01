import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';
import styledSystemPropTypes from '@styled-system/prop-types';
import { theme } from 'styled-tools';

const StyledTagButton = styled('button')`
	display: flex;
	align-items: center;
	font-family: ${theme('fonts.default')};
	font-size: ${theme('fontSizes.sm')};
	font-weight: 400;
	background-color: ${theme('colors.background')};
	border-width: 1px;
	border-style: solid;
	border-color: ${theme('colors.primaryButton')};
	color: ${theme('colors.primaryButton')};
	cursor: pointer;
	padding-left: 12px;
	padding-right: 12px;
	text-align: center;
	max-height: 32px;
	max-width: 294px;
	height: 32px;
	border-radius: 2px;
	&:hover {
		background-color: ${theme('colors.primaryButton')};
		color: ${theme('colors.primaryButtonText')};
	}
	&:active {
		background-color: ${theme('colors.primaryButtonHover')};
		border-color: ${theme('colors.primaryButtonHover')};
		outline: none;
	}
	&:focus {
		outline: none;
	}
`;

const TagButton = forwardRef((props, ref) => {
	const { children, ...omittedProps } = props;
	return (
		<Box display="inline-block" {...omittedProps}>
			<StyledTagButton
				ref={ref}
				aria-label={typeof children === 'string' ? children : ''}
			>
				<Text
					fontSize="inherit"
					textAlign="left"
					lineHeight="24px"
					limitLinesOfTextTo={1}
				>
					{children}
				</Text>
			</StyledTagButton>
		</Box>
	);
});

TagButton.displayName = 'Tag Button';

TagButton.defaultProps = {
	'data-cy': 'TagButton', // component name
};

export default TagButton;

TagButton.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	...styledSystemPropTypes.typography,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	children: PropTypes.node.isRequired,
};
