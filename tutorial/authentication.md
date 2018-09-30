# Authentication and Login
`yarn add js-cookie strapi-sdk-javascript jwt-decode `

Authentication and login can easily be handled with Strapi. We will use the Strapi javascript SDK to help with this.

We will need two pages for login/signup.

```
cd pages
touch signin.js
touch signup.js
```


#React Context
https://github.com/zeit/next.js/blob/canary/examples/with-context-api/pages/_app.js

```javascript
lib/auth.js
import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'
import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi (apiUrl)
import Router from 'next/router'

const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

export const extractInfoFromHash = () => {
  if (!process.browser) {
    return undefined
  }
  const {id_token, state} = getQueryParams()
  return {token: id_token, secret: state}
}
export const strapiRegister = (username, email, password) => {
  if (!process.browser) {
    return undefined
  }
  strapi.register(username,email,password)
  .then(res => setToken(res))
}
//use strapi to get a JWT and token object, save
//to approriate cookei for future requests
export const strapiLogin = (email,password) => {
    if (!process.browser) {
      return
    }
    // Get a token
   strapi.login(email, password)
    .then(res => {
      setToken(res)
    })
    return Promise.resolve()
}

export const setToken = (token) => {
  if (!process.browser) {
    return
  }
  Cookie.set('user', token.user.username)
  Cookie.set('jwt', token.jwt)

  if(Cookie.get('user')) {
    Router.push('/')
  }
}

export const unsetToken = () => {
  if (!process.browser) {
    return
  }
  Cookie.remove('jwt')
  Cookie.remove('user')

  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/')
}

export const getUserFromServerCookie = (req) => {
  console.log("header check")
  console.log(req)
  console.log("request")
  if (!req.headers.cookie || "") {
    return undefined
  }
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) {
    return undefined
  }
  const jwt = jwtCookie.split('=')[1]
  return jwtDecode(jwt)
}

export const getUserFromLocalCookie = () => {
  console.log("get user from local ")
  return Cookie.get('user')
}
```
