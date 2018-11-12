import React from "react";

import { FieldGroup } from "../form";
import { validate } from '../../utils/validateForm'


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
      number: '',
      code: '',
      errors: {
        name: '',
        address: '',
        revenue: '',
        phone: '',
      }
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
      this.setState({ number: newState.number, code: newState.code })
    }
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.validatingForm()
    // console.log(this.formatPhone())
  }

  formatPhone() {
    const phone = `(${this.state.code}) ${this.state.number}`
    return phone
  }

  validatingForm() {
    let fields = this.state
    let formIsValid = true
    let errors = {}
    
    if (!fields['name']) {
      formIsValid = false
      errors['name'] = 'Cannot be empty'
    } 
    if (!fields['code'] && (!fields['number'])) {
      formIsValid = false
      errors['number'] = 'Cannot be empty'
    }
    if (!fields['revenue']) {
      formIsValid = false
      errors['revenue'] = 'Cannot be empty'
    } 
    if (!fields['address']) {
      formIsValid = false
      errors['address'] = 'Cannot be empty'
    }

    this.setState({errors: errors})
    setTimeout(() => {
      this.setState({errors: {}})
    }, 2000)
    return formIsValid
  }

  render() {
    console.log(this.state.errors.number)
    return (
        <div>
          <div className="title">
            <h1>Create Company</h1>
          </div>
          <form onSubmit={(e) => this.handleOnSubmit(e)}>
            <FieldGroup
              label="Name:"
              regularInput={true}
              placeholder="name"
              errors={{'name': this.state.errors.name}}
              initialValue={this.state.name}
              callbackParent={(newState) => this.onChildChanged('name', newState) }
            />
            <FieldGroup
              label="Address:"
              regularInput={true}
              placeholder="address"
              errors={{'address': this.state.errors.address}}
              initialValue={this.state.address}
              callbackParent={(newState) => this.onChildChanged('address', newState) }
            />
            <FieldGroup
              label="Revenue:"
              regularInput={true}
              placeholder="revenue"
              errors={{'revenue': this.state.errors.revenue}}
              initialValue={this.state.revenue}
              callbackParent={(newState) => this.onChildChanged('revenue', newState) }
            />
            <FieldGroup
              label="Phone No:"
              doubleInput={true}
              placeholder="code"
              placeholder1="number"
              errors={{'number': this.state.errors.revenue}}
              initialValue={this.state.phone}
              callbackParent={(newState) => this.onChildChanged('phone', newState) }
            />
            <p style={{'color': 'red', 'display': (this.message) ? 'black' : 'none'}}>Please fill in all fields</p>
            <button className="btn-submit" type="submit">Create</button>
          </form>
        </div>
    );
  }
}
