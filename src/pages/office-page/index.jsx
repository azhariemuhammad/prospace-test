import React from "react";

import OfficeContainer from '../../containers/OfficeContainer'
import { Page } from '../page'

export const OfficePage = props => {
  return (
    <Page>
      <OfficeContainer {...props} />
    </Page>
  );
};
