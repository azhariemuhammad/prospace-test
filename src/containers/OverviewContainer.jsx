import React from "react";

import { bindActionCreators } from 'redux'; 
import { connect } from "react-redux";


import * as actionsCompany from '../actions/company';
import * as actionsOffice from '../actions/office'

import { TopContainer } from './TopContainer'
import { BottomContainer } from './BottomContainer'
import { Card } from '../components/cards'
import { CreateCompany } from "../components/create-company";
import { CreateOffice } from "../components/create-office/";

import './style.css'
class OverviewContainer extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.actionsCompany.getCompany()
  }

  handleSubmitCompany(data) {
    this.props.actionsCompany.createCompany(data)
  }

  handleSubmitOffice(data) {
    this.props.actionsOffice.createOffice(data)
  }

  handleRemoveCompany(id) {
    console.log('ini parent', id)
    this.props.actionsCompany.removeCompany(id)
  }
  

  render() {
    return (
      <div>
        <TopContainer className="wrapper-form">
          <div className="flex-around">
            <div className="box">
                <CreateCompany handleOnSubmitCompany={newState => this.handleSubmitCompany(newState)}/>
            </div>
            <div className="box">
              <CreateOffice
                companies={this.props.company}
                handleOnSubmitOffice={newState => this.handleSubmitOffice(newState)} />
            </div>
          </div>
          
        </TopContainer>
        <BottomContainer>
          <div>
            <h1>Companies</h1>
          </div>
          <div className="wrapper-cards">
          
            {this.props.company.length > 0 && this.props.company.map((item, idx) => {
              return (
                <Card 
                  key={ idx }
                  id={ item.id }
                  name={ item.name }
                  address={ item.address }
                  revenue={ item.revenue }
                  phone={ item.phone }
                  removeItem= {id => this.handleRemoveCompany(id)}
                />
              )
            })}
          </div>
        </BottomContainer> 
      </div>
    );
  }
};


const mapStateToProps = state => {
  console.log('ini state baru', state)
  return {
    company: state.company.companies,
    office: state.office.offices
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionsCompany: bindActionCreators(actionsCompany, dispatch),
    actionsOffice: bindActionCreators(actionsOffice, dispatch)
  }
}

OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(OverviewContainer)


export default OverviewContainer