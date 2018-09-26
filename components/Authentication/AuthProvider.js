import React, { Component } from 'react'

/* First we will make a new context */
const AuthContext = React.createContext()

/* Then create a provider Component */
class AuthProvider extends Component {
  state = {
    user: '',
    state: 40,
  }

  login = (props) => {
    this.setState({
      user: props.user
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
          user: this.user,
          decrease: this.decrease,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

/* then make a consumer which will surface it */
const AuthConsumer = AuthContext.Consumer

export default AuthProvider
export { AuthConsumer }
