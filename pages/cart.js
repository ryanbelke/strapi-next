import React, {Component} from 'react'
import defaultPage from '../hocs/defaultPage'
import Layout from '../components/Layout'
class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {}
    }
  }

  render() {

    const { isAuthenticated } = this.props
    return (
      <Layout>
        <div>Current user: {isAuthenticated ? "Authenticated" : "Not Authenticaed"}</div>
        
      </Layout>
    )
  }
}
export default defaultPage(Cart)
