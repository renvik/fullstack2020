import React from 'react'
// komponentin tehtävä on esittää/renderöidä yhden henkilön tiedot, saa argumenttina henkilö-olion, josta destrukturoidaan nimi ja numero
// huom. App-komponentti ei kutsu tätä suoraan vaan Persons-komponentti kutsuu
const Contact = ( props ) => {
    return (
        <li>{props.person.name} {props.person.number} <button onClick={event => props.handleDeletePerson(props.person.name, props.person.id)}>delete</button></li>
    )
}

export default Contact