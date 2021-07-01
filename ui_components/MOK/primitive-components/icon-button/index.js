import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { theme } from 'styled-tools';

import Icon from '@locus-labs/mok-icon';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';

const StyledButton = styled('button')`
	background: inherit;
	cursor: pointer;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	color: ${theme('colors.primaryButtonText', '#000000')};
	:active {
		color: ${theme('colors.primaryButtonHover')};
		outline: none;
		border: none;
	}
	&:focus {
		outline: none;
		border: none;
	}
	&:disabled {
		pointer-events: none;
		cursor: auto;
		opacity: 0.3;
	}
`;

const StyleText = styled(Text)`
	max-width: 842px;
	line-height: 27px;
	padding-left: 8px;
`;

const IconButton = forwardRef((props, ref) => {
	const { iconName, label, disabled, onClick, ...omittedProps } = props;

	return (
		<Box display="inline-block" {...omittedProps}>
			<StyledButton
				fontSize="lg"
				ref={ref}
				disabled={disabled}
				onClick={onClick}
			>
				<Icon name={iconName} height="40px" width="40px" />
				{label && (
					<StyleText fontSize="md" fontWeight="semiBold" ref={ref}>
						{label}
					</StyleText>
				)}
			</StyledButton>
		</Box>
	);
});

IconButton.displayName = 'Icon Button';

IconButton.defaultProps = {
	'data-cy': 'IconButton', // component name
	iconName: 'help.outline',
};

IconButton.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	iconName: PropTypes.string,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

export default IconButton;
