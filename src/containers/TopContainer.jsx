import React from "react";

export class TopContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper-forms" style={{'height': this.props.height}}>
        {this.props.children}
      </div>
    );
  }
}

export default TopContainer
