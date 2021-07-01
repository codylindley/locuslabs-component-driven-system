import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Icon from '@locus-labs/mok-icon';
import Box from '@locus-labs/mok-box';
import styledSystemPropTypes from '@styled-system/prop-types';

const pinSizes = {
	md: { width: '24px', height: '34px', pt: '1px' },
	xl: { width: '42px', height: '56px', pt: '0px' },
};

const Pin = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	return (
		<Box
			display="inline-block"
			ref={ref}
			{...props}
			width={pinSizes[props.pinSize].width}
			height={pinSizes[props.pinSize].height}
		>
			<Box position="absolute" height="inherit">
				<svg
					width={pinSizes[props.pinSize].width}
					height={pinSizes[props.pinSize].height}
					viewBox="0 0 42 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M31 52.5C31 54.4329 26.5225 56 21 56C15.4775 56 11 54.4329 11 52.5C11 50.5671 15.4775 49 21 49C26.5225 49 31 50.5671 31 52.5Z"
						fill="#231F20"
						fillOpacity="0.3"
					/>
					<path
						d="M38.8197 29.2351L38.8195 29.2354C37.1929 31.7691 35.008 33.8756 32.622 36.166C32.097 36.6699 31.5623 37.167 31.0204 37.6709L31.0076 37.6827C27.0962 41.3195 22.931 45.1924 21 53C19.0725 45.2006 14.918 41.3358 11.0126 37.703L10.9999 37.6911C10.4512 37.1807 9.90977 36.677 9.37811 36.1663L9.37794 36.1662C6.99207 33.8756 4.80714 31.7691 3.1805 29.2354L3.18033 29.2351C1.35198 26.3904 0.5 23.4104 0.5 19.827C0.5 14.5306 2.62995 9.55375 6.50182 5.80813C10.3739 2.06232 15.5207 0 21 0C26.4793 0 31.6261 2.06232 35.4983 5.80813C39.37 9.55375 41.5 14.5306 41.5 19.827C41.5 23.4104 40.648 26.3904 38.8197 29.2351Z"
						fill={
							props.fill || themeContext.colors.miscBadgePinColor || 'black'
						}
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M37.9784 28.6945C39.6973 26.0201 40.5 23.2297 40.5 19.827C40.5 14.8066 38.4836 10.0876 34.803 6.52686C31.1208 2.96481 26.2247 1 21 1C15.7753 1 10.8792 2.96481 7.19711 6.52685C3.51634 10.0876 1.5 14.8066 1.5 19.827C1.5 23.2269 2.30136 26.0155 4.01727 28.6878L4.02156 28.6945C5.56456 31.0978 7.64477 33.1157 10.0288 35.4048L10.0705 35.4448C10.5954 35.949 11.1313 36.4476 11.681 36.9589L11.6833 36.961L11.6937 36.9708L11.696 36.9729L11.7152 36.9908C15.0843 40.1248 18.7642 43.5479 21.0003 49.5885C23.2408 43.5386 26.9302 40.1083 30.3049 36.9706L30.3289 36.9483L30.3395 36.9385L30.3417 36.9365L30.3433 36.935C30.8848 36.4315 31.4124 35.9409 31.9295 35.4446C34.3186 33.1512 36.4043 31.1336 37.9538 28.7328C37.9619 28.7203 37.9704 28.707 37.9784 28.6945ZM38.8195 29.2354C37.1929 31.7691 35.008 33.8756 32.622 36.166C32.0989 36.6681 31.5661 37.1634 31.0263 37.6654L31.0204 37.6709L31.0076 37.6827C27.4199 41.0185 23.6186 44.553 21.5239 51.1404C21.3349 51.7347 21.1598 52.3539 21 53C20.8403 52.3538 20.6653 51.7346 20.4764 51.1403C18.3858 44.5618 14.5944 41.0349 11.0126 37.703L10.9999 37.6911C10.4512 37.1807 9.90977 36.677 9.37811 36.1663C6.99224 33.8757 4.80714 31.7691 3.1805 29.2354C1.35215 26.3907 0.5 23.4104 0.5 19.827C0.5 14.5306 2.62995 9.55375 6.50182 5.80813C10.3739 2.06232 15.5207 0 21 0C26.4793 0 31.6261 2.06232 35.4983 5.80813C39.37 9.55375 41.5 14.5306 41.5 19.827C41.5 23.4104 40.6479 26.3907 38.8195 29.2354Z"
						fill={
							props.border || themeContext.colors.miscBadgePinStroke || 'black'
						}
					/>
				</svg>
			</Box>
			<Box position="absolute" height="inherit" pt={pinSizes[props.pinSize].pt}>
				<Icon
					color={
						props.iconColor || themeContext.colors.miscBadgePinStroke || 'black'
					}
					name={props.iconName}
					iconSize={pinSizes[props.pinSize].width}
					degreesOfIconRotation={props.degreesOfIconRotation || 0}
				/>
			</Box>
		</Box>
	);
});

Pin.displayName = 'Pin';

Pin.defaultProps = {
	'data-cy': 'Pin', // component name
	iconName: 'pin.selected',
	pinSize: 'xl',
};

Pin.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.flexbox,
	...styledSystemPropTypes.grid,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	fill: PropTypes.string,
	border: PropTypes.string,
	pinSize: PropTypes.oneOf(['md', 'xl']),
	iconName: PropTypes.string,
	iconColor: PropTypes.string,
	degreesOfIconRotation: PropTypes.number,
};

export default Pin;
