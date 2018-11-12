import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'


export class TopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.doSomething = this.doSomething.bind(this);
  }

  doSomething() { 
    console.log(this.props)
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
