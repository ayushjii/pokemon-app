import axios from 'axios'

const api_details = axios.create({
    API_POKEMON_DETAILS : "https://pokeapi.co/api/v2/pokemon/"
})
export default api_details