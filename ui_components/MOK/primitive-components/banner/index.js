import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Icon from '@locus-labs/mok-icon';
import Text from '@locus-labs/mok-text';
import Box from '@locus-labs/mok-box';

const Banner = forwardRef((props, ref) => {
	const {
		iconName,
		iconColor,
		fillColor,
		textColor,
		children,
		...omittedProps
	} = props;

	return (
		<Box padding="0" width="100%" ref={ref} {...omittedProps}>
			<Box
				maxHeight="128px"
				minHeight="80px"
				width="100%"
				bg={fillColor}
				padding="16px 40px"
				display="flex"
				textAlign="center"
				justifyContent="center"
				data-cy="BannerContainer"
			>
				<Icon
					mr="8px"
					iconSize="xl"
					name={iconName}
					color={iconColor}
					as="span"
					display="inline-block"
					position="relative"
					verticalAlign="middle"
				/>
				<Text
					maxHeight="128px"
					lineHeight="48px"
					fontSize="xxl"
					fontWeight="500"
					color={textColor}
					textAlign="left"
					limitLinesOfTextTo={2}
				>
					{children}
				</Text>
			</Box>
		</Box>
	);
});

Banner.displayName = 'Banner';

Banner.defaultProps = {
	'data-cy': 'Banner', // component name
	iconName: 'info',
	iconColor: '#FFFFFF',
	textColor: '#FFFFFF',
	fillColor: '#000000',
};

Banner.propTypes = {
	...styledSystemPropTypes.space,
	...styledSystemPropTypes.color,
	...styledSystemPropTypes.background,
	...styledSystemPropTypes.border,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.position,
	...styledSystemPropTypes.shadow,
	as: PropTypes.string,
	forwardAs: PropTypes.string,
	iconName: PropTypes.string,
	iconColor: PropTypes.string,
	textColor: PropTypes.string,
	fillColor: PropTypes.string,
};

export default Banner;
