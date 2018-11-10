import React from 'react';

import './style.css'

export const Card = ({children, removeItem, name, address, revenue, phone, id }) => {

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
        {children}
    </div>
  )
}