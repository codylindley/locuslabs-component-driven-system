import QRCodeCard from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';
import Box from '@locus-labs/mod-box';

export default {
	title: 'MOD Components/Domain Components/QR Code Card',
	decorators: [ThemeDecorator], // connect the mod-default-theme to all stories
	component: QRCodeCard,
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/E40T6Nfyqhg0iy06pKOGv5/Maps-OnDigital-Display-Master-2020?node-id=4025%3A49677',
		},
	},
};

export const Default = () => (
	<QRCodeCard
		url="http://locuslabs.com/"
		primaryText="Find Shops in your Terminal"
		secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Transfer all the information to your and open the virtual map on your mobile device and move freely through the airport.When the text label goes beyond the minimum pixel padding left and right, the text must ellipsis"
	/>
);

export const Types = () => (
	<Box>
		<Box margin="20px">
			<Box mb="15px">Display:</Box>
			<QRCodeCard
				url="http://locuslabs.com/"
				primaryText="Find Shops in your Terminal"
				qrCodeTitle="Point Camera Here"
				secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Transfer all the information to your and open the virtual map on your mobile device and move freely through the airport.When the text label goes beyond the minimum pixel padding left and right, the text must ellipsis"
			/>
		</Box>
		<Box margin="20px">
			<Box mb="15px">Editor:</Box>
			<QRCodeCard
				url="http://locuslabs.com/"
				type="editor"
				primaryText="Find a snack before your flight!"
				qrCodeTitle="Point Cam"
				secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Transfer all the information to your and open the virtual map on your mobile device and move freely through the airport.When the text label goes beyond the minimum pixel padding left and right, the text must ellipsis"
			/>
		</Box>
	</Box>
);

export const EllipsisText = () => (
	<QRCodeCard
		url="http://locuslabs.com/"
		primaryText="Find Shops in your Terminal"
		qrCodeTitle="Point Camera Here With A Very Long Text"
		secondaryText="At \“ \“ Airport, you will find a wide variety of restaurants and food outlets on all three levels of the terminal.Transfer all the information to your and open the virtual map on your mobile device and move freely through the airport.When the text label goes beyond the minimum pixel padding left and right, the text must ellipsis"
	/>
);
