import React, { useState } from 'react';

// nuolisyntaksi komponentin määrittelyssä
const App = (props) => {
  // henkilöiden nimet on muuttujassa persons
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Pentti Putkonen'}
  ])
  persons.forEach(alkio => {
    console.log('taulukossa nyt: ', alkio)
  })
  const [newName, setNewName] = useState('')

  // tapahtumakäsittelijä, nuolisyntaksi, argumenttina event
  // luo uuden henkilö-olion
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    console.log('name added')
    
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const Person = ({ persons }) => {
    return (
      <li>{persons.name}</li>
    )
  }
// plaa
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <input
          value={newName}
          onChange={handleNameChange}
        />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
        <ul>
          
        </ul>

    </div>
  )
}


export default App;
