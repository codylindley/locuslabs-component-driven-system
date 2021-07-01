import Icon from '@locus-labs/vms-icon';
import { components } from 'react-select';
import styled from 'styled-components';
import Badge from '@locus-labs/vms-badge';
import Box from '@locus-labs/vms-box';
import Tooltip from '@locus-labs/vms-tooltip';
import Text from '@locus-labs/vms-text';

const StyledBadge = styled(Badge)`
	flex: 0 0 auto;
`;

/* eslint-disable react/prop-types */

export const DropdownIndicator = (props) => {
	if (props.isMulti) return null;

	return (
		<components.DropdownIndicator
			{...props}
			innerProps={{ ...props.innerProps, 'data-cy': 'SelectDropdownIndicator' }}
		>
			<Icon
				name="triangle.down"
				iconSize="lg"
				color={props.selectProps.themeContext.colors.secondary || '#000'}
			/>
		</components.DropdownIndicator>
	);
};

export const Input = (props) => (
	<components.Input
		{...props}
		data-cy="SelectInput"
		aria-label={props.selectProps.ariaLabel}
	/>
);

export const Control = ({ children, ...props }) => {
	// If icon exists, render icon or badge
	const _getIcon = ({ hasBadge = false, iconName, iconColor, badgeColor }) => {
		if (hasBadge) {
			return (
				<StyledBadge
					iconName={iconName}
					iconColor={iconColor}
					fill={badgeColor}
					marginRight="3px"
					size="md"
				/>
			);
		}

		return (
			<Icon
				name={iconName}
				color={
					iconColor || props.selectProps.themeContext.colors.secondary || '#000'
				}
				iconSize="lg"
			/>
		);
	};

	const inputIcon =
		props.hasValue && props.selectProps.value.iconName
			? props.selectProps.value // use value icon if exists
			: props.selectProps.inputIcon; // else use input icon

	return (
		<components.Control
			{...props}
			innerProps={{ ...props.innerProps, 'data-cy': 'SelectControl' }}
		>
			{inputIcon?.iconName && _getIcon(inputIcon)}
			{children}
		</components.Control>
	);
};

export const SingleValue = (props) => {
	return (
		<components.SingleValue
			{...props}
			innerProps={{ ...props.innerProps, 'data-cy': 'SelectSingleValue' }}
		>
			{props.data.isCustomOption ? props.data.value : props.children}
		</components.SingleValue>
	);
};

const MultiValueWrapper = styled(Box)`
	display: flex;
	margin: 2px;

	&:last-child {
		margin-right: 0;
	}
`;

export const MultiValue = (props) => {
	return (
		<MultiValueWrapper>
			<Tooltip
				content={
					props.data.tooltipContent && (
						<Text as="div" fontSize="lg">
							{props.data.tooltipContent}
						</Text>
					)
				}
				placement="top"
			>
				<Box display="flex">
					<components.MultiValue
						{...props}
						innerProps={{
							...props.innerProps,
							'data-cy': 'MultiValue',
						}}
					/>
				</Box>
			</Tooltip>
		</MultiValueWrapper>
	);
};

export const MultiValueLabel = (props) => {
	// If element is custom option, replace it's label with value
	return (
		<components.MultiValueLabel
			{...props}
			innerProps={{ ...props.innerProps, 'data-cy': 'MultiValueLabel' }}
		>
			{props.data.isCustomOption ? props.data.value : props.children}
		</components.MultiValueLabel>
	);
};

export const MultiValueRemove = (props) => {
	return (
		<components.MultiValueRemove
			{...props}
			innerProps={{ ...props.innerProps, 'data-cy': 'MultiValueRemove' }}
		>
			<Icon
				name="delete.text"
				iconSize="lg"
				color={
					props.selectProps.themeContext.colors.primaryButtonText || '#fff'
				}
				padding="0"
			/>
		</components.MultiValueRemove>
	);
};

export const Option = ({ children, ...props }) => {
	// If icon exists, render icon or badge
	const _getIcon = ({ hasBadge = false, iconName, iconColor, badgeColor }) => {
		if (hasBadge) {
			return (
				<StyledBadge
					iconName={iconName}
					iconColor={iconColor}
					fill={badgeColor}
					marginRight="8px"
					size="md"
				/>
			);
		}

		return (
			<Icon
				name={iconName}
				color={
					iconColor || props.selectProps.themeContext.colors.secondary || '#000'
				}
				marginRight="8px"
				iconSize="lg"
			/>
		);
	};

	return (
		<components.Option
			{...props}
			innerProps={{ ...props.innerProps, 'data-cy': 'Option' }}
		>
			{props.data.iconName && _getIcon(props.data)}
			{children}
		</components.Option>
	);
};

export const NoOptionsMessage = (props) => {
	return (
		<components.NoOptionsMessage
			{...props}
			innerProps={{ ...props.innerProps, 'data-cy': 'NoOptionsMessage' }}
		>
			{props.selectProps.noResultsInfo}
		</components.NoOptionsMessage>
	);
};

export const Menu = (props) => {
	return (
		<components.Menu
			{...props}
			innerProps={{ ...props.innerProps, 'data-cy': 'SelectMenu' }}
		>
			{props.children}
		</components.Menu>
	);
};

export const MenuList = (props) => {
	return (
		<components.MenuList
			{...props}
			innerProps={{ ...props.innerProps, 'data-cy': 'MenuList' }}
		>
			{props.children}
		</components.MenuList>
	);
};
