import React from 'react'
import { Button } from 'reactstrap'
import { Alert } from 'reactstrap'
import Layout from '../components/Layout'
export default class extends React.Component {
  render() {
    return(
      <Layout>
        <div>
          <Alert color="primary">Hello Project is strapi-next with Bootstrap</Alert>
          &nbsp; <Button color="primary">Hello from nextjs</Button>
        </div>
      </Layout>
    )
  }
}
