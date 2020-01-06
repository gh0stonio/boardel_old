import moment from 'moment'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import { StoreProvider } from '../hooks/useStore'
import { GlobalStyle, ThemeProvider, theme } from '../utils/styled'

moment.locale('en')

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
