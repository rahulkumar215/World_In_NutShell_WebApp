import React from 'react'
import './Input.css'
import CountryInput from './CountryInput'
import CountryFilter from './CountryFilter'
import HomeIcon from '@mui/icons-material/Home';

function Input(props) {

  const isClicked = props.beenClicked;

  const showHome = () => {
    return (
        <a href="/">
          <HomeIcon />
        </a>
    )
  }

  return (
    <div className='inputs' >
      <div className='home-icon'>
        { isClicked && showHome() }
        <CountryInput onInput={props.onInput} beenClicked={props.beenClicked} />
      </div>

      <CountryFilter onClick={props.onClick} />
    </div>
  )
}

export default Input;