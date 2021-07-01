import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled, { css } from 'styled-components';
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
import { ifProp, prop } from 'styled-tools';

const StyledText = styled('span')`
	${ifProp(
		'limitLinesOfTextTo',
		css`
			overflow: hidden;
			-webkit-box-orient: vertical;
			/* Limit the text block to x lines */
			-webkit-line-clamp: ${prop('limitLinesOfTextTo')};
		`,
		``
	)};
	display: -webkit-box;
	line-height: 1.5;
	/* Styled System Overrides Everything always comes last */
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

const Text = forwardRef((props, ref) => {
	return (
		<StyledText
			ref={ref}
			fontSize="xl"
			fontWeight="normal"
			fontFamily="default"
			{...props}
		/>
	);
});

Text.displayName = 'Text';

Text.defaultProps = {
	'data-cy': 'Text', // component name
};

export default Text;

Text.propTypes = {
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
	limitLinesOfTextTo: PropTypes.number,
};
