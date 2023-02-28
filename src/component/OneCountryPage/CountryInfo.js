import React from 'react'
import './CountryInfo.css'
import Input from '../Input/Input';
import CountryPedia from './CountryPedia'

function CountryInfo(props) {
  return (
    <div>
      <Input onClick={props.onClick} onInput={props.onInput} beenClicked={true}/>
      <CountryPedia pedia={props.country}/>
    </div>
  )
}

export default CountryInfo;