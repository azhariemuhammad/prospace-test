import React from "react";

import OfficeContainer from '../../containers/OfficeContainer'
import { Page } from '../page'

import "./style.css";

export const OfficePage = props => {
  return (
    <Page className="container">
      <OfficeContainer {...props} />
    </Page>
  );
};
