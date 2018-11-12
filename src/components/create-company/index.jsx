import React from "react";

import { FieldGroup } from "../form";
export class CreateCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      revenue: '',
      phone: {},
      errors: {
        name: '',
        address: '',
        revenue: '',
        number: '',
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
      this.setState({ phone: newState })
    }
  }

  handleOnSubmit(e) {
    e.preventDefault()
    if (this.validatingForm()) {
        this.props.handleOnSubmitCompany(this.state)
        this.removeFieldInput()
    }
    return
  }

  validatingForm() {
    let fields = this.state
    let formIsValid = true
    let errors = {}
    
    if (!fields['name']) {
      formIsValid = false
      errors['name'] = 'Cannot be empty'
    } 
    if (!fields['phone'].number) {
      formIsValid = false
      errors['number'] = 'Cannot be empty'
    }

    if (!fields['phone'].code) {
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

  removeFieldInput() { 
    this.companyFormRef.reset();
    this.setState({
      name: '',
      address: '',
      revenue: '',
      phone: {},
    })
  }

  render() {
    return (
        <div>
          <div className="title">
            <h1>Create Company</h1>
          </div>
          <form onSubmit={(e) => this.handleOnSubmit(e)} ref={(el) => this.companyFormRef = el}>
            <FieldGroup
              label="Name:"
              id="mainInput"
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
              errors={{'number': this.state.errors.number}}
              initialValue={this.state.phone}
              callbackParent={(newState) => this.onChildChanged('phone', newState) }
            />
            <p style={{'color': 'red', 'display': (this.message) ? 'black' : 'none'}}>Please fill in all fields</p>
            <input className="btn-submit" type="submit" value="Create"/>
          </form>
        </div>
    );
  }
}
