import * as styledComponents from 'styled-components'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ServerStyleSheet,
  ThemeProvider,
  withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>

export const theme: Theme = {
  colors: {
    grey: '#f7f7f7',
    darkGrey: '#dfe2f3',
    darkestGrey: '#a8abbb',
    blue: '#5779ff',
    white: '#ffffff',
    black: '#000000',
    red: '#eb2000',
    font: {
      title: '#676879',
      content: '#a4a4a9',
    },
    categories: {
      personal: '#00b0d4',
      professional: '#33ce78',
    },
    actions: {
      postpone: '#ff9a2c',
      done: '#59ad66',
    },
  },
}
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;    
  }

  * {
    font-family: 'Roboto', sans-serif;
  }
`

export { css, createGlobalStyle, keyframes, ServerStyleSheet, ThemeProvider, withTheme }
export default styled
