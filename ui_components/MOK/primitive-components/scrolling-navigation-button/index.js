import { forwardRef } from 'react';
import styled from 'styled-components';
import { border, shadow } from 'styled-system';
import { theme } from 'styled-tools';

import styledSystemPropTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import Icon from '@locus-labs/mok-icon';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';

const Container = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;
	max-width: 374px;
	background-color: ${theme('colors.primaryButtonText', '#FFFFFF')};
`;

const StyledButton = styled('button')`
	outline: none;
	border: none;
	height: 56px;
	min-width: 54px;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: inherit;
	color: ${theme('colors.primaryButton', '#000000')};

	&:active {
		background-color: ${theme('colors.primaryButtonHover')};
		color: ${theme('colors.primaryButtonText')};
		outline: none;
	}

	${border};
	${shadow};
`;

const StyledLabel = styled(Text)`
	line-height: 24px;
	text-align: center;
	color: ${theme('colors.primaryButton', '#000000')};
`;

const ScrollingNavigationButton = forwardRef((props, ref) => {
	const { label, onClick, ...omittedProps } = props;

	return (
		<Box display="inline-box" ref={ref} {...omittedProps}>
			<Container boxShadow="lg">
				<StyledButton
					data-cy="ScrollingNavigationLeftButton"
					borderRadius="4px 0px 0px 4px"
					boxShadow="lg"
					onMouseDown={() => onClick?.('left')}
				>
					<Icon name="chevron.left" iconSize="sm" narrow />
				</StyledButton>
				<StyledLabel
					data-cy="ScrollingNavigationButtonLabel"
					fontSize="sm"
					fontWeight="semiBold"
					px="20px"
					limitLinesOfTextTo={1}
				>
					{label}
				</StyledLabel>
				<StyledButton
					data-cy="ScrollingNavigationRightButton"
					borderRadius="0px 4px 4px 0px"
					boxShadow="lg"
					onMouseDown={() => onClick?.('right')}
				>
					<Icon name="chevron.right" iconSize="sm" narrow />
				</StyledButton>
			</Container>
		</Box>
	);
});

ScrollingNavigationButton.displayName = 'ScrollingNavigationButton';

export default ScrollingNavigationButton;

ScrollingNavigationButton.defaultProps = {
	'data-cy': 'ScrollingNavigationButton', // component name
};

ScrollingNavigationButton.propTypes = {
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
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
