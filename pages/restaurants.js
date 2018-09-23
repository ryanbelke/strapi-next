import gql from 'graphql-tag'
import { withRouter } from 'next/router'

class Restaurants extends React.Component {

  render() {
    const {router} = this.props
		//use nextJs withRouter to get the id parameter passed in the URL
		const { id } = router.query

    console.log(router)
    return (
			<div>
				{id}
			</div>
		)
  }
}
const query = gql `
{
  restaurants {
    _id
    name
    description
    image { url }
  }
}
`
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)
export default withRouter(Restaurants)
