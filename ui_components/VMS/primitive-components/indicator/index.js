import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/vms-box';
import Text from '@locus-labs/vms-text';
import { ThemeContext } from 'styled-components';

const typeBgColors = {
	alert: 'indicatorErrorBackground',
	active: 'indicatorActiveBackground',
	inactive: 'indicatorInactiveBackground',
	warning: 'indicatorWarningBackground',
	info: 'indicatorInfoBackground',
};

const typeTextColors = {
	alert: 'indicatorErrorText',
	active: 'indicatorActiveText',
	inactive: 'indicatorInactiveText',
	warning: 'indicatorWarningText',
	info: 'indicatorInfoText',
};

const Indicator = forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext);
	const { children, type, ...omittedProps } = props;
	return (
		<Box display="inline-block" ref={ref} {...omittedProps}>
			<Box
				bg={themeContext.colors[typeBgColors[type]] || 'black'}
				display="inline-block"
				color={themeContext.colors[typeTextColors[type]] || 'white'}
				position="relative"
				borderRadius="100px"
				textAlign="center"
				px="8px"
				py="2px"
				height="24px"
			>
				<Text
					lineHeight="20px"
					maxWidth="200px"
					minWidth="41px"
					fontSize="sm"
					fontWeight="bold"
					limitLinesOfTextTo={1}
				>
					{typeof children === 'string'
						? children.charAt(0).toUpperCase() + children.slice(1)
						: children}
				</Text>
			</Box>
		</Box>
	);
});

Indicator.propTypes = {
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
	type: PropTypes.oneOf(['alert', 'active', 'inactive', 'warning', 'info'])
		.isRequired,
	children: PropTypes.node.isRequired,
};

Indicator.displayName = 'Indicator';

Indicator.defaultProps = {
	'data-cy': 'Indicator', // component name
};

export default Indicator;
