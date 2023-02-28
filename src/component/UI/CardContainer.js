import React from 'react'
import './CardContainer.css'

function CardContainer(props) {
  return (
    <div className='big-card' >
        {props.children}
    </div>
  )
}

export default CardContainer;