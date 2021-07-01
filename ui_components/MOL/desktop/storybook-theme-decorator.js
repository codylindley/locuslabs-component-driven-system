/* A utility to wrap stories in a theme using styled-components ThemeProvider */

/* This modules is imported into *.stories.mdx and wraps stories */

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './themes/mol-desktop-default-theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.default};
  }
`;

const ThemeDecorator = (storyFn) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{storyFn()}
	</ThemeProvider>
);

export default ThemeDecorator;
