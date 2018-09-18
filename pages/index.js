import React from 'react'
import { Button } from 'reactstrap'
import { Alert } from 'reactstrap'

export default class Test extends React.Component {
  render() {
    return(
      <div>
        <Alert color="primary">Hello Project is strapi-next with Bootstrap</Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    )
  }
}
