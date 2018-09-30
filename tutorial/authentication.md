# Authentication and Login

`yarn add js-cookie strapi-sdk-javascript jwt-decode`

Authentication and login can easily be handled with Strapi. We will use the Strapi javascript SDK to help with this.

The authentication logic is going to be extracted out to `/lib/auth.js`
This will allow us to easily make modifications and make authentication expandable to other providers.

```javascript
/* lib/auth.js */
import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";
import Strapi from "strapi-sdk-javascript/build/main";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);
import Router from "next/router";

export const strapiRegister = (username, email, password) => {
  if (!process.browser) {
    return undefined;
  }
  strapi.register(username, email, password).then(res => {
    setToken(res);
  });
  return Promise.resolve();
};
//use strapi to get a JWT and token object, save
//to approriate cookei for future requests
export const strapiLogin = (email, password) => {
  if (!process.browser) {
    return;
  }
  // Get a token
  strapi.login(email, password).then(res => {
    setToken(res);
  });
  return Promise.resolve();
};

export const setToken = token => {
  if (!process.browser) {
    return;
  }
  Cookie.set("user", token.user.username);
  Cookie.set("jwt", token.jwt);

  if (Cookie.get("user")) {
    Router.push("/");
  }
};

export const unsetToken = () => {
  if (!process.browser) {
    return;
  }
  Cookie.remove("jwt");
  Cookie.remove("user");

  // to support logging out from all windows
  window.localStorage.setItem("logout", Date.now());
  Router.push("/");
};

export const getUserFromServerCookie = req => {
  console.log("header check");
  console.log(req);
  console.log("request");
  if (!req.headers.cookie || "") {
    return undefined;
  }
  const jwtCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith("jwt="));
  if (!jwtCookie) {
    return undefined;
  }
  const jwt = jwtCookie.split("=")[1];
  return jwtDecode(jwt);
};

export const getUserFromLocalCookie = () => {
  console.log("get user from local ");
  return Cookie.get("user");
};

//these will be used if you expand to a provider such as Auth0
const getQueryParams = () => {
  const params = {};
  window.location.href.replace(
    /([^(?|#)=&]+)(=([^&]*))?/g,
    ($0, $1, $2, $3) => {
      params[$1] = $3;
    }
  );
  return params;
};
export const extractInfoFromHash = () => {
  if (!process.browser) {
    return undefined;
  }
  const { id_token, state } = getQueryParams();
  return { token: id_token, secret: state };
};
```

We will need two pages for login/signup inside of our pages directory.

```
cd pages
touch signin.js
touch signup.js
```

```javascript
/* /pages/signup.js */
import React from "react";
import { strapiRegister } from "../lib/auth";

import Router from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        username: "",
        password: ""
      },
      loading: false,
      error: ""
    };
  }

  onChange(propertyName, event) {
    const { data } = this.state;
    data[propertyName] = event.target.value;
    this.setState({ data });
  }
  onSubmit() {
    const {
      data: { email, username, password }
    } = this.state;
    this.setState({ loading: true });

    strapiRegister(username, email, password)
      .then(() => this.setState({ loading: false }))
      .catch(error => this.setState({ error: error }));
  }

  render() {
    const { error } = this.state;
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 5, offset: 3 }}>
            <div className="paper">
              <div className="header">
                <img src="https://strapi.io/assets/images/logo.png" />
              </div>
              <section className="wrapper">
                <div className="notification">{error}</div>
                <Form>
                  <FormGroup>
                    <Label>Username:</Label>
                    <Input
                      onChange={this.onChange.bind(this, "username")}
                      type="text"
                      name="username"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={this.onChange.bind(this, "email")}
                      type="email"
                      name="email"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={this.onChange.bind(this, "password")}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span>
                    <Button
                      style={{ float: "right", width: 120 }}
                      color="primary"
                      onClick={this.onSubmit.bind(this)}
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </section>
            </div>
          </Col>
        </Row>
        <style jsx>
          {`
            .paper {
              border: 1px solid lightgray;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px
                  rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
              height: 540px;
              border-radius: 6px;
              margin-top: 90px;
            }
            .notification {
              color: #ab003c;
            }
            .header {
              width: 100%;
              height: 120px;
              background-color: #2196f3;
              margin-bottom: 30px;
              border-radius-top: 6px;
            }
            .wrapper {
              padding: 10px 30px 20px 30px !important;
            }
            a {
              color: blue !important;
            }
            img {
              margin: 15px 30px 10px 50px;
            }
          `}
        </style>
      </Container>
    );
  }
}
export default SignUp;
```

```javascript
/* /pages/signin.js */
import React from "react";

import defaultPage from "../hocs/defaultPage";
import { strapiLogin } from "../lib/auth";

import Router from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import Cookie from "js-cookie";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      error: ""
    };
  }
  componentDidMount() {
    if (this.props.isAuthenticated) {
      Router.push("/"); // redirect if you're already logged in
    }
  }

  onChange(propertyName, event) {
    const { data } = this.state;
    data[propertyName] = event.target.value;
    this.setState({ data });
  }
  onSubmit() {
    const {
      data: { email, username, password }
    } = this.state;
    const { context } = this.props;

    this.setState({ loading: true });

    strapiLogin(email, password).then(() => console.log(Cookie.get("user")));
  }
  render() {
    const { error } = this.state;
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 5, offset: 3 }}>
            <div className="paper">
              <div className="header">
                <img src="https://strapi.io/assets/images/logo.png" />
              </div>
              <section className="wrapper">
                <div className="notification">{error}</div>
                <Form>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={this.onChange.bind(this, "email")}
                      type="email"
                      name="email"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={this.onChange.bind(this, "password")}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span>
                    <Button
                      style={{ float: "right", width: 120 }}
                      color="primary"
                      onClick={this.onSubmit.bind(this)}
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </section>
            </div>
          </Col>
        </Row>
        <style jsx>
          {`
            .paper {
              border: 1px solid lightgray;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px
                  rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
              height: 440px;
              border-radius: 6px;
              margin-top: 90px;
            }
            .notification {
              color: #ab003c;
            }
            .header {
              width: 100%;
              height: 120px;
              background-color: #2196f3;
              margin-bottom: 30px;
              border-radius-top: 6px;
            }
            .wrapper {
              padding: 10px 30px 20px 30px !important;
            }
            a {
              color: blue !important;
            }
            img {
              margin: 15px 30px 10px 50px;
            }
          `}
        </style>
      </Container>
    );
  }
}
export default SignIn;
```

```
/* /components/hocs/defaultpage.js */
import React from 'react'
import Router from 'next/router'

import { getUserFromServerCookie, getUserFromLocalCookie } from '../lib/auth'


export default Page => class DefaultPage extends React.Component {
  static async getInitialProps({req}) {
    //console.log(ctx)
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(req)
    const pageProps = Page.getInitialProps && Page.getInitialProps(req)
    console.log("is authenticated")
    console.log(loggedUser)
    let path = req ? req.pathname : ''
     path = ""
    return {
      ...pageProps,
      loggedUser,
      currentUrl: path,
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
```

```javascript
/* /components/hocs/securePage.js */
import React from "react";
import PropTypes from "prop-types";

import NotAuthorized from "../components/NotAuthorized";
import defaultPage from "./defaultPage";

const securePageHoc = Page =>
  class SecurePage extends React.Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired
    };

    static getInitialProps(ctx) {
      return Page.getInitialProps && Page.getInitialProps(ctx);
    }

    render() {
      const { isAuthenticated } = this.props;
      return isAuthenticated ? <Page {...this.props} /> : <NotAuthorized />;
    }
  };

export default Page => defaultPage(securePageHoc(Page));
```

#React Context
https://github.com/zeit/next.js/blob/canary/examples/with-context-api/pages/_app.js
