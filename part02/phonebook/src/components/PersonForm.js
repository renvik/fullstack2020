import React from 'react'

// saa parametrina metodit 2 kpl, tapahtumankäsittelijät ja oliomuuttujia
const PersonForm = ({ addName, handleNameChange, name, handleNumberChange, number }) => {
    return (
        <form onSubmit={addName}>
            <div>
                name: <input onChange={handleNameChange} value={name} />
            </div>
            <div>
                number: <input onChange={handleNumberChange} value={number} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm
