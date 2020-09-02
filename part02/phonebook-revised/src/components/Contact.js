import React from 'react'
// komponentin tehtävä on esittää/renderöidä yhden henkilön tiedot, saa argumenttina henkilö-olion, josta destrukturoidaan nimi ja numero
// vertaa tätä k0psuttimen versioon destrukturoinnin osalta
// huom. App-komponentti ei kutsu tätä suoraan vaan Persons-komponentti kutsuu
const Contact = ({ person }) => {
    return (
        <li>{person.name} {person.number}</li>
    )
}

export default Contact