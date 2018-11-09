import React from 'react';


export class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);

  }

  handleSelection(event) {
    const value = event.target.value
    console.log(value)
    this.props.callbackParent(value)
  }

  render() {
    return (
      <div>
        <label>
          {this.props.label}
          <br/>
          <select onChange={(e) => this.handleSelection(e)}>
            {
              (this.props.listCompany) && this.props.listCompany.map((item, idx) => {
                return (
                    <option key={idx} value={item.id}>{item.name}</option>
                )
            })
            }
          </select>
        </label>
      </div>
    );
  }
}