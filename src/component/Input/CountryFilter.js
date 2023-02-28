import React from 'react'
import './countryFilter.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function CountryFilter(props) {

    const handleClick = (event) => {
        const countryRegion = event.target.value;

        props.onClick(countryRegion);
    }


    return (
        <div className="country-dropdown">
            <div className="dropdown">
                <button className="dropbtn">Filter by Region</button>
                <button className="droparrowbtn">
                    <KeyboardArrowDownIcon />
                </button>
            </div>
            <div className="dropdown-btn">
                <button onClick={handleClick} name='asia' value='asia' >Asia</button>
                <button onClick={handleClick} name='america' value='america' >America</button>
                <button onClick={handleClick} name='africa' value='africa' >Africa</button>
                <button onClick={handleClick} name='europe' value='europe' >Europe</button>
                <button onClick={handleClick} name='oceania' value='oceania' >Oceania</button>
            </div>
        </div>
    )
}

export default CountryFilter;