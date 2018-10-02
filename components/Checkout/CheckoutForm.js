import React from "react";

import CardSection from "./CardSection";
import { Elements } from "react-stripe-elements";
import { FormGroup, Label, Input, FormText } from "reactstrap";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        address: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        stripe_id: ""
      },
      error: ""
    };
  }

  onChange(propertyName, e) {
    const { data } = this.state;
    data[propertyName] = e.target.value;
    this.setState({ data });
  }

  render() {
    return (
      <div className="paper">
        <FormGroup style={{ display: "flex" }}>
          <div style={{ flex: "0.25", marginRight: 10 }}>
            <Label>Address</Label>
            <Input onChange={this.onChange.bind(this, "address")} />
          </div>
          <div style={{ flex: "0.75" }}>
            <Label>Street</Label>
            <Input onChange={this.onChange.bind(this, "street")} />
          </div>
        </FormGroup>
        <FormGroup style={{ display: "flex" }}>
          <div style={{ flex: "0.75", marginRight: 10 }}>
            <Label>City</Label>
            <Input onChange={this.onChange.bind(this, "city")} />
          </div>
          <div style={{ flex: "0.25", marginRight: 0 }}>
            <Label>State</Label>
            <Input onChange={this.onChange.bind(this, "state")} />
          </div>
        </FormGroup>
        <Elements>
          <CardSection
            context={this.props.context}
            data={this.state.data}
            submitOrder={this.submitOrder}
          />
        </Elements>
        <style jsx>
          {`
            .paper {
              border: 1px solid lightgray;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
                0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                0px 2px 1px -1px rgba(0, 0, 0, 0.12);
              height: 500px;
              padding: 30px;
              background: #fafafa;
              border-radius: 6px;
              margin-top: 60px;
            }
            .form-half {
              flex: 0.5;
            }
          `}
        </style>
      </div>
    );
  }
}
export default CheckoutForm;
