import React, { useState } from 'react'
import Entry from './Entry'
//Entry-komponentti renderöi yhden maan tiedot, saa argumenttina countries-taulukon kaupungeista

const Country = ({ filter, countries, handleFilter }) => {
  const [match] = useState(false)

  const showedCountries = match
    ? countries
    : countries.filter(country =>
      country.name.toLowerCase().includes(filter.toLowerCase()))

  // ehtolause löytyneiden maiden käsittelyyn
  const countrylist = () => {
    if (showedCountries.length > 10) {
      return (
        <p>Too many countries, specify another filter</p>
      )
      // tässä haarassa näytetään show-button ja asetetaan napilla valittava maa arvoksi
      // EI TOIMI, katso syntaksiesimerkki komponentista SearchFilter
      // selvitä key sanan merkitys
    } else if (showedCountries.length < 10 && showedCountries.length > 1) {
      return (
          showedCountries.map(country =>
          <p key={country.name}>{country.name}
          <button onClick={()=>handleFilter(country.name)} type="show">show</button></p>)
                              
    )  
    } else {
      return (

        showedCountries.map(country =>
          <div key={country.name}>
            <h2 key={country.id}>{country.name}</h2>
            <Entry key={country.capital} first="capital" second={country.capital} />
            <Entry key={country.population} first="population" second={country.population} />
            <h3>languages</h3>
            <ul>
              {country.languages.map(lan => <li key={lan.name}>{lan.name}</li>)}
            </ul>
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