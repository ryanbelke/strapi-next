import React, {Component} from 'react'

const auth = new AuthService('http://localhost:1337')
import AuthService from '../../lib/AuthService'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {}
    }
  }

  render() {

    const user = auth.getProfile()
    return (
        <div>Current user: {user.email}</div>
    )
  }
}
