import axios from 'axios';

const api = axios.create({
    baseURL: 'https://172.18.0.128:3333',
});

export { api };