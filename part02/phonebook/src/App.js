import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'
import ErrorNotification from './components/ErrorNotification'
import '.index.css'

const App = () => {
    // state hooks
    const [persons, setPersons] = useState([''])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [ filter, setFilter ] = useState('')
    const [ statusMessage, setStatusMessage ] = useState(null)
    const [ statusColor, setStatusColor ] = useState('done')

    useEffect(() => {
        console.log('in Effect hook')
        personsService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, [])


    // addPerson-metodi huolehtii uuden nimen ja numeron lisäämisestä
    const addPerson = (event) => {
        event.preventDefault()
        console.log('Lisätään nimi: ', newName)
        // person-objektin määrittely
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (!persons.some(person => person.name === newName)) {
            console.log('Luotu: ', personObject)
            personsService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')

                    setStatuscolor('done')
                    setStatusMessage(`Added ${newName}`)
                    setTimeout(() => {
                        setStatusMessage(null)
                    }, 5000)
                })

        } else {
            let replace = window.confirm(`${newName} is already added to phonebook.
      replace the old number with a new one?`)

            if (replace) {
                const person = persons.find(n => n.name === newName)
                const changedPerson = { ...person, number: newNumber }

                console.log(`changedNumber:`, changedPerson)

                personsService
                    .update(changedPerson.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(n => n.id !== changedPerson.id ? n : returnedPerson))
                    }).catch(error => {
                        console.log(error)
                        setStatusColor('error')
                        setStatusMessage(`${newName} was already removed from server`)
                        setTimeout(() => {
                            setStatusMessage(null)
                        }, 5000)
                        setPersons(persons.filter(n => n.id !== changedPerson.id))

                    })
                setStatusColor('done')
                setStatusMessage(`Changed ${newName} number to ${newNumber}`)
                setTimeout(() => {
                    setStatusMessage(null)
                }, 5000)
                setNewName('')
                setNewNumber('')
            }
        }
    }
    const removePerson = (id) => {
        const personObject = persons.find(n => n.id === id)
        let rmv = window.confirm(`Remove ${personObject.name} ?`)
        if(rmv) {
          console.log(`Pääsi tarkistuksesta`)
          personsService
          .remove(id, personObject)
          .then(() => {
             console.log(`Poistettu id: ${id}`)
             personsService.getAll()
              .then(newPersons => {
                setStatusColor('done')
                setStatusMessage(`Succesfully removed ${personObject.name} from phonebook.`)
                setTimeout(() => {
                setStatusMessage(null)
                 }, 5000)
                 setPersons(newPersons.map(person => person.id !== id ? person: newPersons))
                 console.log(`Haettu uusi lista`, newPersons)
              })
          }).catch(error => {
            console.log(`Handle removal error`)
            setStatusColor('error')
            setStatusMessage(`Information ${personObject.name} has already been removed from server`)
            setTimeout(() => {
              setStatusMessage(null)
            }, 5000)
            setPersons(persons.filter(n => n.id !== persons.id))
          })
        }    
      }
    // event handlers:
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleFilter = (event) => {
        setFilter(event.target.value)
    }
    // function checks if person's name exists already
    const personExists = (persons, name) => {
        return (persons.map(person => person.name).includes(name))
    }
    // parametrina personObject
    const ignoreCase = (personObject) => (
        personObject.name.toUpperCase()
            .includes(filter.toUpperCase())
    )

    if (personExists(persons, newName)) {
        window.alert(`${newName} is already added to phonebook`)
    }
    const Status = ({ message }) => {
        if (message === null) {
          return null
        }
    
        return(
          <div className={statusColor}>
            {message}
          </div>
        )
      }
    

    return (
        <div>
            <h2>Phonebook</h2>
            <Status message={statusMessage} />
            <Filter filter={filter} handleFilter={handleFilter} />

            <h3>Add a new</h3>
            <PersonForm
                handleNameChange={handleNameChange}
                name={newName}
                handleNumberChange={handleNumberChange}
                number={newNumber}
                addPerson={addPerson}
            />
            <h2>Numbers</h2>
            <Persons 
            person={persons} 
            filter={filter}
            ignore={ignoreCase} 
            removePerson={removePerson} />
            <ErrorNotification message={errorMessage}/>

            
        </div>
    )
}


export default App


