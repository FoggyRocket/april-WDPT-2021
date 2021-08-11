import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';

const baseURL = isProduction ? "wwww.poduction.com" : "http://localhost:3001/api";
export const _api = axios.create({
    baseURL,
    withCredentials:true
})