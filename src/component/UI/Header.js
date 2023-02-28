import React from 'react'
import './Header.css'
import Theme from './Theme'


function Header(props) {
    return (
        <div className='header' >
            <div className="header-container">
            <div className="heading">
                <h1>Where in the World?</h1>
            </div>
            <Theme setTheme={props.setTheme} />
            </div>
        </div>
    )
}

export default Header