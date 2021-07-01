import componentDocumentation from './docs.mdx';
import Icon from './';
import ThemeDecorator from '../../storybook-theme-decorator';
import Text from '@locus-labs/vms-text';
import PropTypes from 'prop-types';
import iconNames from '/.storybook/shared_js_modules/icon-names/';

export default {
	title: 'VMS Components/Primitive Components/Icon',
	component: Icon,
	decorators: [ThemeDecorator], // connect the vms-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7129%3A129',
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
			<br />
			<Icon color="green" name="directions.filled" iconSize="md" />
			<br />
			<Icon color="red" name="directions.filled" iconSize="lg" />
			<br />
			<Icon color="orange" name="directions.filled" iconSize="xl" />
			<br />
			<Icon color="yellow" name="directions.filled" iconSize="xxl" />
			<br />
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

export const CustomIconSizes = () => {
	return <Icon name="directions.filled" iconSize="120px" />;
};

export const LocalSvgFromTheme = () => {
	return <Icon name="2d" isUsingIconFromTheme />;
};

export const RotatingIcon = () => {
	return (
		<>
			<Icon name="directions.filled" degreesOfIconRotation={45} />
			<br />
			<Icon name="directions.filled" degreesOfIconRotation={-45} />
		</>
	);
};

export const FlipIconOnXAxis = () => {
	return (
		<>
			<Icon name="directions.filled" flipOnXAxis />
			<br />
			<br />
			<Icon name="2d" isUsingIconFromTheme flipOnXAxis />
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
						<Icon iconSize="lg" m="auto" name={value} display="block" />
						<Text fontSize="xs" style={{ display: 'inline' }}>
							{value}
						</Text>
					</IconBox>
				);
			})}
		</>
	);
};
