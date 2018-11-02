import React from 'react';


export class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);

  }

  handleSelection(event) {
    const value = event.target.value
    this.props.callbackParent(value)
  }

  render() {
    return (
      <div>
        <label>
          {this.props.label}
          <br/>
          <select value={this.props.initialValue} onChange={(e) => this.handleSelection(e)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      </div>
    );
  }
}