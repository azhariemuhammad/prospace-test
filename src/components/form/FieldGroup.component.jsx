import React from 'react';

export class FieldGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onTextChanged(event) {
    console.log(event.target.value)
    const value = event.target.value
    this.props.callbackParent(value)
  }

  doubleInput() {
    return (
      <div>
        <label>{this.props.label}</label>
        <br />
        <span>
          <input 
            type="text" 
            name={this.props.name} 
            value={this.props.name} 
            placeholder={this.props.placeholder}
            onChange={(e) => this.onTextChanged(e)}
          />
          <input 
            type="text" 
            name={this.props.name} 
            value={this.props.name} 
            placeholder={this.props.placeholder1} 
            onChange={(e) => this.onTextChanged(e)} 
          />
        </span>
      </div>
    )
  }

  regulerInput() {
    return (
      <div>
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