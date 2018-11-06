import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import * as actionTo from "../actions/company";

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
      <div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("ini state loh", state);
  return {
    company: state.companies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getComp: bindActionCreators(actionTo, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopContainer);
