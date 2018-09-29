import React, {Component} from 'react'
import defaultPage from '../hocs/defaultPage'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {}
    }
  }

  render() {

    const user = this.props.user
    return (
        <div>Current user: {user}</div>
    )
  }
}
export default defaultPage(Cart)
