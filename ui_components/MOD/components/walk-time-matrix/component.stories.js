import WalkTimeMatrix from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOD Components/Domain Components/Walk Time Matrix',
	decorators: [ThemeDecorator], // connect the mod-default-theme to all stories
	component: WalkTimeMatrix,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDisplay-Master-2020?node-id=17%3A2',
		},
	},
};

const section1 = {
	label: 'GATES',
	items: [
		{
			locationLabel: 'A1 - A26',
			walkTime: '12 - 15 min',
		},
		{
			locationLabel: 'C17 - C31',
			walkTime: '12 - 15 min',
		},
		{
			locationLabel: 'E1 - E17',
			walkTime: '12 - 15 min',
		},
	],
};

const section2 = {
	label: 'GATES',
	items: [
		{
			locationLabel: 'B1 - B15',
			walkTime: '12 - 15 min',
		},
		{
			locationLabel: 'D1 - D16',
			walkTime: '12 - 15 min',
		},
		{
			locationLabel: 'F1 - F39',
			walkTime: '12 - 15 min',
		},
	],
};

const sectionLong1 = {
	label:
		'When the text label goes beyond the minimum pixel padding left/right and middle',
	items: [
		{
			locationLabel:
				'When the text label goes beyond the minimum pixel padding left/right and middle',
			walkTime:
				'When the text label goes beyond the minimum pixel padding left/right and middle',
		},
		{
			locationLabel:
				'When the text label goes beyond the minimum pixel padding left/right and middle',
			walkTime: '12 - 15 min',
		},
		{
			locationLabel: 'E1 - E17',
			walkTime: '12 - 15 min',
		},
	],
};

const sectionLong2 = {
	label: 'GATES',
	items: [
		{
			locationLabel:
				'When the text label goes beyond the minimum pixel padding left/right and middle',
			walkTime:
				'When the text label goes beyond the minimum pixel padding left/right and middle',
		},
		{
			locationLabel: 'D1 - D16',
			walkTime: '12 - 15 min',
		},
		{
			locationLabel: 'F1 - F39',
			walkTime: '12 - 15 min',
		},
	],
};

export const Default = () => <WalkTimeMatrix />;
export const Editor = () => <WalkTimeMatrix type="editor" />;

export const Items6 = () => (
	<>
		<WalkTimeMatrix sections={[section1, section2]} marginBottom="20px" />
		<WalkTimeMatrix type="editor" sections={[section1, section2]} />
	</>
);

export const Items5 = () => {
	const section = { ...section2 };
	section.items = section.items.slice(0, 2);
	return (
		<>
			<WalkTimeMatrix sections={[section1, section]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[section1, section]} />
		</>
	);
};

export const Items4 = () => {
	const section = { ...section2 };
	section.items = section.items.slice(0, 1);
	return (
		<>
			<WalkTimeMatrix sections={[section1, section]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[section1, section]} />
		</>
	);
};

export const Items3 = () => {
	return (
		<>
			<WalkTimeMatrix sections={[section1]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[section1]} />
		</>
	);
};

export const Items2 = () => {
	const section = { ...section1 };
	section.items = section.items.slice(0, 2);
	return (
		<>
			<WalkTimeMatrix sections={[section]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[section]} />
		</>
	);
};

export const Items1 = () => {
	const section = { ...section1 };
	section.items = section.items.slice(0, 1);
	return (
		<>
			<WalkTimeMatrix sections={[section]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[section]} />
		</>
	);
};

export const WithLongText = () => (
	<>
		<WalkTimeMatrix
			sections={[sectionLong1, sectionLong2]}
			marginBottom="20px"
		/>
		<WalkTimeMatrix type="editor" sections={[sectionLong1, sectionLong2]} />
	</>
);

export const WithLongText5Items = () => {
	const section = { ...sectionLong2 };
	section.items = section.items.slice(0, 2);
	return (
		<>
			<WalkTimeMatrix sections={[sectionLong1, section]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[sectionLong1, section]} />
		</>
	);
};

export const WithLongText4Items = () => {
	const section = { ...sectionLong2 };
	section.items = section.items.slice(0, 1);
	return (
		<>
			<WalkTimeMatrix sections={[sectionLong1, section]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[sectionLong1, section]} />
		</>
	);
};

export const WithLongText3Items = () => {
	return (
		<>
			<WalkTimeMatrix sections={[sectionLong1]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[sectionLong1]} />
		</>
	);
};

export const WithLongText2Items = () => {
	const section = { ...sectionLong1 };
	section.items = section.items.slice(0, 2);
	return (
		<>
			<WalkTimeMatrix sections={[section]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[section]} />
		</>
	);
};
export const WithLongText1Item = () => {
	const section = { ...sectionLong1 };
	section.items = section.items.slice(0, 1);
	return (
		<>
			<WalkTimeMatrix sections={[section]} marginBottom="20px" />
			<WalkTimeMatrix type="editor" sections={[section]} />
		</>
	);
};
