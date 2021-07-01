import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/vms-text';
import Box from '@locus-labs/vms-box';
import { rgba } from 'polished';
import { theme } from 'styled-tools';

const typeColors = {
	success: 'statusSuccess',
	warning: 'statusWarning',
	error: 'statusError',
};

const StyledBox = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	border: solid 1px;
	min-width: 100px;
	-webkit-line-clamp: 1;

	border-radius: ${theme('borderRadius', '6px')};
	color: ${({ theme, type }) => theme.colors[typeColors[type]] || '#000000'};
	border-color: ${({ theme, type }) =>
		theme.colors[typeColors[type]] || '#000000'};
	background-color: ${({ theme, type }) =>
		rgba(theme.colors[typeColors[type]] || '#000000', 0.05)};
`;

const Banner = forwardRef((props, ref) => {
	const { children, bannerSize, type, ...omittedProps } = props;

	return (
		<Box ref={ref} {...omittedProps}>
			<StyledBox type={type}>
				<Text
					lineHeight={bannerSize === 'small' ? '20px' : '24px'}
					padding={bannerSize === 'small' ? '1px 8px' : '3px 8px'}
					fontSize={bannerSize === 'small' ? 'lg' : 'xl'}
					limitLinesOfTextTo={1}
				>
					{children}
				</Text>
			</StyledBox>
		</Box>
	);
});

Banner.propTypes = {
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
	type: PropTypes.oneOf(['success', 'error', 'warning']),
	bannerSize: PropTypes.oneOf(['medium', 'small']),
};

Banner.displayName = 'Banner';

Banner.defaultProps = {
	'data-cy': 'Banner', // component name
	type: 'success',
	bannerSize: 'medium',
};

export default Banner;
