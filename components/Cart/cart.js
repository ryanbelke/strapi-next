import React from "react";
import defaultPage from "../../hocs/defaultPage";
import { withContext } from "../Context/AppProvider";
import { compose } from "recompose";
import { withRouter } from "next/router";
import Link from "next/link";

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
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated);
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
              {this.props.isAuthenticated ? (
                items.length > 0 ? (
                  this.props.router.pathname != "/checkout" ? (
                    <div>
                      <h5>Total: ${this.props.context.total}</h5>
                      <Link href="/checkout">
                        <a>
                          <Button color="primary">Order</Button>
                        </a>
                      </Link>
                    </div>
                  ) : null
                ) : null
              ) : (
                <h5>Login to Order</h5>
              )}
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
  withContext,
  defaultPage,
  withRouter
)(Cart);
