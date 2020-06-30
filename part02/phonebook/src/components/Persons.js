import React from 'react'
import Contact from './components/Contact'


const Persons = ({ persons, ignore, removePerson }) => {
  const [ match ] = useState(false)

  const numbersToShow = match
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const rows = () => numbersToShow.map(person => <Contact removePerson={removePerson} key={person.id} id={person.id} name={person.name} number={person.number} />)
  return(
      <div>
          {rows()}
      </div>
  )
}

export default Persons