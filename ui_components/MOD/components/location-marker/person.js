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

const PersonStyled = styled('svg')`
	${compose(flexbox, grid, layout, position, shadow, space)};
`;

const Person = forwardRef((props, ref) => {
	const { fill, border, ...omittedProps } = props;
	const themeContext = useContext(ThemeContext);
	return (
		<PersonStyled
			ref={ref}
			{...omittedProps}
			width={props.small && props.small !== false ? 20 : 40}
			height={props.small && props.small !== false ? 50 : 100}
			viewBox="0 0 20 50"
			xmlns="http://www.w3.org/2000/svg"
		>
			<ellipse
				cx="10"
				cy="45.9999"
				rx="10"
				ry="4"
				fill="#231F20"
				fillOpacity="0.3"
			/>
			<path
				d="M16.5625 6.5625C16.5625 10.1869 13.6244 13.125 10 13.125C6.37563 13.125 3.4375 10.1869 3.4375 6.5625C3.4375 2.93813 6.37563 0 10 0C13.6244 0 16.5625 2.93813 16.5625 6.5625Z"
				fill={fill || themeContext.colors.miscWayfindingStartColor || 'black'}
			/>
			<path
				fill={fill || themeContext.colors.miscWayfindingStartColor || 'black'}
				d="M1.25 19.2348C1.25 16.8984 3.64958 15 5.97645 15H14.0235C16.3019 15 18.7015 16.8497 18.75 19.1861L18.7258 28.9213C18.7258 30.1059 18.0169 31.0769 17.3123 32.0422C16.7139 32.8619 16.1184 33.6776 15.9626 34.6164L14.8611 41.5152C14.8611 41.5152 14.375 46.25 11.9444 46.25H8.05556C5.625 46.25 5.13889 41.5152 5.13889 41.5152L4.0374 34.6164C3.88157 33.6776 3.28615 32.8619 2.68774 32.0422C1.98306 31.0769 1.27424 30.1059 1.27424 28.9213L1.25 19.2348Z"
			/>
			<path
				fill={
					border || themeContext.colors.miscWayfindingStartStroke || 'black'
				}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.7258 28.9213L18.75 19.1861C18.7015 16.8497 16.3019 15 14.0235 15H5.97645C3.64958 15 1.25 16.8984 1.25 19.2348L1.27424 28.9213C1.27424 30.1059 1.98306 31.0769 2.68774 32.0422C3.28615 32.8619 3.88157 33.6776 4.0374 34.6164L5.13889 41.5152C5.13889 41.5152 5.625 46.25 8.05556 46.25H11.9444C14.375 46.25 14.8611 41.5152 14.8611 41.5152L15.9626 34.6164C16.1184 33.6776 16.7139 32.8619 17.3123 32.0422C18.0169 31.0769 18.7258 30.1059 18.7258 28.9213ZM13.8664 41.4126L13.8692 41.3852L14.9761 34.4527C15.1713 33.2765 15.8904 32.2929 16.4486 31.5291C16.4675 31.5034 16.4861 31.4779 16.5046 31.4526C17.2523 30.4283 17.7258 29.7232 17.7258 28.9213V28.9189L17.75 19.1963C17.7295 18.381 17.2983 17.5912 16.5767 16.98C15.8493 16.3639 14.9044 16 14.0235 16H5.97645C5.07355 16 4.11895 16.3743 3.39298 16.9992C2.66934 17.622 2.25039 18.4214 2.25 19.2337C2.25 19.2341 2.25 19.2344 2.25 19.2348L2.27424 28.9213C2.27424 29.7232 2.7477 30.4283 3.49543 31.4526C3.51388 31.4779 3.53253 31.5034 3.55137 31.5291C4.10964 32.2929 4.82867 33.2765 5.0239 34.4527L5.02491 34.4588L6.1308 41.3852L6.13354 41.4119L6.13366 41.413L6.13426 41.4185L6.13784 41.4494C6.14129 41.4781 6.14688 41.5226 6.15496 41.5806C6.17114 41.6967 6.19714 41.8658 6.23556 42.07C6.31316 42.4822 6.43797 43.0188 6.62685 43.5444C6.81968 44.081 7.05674 44.542 7.32788 44.8527C7.58471 45.147 7.8162 45.25 8.05556 45.25H11.9444C12.1838 45.25 12.4153 45.147 12.6721 44.8527C12.9433 44.542 13.1803 44.081 13.3731 43.5444C13.562 43.0188 13.6868 42.4822 13.7644 42.07C13.8029 41.8658 13.8289 41.6967 13.845 41.5806C13.8531 41.5226 13.8587 41.4781 13.8622 41.4494L13.8657 41.4185L13.8664 41.4126ZM10 12.125C13.0721 12.125 15.5625 9.63458 15.5625 6.5625C15.5625 3.49042 13.0721 1 10 1C6.92792 1 4.4375 3.49042 4.4375 6.5625C4.4375 9.63458 6.92792 12.125 10 12.125ZM10 13.125C13.6244 13.125 16.5625 10.1869 16.5625 6.5625C16.5625 2.93813 13.6244 0 10 0C6.37563 0 3.4375 2.93813 3.4375 6.5625C3.4375 10.1869 6.37563 13.125 10 13.125Z"
			/>
		</PersonStyled>
	);
});

Person.propTypes = {
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

Person.displayName = 'Person';

Person.defaultProps = {
	'data-cy': 'Person', // component name
};

export default Person;
