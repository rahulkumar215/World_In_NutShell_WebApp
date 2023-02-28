import React from 'react'

function RightCountryData(props) {

    const tld = props.render && props.render.tld ? props.render.tld[0] : null;

    return (
        <div className="right-data">
            <h5>Top Level Domain: <span>{tld}</span></h5>
            <h5>Land Area: <span>{(props.render.area).toLocaleString()} km2</span></h5>
        </div>
    )
}

export default RightCountryData