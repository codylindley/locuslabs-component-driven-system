import { forwardRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import {
	background,
	border,
	color,
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	typography,
	compose,
} from 'styled-system';
import { prop } from 'styled-tools';

const Spinner = styled.div`
	display: inline-block;
	width: ${({ sizeProps }) => sizeProps.width}px;
	height: ${({ sizeProps }) => sizeProps.width}px;
	position: relative;

	& div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		border: ${({ sizeProps }) => sizeProps.borderWidth}px solid;
		border-radius: 50%;
		animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: ${prop('spinnerColor')} transparent transparent transparent;
	}

	div:nth-child(1) {
		animation-delay: -0.45s;
	}

	div:nth-child(2) {
		animation-delay: -0.3s;
	}

	div:nth-child(3) {
		animation-delay: -0.15s;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	${compose(
		background,
		border,
		color,
		flexbox,
		grid,
		layout,
		position,
		shadow,
		space,
		typography
	)};
`;

const sizesList = {
	lg: {
		width: 64,
		borderWidth: 8,
	},
	sm: {
		width: 40,
		borderWidth: 6,
	},
	xxsm: {
		width: 16,
		borderWidth: 1,
	},
};

const LoadingIndicator = forwardRef((props, ref) => {
	const { spinnerColor, size, ...omittedProps } = props;
	const themeContext = useContext(ThemeContext);

	return (
		<Spinner
			ref={ref}
			sizeProps={sizesList[size]}
			spinnerColor={spinnerColor || themeContext.colors.primary || '#999'}
			{...omittedProps}
		>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</Spinner>
	);
});

LoadingIndicator.displayName = 'Loading Indicator';

LoadingIndicator.defaultProps = {
	'data-cy': 'LoadingIndicator', // component name
	size: 'lg',
};

LoadingIndicator.propTypes = {
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
	spinnerColor: PropTypes.string,
	size: PropTypes.oneOf(['lg', 'sm', 'xxsm']),
};

export default LoadingIndicator;
