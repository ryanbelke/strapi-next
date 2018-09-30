import React from "react";
import defaultPage from "../../hocs/defaultPage";
import { withContext } from "../Context/AppProvider";
import { compose } from "recompose";
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
  }

  componentDidMount() {}
  render() {
    const { items } = this.props.context;

    return (
      <div>
        <Card style={{ padding: "10px 5px" }} className="cart">
          <CardTitle>Your Order:</CardTitle>
          <CardBody>
            <div style={{ marginBottom: 6 }}>
              <small>Items:</small>
            </div>
            <div>
              {items.map(item => {
                return (
                  <div key={item._id}>
                    <h5>{item.name}</h5>
                  </div>
                );
              })}
            </div>
          </CardBody>
        </Card>
        <style jsx>{``}</style>
      </div>
    );
  }
}
export default compose(
  defaultPage,
  withContext
)(Cart);
