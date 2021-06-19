import axios from 'axios'


const baseURL = "http://localhost:3001/api"

export const _axios = axios.create({
    baseURL,
})