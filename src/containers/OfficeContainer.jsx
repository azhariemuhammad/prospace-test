import React from "react";


import { bindActionCreators } from 'redux'; 
import { connect } from "react-redux";

import * as actionsOffice from '../actions/office'

import { TopContainer } from './TopContainer'
import { BottomContainer } from './BottomContainer'
import { Card } from '../components/cards'
import { CreateCompany } from "../components/create-company";
import { CreateOffice } from "../components/create-office/";
import { OfficeDetail } from "../components/office-detail/office-detail";
import { ListOffice } from "../components/list-office/list-office";

import './style.css'
class OfficeContainer extends React.Component {
  
  componentDidMount() {
   const companyId = this.props.match.params.id
   this.props.actionsOffice.getOfficeByCompany(companyId)
    
  }
  render() {
    console.log(this.props.office)
    return (
      <div>
        <TopContainer>
          <OfficeDetail company={this.props.office[0]} />
        </TopContainer>
        <BottomContainer>
          <ListOffice offices={this.props.office} />
        </BottomContainer> 
      </div>
    );
  }
};




const mapStateToProps = state => {
  console.log('ini state baru di office', state)
  return {
    office: state.office.offices
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionsOffice: bindActionCreators(actionsOffice, dispatch)
  }
}

OfficeContainer = connect(mapStateToProps, mapDispatchToProps)(OfficeContainer)


export default OfficeContainer