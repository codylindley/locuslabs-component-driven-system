import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import Box from '@locus-labs/mod-box';
import Icon from '@locus-labs/mod-icon';
import Text from '@locus-labs/mod-text';

const typeProps = {
	display: {
		height: '72px',
		minWidth: '1080px',
		gridColumnGap: '40px',
		padding: '0 40px',
		fontSize: 'lg',
		fontWeight: 'lighter',
		boxShadow: 'md',
	},
	editor: {
		height: '36px',
		minWidth: '540px',
		gridColumnGap: '20px',
		padding: '0 20px',
		fontSize: 'xxs',
		fontWeight: 'lighter',
		boxShadow: 'sm',
	},
};

const Container = styled(Box)`
	display: grid;
	background-color: ${theme('colors.mapNavBackground', '#000000')};
	color: ${theme('colors.mapNavText', '#FFFFFF')};
`;

const StyledText = styled(Text)`
	font-size: inherit;
	font-weight: inherit;
`;

const Footer = forwardRef((props, ref) => {
	const { type, ...omittedProps } = props;
	const isDisplay = type === 'display';
	const gridTemplateColumns = `repeat(${props.items.length}, auto)`;

	return (
		<Container
			ref={ref}
			{...(typeProps[type] || {})}
			gridTemplateColumns={gridTemplateColumns}
			{...omittedProps}
		>
			{props.items.map((value, index) => {
				return (
					<Box
						key={index}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<Icon
							mr={isDisplay ? '8px' : '4px'}
							name={value.icon}
							iconSize={isDisplay ? 'md' : 'xs'}
						/>
						<StyledText limitLinesOfTextTo={1}>{value.label}</StyledText>
					</Box>
				);
			})}
		</Container>
	);
});

Footer.displayName = 'Footer';

Footer.defaultProps = {
	'data-cy': 'Footer',
	type: 'display',
	items: [{ icon: 'need.a.icon', label: 'footer items missing !!!' }],
};

export default Footer;

Footer.propTypes = {
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
	type: PropTypes.oneOf(['display', 'editor']),
	items: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
};
