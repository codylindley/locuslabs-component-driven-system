import componentDocumentation from './docs.mdx';
import Indicator from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Indicator',
	component: Indicator,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7129%3A213',
		},
	},
};

export const Default = () => (
	<>
		<Indicator>14 minute wait</Indicator>
	</>
);

export const TypeProp = () => (
	<>
		<Indicator type="alert">alert</Indicator>
		<br /> <br />
		<Indicator type="active">active</Indicator>
		<br /> <br />
		<Indicator type="inactive">inactive</Indicator>
		<br /> <br />
		<Indicator type="warning">warning</Indicator>
		<br /> <br />
		<Indicator type="info">info</Indicator>
	</>
);

export const EllipsisText = () => (
	<Indicator type="info">
		super long text will get ellipsis if it keeps going
	</Indicator>
);
