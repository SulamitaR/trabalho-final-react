import axios from "axios";

const Api = axios.create({
    baseURL: 'https://infinite-plateau-32838.herokuapp.com'
})

export default Api;