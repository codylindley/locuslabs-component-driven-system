import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import {
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	compose,
} from 'styled-system';

const TriangleStyled = styled('svg')`
	${compose(flexbox, grid, layout, position, shadow, space)};
`;

const Triangle = forwardRef((props, ref) => {
	const { fill, ...omittedProps } = props;
	const themeContext = useContext(ThemeContext);
	return (
		<TriangleStyled
			ref={ref}
			{...omittedProps}
			width={props.small && props.small !== false ? 9 : 18}
			height={props.small && props.small !== false ? 5 : 10}
			viewBox="0 0 18 10"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.39713 8.33755C8.18536 9.226 9.56964 9.23578 10.3704 8.35857L18 0L0 0L7.39713 8.33755Z"
				fill={fill || themeContext.colors.primaryButton || '#fff'}
			/>
		</TriangleStyled>
	);
});

Triangle.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.flexbox,
	...styledSystemPropTypes.grid,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	fill: PropTypes.string,
	border: PropTypes.string,
	small: PropTypes.bool,
};

Triangle.displayName = 'Triangle';

Triangle.defaultProps = {
	'data-cy': 'Triangle', // component name
};

export default Triangle;
