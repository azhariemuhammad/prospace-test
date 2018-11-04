import React from "react";

import { TopContainer } from '../../containers/TopContainer'
import { Page } from '../page'

import "./style.css";

export const OverviewPage = props => {
  return (
    <Page>
      <TopContainer {...props} />
    </Page>
  );
};
