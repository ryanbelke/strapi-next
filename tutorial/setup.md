# Creating a Deliveroo clone using Next.js (React), Strapi, GraphQL and Stripe
--------
* [Next.js](https://nextjs.org)   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; [github.com/zeit/next.js/](https://github.com/zeit/next.js/ )

https://nextjs.org/learn/basics/using-shared-components
* [Strapi.io](https://strapi.io) &nbsp; &nbsp; &nbsp; [github.com/strapi/strapi](https://github.com/strapi/strapi)
* [ReactJS](https://reacjs.org) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://github.com/facebook/react
* [GraphQL](https://graphql.org/) &nbsp; &nbsp;&nbsp; [github.com/graphql](https://github.com/graphql)
* [Stripe](https://stripe.com) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [github.com/stripe](https://github.com/stripe)

### Strapi:
 [* **Strapi** *](https://github.com/strapi/strapi) is the most advanced open-source  * **Node.js API Content Management Framework** *used to *build scalable, secure, production ready* API's quickly and efficiently saving developers countless hours of development.

 With its extensible plugin system, it provides a large set of built-in features: Admin Panel, Authentication & Permissions management, Content Management, API Generator, etc. Unlike online CMS, **Strapi is 100% open-source** (take a look at the [GitHub repository](https://github.com/strapi/strapi)), which means:

 * Strapi is **completely free**.
 * You can **host it on your own servers**, so you own the data.
 * It is entirely **customizable and extensible**, thanks to the plugin system.

### Next.js:
[* **Next** *](https://github.com/zeit/next.js/ ) is a lightweight development framework to create static, server rendered applications in **React**. Next will take care of the heavy lifting of the application such as *code splitting, HMR (hot module replacement) and SSR (server side rendering)* and allow us to focus on the application.

### ReactJS:  
[* **React** *](https://github.com/facebook/react) is one of the most popular front end Javascript frameworks, developed by facebook and used by countless tech companies including *Netflix, Airbnb and Github* to build applications. React is a declarative library that makes it easy to create interactive user interfaces, keeping the code base organized through its *component based architecture*.  

### GraphQL:
[* **GraphQL** *](https://github.com/graphql) is a query language also developed by Facebook to allow the front end of an application to easily query an application's API. Each query requests only the data needed to be rendered by the current view. This allows the developer to craft a great user experience across *multiple devices and screen sizes*.

### Stripe:
[* **Stripe** *](https://github.com/stripe) is one of (if not the largest) payment processor's for application today. Stripe has developed the tools and SDKs to allow developers to craft and integrate *secure, compliant payment processing* into any app with easy.

------

# Setup
To setup Next.js we will need an empty directory to install the library and host our project root:
*note: I am going to use the nextjs Canary branch is which pre-release and as of writing not the stable master branch of the project. This decision is to demo the use of the ReactJS Context API*

```
mkdir strapi-deliveroo
cd strapi-deliveroo

yarn add next@canary react react-dom
```


*note: I am using yarn as my package manager, you can also use npm and execute `npm install --save next react react-dom `*

Copy/Paste the build scripts into the packages.json file:
```javascript
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```
So that your file looks like this (your package dependencies may have different versions depending on the time of install):
```javascript
{
  "dependencies": {
    "next": "^7.0.0-canary.20",
    "react": "^16.5.1",
    "react-dom": "^16.5.1"
  },
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```
Nextjs uses javascript files in the /pages directory as the routes for the application. To setup simply create the /pages directory and add an index.js file with:

```
mkdir pages
cd pages
touch index.js
```
Now that we have our main route (index.js), this will be loaded each time the application URL is www.yourapp.com. To test this you can insert the following into the index.js file:

```
export default () => <div>Welcome to next.js!</div>
```
To view the application running, start the local dev server using
```
yarn dev
```
Your application should now be visible at http://localhost:3000

Be sure to create a .gitignore and add .next and node_module directories to it
```
touch .gitignore
```
```
/* .gitignore */
node_modules
.next
```

Adding Bootstrap:
For this tutorial, we will use react-strap to implement Bootstrap 4 into our application.
For the CSS, we will import from a CDN

For this part we will use reactstrap to implement, run:
```
yarn add reactstrap bootstrap
```
**reactstrap** will allow us to import and use React components on the front using the standard import { Button } from 'reactstrap' method and we will need to user our CSS from the CDN

Css Imported into head


import babel-plugin-import and babel-plugin-inline-import and create a .babelrc file in the project root


To import the CSS and share a Layout component across all our pages we will use a custom `_app.js` file inside the pages directory. This file will serve to override the default App.js used by Next inside of every page rendered with Next. This will allow us the ability to import a <Head> component and globally set the stylesheet inside the header in only one place.

```
cd pages
touch _app.js
```
```javascript
/* pages/_app.js */
import App, {Container} from 'next/app'
import Head  from 'next/head'
import React from 'react'

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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />

      </Head>

        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    )
  }
}
```

Now if we add in some reactstrap components inside of index.js we should see the bootstrap styling applied.
```javascript
import { Button, Alert } from 'reactstrap'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <div>
        <Alert color="primary">Hello Project is strapi-next with Bootstrap</Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    </Layout>
  )
}
```
*screenshot of page*

#### Designing the page
Now that we have Bootstrap running inside of our Next.js project, we can begin to style the basic shared front end components such as the navbar.
Knowing that we will need to implement shared components between pages, we will do some refactoring to remove the `_app.js` file and create a shared Layout component that we will wrap our /pages files in.

First create a folder to store our components and create our layout component
```
mkdir component
cd components
touch layout.js
```
Nextjs uses the import Link component to perform the client side routing between pages. Link is just a HOC and can accept any html tag that can handle an onClick handler (<a>,<button>,<div> etc.)
Open the layout.js file and move in the bootstrap CSS import and create a shared header/navbar and footer:
```javascript
import Link from 'next/link'
import Head from 'next/head'
import { Nav, NavItem } from 'reactstrap';

import stylesheet from 'bootstrap/dist/css/bootstrap.min.css'

export default ({ children, title = 'Welcome to Nextjs' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }/>

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
````
Now you can delete `/pages/_app.js`

-------------------
Nextjs uses its <Link> component to control routing, so we have to make a few modifications outside of the reactstrap documentation to style our navbar using default Bootstrap classes and custom CSS code using the built in CSS in JS `<style jsx>` shipped by default with nextjs

With two additional routes created for /signin and /signup you will need to create the corresponding files inside the /pages director
`/pages/signin.js` `/pages/signup.js`
```javascript
touch /pages/signin.js
touch /pages/signup.js
```
Populate the files with the following code that we will come back to once our Strapi authentication/server is setup.
```javascript
/* /pages/index.js */
import { Button, Alert } from 'reactstrap'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <div>
        <Alert color="primary">Hello Project is strapi-next with Bootstrap</Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    </Layout>
  )
}

```
```javascript
/* pages/signin.js */
import Layout from '../components/Layout'

export default () => {
    return (
      <Layout>
        <h1>Sign In</h1>
      </Layout>
    )
}


/* pages/signup.js */
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <h1>Sign Up</h1>
    </Layout>
  )
}

```

### Install Strapi using npm
`npm install strapi@alpha -g`
Running this globally will give you access to the Strapi CLI within the terminal
`strapi -v `
-> ~3.0.0-alpha.14.1.1

Strapi needs Node => 9.0.0 and MongoDB running for install
Locate your MongoDB install directory and run the `mongod` command

`strapi new server`

*screenshot*
```
cd server
strapi start
```
