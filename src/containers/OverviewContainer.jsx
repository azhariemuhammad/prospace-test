import React from "react";

import { TopContainer } from './TopContainer'
import { BottomContainer } from './BottomContainer'
import { Card } from '../components/cards'
import { CreateCompany } from "../components/create-company";
import { CreateOffice } from "../components/create-office/";

import './style.css'
export const OverviewContainer = ({props}) => {
  return (
    <div>
      <TopContainer className="wrapper-form">
        <div className="flex-around">
          <div className="box">
              <CreateCompany />
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </BottomContainer> 
    </div>
  );
};
