import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

export const OfficeDetail= ({company}) => {
  if (company) {
    const {name, address, revenue, phone} = company
    return (
      <div className="office">
      <div className="office-header">
        <div className="office-title">
            { name }
        </div>
      </div>
        <div className="office-content">
          <div className="office-detail">
            <p className="title-ligth-grey">Address:</p>
            <p className="regular">{ address }</p>
          </div>
          <div>
          <p className="title-ligth-grey">Revenue:</p>
            <p className="regular">{ revenue }</p>
          </div>
          <div>
            <p className="title-ligth-grey">Phone:</p>
            <p className="regular">{ phone }</p>
          </div>
          <div>
            <Link className="btn-navigate" to="/">Back to Overview</Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="center">
        Loading...
      </div>
    )
  }
}