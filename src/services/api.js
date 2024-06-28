import axios from 'axios';

export const api = axios.create({
  baseURL: "https://api-rocketnotes-tin2.onrender.com"
})