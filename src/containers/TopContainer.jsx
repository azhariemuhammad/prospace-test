import React from "react";

import { CreateCompany } from "../components/create-company";
import { CreateOffice } from "../components/create-office/"


export const TopContainer = ({props}) => {
  return (
        <div className="container">
          <div className="box left">
            <CreateCompany />
          </div>
          <div className="box rigth">
            <CreateOffice />
          </div>
        </div>
  );
};
