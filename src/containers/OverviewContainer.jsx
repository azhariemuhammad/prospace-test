import React from "react";

import { bindActionCreators } from 'redux'; 
import { connect } from "react-redux";


// import store from "../store/configureStore";

import * as actions from '../actions/company';

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
    this.props.actions.getCompany()
  }

  handleSubmitCompany(data) {
    console.log(data, 'dfoishdfoi')
    this.props.actions.createCompany(data)
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
              <CreateOffice />
            </div>
          </div>
          
        </TopContainer>
        <BottomContainer>
          <div>
            <h1>Companies</h1>
          </div>
          <div className="wrapper-cards">
            {this.props.company.map(item => {
              return (
                <Card 
                  key={ item.id } 
                  name={ item.name }
                  address={ item.address }
                  revenue={ item.revenue }
                  phone={ item.phone }
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
  return {
    company: state.company.companies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(OverviewContainer)


export default OverviewContainer