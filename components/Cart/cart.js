import React from "react";
import defaultPage from "../../hocs/defaultPage";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {}
  render() {
    return (
      <Card style={{ padding: "10px 5px" }} className="cart">
        <CardTitle>Your Order:</CardTitle>
        <CardBody>Items</CardBody>
      </Card>
    );
  }
}
export default defaultPage(Cart);
