import React from 'react';
import moment from 'moment'

import './style.css'
import { Card } from '../cards';

export const ListOffice= ({offices, callbackParent}) => {

  const handleRemoveOffice = (id)  => {
    if (window.confirm("Are You sure to remove it?")) {
      callbackParent(id)
    } else {
      return;
    }
  }

  const cardContent = (item) => {
    return (
      <div className="card-content">
        <div>
          <p className="title-ligth-grey">Location:</p>
          <p className="regular">Lat - { item.location.lat }</p>
          <p className="regular">Long - { item.location.long }</p>
        </div>
        <div>
        <p className="title-ligth-grey">Office Start Date:</p>
          <p className="regular">{ moment(item.startDate).format('L') }</p>
        </div>
      </div>
    )
  }



  if (offices) {
    return (
      <div className="wrapper-cards">
        { offices.map((item, idx) => {
          return (
            <Card 
              key={ idx }
              id= { item.id }
              name={ item.name }
              removeItem= {id => handleRemoveOffice(id)}>
            {cardContent(item)}
            </Card>
          )
        })}
      </div>
    )
  } else {
    return (
      <div>
        loading...
      </div>
    )
  }
  
}