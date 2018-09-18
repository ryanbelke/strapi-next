import App, {Container} from 'next/app'
import Head  from 'next/head'
import React from 'react'
import stylesheet from 'bootstrap/dist/css/bootstrap.min.css'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <>
      <Head>
        <style>{stylesheet}</style>
      </Head>

        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    )
  }
}
