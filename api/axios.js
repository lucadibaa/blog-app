import axios from 'axios'

export const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)

const token = 'abc'

const defaultReq = axios.create({
    baseURL: isLocalhost ? "http://localhost:3000/api" : "https://blog-temp-link.vercel.app/api",
    headers: {
        'Content-Type': 'application/json'
    }
})

const userReq = axios.create({
    baseURL: isLocalhost ? "http://localhost:3000/api" : "https://blog-temp-link.vercel.app/api",
    headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json'
    }
})

export { defaultReq, userReq }
