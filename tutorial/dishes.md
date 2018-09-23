*followed instructions to create dishes*

To navigate to the dishes route we can use the Nextjs Link Component and implement it into our card footer button like so:

```javascript
import Link from 'next/link'
<div className="card-footer">
  <Button color="primary">
    <Link as={`/restaurants/${res.name}`} href={`/restaurants/${res._id}`}>
      <a>View</a>
    </Link>
  </Button>
</div>
```

This will route to the /restaurants/:dishId route, but using the Nextjs Link `as` prop, the browser will display the name of the dish to enhance the customer experience (e.g. localhost:3000/restaurants/Fried%20Chicken%20Masters)
we will make the URl a slug in the form fried-chicken-masters for SEO and readability with `.replace(/\s+/g, '-').toLowerCase()`

```javascript
import gql from "graphql-tag"
import { withRouter } from "next/router"
import { graphql } from "react-apollo"
import { compose } from "recompose"
import { Button, Card, CardBody, CardColumns, CardImg, CardSubtitle } from 'reactstrap';
import { CardText, CardTitle, Col, Row } from 'reactstrap'

class Restaurants extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { data: { loading, error, restaurant }, router } = this.props;

		if (error) return "Error Loading Dishes"

		if (restaurant) {
			return (
				<div className="container-fluid">
					<h1>{restaurant.name}</h1>
						<CardColumns className="h-100" >
						{
							restaurant.dishes.map(res =>
							<Card className="h-100" style={{ marginBottom: 0, position: 'relative' }} key={res._id}>
								<CardImg top={true} style={{ height:250 }}src={`http://localhost:1337${res.image.url}`}/>
								<CardBody>
									<CardTitle>{res.name}</CardTitle>
									<CardText>{res.description}</CardText>
								</CardBody>
								<div className="card-footer">
									<Button outline color="primary">
									 +  Add To Cart
									</Button>
								</div>
							</Card> )}
						</CardColumns>
				</div>
			)
		}
		return <h1>Loading</h1>
	}
}

const GET_RESTAURANT_DISHES = gql `
	query($id: ID!) {
		restaurant(id: $id) {
		 _id
		 name
		 dishes {
			 _id
			 name
			 description
			 price
			 image {
				 url
			 }
		 }
	 }
	}

`;
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)

export default compose(withRouter,
	graphql(GET_RESTAURANT_DISHES, {
		options: (props) => {
			console.log("props = " + JSON.stringify(props))
			return {
				variables: {
					id: props.router.query.id
				}
			}
		},
		props: ({ data }) => ({ data })
	}))(Restaurants)
```
