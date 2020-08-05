import axios from "axios"

const instance = axios.create({
    baseURL: 'https://react-database-71c5e.firebaseio.com/'
});

export default instance;