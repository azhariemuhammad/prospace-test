import React from "react";

import { FieldGroup, DropDownMenu } from "../form";


import "react-datepicker/dist/react-datepicker.css";


export class CreateOffice extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: {},
      companyId: 1,
      startDate: {}
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
    console.log(property, newState);
  }
  
  handleOnSubmit(e) {
    e.preventDefault()
    this.props.handleOnSubmitOffice(this.state)
    this.setState({name: ''})
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>Create Office</h1>
        </div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <FieldGroup
            label="Name:"
            placeholder="name"
            regularInput={true}
            initialValue={this.state.name}
            callbackParent={newState => this.onChildChanged("name", newState)}
          />
          <FieldGroup
            label="Location:"
            doubleInput={true}
            placeholder="latitude"
            placeholder1="longitude"
            initialValue=""
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
