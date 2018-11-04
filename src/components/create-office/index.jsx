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
      lat: "",
      long: "",
      startDate: moment(),
      selectedCompany: ""
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  onChildChanged(property, newState) {
    if (property === "name") {
      this.setState({ name: newState });
    }
    if (property === "location") {
      this.setState({ lat: newState.lat, long: newState.long });
    }
    if (property === "selectedCompany") {
      this.setState({ selectedCompany: newState });
    }
    console.log(property, newState);
  }

  handleDateChange(date) {
    console.log(date)
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>Create Office</h1>
        </div>
        <form action="">
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
            initialValue=""
            callbackParent={newState =>
              this.onChildChanged("company", newState)
            }
           />
           <input className="btn-submit" type="submit" value="Create"/>
        </form>
      </div>
    );
  }
}
