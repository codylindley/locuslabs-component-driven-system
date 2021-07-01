import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifNotProp, ifProp, theme } from 'styled-tools';
import styledSystemPropTypes from '@styled-system/prop-types';
import Text from '@locus-labs/vms-text';
import Box from '@locus-labs/vms-box';
import Tooltip from '@locus-labs/vms-tooltip';
import Badge from '@locus-labs/vms-badge';
import CircleButton from '@locus-labs/vms-circle-button';

export const tileTypes = {
	nearbyLocation: 'nearbyLocation',
	mapLegend: 'mapLegend',
};

const TileContainer = styled(Box)`
	display: grid;
	gap: 0px 12px;
	grid-template-rows: 56px;
	grid-template-columns: ${ifProp(
		'isMapLegend',
		'43px 1fr 2fr 43px',
		'1.5fr 1.5fr 4fr 43px'
	)};
	width: 100%;
	border: 1px solid ${theme('colors.secondaryButton', '#000000')};
	background-color: ${theme('colors.textInputBG', '#FFFFFF')};
	pointer-events: ${ifProp('disabled', 'none', undefined)};
`;

const SecondaryLabel = styled(Text)`
	display: -webkit-box;
	cursor: default;
	line-height: 18px;
	color: ${theme('colors.secondaryText', '#000000')};
`;

const PrimaryLabel = styled(Text)`
	display: -webkit-box;
	cursor: default;
	width: fit-content;
	line-height: 21px;
	transition: 0.3s all ease-in-out;
	color: ${theme('colors.primaryText', '#000000')};
	&:hover {
		text-decoration: ${ifProp('underline', 'underline', 'none')};
	}
`;

const LabelColumnContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-self: center;

	&:first-child {
		padding-left: ${ifNotProp('isMapLegend', '12px', undefined)};
	}
`;

const LabelColumn = forwardRef((props, ref) => {
	const { item, disabled, isMapLegend } = props;
	return (
		<LabelColumnContainer
			ref={ref}
			isMapLegend={isMapLegend}
			{...props}
			opacity={disabled ? '0.5' : undefined}
		>
			{item.secondaryLabel && (
				<SecondaryLabel fontSize="md" fontWeight="light">
					{item.secondaryLabel}
				</SecondaryLabel>
			)}
			{item.primaryLabel && (
				<Tooltip
					content={item.tooltipLabel}
					cancelTooltip={disabled}
					placement="bottom"
				>
					<PrimaryLabel
						data-cy="EllipsisLabel"
						underline={item.tooltipLabel}
						limitLinesOfTextTo={1}
					>
						{item.primaryLabel}
					</PrimaryLabel>
				</Tooltip>
			)}
		</LabelColumnContainer>
	);
});

LabelColumn.displayName = 'LabelColumn';

LabelColumn.propTypes = {
	item: PropTypes.shape({
		primaryLabel: PropTypes.string.isRequired,
		secondaryLabel: PropTypes.string.isRequired,
		tooltipLabel: PropTypes.string,
	}),
	disabled: PropTypes.bool,
	isMapLegend: PropTypes.bool,
};

const Tile = forwardRef((props, ref) => {
	const { type, items, onRemove, disabled, ...omittedProps } = props;
	const isMapLegend = type === tileTypes.mapLegend;

	return (
		<Box ref={ref} {...omittedProps}>
			<TileContainer
				borderRadius="md"
				data-cy="TileContainer"
				isMapLegend={isMapLegend}
				disabled={disabled}
			>
				{isMapLegend && items?.[0]?.iconName && (
					<Box
						margin="12px 0 12px 12px"
						data-cy="TileBadge"
						opacity={disabled ? '0.5' : undefined}
					>
						<Badge
							iconName={items[0].iconName}
							size="xl"
							fill={items[0]?.badgeColor}
						/>
					</Box>
				)}
				{items?.map((item, index) => (
					<LabelColumn
						data-cy="LabelColumn"
						key={index}
						item={item}
						disabled={disabled}
					/>
				))}
				<Box margin="12px 12px 12px auto">
					<CircleButton
						data-cy="TileRemoveButton"
						iconName="trash"
						size="medium"
						disabled={disabled}
						onClick={() => !disabled && onRemove?.()}
					/>
				</Box>
			</TileContainer>
		</Box>
	);
});

Tile.propTypes = {
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
	items: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.shape({
				secondaryLabel: PropTypes.string.isRequired,
				primaryLabel: PropTypes.string.isRequired,
				tooltipLabel: PropTypes.string,
			})
		),
		PropTypes.arrayOf(
			PropTypes.shape({
				primaryLabel: PropTypes.string.isRequired,
				secondaryLabel: PropTypes.string.isRequired,
				tooltipLabel: PropTypes.string,
				iconName: PropTypes.string,
				badgeColor: PropTypes.string,
			})
		),
	]),
	type: PropTypes.oneOf([tileTypes.mapLegend, tileTypes.nearbyLocation]),
	onRemove: PropTypes.func,
	disabled: PropTypes.bool,
};

Tile.displayName = 'Tile';

Tile.defaultProps = {
	'data-cy': 'Tile', // component name
	type: 'nearbyLocation',
	disabled: false,
};

export default Tile;
