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
import uuidv1 from "uuid/v1";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  addItem(item) {
    this.props.context.addItem(item);
  }

  removeItem(item) {
    this.props.context.removeItem(item);
  }

  render() {
    const { items } = this.props.context;

    return (
      <div>
        <Card style={{ padding: "10px 5px" }} className="cart">
          <CardTitle>Your Order:</CardTitle>
          <CardBody style={{ padding: 10 }}>
            <div style={{ marginBottom: 6 }}>
              <small>Items:</small>
            </div>
            <div>
              {items
                ? items.map(item => {
                    if (item.quantity > 0) {
                      return (
                        <div
                          className="items-one"
                          style={{ marginBottom: 15 }}
                          key={uuidv1()}
                        >
                          <div>
                            <span id="item-quantity">{item.quantity}x</span>
                            <span id="item-name">&nbsp; {item.name}</span>
                            <span id="item-price">&nbsp; ${item.price}</span>
                          </div>
                          <div>
                            <Button
                              style={{
                                height: 25,
                                padding: 0,
                                width: 25,
                                marginRight: 5
                              }}
                              onClick={this.addItem.bind(this, item)}
                              outline
                              color="primary"
                            >
                              +
                            </Button>
                            <Button
                              style={{
                                height: 25,
                                padding: 0,
                                width: 25,
                                marginRight: 10
                              }}
                              onClick={this.removeItem.bind(this, item)}
                              outline
                              color="primary"
                            >
                              -
                            </Button>
                          </div>
                        </div>
                      );
                    }
                  })
                : null}
              {items.length > 0 ? (
                <div>
                  <h5>Total: ${this.props.context.total}</h5>
                  <Button color="primary">Order</Button>
                </div>
              ) : null}
            </div>
          </CardBody>
        </Card>
        <style jsx>{`
          #item-price {
            font-size: 1.3em;
          }
          #item-quantiy {
            font-size: 0.75em;
            padding-bottom: 4px;
          }
          #item-name {
            font-size: 1.3em;
          }
        `}</style>
      </div>
    );
  }
}
export default compose(
  defaultPage,
  withContext
)(Cart);
