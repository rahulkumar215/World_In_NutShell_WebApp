import React from 'react'
import './LeftRightCountry.css'
import RightCountryData from './RightCountryData.js'
import LeftCountryData from './LeftCountryData.js'

function LeftRightCountry(props) {

  const name = props.render && props.render.name ? props.render.name.common : null;


  return (
    <div className="one-country-details">
      <h1>{name}</h1>
      <div className="one-country-data">
        <LeftCountryData render={props.render} />
        <RightCountryData render={props.render} />
      </div>
    </div>
  )
}

export default LeftRightCountry