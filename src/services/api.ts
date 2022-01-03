import axios from 'axios';

export const api = axios.create({
    baseURL:  `https://dtmoney-galeite.vercel.app/api`,

})