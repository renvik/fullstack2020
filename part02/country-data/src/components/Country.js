import React, {useState} from 'react';

import Entry from './Entry'

const Country = ( {filter, countries} ) => {
    const [match] = useState(false)

    const countriesToShow = match
        ? countries
        : countries.filter(country => 
            country.name.toLowerCase().includes(filter.toLowerCase()))

    const Languages = ( {country} ) => country.languages.map((languages =>
              <li key={languages.name}>{languages.name}</li>))

    const countrylist = () => {
        if (countriesToShow.length > 10) { 
               return (
                <p>Too many countries, specify another filter</p> 
               )
        } else if (countriesToShow.length < 10 && countriesToShow.length > 1) { 
            return (
               countriesToShow.map(country => 
               <p key={country.name}>{country.name}</p>)
            )
            } else {
                return (
                    countriesToShow.map(country => 
                        <div key={country.name}>
                            <h2 key={country.id}>{country.name}</h2>
                            <Entry key={country.capital} first="capital" second={country.capital} />
                            <Entry key={country.population} first="population" second={country.population} />
                            <h3>languages</h3>
                             <Languages country={country}/>
                            <p> <img height="75" width="100" alt={country.name} src={country.flag}></img></p>
                            
                        </div>
                    )
                )
            }
    }
           
    return (
        <div>
            {countrylist()}
        </div>
    )
}
export default Country