import Layout from '../components/Layout'
import withData from '../lib/apollo'
import AuthProvider from '../components/Authentication/AuthProvider'
import defaultPage from '../hocs/defaultPage'
import { compose } from "recompose"
import App, { Container } from 'next/app'
import React from 'react'

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<>
			<Container>
				<AuthProvider>
					<Layout {...this.props}>
						<Component {...pageProps} />
					</Layout>
				</AuthProvider>
			</Container>
			<style jsx global>
				{`
					a {
						color: white !important;
					}
					a:link {
						text-decoration: none !important;
						color: white !important;
					}
					a:hover {
						color: white;
					}
					.card {
					display: flex !important;
					}
				`}
			</style>
		</>

		)
	}
}
export default compose(withData, defaultPage)(MyApp)
