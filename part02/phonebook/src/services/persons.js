import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'
// tämä eroaa myös sisällöltään!!

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }
  
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }
  
  // Moduuli palauttaa olion, jonka kenttinä (getAll, create ja update) on kolme muistiinpanojen käsittelyä hoitavaa funktiota. Funktiot palauttavat suoraan axiosin metodien palauttaman promisen.
  export default { 
    getAll: getAll, 
    create: create, 
    update: update 
  }