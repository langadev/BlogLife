import axios from 'axios';
const loginFecth = axios.create({
    baseURL:'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem("token") ?? ""}`
    }
})
export default  loginFecth
