import React from 'react';

import './style.css'

export const OfficeDetail= ({company}) => {
  if (company) {
    const {name, address, revenue, phone} = company.company
    return (
      <div className="office">
      <div className="office-header">
        <div className="office-title">
            { name }
        </div>
      </div>
        <div className="office-content">
          <div>
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
        </div>
      </div>
    )
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
}