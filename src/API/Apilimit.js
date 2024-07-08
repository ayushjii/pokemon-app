import axios from 'axios'

const API_Limit = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=25/'
})

export default API_Limit