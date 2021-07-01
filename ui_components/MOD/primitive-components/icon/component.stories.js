import componentDocumentation from './docs.mdx';
import Icon from './';
import ThemeDecorator from '../../storybook-theme-decorator';
import Text from '@locus-labs/mod-text';
import PropTypes from 'prop-types';
import iconNames from '/.storybook/shared_js_modules/icon-names/';

export default {
	title: 'MOD Components/Primitive Components/Icon',
	component: Icon,
	decorators: [ThemeDecorator], // connect the mol-desktop-default-theme to all stories
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDisplay-Master-2020?node-id=288%3A0',
		},
	},
};

export const Default = () => {
	return <Icon />;
};

export const Props = () => {
	return (
		<>
			<Icon color="orange" name="directions.filled" iconSize="xs" />
			<Icon color="blue" name="directions.filled" iconSize="sm" />
			<Icon color="red" name="directions.filled" iconSize="md" />
			<Icon color="green" name="directions.filled" iconSize="lg" />
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
			<Icon name="directions.filled" degreesOfIconRotation={-45} />
		</>
	);
};

export const FlipIconOnXAxis = () => {
	return (
		<>
			<Icon name="directions.filled" flipOnXAxis />
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
						<Icon iconSize="lg" m="auto" name={value} />
						<Text fontSize="xs" style={{ display: 'inline' }}>
							{value}
						</Text>
					</IconBox>
				);
			})}
		</>
	);
};
