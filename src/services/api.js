import axios from "axios"

export const api = axios.create({
  baseURL: 'https://notes-api-zj78.onrender.com'
})