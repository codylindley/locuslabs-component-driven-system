import Header from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';
import Box from '@locus-labs/mod-box';

export default {
	title: 'MOD Components/Domain Components/Header',
	decorators: [ThemeDecorator], // connect the mod-default-theme to all stories
	component: Header,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDisplay-Master-2020?node-id=1%3A19',
		},
	},
};

const logoUrls = [
	'https://content.locuslabs.com/airport/spritesheet-svg/man/A1XZYA7TH0U45L/venue-logo.svg',
	'https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/spritesheet-svg/A1RUZZWCB76TNU/venue-logo.svg',
	'https://s3-us-west-2.amazonaws.com/content.locuslabs.com/airport/spritesheet-svg/A1GU9WBVS35VHT/venue-logo.svg',
];

export const Default = () => (
	<Box width="1080px">
		<Header />
	</Box>
);

export const Editor = () => (
	<Box>
		{logoUrls.map((url, key) => (
			<Box key={key} width="540px" marginBottom="20px">
				<Header type="editor" logoUrl={url} text="Estimated Travel Time" />
			</Box>
		))}
	</Box>
);

export const Display = () => (
	<Box>
		{logoUrls.map((url, key) => (
			<Box key={key} width="1080px" marginBottom="20px">
				<Header type="display" logoUrl={url} text="Estimated Travel Time" />
			</Box>
		))}
	</Box>
);

export const EditorWithLogoHeight = () => (
	<Box>
		{logoUrls.map((url, key) => (
			<Box key={key} width="540px" marginBottom="20px">
				<Header
					type="editor"
					logoUrl={url}
					logoHeight="40px"
					text="Estimated Travel Time"
				/>
			</Box>
		))}
		{logoUrls.map((url, key) => (
			<Box key={key} width="540px" marginBottom="20px">
				<Header
					type="editor"
					logoUrl={url}
					logoHeight="40px"
					text="Estimated Travel Time Estimated Travel Time Estimated Travel Time"
				/>
			</Box>
		))}
	</Box>
);

export const EditorWithMinLogoHeight = () => (
	<Box>
		{logoUrls.map((url, key) => (
			<Box key={key} width="540px" marginBottom="20px">
				<Header
					type="editor"
					logoUrl={url}
					logoHeight="10px"
					text="Estimated Travel Time"
				/>
			</Box>
		))}
		{logoUrls.map((url, key) => (
			<Box key={key} width="540px" marginBottom="20px">
				<Header
					type="editor"
					logoUrl={url}
					logoHeight="10px"
					text="Estimated Travel Time Estimated Travel Time Estimated Travel Time"
				/>
			</Box>
		))}
	</Box>
);

export const EditorWithMaxLogoHeight = () => (
	<Box>
		{logoUrls.map((url, key) => (
			<Box key={key} width="540px" marginBottom="20px">
				<Header
					type="editor"
					logoUrl={url}
					logoHeight="100px"
					text="Estimated Travel Time"
				/>
			</Box>
		))}
		{logoUrls.map((url, key) => (
			<Box key={key} width="540px" marginBottom="20px">
				<Header
					type="editor"
					logoUrl={url}
					logoHeight="100px"
					text="Estimated Travel Time Estimated Travel Time Estimated Travel Time"
				/>
			</Box>
		))}
	</Box>
);

export const DisplayWithLogoHeight = () => (
	<Box>
		{logoUrls.map((url, key) => (
			<Box key={key} width="1080px" marginBottom="20px">
				<Header logoUrl={url} logoHeight="80px" text="Estimated Travel Time" />
			</Box>
		))}
		{logoUrls.map((url, key) => (
			<Box key={key} width="1080px" marginBottom="20px">
				<Header
					logoUrl={url}
					logoHeight="80px"
					text="Estimated Travel Time Estimated Travel Time Estimated Travel Time"
				/>
			</Box>
		))}
	</Box>
);

export const DisplayWithMinLogoHeight = () => (
	<Box>
		{logoUrls.map((url, key) => (
			<Box key={key} width="1080px" marginBottom="20px">
				<Header logoUrl={url} logoHeight="10px" text="Estimated Travel Time" />
			</Box>
		))}
		{logoUrls.map((url, key) => (
			<Box key={key} width="1080px" marginBottom="20px">
				<Header
					logoUrl={url}
					logoHeight="10px"
					text="Estimated Travel Time Estimated Travel Time Estimated Travel Time"
				/>
			</Box>
		))}
	</Box>
);

export const DisplayWithMaxLogoHeight = () => (
	<Box>
		{logoUrls.map((url, key) => (
			<Box key={key} width="1080px" marginBottom="20px">
				<Header logoUrl={url} logoHeight="200px" text="Estimated Travel Time" />
			</Box>
		))}
		{logoUrls.map((url, key) => (
			<Box key={key} width="1080px" marginBottom="20px">
				<Header
					logoUrl={url}
					logoHeight="200px"
					text="Estimated Travel Time Estimated Travel Time Estimated Travel Time"
				/>
			</Box>
		))}
	</Box>
);
