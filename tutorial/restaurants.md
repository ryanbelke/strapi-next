## Setup Restaurants
followed these strapi steps exactly
https://blog.strapi.io/cooking-a-deliveroo-clone-with-nuxt-vue-js-graphql-strapi-and-stripe-restaurants-list-part-2-7/

## GraphQL Integration
For the GraphQL integration with Strapi is very simple, you can add GraphQL to your backend in one command
```
cd server
strapi install graphql
```
Now we have GraphQL inside of our Strapi server
Navigate to http://localhost:1337/playground and try a query in the playground to see a list of the restaurants:

Integrating GraphQL is that easy with Strapi
```
{
  restaurants {
    _id
    name
  }
}
```

```
yarn add next-apollo graphql gql

```
To connect our application with GraphQL we will use Apollo and the next-apollo implementation to wrap our components and give them access to the apollo data query.

There are a couple differnt approaches to implementing GraphQL into a Nextjs app, the approach we will take is extracting the Apollo logic out into a lib library and wrapping our components and handle the GQL queries inside each respective components.

Create a lib directory in the root of the project:
```
mkdir lib
cd lib
touch apollo.js
```
```javascript
/* lib/apollo.js */
import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'http://localhost:1337/graphql', // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
}
export default withData(config)
```
On our `pages/index.js ` route we will make some modifications to show a search bar, along with a list of Restaurants, styled with Bootstraps cards. Change your index route to match, we will implement the search prop on the RestaurantList component in the next step, for now we just want to display the static list.

```javascript
import {Alert, Button, Row, Col, InputGroup, InputGroupAddon, Input} from 'reactstrap'
import Layout from '../components/Layout'
import withData from '../lib/apollo'
import RestaurantList from '../components/Restaurants/RestaurantList'

export default withData(props => (<Layout>
  <Row>
    <Col>
      <div className="search">
        <InputGroup>
          <InputGroupAddon addonType="append"> Search </InputGroupAddon>
          <Input />
        </InputGroup>
      </div>
      <RestaurantList search=""/>
    </Col>
  </Row>
  <style jsx>
    {`.search {
      margin: 20px;
      width: 500px;
    }`}
  </style>
</Layout>))
```
Next we will create a directory for our Restaurants components inside of our `/components` directory
```javascript
/*  components/Restaurants/RestaurantList */
import gql from 'graphql-tag'
import Link from 'next/link'
import { graphql } from 'react-apollo'
import { Button, Card, CardBody, CardColumns, CardImg,CardSubtitle,CardText,
				 CardTitle, Col, Row } from 'reactstrap';

const RestaurantList = ({
	data: {
		loading,
		error,
		restaurants
	},
	search
}) => {
	if(error)
		return "Error loading restaurants"
		//if restaurants are returned from the GraphQL query, run the filter query
		//and set equal to variable restaurantSearch
	if(restaurants && restaurants.length) {
		//searchQuery
		const searchQuery = restaurants.filter(
			query => query.name.toLowerCase().includes(search)
		)
		if(searchQuery.length != 0) {
			return (
                <Row>
					<Col>
					<CardColumns className="h-100" >
					{
						restaurants.map(res =>
						<Card className="h-100" style={{ marginBottom: 0, position: 'relative' }} key={res._id}>
							<CardImg top={true} style={{ height:250 }}src={`http://localhost:1337${res.image.url}`}/>
							<CardBody>
								<CardTitle>{res.name}</CardTitle>
								<CardText>{res.description}</CardText>
							</CardBody>
							<div className="card-footer">
								<Button color="primary">
									<Link as={`/restaurants/${res.name.replace(/\s+/g, '-').toLowerCase()}`}
									 			href={`/restaurants?id=${res._id}`}>
										<a>View</a>
									</Link>
								</Button>
							</div>
						</Card> )}
					</CardColumns>
					</Col>
					<style jsx>
						{`
							a {
								color: white;
							}
							a:link {
								text-decoration: none;
								color: white;
							}
						`}
					</style>
				</Row>
            );
			} else {
				return <h1>No Restaurants Found</h1>
			}
		}
	return <h1>Loading</h1>
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
export default graphql(query, { props: ({ data }) => ({
		data })
})(RestaurantList)

```
With this, we should see a list of the Restaurants complete with an Image, Title and Description set from the Strapi backend

*screenshot*

Now that we have a list of the restaurants, we can implementing the filtering through the search bar. In a real application, it may not be advisable to load all the data and filter but rely on a real search query from the search bar. For the purpose of the tutorial we will just load all the restaurants and run a simple filter query.

To implement a filter ability, we are going to make the index.js file a class based component to access and store the state of the search box and pass it down to the RestaurantList.
