import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';

import { FieldGroup, DropDownMenu } from "../form";


import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

export class CreateOffice extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: {},
      startDate: moment(),
      companyId: 1
    };
    this.handleDateChange = this.handleDateChange.bind(this);
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
    console.log(property, newState);
  }

  handleDateChange(date) {
    console.log(date)
    this.setState({
      startDate: date
    });
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
          <div>
          <label>Office Start Date:</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
          </div>
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
