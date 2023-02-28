import React from 'react'

function LeftCountryData(props) {

    return (
        <div className="left-data">
            <h5>Native Name: <span>{props.render.name.official}</span></h5>
            <h5>Population: <span>{(props.render.population).toLocaleString()}</span></h5>
            <h5>Region: <span>{props.render.region}</span></h5>
            <h5>Sub Region: <span>{props.render.subregion}</span></h5>
            <h5>Capital: <span>{props.render.capital}</span></h5>
        </div>
    )
}

export default LeftCountryData;