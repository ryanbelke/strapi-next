import Strapi from 'strapi-sdk-javascript/build/main'

import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'
import Router from 'next/router'

const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi (apiUrl)

export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:5000'
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  register(email, password) {
    // Get a token
    return strapi.register(username, email, password)
    .then(res => {
      this.setToken(res)
    }).then(res => {
      this.setProfile(res)
      return Promise.resolve(res)
    })
  }

  login(email, password) {
    if (!process.browser) {
      return
    }
    // Get a token
   strapi.login(email, password)
    .then(res => {
      this.setToken(res)
    })
    .then(Router.push('/'))
    //return promise to make function
    //thenable to set loadingState
    return Promise.resolve()
  }
  setToken(token) {
    console.log("SETTING TOKEN " + JSON.stringify(token))
    Cookie.set('user', token.user)
    Cookie.set('jwt', token.jwt)
  }
  loggedIn(){
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token // handwaiving here
  }

  setProfile(profile){
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getUser(){
    // Retrieves the profile data from localStorage
    const profile = Cookie.get('user')
    return profile ? JSON.parse(profile) : {}
  }

  getToken(){
    // Retrieves the user token from localStorage
    return Cookie.get('jwt')
  }

  logout(){
    if (!process.browser) {
      return
    }
    Cookie.remove('jwt')
    Cookie.remove('user')
    Cookie.remove('secret')

    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now())
    Router.push('/')
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  fetch(url, options){
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()){
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
    .then(this._checkStatus)
    .then(response => response.json())
  }
}
