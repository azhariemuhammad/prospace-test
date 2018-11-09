import React from 'react';

import './style.css'

export const Card = ({removeItem, name, address, revenue, phone, id }) => {

  const handleRemoveItem = (e, id) => {
    e.preventDefault()
    removeItem(id)
  } 
  return (
    <div className="card">
    <div className="card-header">
      <div className="card-title">
          <div>{ name }</div>
          <div onClick={(e) => handleRemoveItem(e, id)}>X</div>
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