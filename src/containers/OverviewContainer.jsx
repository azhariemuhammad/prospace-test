import React from "react";
import { bindActionCreators } from 'redux'; 
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import * as actionsCompany from '../actions/company';
import * as actionsOffice from '../actions/office'

import { TopContainer } from './TopContainer'
import { BottomContainer } from './BottomContainer'
import { Card } from '../components/cards'
import { CreateCompany } from "../components/create-company";
import { CreateOffice } from "../components/create-office/";

import './style.css'
class OverviewContainer extends React.Component {

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
    if (window.confirm("Are You sure to remove it?")) {
      this.props.actionsCompany.removeCompany(id)
    } else {
      return
    }
  }

  cardContent(item) {
    return (
      <div className="card-content">
        <div>
          <p className="title-ligth-grey">Address:</p>
          <p className="regular">{ item.address }</p>
        </div>
        <div>
        <p className="title-ligth-grey">Revenue:</p>
          <p className="regular">{ item.revenue }</p>
        </div>
        <div>
          <p className="title-ligth-grey">Phone:</p>
          <p className="regular">{ item.phone }</p>
        </div>
      </div>
    )
  }
  
  noCompany() {
    return (
      <p>Ooopss!!! There's no Company created yet </p>
    )
  }

  render() {
    return (
      <div>
        <TopContainer height="350px">
          <div className="flex-around">
            <div className="box">
                <CreateCompany handleOnSubmitCompany={newState => this.handleSubmitCompany(newState)}/>
            </div>
            <hr />
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
            <div className="grid">
              { (this.props.company.length > 0) ? this.props.company.map((item, idx) => {
                return (
                  <Link to={`/company/${item.id}/office/`} key={item.id}>
                    <Card 
                      key={ item.id }
                      id={ item.id }
                      name={ item.name }
                      removeItem= {id => this.handleRemoveCompany(id)}>
                      {this.cardContent(item)}
                    </Card>
                  </Link>
                )
              }) : this.noCompany() }
            </div>
        </BottomContainer>
      </div>
    );
  }
};


const mapStateToProps = state => {
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