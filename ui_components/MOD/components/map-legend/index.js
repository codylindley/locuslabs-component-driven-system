import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import Box from '@locus-labs/mod-box';
import Badge from '@locus-labs/mod-badge';
import Text from '@locus-labs/mod-text';
import { layout, compose } from 'styled-system';
import { theme } from 'styled-tools';

const StyledMapLegend = styled(Box)`
	padding: 32px;
	filter: drop-shadow(${theme('shadows.md')});
	background-color: ${theme('colors.widgetBackground', '#FFFFFF')};
	color: ${theme('colors.widgetText', '#000000')};
	border-radius: 8px;
	width: 1039px;

	&.editor {
		padding: 16px;
		border-radius: 4px;
		width: 520px;
	}
`;

const MapLegendRow = styled(Box)`
	&:not(:last-child) {
		margin-bottom: 32px;

		&.editor {
			margin-bottom: 16px;
		}
	}
`;
const MapLegendColumn = styled(Box)`
	flex: 0 0 auto;

	&:not(:last-child) {
		margin-right: 32px;

		&.editor {
			margin-right: 16px;
		}
	}
	${compose(layout)};
`;

const MapLegendRowItem = styled(Box)`
	&:not(:last-child) {
		margin-right: 32px;

		&.editor {
			margin-right: 16px;
		}
	}
	${compose(layout)};
`;

const MapLegendColumnItem = styled(Box)`
	&:not(:last-child) {
		margin-bottom: 32px;

		&.editor {
			margin-bottom: 16px;
		}
	}
	${compose(layout)};
`;

const StyledBadge = styled(Badge)`
	flex: 0 0 auto;
	margin-right: 12px;

	&.editor {
		margin-right: 6px;
	}
`;

const StyledText = styled(Text)`
	word-break: break-all;
	font-weight: 500;
	font-size: ${theme('fontSizes.xl')};

	&.editor {
		font-size: ${theme('fontSizes.xs')};
	}
`;

const MapLegend = forwardRef((props, ref) => {
	const { type, items, ...omittedProps } = props;

	const _getMaxElementWidth = (elementsCount) => {
		switch (elementsCount) {
			case 1:
				return {
					display: '100%',
					editor: '100%',
				};
			case 2:
			case 4:
				return {
					display: '471px',
					editor: '235px',
				};
			default:
				return {
					display: '304px',
					editor: '152px',
				};
		}
	};

	const _getLayoutWithColumns = (maxColumnWidth) => {
		const columnCount = Math.ceil(items.length / 2);
		const columns = [];

		items.map((item, index) => {
			const columnIndex = index % columnCount; // make X columns with 2 rows
			if (typeof columns[columnIndex] === 'undefined')
				columns[columnIndex] = [];
			columns[columnIndex].push(item);
		});

		return (
			<StyledMapLegend
				ref={ref}
				className={type}
				display="flex"
				flexDirection="row"
				alignItems="center"
				justifyContent="center"
				{...omittedProps}
			>
				{columns.map((column, index) => {
					return (
						<MapLegendColumn
							key={index}
							data-cy="MapLegendColumn"
							className={type}
							display="flex"
							flexDirection="column"
							maxWidth={maxColumnWidth}
						>
							{column.map((item, index) => {
								return (
									<MapLegendColumnItem
										key={index}
										data-cy="MapLegendItem"
										className={type}
										display="flex"
										flexDirection="row"
										alignItems="center"
										maxWidth={maxColumnWidth}
									>
										<StyledBadge
											iconName={item.badge}
											className={type}
											size={type}
											display="flex"
											fill={item.badgeColor}
										/>
										<StyledText className={type} limitLinesOfTextTo={1}>
											{item.label}
										</StyledText>
									</MapLegendColumnItem>
								);
							})}
						</MapLegendColumn>
					);
				})}
			</StyledMapLegend>
		);
	};

	const _getLayoutWithRows = (maxItemWidth) => {
		const rows = [items.slice(0, 3), items.slice(3, 6)]; // divide items to 2 rows

		const maxLongItemWidth = {
			display: '471px',
			editor: '235px',
		};

		return (
			<StyledMapLegend
				ref={ref}
				className={type}
				display="flex"
				flexDirection="column"
				alignItems="center"
				{...omittedProps}
			>
				{rows.map((row, rowIndex) => {
					if (!row.length) return null;
					return (
						<MapLegendRow
							key={rowIndex}
							data-cy="MapLegendRow"
							className={type}
							display="flex"
							flexDirection="row"
							alignItems="center"
						>
							{row.map((item, index) => {
								return (
									<MapLegendRowItem
										key={index}
										data-cy="MapLegendItem"
										className={type}
										display="flex"
										flexDirection="row"
										alignItems="center"
										maxWidth={
											rowIndex > 0 ? maxLongItemWidth[type] : maxItemWidth[type]
										}
									>
										<StyledBadge
											iconName={item.badge}
											className={type}
											size={type}
											display="flex"
											fill={item.badgeColor}
										/>
										<StyledText className={type} limitLinesOfTextTo={1}>
											{item.label}
										</StyledText>
									</MapLegendRowItem>
								);
							})}
						</MapLegendRow>
					);
				})}
			</StyledMapLegend>
		);
	};

	// Get layout with columns for 6 and 4 items
	if (items.length === 6 || items.length === 4)
		return _getLayoutWithColumns(_getMaxElementWidth(items.length)[type]);

	// Get layout with no columns but two rows for 5 items
	if (items.length === 5)
		return _getLayoutWithRows(_getMaxElementWidth(items.length));

	// Render default layout for other items count
	return (
		<StyledMapLegend
			ref={ref}
			className={type}
			display="flex"
			flexDirection="row"
			alignItems="center"
			justifyContent="center"
			{...omittedProps}
		>
			{items.map((item, index) => {
				return (
					<MapLegendRowItem
						key={index}
						data-cy="MapLegendItem"
						className={type}
						display="flex"
						flexDirection="row"
						alignItems="center"
						maxWidth={_getMaxElementWidth(items.length)[type]}
					>
						<StyledBadge
							iconName={item.badge}
							className={type}
							size={type}
							display="flex"
							fill={item.badgeColor}
						/>
						<StyledText className={type} limitLinesOfTextTo={1}>
							{item.label}
						</StyledText>
					</MapLegendRowItem>
				);
			})}
		</StyledMapLegend>
	);
});

MapLegend.displayName = 'Map Legend';

MapLegend.defaultProps = {
	'data-cy': 'MapLegend',
	type: 'display',
	items: [{ badge: 'need.an.icon', label: 'legend items missing!' }],
};

export default MapLegend;

MapLegend.propTypes = {
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
			label: PropTypes.string.isRequired,
			badge: PropTypes.string.isRequired,
			badgeColor: PropTypes.string,
		})
	).isRequired,
};
