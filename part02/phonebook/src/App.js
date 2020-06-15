import React, { useState } from 'react'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'

const App = () => {
    // state hooks
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
    // function checks if person's name exists already
    const personExists = (persons, name) => {
        return (persons.map(person => person.name).includes(name))
    }
    // parametrina personObject
    const ignoreCase = (personObject) => (
        personObject.name.toUpperCase()
            .includes(newFilter.toUpperCase())
    )

    if (personExists(persons, newName)) {
        window.alert(`${newName} is already added to phonebook`)
    }

    return (
        <div>
            <h2>Phonebook</h2>

            <SearchFilter filter={newFilter} handler={handleFilterChange} />

            <h3>Add a new</h3>
            <PersonForm
                handleNameChange={handleNameChange}
                name={newName}
                handleNumberChange={handleNumberChange}
                number={newNumber}
                addName={addName}
            />
            <h2>Numbers</h2>
            <Persons person={persons} ignore={ignoreCase} />
            {persons.map((person, i) =>
                <Persons key={i} person={person} />
               
            )}
        </div>
    )
}


export default App


