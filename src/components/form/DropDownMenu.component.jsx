import React from 'react';

export class DropDownMenu extends React.Component {
  
  handleSelection(event) {
    const value = event.target.value
    this.props.callbackParent(value)
  }

  render() {
    return (
        <label className="menu">
          {this.props.label}
          <br/>
          <select className="menu" onChange={(e) => this.handleSelection(e)}>
            {
              (this.props.listCompany.length > 0) && this.props.listCompany.map((item, idx) => {
                return (
                    <option key={idx} value={item.id}>{item.name}</option>
                )
            })
            }
          </select>
        </label>
    );
  }
}