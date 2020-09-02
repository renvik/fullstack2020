import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchFilter from './components/SearchFilter'
import Country from './components/Country'

const App = () => {
  // state hooks: maatiedot, hakufiltteri
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')  
  
  // axiosia (npm-paketti/ulkopuolinen kirjasto) käytetään selaimen ja palvelimen välisessä tiedonsiirrossa tähän useEffect. Hakee maat apista taulukkoon
  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  },[])

  // tämä päivittää hakusanan tilaa setFilter-funktiolla
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  
  return (
    <div>
      <SearchFilter filter={filter} handleFilter={handleFilter}/>
      <Country filter={filter} countries={countries} handleFilter={setFilter}/>     
    </div >
  );
}

export default App
