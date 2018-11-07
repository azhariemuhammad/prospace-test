import React from "react";

import { FieldGroup } from "../form";

import "./style.css";

const initiaState = {
  name: '',
  address: '',
  revenue: '',
  phone: ''
}

export class CreateCompany extends React.Component {
  constructor(props) {
    super(props);
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
    if (property === 'phone') {
      this.setState({ phone: newState })
    }
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.handleOnSubmitCompany(this.state)
    this.setState({name: ''})
  }

  render() {
    return (
        <div>
          <div className="title">
            <h1>Create Company</h1>
          </div>
          <form onSubmit={(e) => this.handleOnSubmit(e)}>
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
            <input className="btn-submit" type="submit" value="Create"/>
          </form>
        </div>
    );
  }
}
