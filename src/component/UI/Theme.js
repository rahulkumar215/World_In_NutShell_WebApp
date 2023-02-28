import React, { useEffect, useState } from 'react'
import './Theme.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Theme(props) {

  const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {

  // }, [isClicked])

  const themeClicked = () => {
    setIsClicked((prevstate) => {
      return prevstate ? false : true
    });
    props.setTheme();
  }

  const darkThemeIcon = () => {
    return (
      <button className='btn' onClick={themeClicked} >
        <DarkModeIcon className='btn-icon' />Dark Mode
      </button>
    )
  }

  const lightThemeIcon = () => {
    return (
      <button className='btn' onClick={themeClicked} >
        <LightModeIcon className='btn-icon' />Light Mode
      </button>
    )
  }



  return (
    <div className="theme" >
      {
        isClicked ? lightThemeIcon() : darkThemeIcon()
      }
    </div>
  )
}

export default Theme;