import { useState } from 'react';
import Toast from './';
import ThemeDecorator from '../../storybook-theme-decorator';
import componentDocumentation from './docs.mdx';

export default {
	title: 'MOL Components/Mobile/Primitive Components/Toast',
	component: Toast,
	decorators: [
		(storyFn) => (
			<div
				style={{
					width: '100vw',
					maxHeight: '100vh',
					height: 'auto',
					position: 'relative',
					overflow: 'hidden',
					padding: '0',
					margin: '0',
				}}
			>
				{ThemeDecorator(storyFn)}
			</div>
		),
	], // connect the mol-mobile-default-theme to all stories

	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/RDa44JpWqZPSw4V9HLTI34/Maps-on-Web-Master-2020?node-id=9751%3A0',
		},
		viewport: {
			defaultViewport: 'iphone8p',
		},
		layout: 'fullscreen',
	},
};

export const Default = () => {
	return <Toast shouldDisplay={true} />;
};

export const WithCustomTextIconAndColors = () => {
	return (
		<Toast
			shouldDisplay={true}
			hideDelay={false}
			iconName="success"
			background="#229653"
			color="white"
		>
			Link shared successfully
		</Toast>
	);
};

export const WithTextSizes = () => {
	return (
		<>
			<Toast shouldDisplay={true} hideDelay={false}>
				This text is normal size
			</Toast>
			<br />
			<Toast shouldDisplay={true} hideDelay={false}>
				This text is really really really really long, and is 'sm' size
			</Toast>
			<br />

			<Toast shouldDisplay={true} hideDelay={false}>
				This text should ellipse because is really really really really really
				long
			</Toast>
		</>
	);
};

export const WithoutAutoHide = () => {
	return <Toast shouldDisplay={true} hideDelay={false} />;
};

export const WithVisibilityToggle = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			<button onClick={() => setIsVisible(!isVisible)} data-cy="ToastTrigger">
				Click me to toggle toast {isVisible ? 'OFF' : 'ON'}
			</button>

			<Toast
				shouldDisplay={isVisible}
				hideDelay={false}
				onToastDismiss={() => setIsVisible(false)}
				position="absolute"
				top="0"
				iconName="directions.filled"
				backgroundColor="rebeccapurple"
			>
				Turn right
			</Toast>
		</>
	);
};
