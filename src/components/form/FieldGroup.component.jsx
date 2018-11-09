import React from 'react';

import './style.css'
export class FieldGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      code: '',
      location: {
        lat: '',
        long: ''
      }
    }
  }
  
  onTextChanged(event, param) {
    const value = event.target.value  
    this.props.callbackParent(value)
  }
  
  handleInput(event, param) {
    console.log('ini param', param)
    const value = event.target.value  
    if (param === 'code') {
      this.setState({code: value}, this.formatPhoneNumber())
    } else if (param === 'number') {
      this.setState({phone: value}, this.formatPhoneNumber())
    } else if (param === 'latitude') {
      this.setState({location: {lat: value, long: this.state.location.long}}, this.formatLoc())
    } else if (param === 'longitude'){
      this.setState({location: {lat: this.state.location.lat, long: value}}, this.formatLoc())
    }
    
  }

  formatPhoneNumber() {
    const number = `(${this.state.code}) ${this.state.phone}`
    this.props.callbackParent(number)
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
            type="number" 
            name={this.props.name} 
            value={this.props.name} 
            placeholder={this.props.placeholder}
            onChange={(e) => this.handleInput(e, this.props.placeholder)}
          />
          <input 
            type="number" 
            name={this.props.name} 
            value={this.props.name} 
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
        <label>{this.props.label}</label>
        <br />
        <input 
          type="text" name={this.props.name} 
          value={this.props.name}
          placeholder={this.props.placeholder}
          onChange={(e) => this.onTextChanged(e)} />
      </div>
    );
  }
  render() {
    return (
      <div>
        { (!this.props.doubleInput) ? this.regulerInput() : this.doubleInput()}
      </div>
    );
  }
  
};