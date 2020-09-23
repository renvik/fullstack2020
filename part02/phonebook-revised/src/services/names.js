import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// palvelimen kanssa tapahtuvat kommunikointi on eristetty tähän moduuliin, mm. axiosin käyttö poistettu app.js:stä ja tehdään tässä

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPerson = newObject => {
    return axios.post(baseUrl, newObject)
}

const updatePerson = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
    
}

const deletePerson = id => {
    console.log('poistamista kutsuttu')
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => {
        return response.data
    })
}

// exportataan olio, vasemmalla olion kentät, oikealla täällä määritellyt muuttujat
export default {
    getAll: getAll,
    createPerson: createPerson,
    updatePerson: updatePerson,
    deletePerson: deletePerson
}