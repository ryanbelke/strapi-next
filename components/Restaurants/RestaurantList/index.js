import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Button, Card, CardBody, CardColumns, CardImg, CardSubtitle, CardText,
	CardTitle, Col, Row } from 'reactstrap';

const RestaurantList = ({
	data: {
		loading,
		error,
		restaurants
	},
	search
}) => {
	if (error)
		return "Error loading posts"
	if (restaurants && restaurants.length) {
		return (
			<Row>
				<Col>
					<CardColumns className="h-100" >
						{
							restaurants.filter(query => query.name.toLowerCase().includes(search)).map(res =>
								<Card className="h-100" style={{ marginBottom: 0, position: 'relative' }} key={res._id}>
								<CardImg top={true} style={{ height:250 }}src={`http://localhost:1337${res.image.url}`}/>
								<CardBody>
									<CardTitle>{res.name}</CardTitle>
									<CardText>{res.description}</CardText>
								</CardBody>
								<div className="card-footer">
									<Button color="primary">View</Button>
								</div>
							</Card>)
						}
					</CardColumns>
				</Col>
    	</Row>
		)
	} else  {
		return <h1>No Results Found</h1>
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
export default graphql(query, {
	props: ({
		data
	}) => ({
		data
	})
})(RestaurantList)
