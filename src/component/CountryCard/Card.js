import React from 'react'
import './Card.css'

function Card(props) {

    const clickedCard = () => {
        props.onClicked(props.full);
    }

    return (
        <div className='countryCard' onClick={clickedCard} >
            <img src={props.flag} alt={props.name} />
            <div className="countryInfo">
                <h3>{props.name}</h3>
                <div className="more">
                    <p>Population: <span>{props.population}</span></p>
                    <p>Region: <span>{props.region}</span></p>
                    <p>Capital: <span>{props.capital}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card;