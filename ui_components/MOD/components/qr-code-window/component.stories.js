import Box from '@locus-labs/mod-box';
import Text from '@locus-labs/mod-text';
import QRCodeWindow from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOD Components/Domain Components/QR Code Window',
	decorators: [ThemeDecorator], // connect the mod-default-theme to all stories
	component: QRCodeWindow,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDigital-Display-Master-2020?node-id=3859%3A49437',
		},
	},
};

export const Default = () => (
	<Box height="1764px" width="1079px">
		<QRCodeWindow
			primaryText="Find Shops in your Terminal"
			secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Trasnfer all the information to your and open the virtual map on your mobile device and move freely through the airport."
			url="http://locuslabs.com/"
			type="display"
			qrCodeTitle="1764px x 1079px"
			qrCodeDescription={
				<Text limitLinesOfTextTo={1}>QR code description</Text>
			}
		/>
	</Box>
);

export const Ellipsis = () => (
	<Box height="1764px" width="1079px">
		<QRCodeWindow
			primaryText="Find Shops in your Terminal, you will find a wide variety of restaurants and food out"
			secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Trasnfer all the information to your and open the virtual map on your mobile device and move freely through the airport. To your and open the virtual map on your mobile device and move freely through the airport"
			url="http://locuslabs.com/"
			type="display"
			qrCodeTitle="1764px x 1079px"
			qrCodeDescription={
				<Text limitLinesOfTextTo={1}>QR code description</Text>
			}
		/>
	</Box>
);

export const Type = () => (
	<>
		<Box height="1764px" width="1079px" mb="50px">
			<QRCodeWindow
				primaryText="Find Shops in your Terminal"
				secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Trasnfer all the information to your and open the virtual map on your mobile device and move freely through the airport."
				url="http://locuslabs.com/"
				type="display"
				qrCodeTitle="1764px x 1079px"
				qrCodeDescription={
					<Text limitLinesOfTextTo={1}>QR code description</Text>
				}
			/>
		</Box>
		<Box height="1764px" width="1079px">
			<QRCodeWindow
				primaryText="Find Shops in your Terminal"
				secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Trasnfer all the information to your and open the virtual map on your mobile device and move freely through the airport."
				url="http://locuslabs.com/"
				type="editor"
				qrCodeTitle="1764px x 1079px"
				qrCodeDescription={
					<Text limitLinesOfTextTo={1}>QR code description</Text>
				}
			/>
		</Box>
	</>
);

export const ComponentDimensions = () => (
	<>
		<Box display="flex" flexDirection="row" overflow="auto">
			<Box
				padding="20px"
				height="2600px"
				width="900px"
				backgroundisplay="red"
				display="inline-flex"
			>
				<QRCodeWindow
					primaryText="Find Shops in your Terminal"
					secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Trasnfer all the information to your and open the virtual map on your mobile device and move freely through the airport."
					url="http://locuslabs.com/"
					type="display"
					qrCodeTitle="2600px x 900px"
					qrCodeDescription={
						<Text limitLinesOfTextTo={1}>QR code description</Text>
					}
				/>
			</Box>
			<Box
				padding="20px"
				height="1764px"
				width="1079px"
				backgroundisplay="red"
				display="inline-flex"
			>
				<QRCodeWindow
					primaryText="Find Shops in your Terminal"
					secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Trasnfer all the information to your and open the virtual map on your mobile device and move freely through the airport."
					url="http://locuslabs.com/"
					type="display"
					qrCodeTitle="1764px x 1079px"
					qrCodeDescription={
						<Text limitLinesOfTextTo={1}>QR code description</Text>
					}
				/>
			</Box>
			<Box
				padding="20px"
				width="1764px"
				height="1485px"
				backgroundisplay="red"
				display="inline-flex"
			>
				<QRCodeWindow
					primaryText="Find Shops in your Terminal"
					secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Trasnfer all the information to your and open the virtual map on your mobile device and move freely through the airport."
					url="http://locuslabs.com/"
					type="display"
					qrCodeTitle="1485px x 1764px"
					qrCodeDescription={
						<Text limitLinesOfTextTo={1}>QR code description</Text>
					}
				/>
			</Box>
		</Box>
	</>
);
