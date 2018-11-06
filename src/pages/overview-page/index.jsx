import React from "react";

import OverviewContainer from '../../containers/OverviewContainer'
import { Page } from '../page'

import "./style.css";

export const OverviewPage = props => {
  return (
    <Page className="container">
      <OverviewContainer {...props} />
    </Page>
  );
};
