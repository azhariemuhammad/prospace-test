import React from "react";

import { TopContainer } from '../../containers/TopContainer'
import { BottomContainer } from "../../containers/BottomContainer";
import { Page } from '../page'

import "./style.css";

export const OverviewPage = props => {
  return (
    <Page className="container">
      <TopContainer {...props} />
      <BottomContainer {...props} />
    </Page>
  );
};
