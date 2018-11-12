import React from "react";

import OverviewContainer from '../../containers/OverviewContainer'
import { Page } from '../page'

export const OverviewPage = props => {
  return (
    <Page>
      <OverviewContainer {...props} />
    </Page>
  );
};
