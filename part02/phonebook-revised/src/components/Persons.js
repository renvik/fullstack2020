import React from 'react'
import Contact from './Contact'
// App kutsuu tätä komponenttia ja tämä komponennti suodattaa hakutulokset ja kutsuu Contact-komponenttia, 
// joka esittää hakutulokset henkilö kerrallaan

const Persons = ( props ) => {
    return (
        props.persons
        .filter(props.ignore)
          .map(person => <Contact key={person.id} person={person} handleDeletePerson={props.handleDeletePerson} />)
    )
  }

export default Persons