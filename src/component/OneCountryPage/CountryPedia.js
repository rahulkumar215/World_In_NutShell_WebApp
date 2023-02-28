import React from 'react'
import './CountryPedia.css'
import LeftRightCountry from './LeftRightCountry'
import BorderCountry from './BorderCountry'

function CountryPedia(props) {

    const png = props.pedia && props.pedia.flags ? props.pedia.flags.png : null;


    return (
        <div className="one-country-container">
            <div className="one-country-image">
                <img src={png} alt="sri-lanka-flag" />
            </div>
            <div className="country-details-border">
                <LeftRightCountry render={props.pedia} />
                <BorderCountry render={props.pedia} />
            </div>
        </div>
    )
}

export default CountryPedia;