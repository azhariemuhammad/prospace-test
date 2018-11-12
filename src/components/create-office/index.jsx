import React from "react";
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";

import { FieldGroup, DropDownMenu } from "../form";
export class CreateOffice extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: {},
      companyId: 1,
      startDate: moment(),
      errors: {}
    };
  }

  onChildChanged(property, newState) {
    if (property === "name") {
      this.setState({ name: newState });
    }
    if (property === "location") {
      this.setState({ location: newState});
    }
    if (property === "companyId") {
      this.setState({ companyId: newState });
    }
    if (property === 'date') {
      this.setState({ startDate: newState });
    }
  }
  
  handleOnSubmit(e) {
    e.preventDefault()
    if (this.validatingForm()) {
      this.props.handleOnSubmitOffice(this.state)
      this.removeFieldInput()
    }
    return;
  }


  removeFieldInput() { 
    this.officeFormRef.reset();
    this.setState({
      name: "",
      location: {},
    })
  }

  validatingForm() {
    let fields = this.state
    let formIsValid = true
    let errors = {}

    if (!fields['name']) {
      formIsValid = false
      errors['name'] = 'Cannot be empty'
    } 
    if (!fields['location'].lat) {
        formIsValid = false
        errors['location'] = 'Cannot be empty'
    }
    if (!fields['location'].long) {
      formIsValid = false
      errors['location'] = 'Cannot be empty'
    }

    this.setState({errors: errors})
    setTimeout(() => {
      this.setState({errors: {}})
    }, 2000)
    return formIsValid
  }


  render() {
    return (
      <div>
        <div className="title">
          <h1>Create Office</h1>
        </div>
        <form onSubmit={(e) => this.handleOnSubmit(e)} ref={(el) => this.officeFormRef = el}>
          <FieldGroup
            label="Name:"
            placeholder="name"
            regularInput={true}
            errors={{'name': this.state.errors.name}}
            initialValue={this.state.name}
            callbackParent={newState => this.onChildChanged("name", newState)}
          />
          <FieldGroup
            label="Location:"
            doubleInput={true}
            placeholder="latitude"
            placeholder1="longitude"
            initialValue=""
            errors={{'longitude': this.state.errors.location}}
            callbackParent={newState =>
              this.onChildChanged("location", newState)
            }
          />
          <FieldGroup
            label="Office Start Date:"
            datePicker={true}
            callbackParent={newState =>
              this.onChildChanged("date", newState)
            }
          />
          <DropDownMenu
            label="Company:"
            listCompany={this.props.companies}
            callbackParent={newState =>
              this.onChildChanged("companyId", newState)
            }
           />
           <input className="btn-submit" type="submit" value="Create"/>
        </form>
      </div>
    );
  }
}
