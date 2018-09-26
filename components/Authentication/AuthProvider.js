import React from 'react'

/* First we will make a new context */
const AuthContext = React.createContext()

/* Then create a provider Component */
class AuthProvider extends React.Component {
  state = {
    user: 'ryan',
    count: 20,
  }

  login = (user) => {
    this.setState({
      user: user
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    return (
      <AuthContext.Provider
        value={{
          count: this.state.count,
          login: this.login,
          user: this.state.user,
          decrease: this.decrease,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

/* then make a consumer which will surface it as an HOC */
// This function takes a component...
export function withContext(Component) {
  // ...and returns another component...
  return function ContextComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return (
      <AuthContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AuthContext.Consumer>
    );
  };
}

export default AuthProvider
export { AuthConsumer }
