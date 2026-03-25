import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://69c123ff085e1a9fae402aed.mockapi.io/pizzas',
    timeout: 10000,
})

