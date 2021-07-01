import componentDocumentation from './docs.mdx';
import Icon from './';
import ThemeDecorator from '../../storybook-theme-decorator';
import Text from '@locus-labs/mol-mobile-text';
import PropTypes from 'prop-types';
import iconNames from '/.storybook/shared_js_modules/icon-names/';

export default {
	title: 'MOL Components/Mobile/Primitive Components/Icon',
	component: Icon,
	decorators: [ThemeDecorator], // connect the mol-mobile-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=6380%3A0',
		},
	},
};

export const Default = () => {
	return <Icon />;
};

export const Props = () => {
	return (
		<>
			<Icon color="blue" name="directions.filled" iconSize="sm" />
			<Icon color="red" name="directions.filled" iconSize="md" />
			<Icon color="green" name="directions.filled" iconSize="lg" />
			<Icon color="purple" name="directions.filled" iconSize="xl" />
			<Icon color="orange" name="directions.filled" iconSize="xxl" />
		</>
	);
};

export const NarrowSizes = () => {
	return (
		<>
			<Icon name="directions.filled" iconSize="sm" bg="lightgreen" />
			<br />
			<Icon name="directions.filled" iconSize="sm" bg="lightgreen" narrow />
			<br />
			<br />
			<br />
			<Icon name="directions.filled" iconSize="md" bg="lightgreen" />
			<br />
			<Icon name="directions.filled" iconSize="md" bg="lightgreen" narrow />
			<br />
			<br />
			<br />
			<Icon name="directions.filled" iconSize="lg" bg="lightgreen" />
			<br />
			<Icon name="directions.filled" iconSize="lg" bg="lightgreen" narrow />
			<br />
			<br />
			<br />
			<Icon name="directions.filled" iconSize="xl" bg="lightgreen" />
			<br />
			<Icon name="directions.filled" iconSize="xl" bg="lightgreen" narrow />
			<br />
			<br />
			<br />
			<Icon name="directions.filled" iconSize="xxl" bg="lightgreen" />
			<br />
			<Icon name="directions.filled" iconSize="xxl" bg="lightgreen" narrow />
		</>
	);
};

export const LocalSvgFromTheme = () => {
	return <Icon name="2d" isUsingIconFromTheme />;
};

export const CustomIconSizes = () => {
	return <Icon name="directions.filled" iconSize="120px" />;
};

export const RotatingIcon = () => {
	return (
		<>
			<Icon name="directions.filled" degreesOfIconRotation={45} iconSize="lg" />
			<Icon
				name="directions.filled"
				degreesOfIconRotation={-45}
				iconSize="lg"
			/>
		</>
	);
};

export const FlipIconOnXAxis = () => {
	return (
		<>
			<Icon name="directions.filled" iconSize="xxl" flipOnXAxis />
			<br />
			<Icon name="2d" isUsingIconFromTheme iconSize="xxl" flipOnXAxis />
		</>
	);
};

export const IconNotFound = () => {
	return <Icon name="this-Does-Not-Result-In-Valid-Icon-URL" />;
};

const IconBox = (props) => (
	<div
		style={{
			cssFloat: 'left',
			width: '200px',
			textAlign: 'center',
			margin: '30px',
		}}
	>
		{props.children}
	</div>
);
IconBox.propTypes = { children: PropTypes.node.isRequired };

export const IconNames = () => {
	return (
		<>
			{iconNames.map((value, index) => {
				return (
					<IconBox key={index}>
						<Icon iconSize="xxl" m="auto" name={value} />
						<Text style={{ display: 'inline' }}>{value}</Text>
					</IconBox>
				);
			})}
		</>
	);
};
