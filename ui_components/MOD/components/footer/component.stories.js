import Footer from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';
import Box from '@locus-labs/mod-box';

export default {
	title: 'MOD Components/Domain Components/Footer',
	decorators: [ThemeDecorator], // connect the mod-default-theme to all stories
	component: Footer,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDisplay-Master-2020?node-id=30%3A89',
		},
	},
};

export const Default = () => <Footer />;

export const Types = () => {
	const footerContent = [
		{ icon: 'social.facebook', label: '/locusLabs' },
		{ icon: 'social.twitter', label: '@LocusLabs' },
		{ icon: 'social.weblink', label: 'www.locuslabs.com' },
		{ icon: 'social.youtube', label: '/locusLabs' },
	];

	return (
		<>
			<Box width="1080px">
				<Footer items={footerContent} type="display" />
			</Box>
			<br />
			<Box width="540px">
				<Footer items={footerContent} type="editor" />
			</Box>
		</>
	);
};

export const PortraitMode = () => {
	const footerContent = [
		{ icon: 'social.facebook', label: '/locusLabs' },
		{ icon: 'social.twitter', label: '@LocusLabs' },
		{ icon: 'social.weblink', label: 'www.locuslabs.com' },
		{ icon: 'social.youtube', label: '/locusLabs' },
	];

	return (
		<>
			<Footer items={footerContent} type="display" />
			<br /> <br />
			<Footer items={footerContent.slice(0, 3)} type="display" />
			<br /> <br />
			<Footer items={footerContent.slice(0, 2)} type="display" />
			<br /> <br />
			<Footer items={footerContent.slice(0, 1)} type="display" />
		</>
	);
};

export const EllipsisLabels = () => {
	const footerContent = [
		{ icon: 'social.facebook', label: '/locusLabs' },
		{ icon: 'social.twitter', label: '@LocusLabs' },
		{
			icon: 'social.weblink',
			label: 'www.verylong name forwfdsaf dsafdsae bsitewill.com',
		},
		{ icon: 'social.youtube', label: '/locusLabs' },
	];

	return (
		<>
			<Box width="1080px">
				<Footer items={footerContent} type="display" />
			</Box>
			<br />
			<Box width="540px">
				<Footer items={footerContent} type="editor" />
			</Box>
		</>
	);
};

export const SingleLine = () => (
	<>
		<Footer
			items={[
				{
					icon: 'social.weblink',
					label:
						'Arrival times and airport maps are also in the United app. Arrival times and airport maps are also in the United app. Arrival times and airport maps are also in the United app',
				},
			]}
			type="display"
		/>
		<br />
		<Footer
			items={[
				{
					icon: 'social.weblink',
					label:
						'Arrival times and airport maps are also in the United app. Arrival times and airport maps are also in the United app. Arrival times and airport maps are also in the United app, Arrival times and airport maps are also in the United app. Arrival times and airport maps are also in the United app. Arrival times and airport maps are also in the United app',
				},
			]}
			type="editor"
		/>
	</>
);
