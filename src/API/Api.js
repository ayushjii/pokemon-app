import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=15/'
})

export default api