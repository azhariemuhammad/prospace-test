import React from "react";

import { CreateCompany } from "../components/create-company";
import { CreateOffice } from "../components/create-office/"


export const TopContainer = ({props}) => {
  return (
        <div className="wrapper-forms">
          <div className="box">
            <CreateCompany />
          </div>
          <div className="box">
            <CreateOffice />
          </div>
        </div>
  );
};
