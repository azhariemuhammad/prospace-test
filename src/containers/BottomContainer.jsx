import React from "react";
import { Card } from "../components/cards";

import './style.css'
export const BottomContainer = ({props}) => {
  return (
    <div>
      <div>
        <h1>Companies</h1>
      </div>
      <div className="wrapper-cards">
        <Card />
        <Card />
      </div>  
    </div>
    
  );
};
