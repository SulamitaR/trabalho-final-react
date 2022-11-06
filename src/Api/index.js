import axios from "axios";

const Api = axios.create({
    baseURL: 'https://6366f65b79b0914b75d9a2c7.mockapi.io/'
})

export default Api;