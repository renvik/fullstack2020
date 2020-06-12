import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'

const App = () => {
  // state hooks, tilanhallinta
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '050' },
    { name: 'Matti Aho', number: '040' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  // addName-metodi huolehtii nimen lisäämisestä oliolle
  const addName = (event) => {
    event.preventDefault()
    // person-objektin määrittely
    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
  // event handlers:
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  // other functions:
  const personExists = (persons, name) => {
    return (persons.map(person => person.name).includes(name))
  }
  if (personExists(persons, newName)) {
    window.alert(`${newName} is already added to phonebook`)
  }
  // Search by name, uusi event handler?, tulokset numbers alla
  // r. 51 kutsutaan SearchFilter komponenttia
  return (
    <div>
      <h2>Phonebook</h2>
      filter by name: <input name={newName} onChange={handleNameChange} />
      <SearchFilter filter={newFilter} handler={handleFilterChange} />
      <h3>Add a new</h3>
      <form onSubmit={addName}>
        <div>name: <input name={newName} onChange={handleNameChange} /></div>
        <div>number: <input number={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) =>
          <Persons key={i} person={person} />

        )}
        {persons.filter}

      </ul>
    </div>
  )
}
//export default App

ReactDOM.render(<App />, document.getElementById('root'))

