import React from 'react';

import './style.css'
import { Card } from '../cards';

export const ListOffice= ({offices}) => {
  if (offices) {
    return (
      <div className="wrapper-cards">
        { offices.map((item, idx) => {
          return (
            <Card 
              key={ idx }
              id= { item.id }
              name={ item.name }
            />
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