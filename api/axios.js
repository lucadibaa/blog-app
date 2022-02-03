import axios from 'axios'

const token = 'abc'

const defaultReq = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        'Content-Type': 'application/json'
    }
})

const userReq = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json'
    }
})

export { defaultReq, userReq }
