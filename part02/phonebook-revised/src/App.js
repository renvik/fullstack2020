import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import axios from 'axios'
// korjaa: Each child in a list should have a unique "key" prop
// tutki contact-komponentti propsien käytön osalta, person tulee Persons komponentista
// to-do 2.16: Siirrä palvelimen kanssa kommunikoinnista vastaava toiminnallisuus omaan moduuliin tämän osan materiaalissa olevan esimerkin tapaan.
// 9.9.: ei toimi lisäys eikä hae pohjatietoja, syy json server? axios

const App = (props) => {
  // henkilöiden nimet on muuttujassa persons
  const [persons, setPersons] = useState([
   // { name: 'Arto Hellas', number: 401234 },
   // { name: 'Pentti Putkonen', number: 50567 }
  ])

  //  state hookit, jotka säilyttävät muuttujan tilan ja mahdollistavat sen asettamisen
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  // useEffect-hook, joka hakee datan "palvelimelta"
  useEffect(() => {    
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  // oletettavasti tähän tulee datan tallennus
  // tapahtumakäsittelijä, nuolisyntaksi, argumenttina event, luo uuden henkilö-olion
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    // if alta muutettu leikattu rivit 40-42
    if (!persons.some(person => person.name === newName)) {
     axios
     .post('http://localhost:3001/persons', personObject)
     .then(response => {
       setPersons(persons.concat(response.data))
       setNewName('')
       setNewNumber('')
     })
    } else {
      window.alert(`${newName} is already added to phonebook`)
      console.log('this name will not be added')
    }
  }
  // nämä funktiot tarkkailevat input-kenttien tilaa ja asettavat uuden arvon muuttujalle
  // console.log(event.target.value), tämä tulostaa konsoliin mitä syöttökentässä lukee
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    console.log('kutsuttiin nimen asettavaa setteriä')
  }
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  // funktio muuntaa henkilön nimen isoiksi kirjaimiksi, että haku on case insensitive
  const ignoreCase = (person) => (
    person.name.toUpperCase()
      .includes(newFilter.toUpperCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchFilter filter={newFilter} handler={handleFilterChange} />
      <h2>Add a new person</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewNumber={handleNewNumber}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} ignore={ignoreCase} />
    </div>
  )
}

export default App;
