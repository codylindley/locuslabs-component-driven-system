import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import Box from '@locus-labs/vms-box';
import Text from '@locus-labs/vms-text';
import styled, { useTheme } from 'styled-components';
import { ifProp, theme } from 'styled-tools';

const Label = styled(Text)`
	cursor: ${ifProp('isLastCrumb', 'default', 'pointer')};
	line-height: 18px;
	color: ${ifProp(
		'isLastCrumb',
		theme('colors.primaryText', '#000000'),
		theme('colors.primaryButton', '#000000')
	)};
	&:hover {
		color: ${ifProp(
			'isLastCrumb',
			theme('colors.primaryText', '#000000'),
			theme('colors.primaryButtonHover', '#000000')
		)};
		text-decoration: ${ifProp('isLastCrumb', 'none', 'underline')};
	}
`;

const Breadcrumbs = forwardRef((props, ref) => {
	const { items, onBreadcrumbClick, ...omittedProps } = props;
	const theme = useTheme();

	const handleBreadcrumbClick = (index) => {
		if (index !== items.length - 1) onBreadcrumbClick?.(index);
	};

	return (
		<Box ref={ref} {...omittedProps}>
			<Box display="flex" alignItem="center">
				{items.map((item, index) => (
					<Box
						key={index}
						data-cy="Breadcrumb"
						onClick={() => handleBreadcrumbClick(index)}
						display="flex"
					>
						<Label
							fontSize="md"
							fontWeight="light"
							isLastCrumb={index === items.length - 1}
						>
							{item.label}
						</Label>
						{index !== items.length - 1 && (
							<Text
								fontSize="md"
								fontWeight="light"
								mx="2px"
								color={theme.colors.secondaryText || '#000000'}
							>
								/
							</Text>
						)}
					</Box>
				))}
			</Box>
		</Box>
	);
});

Breadcrumbs.propTypes = {
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
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
		})
	).isRequired,
	onBreadcrumbClick: PropTypes.func,
};

Breadcrumbs.displayName = 'Breadcrumbs';

Breadcrumbs.defaultProps = {
	'data-cy': 'Breadcrumbs', // component name
};

export default Breadcrumbs;
