import Layout from '../components/Layout'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Dishes extends React.Component {

  render() {
    const {router} = this.props
		//use nextJs withRouter to get the id parameter passed in the URL
		const { id } = router.query

    console.log(router)
    return (
			<Layout>
				{id}
			</Layout>
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
// https://github.com/zeit/next.js/blob/master/errors/url-deprecated.md
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)
export default graphql(query, {
	props: ({
		data
	}) => ({
		data
	})
})(Dishes)
