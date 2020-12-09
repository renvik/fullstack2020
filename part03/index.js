// yleistä: ctrl + c sammuttaa palvelimen, node index.js käynnistää sen
// tämä on tehty nodella ja simuloi web palvelinta
// palvelin ajetaan localhostin portissa 3001
// muutamuuta: fn + f5 -> refresh browser
// auto-indet: ctrl + shift + i
// comment: ctrl + k + c ja ctrl + k + u
// screensbot: ctrl + shift + insert
// VAIHE: tehtävä 3.6: uuden numeron lisäykseen virheiden käsittely
//jonka avulla puhelinnumerotieto on mahdollista poistaa numerotiedon yksilöivään URL:iin tehtävällä HTTP DELETE -pyynnöllä.

// importoidaan noden web server -moduuli:
const { request, response } = require('express')
const express = require('express')
const app = express()
// lisätään json-parseri (se ottaa pyynnön mukana olevan JSON-muotoisen datan, muuttaa sen Javascript-olioksi ja sijoittaa request-olion kenttään body ennen kuin routen käsittelijää kutsutaan.)
app.use(express.json())

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-64223122"
  }
]
// tehtävä 3.1: valmis
app.get('/api/persons', (request, response) => {
  response.send(persons)
})

// tehtävä 3.2: valmis
app.get('/info', (request, response) => {
    let today = new Date()
    response.send(
      `<p>Phonebook has info for ${persons.length} people  </p>` + today)
  })

// tehtävä 3.3: id:llä hakeminen, valmis
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})
// tehtävä 3.4: poistaminen tietyllä id:llä, valmis
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

// 3.5 alkaa: henkilön lisääminen
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
// 3.5 jatkuu: luodaan henkilö jos henkilön tiedot pyynnön mukana ->
  const person = {
    id: Math.floor(Math.random() * 100000),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)
  response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})