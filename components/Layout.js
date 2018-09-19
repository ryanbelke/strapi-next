import Link from 'next/link'
import Head from 'next/head'
import { Nav, NavItem } from 'reactstrap';

import stylesheet from 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children, title = 'Welcome to Nextjs' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style>{stylesheet}</style>
    </Head>
    <header>
      <style jsx>{`
        a { color: white; }
       }`}
      </style>
      <Nav className="navbar navbar-dark bg-primary">
        <NavItem>
          <Link href='/'>
            <a className="navbar-brand">Home</a>
          </Link>
        </NavItem>
        <NavItem className="ml-auto">
          <Link href='/signin'>
            <a className="nav-link">Sign In</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/signup'>
            <a className="nav-link"> Sign Up</a>
          </Link>
        </NavItem>
      </Nav>
    </header>

    { children }

    <footer className="footer">
      {'Strapi footer'}
      <style jsx>{`
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #f5f5f5;
      `}
    </style>
    </footer>
  </div>
)
export default Layout
