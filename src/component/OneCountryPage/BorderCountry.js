import React from 'react';
import './BorderCountry.css'

function BorderCountry(props) {

    let i = 0;

    const br1 = props.render && props.render.borders ? props.render.borders[i++] : null;
    const br2 = props.render && props.render.borders ? props.render.borders[i++] : null;
    const br3 = props.render && props.render.borders ? props.render.borders[i++] : null;

    return (
        <div className="border-countries" >
            <h5>Border Countries:</h5>
            <div>
                <button>{br1}</button>
                <button>{br2}</button>
                <button>{br3}</button>
            </div>
        </div>
    )
}

export default BorderCountry;