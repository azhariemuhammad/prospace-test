import React from "react";
import { connect } from "react-redux";

import { CreateCompany } from "../components/create-company";
import { CreateOffice } from "../components/create-office/";
import {getCompany, getCompanyFailure} from "../actions/company";

import { bindActionCreators } from 'redux'
export class TopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.doSomething = this.doSomething.bind(this);
  }

  doSomething() {  
    this.props.dispatch(getCompany());
  }

  render() {
    return (
      <div className="wrapper-forms">
        <div className="box">
          <CreateCompany />
        </div>
        <div className="box">
          <CreateOffice />
        </div>
        <button onClick={this.doSomething} />
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

const mapDispatchToProps = {
  getCompany
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopContainer);
