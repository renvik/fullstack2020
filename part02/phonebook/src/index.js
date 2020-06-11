import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Persons from './components/Persons'

const App = () => {
  // taulukko sisältää henkilöiden nimet, kova koodattunaHellas, Aho
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '050' },
    { name: 'Matti Aho', number: '040' }
  ])
  console.log(persons);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
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
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const personExists = (persons, name) => {
    return (persons.map(person => person.name).includes(name))
  }
  if (personExists(persons, newName)) {
    window.alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      </ul>
    </div>
  )
}
//export default App

ReactDOM.render(<App />, document.getElementById('root'))

