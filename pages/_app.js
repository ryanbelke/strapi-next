import Layout from '../components/Layout'
import withData from '../lib/apollo'
import App, {Container} from 'next/app'
import React from 'react'

class MyApp extends App {
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
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    )
  }
}
export default withData(MyApp)
