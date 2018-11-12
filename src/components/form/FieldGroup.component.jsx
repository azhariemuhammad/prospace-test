import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';

import './style.css'
import "react-datepicker/dist/react-datepicker.css";
export class FieldGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: {
        number: '',
        code: ''
      },
      startDate: moment(),
      location: {
        lat: '',
        long: ''
      }
    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  
  onTextChanged(event, param) {
    const value = event.target.value  
    this.props.callbackParent(value)
  }
  
  handleInput(event, param) {
    const value = event.target.value  
    if (param === 'code') {
      this.setState({phone:{code: value, number: this.state.phone.number}},
        function() {
          this.formatPhoneNumber()
        })
    } else if (param === 'number') {
      this.setState({phone:{code: this.state.phone.code, number: value}}, 
        function() {
          this.formatPhoneNumber()
        })
    } else if (param === 'latitude') {
      this.setState({location: {lat: value, long: this.state.location.long}}, 
        function() {this.formatLoc()})
    } else if (param === 'longitude'){
      this.setState({location: {lat: this.state.location.lat, long: value}}, 
        function() {this.formatLoc()})
    }
    
  }

  handleDateChange(val) {
    this.setState({startDate: val}, function () {
      this.props.callbackParent(this.state.startDate)
    })
  }


  formatPhoneNumber() {
    this.props.callbackParent(this.state.phone)
  }

  formatLoc() {
    this.props.callbackParent(this.state.location)
  }


  doubleInput() {
    return (
      <div className="wrapper-input">
        <label>{this.props.label} <span style={{color: "red"}}>{(this.props.errors) && this.props.errors[this.props.placeholder1]}</span></label>
        <br />
        <span>
          <input
            style={{'width': '70px', 'marginRight': '10px'}}
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
        </span>
      </div>
    )
  }

  regulerInput() {
    return (
      <div className="wrapper-input">
        <label>{this.props.label} <span style={{color: "red"}}>{(this.props.errors) && this.props.errors[this.props.placeholder]}</span></label>
        <br />
        <input 
          id={this.props.id}
          type="text" name={this.props.name} 
          value={this.props.name}
          placeholder={this.props.placeholder}
          onChange={(e) => this.onTextChanged(e)} />
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