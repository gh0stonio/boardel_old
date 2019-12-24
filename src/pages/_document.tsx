import Document, { DocumentContext, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Organize the 'bordel' in your mind as nice todos with BoardEL" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" sizes="192x192" href="/icon-192.png" />
          <link rel="apple-touch-icon" href="/icon-192.png" />
          <meta name="msapplication-square192x192logo" content="/icon-192.png"></meta>
        </Head>
        <body className="sans-serif">
          <Main />
          <NextScript />
        </body>
        <noscript>You need to enable JavaScript to run this app. Sorry ¯\_(ツ)_/¯</noscript>
      </html>
    )
  }
}
