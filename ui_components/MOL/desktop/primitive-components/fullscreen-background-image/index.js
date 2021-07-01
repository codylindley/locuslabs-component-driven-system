import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mok-box';

const StyledBox = styled(Box)`
	background-image: ${({ url }) => (url ? `url(${url})` : '#EBEBEB')};
	background-position: center;
	background-color: rgba('#FFFFFF', 0.7);
	background-size: cover;
	background-attachment: fixed;
	width: 100vw;
	height: 100vh;
`;

const FullscreenBackgroundImage = forwardRef((props, ref) => (
	<StyledBox {...props} ref={ref} />
));

FullscreenBackgroundImage.displayName = 'Fullscreen Background Image';

FullscreenBackgroundImage.defaultProps = {
	'data-cy': 'FullscreenBackgroundImage', // component name
};

FullscreenBackgroundImage.propTypes = {
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
	url: PropTypes.string.isRequired,
};

export default FullscreenBackgroundImage;
