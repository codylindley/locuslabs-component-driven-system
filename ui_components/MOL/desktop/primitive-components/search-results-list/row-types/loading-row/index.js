import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import Box from '@locus-labs/mol-desktop-box';
import LoadingIndicator from '@locus-labs/mol-desktop-loading-indicator';
import { ifProp, theme, withProp } from 'styled-tools';

const StyledBox = styled(Box)`
	&::before {
		display: ${ifProp('hasDivider', 'block', 'none')};
		content: '';
		position: absolute;
		top: 0;
		height: 1px;
		width: auto;
		margin: auto;
		left: 16px;
		right: 16px;
		background-color: ${withProp(theme('colors.primaryText'), (primaryText) =>
			rgba(primaryText, 0.1)
		)};
	}
`;

const LoadingRow = forwardRef((props, ref) => {
	return (
		<StyledBox padding="51px 0" textAlign="center" {...props}>
			<LoadingIndicator ref={ref} />
		</StyledBox>
	);
});

LoadingRow.displayName = 'Loading Row';

LoadingRow.defaultProps = {
	'data-cy': 'LoadingRow',
	hasDivider: false,
};

export default LoadingRow;

LoadingRow.propTypes = {
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
	hasDivider: PropTypes.bool,
};
