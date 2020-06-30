import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Haku from './components/Haku'
import Country from './components/Country'

const App = () => {
  // useStates only argument is initial state (here [] and '')
  // useState returns a pair of values: the current state (countries, filter) and a function (setCountries, setFilter) that updates it
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
     .get('https://restcountries.eu/rest/v2/all')
     .then(response => {
       setCountries(response.data)
     })
    },[])
  // **tapahtumankäsittelijä** joka kutsuu setFilter-funktiota rivillä 11 eli muuttaa filterin tilaa ->re-rendering
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    // välitetään arvot Haku- ja Country-komponenteille
    <div>
    <Haku filter={filter} handleFilter={handleFilter}/>
    <Country filter={filter} countries={countries}/>
    </div>
  )
}
export default App
