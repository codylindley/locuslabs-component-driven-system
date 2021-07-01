/* A utility to wrap stories in a theme using styled-components ThemeProvider */

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '@locus-labs/mol-mobile-default-theme';

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
