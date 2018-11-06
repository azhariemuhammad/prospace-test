import React from "react";

import { connect } from "react-redux";

import { TopContainer } from './TopContainer'
import { BottomContainer } from './BottomContainer'
import { Card } from '../components/cards'
import { CreateCompany } from "../components/create-company";
import { CreateOffice } from "../components/create-office/";
import { OfficeDetail } from "../components/office-detail/office-detail";
import { ListOffice } from "../components/list-office/list-office";

import './style.css'
export const OfficeContainer = (props) => {
  console.log(props)
  return (
    <div>
      <TopContainer>
        <OfficeDetail />
      </TopContainer>
      <BottomContainer>
        <ListOffice />
      </BottomContainer> 
    </div>
  );
};



export default OfficeContainer
