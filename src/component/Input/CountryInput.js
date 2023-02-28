import { useState } from 'react'
import './countryInput.css'
import { SearchRounded } from '@mui/icons-material';

function CountryInput(props) {

    const [countryName, setCountryName] = useState('');

    const handleChange = (event) => {
        setCountryName(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        props.onInput(countryName, props.beenClicked);
        setCountryName('');
    }

    return (
        <div className='country-input' >
            <form onSubmit={handleSearch}  >
                <button type='submit'>
                    <SearchRounded />
                </button>
                <input
                    type="text"
                    onChange={handleChange} placeholder='Search Country...'
                    value={countryName}
                />

            </form>
        </div>
    )
}

export default CountryInput;