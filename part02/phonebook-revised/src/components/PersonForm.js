import React from 'react'
// komponentin tehtävä on renderöidä lomake
// funktion argumentteina metodit, joita se käyttää
// kenttien onChange-tapahtumankäsittelijät kutsuvat funktiota aina kun kentän arvo muuttuu
const PersonForm = ( {addPerson, newName, handleNameChange, newNumber, handleNewNumber }) => {
    return(
        <form onSubmit={addPerson}>
        <div>
        name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
        </form>
    )
}

export default PersonForm