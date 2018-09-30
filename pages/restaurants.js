import gql from "graphql-tag"
import { withRouter } from "next/router"
import { graphql } from "react-apollo"
import { compose } from "recompose"
import { Button, Card, CardBody, CardColumns, CardImg, CardSubtitle } from 'reactstrap';
import { CardText, CardTitle, Col, Row } from 'reactstrap'
import Cart from '../components/Cart/cart'
import defaultPage from '../hocs/defaultPage'

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
							<Card key={res._id}>
								<CardImg top={true} style={{ height:250 }}src={`http://localhost:1337${res.image.url}`}/>
								<CardBody>
									<CardTitle>{res.name}</CardTitle>
									<CardText>{res.description}</CardText>
								</CardBody>
								<div className="card-footer">

								<a className="btn btn-outline-primary blue">
									+ Add To Cart
								</a>
								<style jsx>
				          {`
				            a {
				              color: white;
				            }
				            a:link {
				              text-decoration: none;
				              color: white;
				            }
				            .container-fluid {
				              margin-bottom: 30px;
				            }
				            .btn-outline-primary {
				              color: #007bff !important;
				            }
				            a:hover {
				              color: white !important;
				            }
				          `}
				        </style>
								</div>
							</Card> )}
						</CardColumns>
						<div>
							<Cart />
						</div>
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

export default compose(withRouter, defaultPage,
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
