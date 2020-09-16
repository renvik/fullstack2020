import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import dbService from './services/names'
import ErrorMessage from './components/ErrorMessage'

// TEKEMÄTTÄ: 2.18 update

const App = (props) => {
  //  state hookit, jotka säilyttävät muuttujan tilan ja mahdollistavat sen asettamisen
  // henkilöiden nimet on muuttujassa persons
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  
  // useEffect-hook, joka hakee datan "palvelimelta"
  useEffect(() => {    
    dbService.getAll().then(response => {
        setPersons(response)
      })
  }, [])
  // tapahtumakäsittelijä, nuolisyntaksi, argumenttina event, luo uuden henkilö-olion
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: Math.floor(Math.random() * 101)
    }
  
    if (!persons.some(person => person.name === newName)) {
     dbService.createPerson(personObject)
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

  const handleDeletePerson = (name, id) => {
      if (window.confirm(`Poistetaanko ${name} ?`)) {
        console.log('iffissä')
        dbService
          .deletePerson(id)
          .then(() => {
            setPersons(persons.filter(n => n.id !== id))
            setErrorMessage(`Poistettiin ${name}`)
            setNewName("")
            setNewNumber("")
          })
          .catch(error => {
            setPersons(persons.filter(n => n.name !== name));
            setErrorMessage(`Käyttäjä ${name} on jo poistettu palvelimelta.`);
          });
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    };

         

  return (
    <div>
      <h1>Phonebook</h1>
      <ErrorMessage message={errorMessage} />
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
      <Persons persons={persons} 
      ignore={ignoreCase}
      handleDeletePerson={handleDeletePerson}
      />
    </div>
  )
}

export default App;
