import componentDocumentation from './docs.mdx';
import Banner from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'MOK Components/Primitive Components/Banner',
	component: Banner,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/IVVb5jH2beOPiqmwij0FYF/Maps-on-Kiosk-Master-2020?node-id=6921%3A65194',
		},
	},
};

export const Default = () => <Banner>This is a generic banner</Banner>;

export const Icon = () => (
	<Banner iconName="coins">This is a generic banner with icon</Banner>
);

export const WrapText = () => {
	const longText =
		"This is a generic banner with really long text label padding left and right of the component's first line of text";
	return <Banner iconName="coins">{longText}</Banner>;
};

export const TextEllipsis = () => {
	const longText =
		"This is a generic banner with really really really really really really really really really really really really really really really really long text label that will wrap to a second line when it reaches the minimun pixel padding left and right of the component's first line of text";
	return <Banner iconName="info">{longText} </Banner>;
};

export const WithCustomColor = () => (
	<Banner
		iconName="account"
		iconColor="primary"
		textColor="primary"
		fillColor="secondaryText"
	>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		Lorem Ipsum has been the industry's standard dummy text ever since the
		1500s, when an unknown printer took a galley of type and scrambled it to
		make a type specimen book. It has survived not only five centuries, but also
		the leap into electronic typesetting, remaining essentially unchanged. It
		was popularised in the 1960s with the release of Letraset sheets containing
		Lorem Ipsum passages, and more recently with desktop publishing software
		like Aldus PageMaker including versions of Lorem Ipsum.
	</Banner>
);
