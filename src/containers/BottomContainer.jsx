import React from "react";
import { Card } from "../components/cards";

import './style.css'
export const BottomContainer = ({children}) => {
  return (
    <div className="wrapper-cards">
      {children}  
    </div>
  );
};
