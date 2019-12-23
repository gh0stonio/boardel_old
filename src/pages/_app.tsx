import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    grey: '#f7f7f7',
    darkGrey: '#dfe2f3',
    white: '#ffffff',
    font: {
      title: '#676879',
      content: '#ababb3',
    },
    categories: {
      personal: '#00b0d4',
      professional: '#33ce78',
    },
  },
}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>BoardEL</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
