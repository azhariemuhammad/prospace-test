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
          <button className="btn-close" onClick={(e) => handleRemoveItem(e, id)}>X</button>
      </div>
    </div>
        {children}
    </div>
  )
}