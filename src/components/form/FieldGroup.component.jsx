import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';

import './style.css'
import "react-datepicker/dist/react-datepicker.css";
export class FieldGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      code: '',
      startDate: moment(),
      location: {
        lat: '',
        long: ''
      }
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.something = this.something.bind(this)
  }
  
  onTextChanged(event, param) {
    const value = event.target.value  
    this.props.callbackParent(value)
  }
  
  handleInput(event, param) {
    const value = event.target.value  
    if (param === 'code') {
      this.setState({code: value}, this.formatPhoneNumber())
    } else if (param === 'number') {
      this.setState({number: value}, this.formatPhoneNumber())
    } else if (param === 'latitude') {
      this.setState({location: {lat: value, long: this.state.location.long}}, this.formatLoc())
    } else if (param === 'longitude'){
      this.setState({location: {lat: this.state.location.lat, long: value}}, this.formatLoc())
    }
    
  }

  handleDateChange(val) {
    this.setState({startDate: val}, this.something())
  }
  
  something() {
    // this.props.callbackParent(this.state.startDate)
    console.log(this.state.startDate)
  }

  formatPhoneNumber() {
    let phone = {}
    phone.code = this.state.code
    phone.number = this.state.number
    this.props.callbackParent(phone)
  }

  formatLoc() {
    this.props.callbackParent(this.state.location)

  }


  doubleInput() {
    return (
      <div className="wrapper-input">
        <label>{this.props.label}</label>
        <br />
        <span>
          <input
            style={{'width': '70px', 'margin-right': '10px'}}
            type="number"
            placeholder={this.props.placeholder}
            onChange={(e) => this.handleInput(e, this.props.placeholder)}
          />
          <input 
            type="number"
            style={{'width': '180px'}}
            placeholder={this.props.placeholder1} 
            onChange={(e) => this.handleInput(e, this.props.placeholder1)} 
          />
          <span style={{color: "red"}}>{(this.props.errors) && this.props.errors[this.props.placeholder1]}</span>
        </span>
      </div>
    )
  }

  regulerInput() {
    return (
      <div className="wrapper-input">
        <label>{this.props.label}</label>
        <br />
        <input 
          type="text" name={this.props.name} 
          value={this.props.name}
          placeholder={this.props.placeholder}
          onChange={(e) => this.onTextChanged(e)} />
          <span style={{color: "red"}}>{(this.props.errors) && this.props.errors[this.props.placeholder]}</span>
      </div>
    );
  }

  datePicker() {
    return (
      <div className="wrapper-input">
        <label>{this.props.label}</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
      </div>
    )
  }

  render() {
    if (this.props.doubleInput) {
      return (this.doubleInput())
    } if (this.props.datePicker) {
      return this.datePicker()
    } else {
      return this.regulerInput()
    }
  }
};