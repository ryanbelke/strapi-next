import Layout from '../components/Layout'
import withData from '../lib/apollo'
import AuthProvider from '../components/Authentication/AuthProvider'
import stylesheet from 'bootstrap/dist/css/bootstrap.min.css'

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
				<Layout>
				<AuthProvider>

						<Component {...pageProps} />

				</AuthProvider>
				</Layout>
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
export default withData(MyApp)
