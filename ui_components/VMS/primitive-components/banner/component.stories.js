import Box from '@locus-labs/vms-box';
import componentDocumentation from './docs.mdx';
import Banner from '.';
import ThemeDecorator from '../../storybook-theme-decorator';

export default {
	title: 'VMS Components/Primitive Components/Banner',
	component: Banner,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-2020?node-id=7112%3A0',
		},
	},
};

export const Default = () => <Banner>Default</Banner>;

export const Type = () => (
	<>
		<Banner margin="1rem" type="success">
			Success
		</Banner>
		<Banner margin="1rem" type="warning">
			Warning
		</Banner>
		<Banner margin="1rem" type="error">
			Error
		</Banner>
	</>
);

export const BannerSize = () => (
	<>
		<Banner margin="1rem" bannerSize="small">
			Small
		</Banner>
		<Banner margin="1rem" bannerSize="medium">
			Medium
		</Banner>
	</>
);

export const Width = () => (
	<>
		<Banner width="500px">
			Banner with no parent and its own width (500px)
		</Banner>
		<br />
		<Box width="300px">
			<Banner>
				Inherit <code>width</code> with from parent (300px)
			</Banner>
		</Box>
	</>
);

export const EllipsisText = () => (
	<Banner width="250px">
		This is a long alert message that would need ellipsis
	</Banner>
);
