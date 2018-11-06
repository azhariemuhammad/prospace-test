import React from 'react';

import './style.css'

export const Card = ({ name, address, revenue, phone }) => {
  return (
    <div className="card">
    <div className="card-header">
      <div className="card-title">
          { name }
      </div>
    </div>
      <div className="card-content">
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
}