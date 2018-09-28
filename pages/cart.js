import React, {Component} from 'react'
import withAuth from '../lib/withAuth'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {}
    }
  }

  render() {

    const user = this.props.auth.getProfile()
    return (
        <div>Current user: {user.email}</div>
    )
  }
}
export default withAuth(Cart)
