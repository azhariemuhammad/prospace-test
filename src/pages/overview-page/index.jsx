import React from "react";

import { FieldGroup } from "../../components/form/index";

import "./style.css";

export class OverviewPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      revenue: '',
      phone: ''
    };
  }

  onChildChanged(property, newState) {
    if (property === 'name') {
      this.setState({ name: newState })
    }
    if (property === 'address') {
      this.setState({ address: newState })
    }
    if (property === 'revenue') {
      this.setState({ revenue: newState })
    }
    console.log(property, newState)
  }

  render() {
    return (
      <div className="container">
        <div className="box left">
          <div className="title">
            <h1>Create Company</h1>
          </div>
          <form className="box left" action="">
            <FieldGroup
              label="Name:"
              placeholder="name"
              initialValue={this.state.name}
              callbackParent={(newState) => this.onChildChanged('name', newState) }
            />
            <FieldGroup
              label="Address:"
              placeholder="address"
              initialValue={this.state.address}
              callbackParent={(newState) => this.onChildChanged('address', newState) }
            />
            <FieldGroup
              label="Revenue:"
              placeholder="revenue"
              initialValue={this.state.revenue}
              callbackParent={(newState) => this.onChildChanged('revenue', newState) }
            />
            <FieldGroup
              label="Phone No:"
              doubleInput={true}
              placeholder="code"
              placeholder1="number"
              initialValue={this.state.phone}
              callbackParent={(newState) => this.onChildChanged('phone', newState) }
            />
          </form>
        </div>
      </div>
    );
  }
}
