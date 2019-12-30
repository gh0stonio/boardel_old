import moment from 'moment'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { StoreProvider } from '../hooks/useStore'
import { logAnonymously } from '../utils/auth'

moment.locale('en')

const theme = {
  colors: {
    grey: '#f7f7f7',
    darkGrey: '#dfe2f3',
    darkestGrey: '#a8abbb',
    blue: '#5779ff',
    white: '#ffffff',
    black: '#000000',
    font: {
      title: '#676879',
      content: '#a4a4a9',
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

  * {
    font-family: 'Roboto', sans-serif;
  }
`

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

    return { pageProps }
  }

  constructor(props) {
    super(props)
    if (process.browser) logAnonymously()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <Head>
            <title>BoardEL</title>
            <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.3.0/firebase-ui-auth.css" />
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    )
  }
}
