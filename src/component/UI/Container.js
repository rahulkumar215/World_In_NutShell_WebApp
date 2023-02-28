import React, { useEffect, useState } from 'react'
import Header from './Header'
import './Container.css'
import axios from 'F:/world-pedia/src/axios.js'
import Input from '../Input/Input'
import Card from '../CountryCard/Card'
import CardContainer from './CardContainer.js'
import CountryInfo from '../OneCountryPage/CountryInfo.js'

function Container(props) {

    let shownCountry = 8;

    const [isSearched, setIsSearched] = useState(false);

    const [allCountryUrl, setAllCountryUrl] = useState('https://restcountries.com/v3.1/all')
    const [countries, setCountries] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(0);

    const filterCountries = (region) => {
        let counts = count;

        const countryUrl = `https://restcountries.com/v3.1/region/${region}`;
        setIsSearched(false);
        setIsClicked(false);
        setCount(++counts);
        setCountries([]);
        setAllCountryUrl(countryUrl);
    }

    const searchCountries = (name, beenClicked = false) => {
        const countryUrl = `https://restcountries.com/v3.1/name/${name}`;
        beenClicked ? setIsClicked(true) : setIsSearched(true);
        setAllCountryUrl(countryUrl);
    }

    const showClickedCountry = (countryData) => {
        setIsClicked(true);
        setCountries(countryData);
    }

    

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(allCountryUrl);

            const requestedDataLength = request.data.length;

            if (requestedDataLength <= 7) {
                setCountries(request.data[0]);
            } else if (requestedDataLength >= 8) {
                if (countries.length === 0) {
                    for (let i = 0; i < shownCountry; i++) {
                        const randomCountryIndex = Math.floor(Math.random() * requestedDataLength - 1);
                        setCountries((prevCountry) => {
                            return [...prevCountry, request.data[randomCountryIndex]]
                        });
                    }
                }
            }
            return request;
        };
        fetchData();
    }, [allCountryUrl, count]);

    const mapCountry = () => {
        return (
            <CardContainer>
                {
                    countries.map((country, id) => {

                        const name = country && country.name ? country.name.common : null;

                        const png = country && country.flags ? country.flags.png : null;

                        const capital = country && country.capital ? country.capital : null;

                        const population = country && country.population ? country.population : null;

                        const region = country && country.region ? country.region : null;

                        return <Card
                            key={id}
                            name={name}
                            capital={capital}
                            flag={png}
                            population={population}
                            region={region}
                            onClicked={showClickedCountry}
                            full={country}
                        />
                    })
                }
            </CardContainer>
        )
    }

    const showCountry = () => {

        const name = countries && countries.name ? countries.name.common : null;
        const population = countries && countries.population ? countries.population : null;
        const png = countries && countries.flags ? countries.flags.png : null;;
        return <CardContainer>
            <Card
                name={name}
                capital={countries.capital}
                flag={png}
                population={population}
                region={countries.region}
                onClicked={showClickedCountry}
                full={countries}
            />
        </CardContainer>
    }

    const renderClickedCountry = () => {
        return <CountryInfo country={countries} onClick={filterCountries} onInput={searchCountries} />
    }

    const renders = () => {
        if (isSearched) {
            return showCountry();
        } else {
            return mapCountry();
        }
    }

    return (
        <div className='giant-container'>
            <Header setTheme={props.setTheme} />
            <div className='input-and-content'>
            {
                !isClicked && <Input onClick={filterCountries} onInput={searchCountries} beenClicked={false} />
            }

            {
                isClicked ? renderClickedCountry() : renders()
            }
            </div>
        </div>
    )
};

export default Container;