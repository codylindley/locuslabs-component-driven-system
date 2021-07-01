import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import styledSystemPropTypes from '@styled-system/prop-types';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import GridStyles from './dataGridStyles';

import {
	border,
	layout,
	position,
	shadow,
	space,
	compose,
} from 'styled-system';
import { rgba } from 'polished';

const GridStylesWithStyledSystem = styled(GridStyles)`
	${compose(border, layout, position, shadow, space)};
`;

const DataGrid = forwardRef((props, ref) => {
	const theme = useContext(ThemeContext);

	return (
		<GridStylesWithStyledSystem theme={theme} {...props}>
			<ReactDataGrid
				ref={ref}
				showColumnMenuTool={false}
				enableKeyboardNavigation={false}
				rowHeight={51}
				headerHeight={41}
				loadingText={' '}
				shareSpaceOnResize={true}
				// shown when the grid has no data to show
				emptyText={
					<span style={{ fontSize: '16px', color: rgba(102, 102, 102, 0.5) }}>
						No data found
					</span>
				}
				{...props}
				style={{
					border:
						border || '1px solid' + theme.colors.secondaryButton || '#000',
					borderRadius: props.borderRadius || '4px',
					color: props.color || theme.colors.secondaryText || '#000',
					fontSize: props.fontSize || theme.fontSizes.md || '12px',
					height: props.height,
				}}
			/>
		</GridStylesWithStyledSystem>
	);
});

DataGrid.propTypes = {
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
	dataSource: PropTypes.array,
	columns: PropTypes.array,
	idProperty: PropTypes.string,
};

DataGrid.displayName = 'Data Grid';

DataGrid.defaultProps = {
	'data-cy': 'DataGrid', // component name
};

export default DataGrid;
