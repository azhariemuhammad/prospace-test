import React from 'react';

import './style.css'
export class FieldGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      code: ''
    }
  }
  
  onTextChanged(event, param) {
    const value = event.target.value  
    this.props.callbackParent(value)
  }
  
  handlePhoneNumber(event, param) {
    const value = event.target.value  
    if (param === 'code') {
      this.setState({code: value}, this.formatPhoneNumber())
    } else {
      this.setState({phone: value}, this.formatPhoneNumber())
    }
    
  }

  formatPhoneNumber() {
    const number = `(${this.state.code}) ${this.state.phone}`
    this.props.callbackParent(number)
  }



  doubleInput() {
    return (
      <div className="wrapper-input">
        <label>{this.props.label}</label>
        <br />
        <span>
          <input 
            type="text" 
            name={this.props.name} 
            value={this.props.name} 
            placeholder={this.props.placeholder}
            onChange={(e) => this.handlePhoneNumber(e, 'code')}
          />
          <input 
            type="text" 
            name={this.props.name} 
            value={this.props.name} 
            placeholder={this.props.placeholder1} 
            onChange={(e) => this.handlePhoneNumber(e, 'phone')} 
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