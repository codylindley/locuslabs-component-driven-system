import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/mol-desktop-box';
import styled, { ThemeContext } from 'styled-components';

const StyledImage = styled.img`
	min-height: 28px;
	max-height: 100px;
	width: auto;
	max-width: 100%;
`;

const Logo = forwardRef((props, ref) => {
	const { url, alt, logoHeight, position, ...omittedProps } = props;
	const themeContext = useContext(ThemeContext);

	const alignmentType = {
		left: 'flex-start',
		center: 'center',
		right: 'flex-end',
	};

	return (
		<Box
			ref={ref}
			display="flex"
			bg={themeContext.colors.widgetBackground}
			p="20px 20px 0 20px"
			justifyContent={alignmentType[position]}
			width="320px"
			{...omittedProps}
		>
			<StyledImage src={url} alt={alt} height={logoHeight} />
		</Box>
	);
});

Logo.displayName = 'Logo';

Logo.defaultProps = {
	'data-cy': 'Logo',
	position: 'center',
};

export default Logo;

Logo.propTypes = {
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
	alt: PropTypes.string.isRequired,
	logoHeight: PropTypes.number,
	position: PropTypes.oneOf(['left', 'center', 'right']),
};
