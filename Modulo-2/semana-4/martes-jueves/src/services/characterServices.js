import axios from 'axios'

const baseUrl = "https://rickandmortyapi.com/api"

//Con esto le coloco por defecto la ruta del api al que vamos a consultar

const _axios = axios.create({
    baseURL:baseUrl
})
/**
 * Esta funcion es para solicitar todos los personajes al api
 */
export const getAllCharacters=()=>{
    return _axios.get('/character')
}