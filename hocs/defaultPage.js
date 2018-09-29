import React from 'react'

import Head from 'next/head'
import Router from 'next/router'

import { getUserFromServerCookie, getUserFromLocalCookie } from '../lib/AuthService'


export default Page => class DefaultPage extends React.Component {
  static getInitialProps (req) {
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(req)
    const pageProps = Page.getInitialProps && Page.getInitialProps(req)
    return {
      ...pageProps,
      loggedUser,
      currentUrl: req.pathname,
      isAuthenticated: !!loggedUser
    }
  }

  logout = (eve) => {
    if (eve.key === 'logout') {
      Router.push(`/?logout=${eve.newValue}`)
    }
  }

  componentDidMount () {
    window.addEventListener('storage', this.logout, false)
  }

  componentWillUnmount () {
    window.removeEventListener('storage', this.logout, false)
  }

  render () {
    return (
      <Page {...this.props} />
    )
  }
}
