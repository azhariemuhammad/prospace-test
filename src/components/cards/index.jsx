import React from 'react';

import './style.css'

export const Card = () => {
  return (
    <div className="card">
    <div className="card-header">
      <div className="card-title">
          Google
      </div>
    </div>
      <div className="card-content">
        <div>
          <p className="title-ligth-grey">Address:</p>
          <p className="regular">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div>
        <p className="title-ligth-grey">Revenue:</p>
          <p className="regular">99999</p>
        </div>
        <div>
          <p className="title-ligth-grey">Phone:</p>
          <p className="regular">+62 080808</p>
        </div>
      </div>
    </div>
  )
}