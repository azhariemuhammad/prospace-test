import React from "react";
import { bindActionCreators } from 'redux'; 
import { connect } from "react-redux";

import * as actionsOffice from '../actions/office'
import * as actionsCompany from '../actions/company'

import { TopContainer } from './TopContainer'
import { BottomContainer } from './BottomContainer'
import { OfficeDetail } from "../components/office-detail/office-detail";
import { ListOffice } from "../components/list-office/list-office";

import './style.css'
class OfficeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      companyId: ''
    }
  }

  componentDidMount() {
    const companyId = this.props.match.params.id
    this.setState({companyId})
    this.getCompany(companyId)
    this.props.actionsOffice.getOfficeByCompany(companyId)
  }

  handleRemoveOffice(officeId) {
    this.props.actionsOffice.removeOffice(officeId, this.state.companyId)
  }

  getCompany(companyId) {
    this.props.actionsCompany.getCompany(companyId)
  }
  
  render() {
    return (
      <div>
        <TopContainer height="270px">
          <OfficeDetail company={this.props.company[0]} />
        </TopContainer>
        <BottomContainer>
          <ListOffice offices={this.props.office} callbackParent={id => this.handleRemoveOffice(id)} />
        </BottomContainer> 
      </div>
    );
  }
};




const mapStateToProps = state => {
  return {
    office: state.office.offices,
    company: state.company.companies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionsOffice: bindActionCreators(actionsOffice, dispatch),
    actionsCompany: bindActionCreators(actionsCompany, dispatch)
  }
}

OfficeContainer = connect(mapStateToProps, mapDispatchToProps)(OfficeContainer)


export default OfficeContainer