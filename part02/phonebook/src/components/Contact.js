import React from 'react'

const Contact  = ({ person, removePerson }) => {

    return (
      <p>{person.name} {person.number} <button onClick={() => {removePerson(person)}} >delete</button></p>
    )
  }
  export default Contact