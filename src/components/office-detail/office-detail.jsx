import React from 'react';

import './style.css'

export const OfficeDetail= () => {
  return (
    <div className="office">
    <div className="office-header">
      <div className="office-title">
          Google
      </div>
    </div>
      <div className="office-content">
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