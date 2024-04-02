import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
import dayjs from 'dayjs'

const baseURL = "http://127.0.0.1:8000/"

let authtoken = localStorage.getItem('authtoken') ? JSON.parse(localStorage.getItem('authtoken')): null

const axiosInstance = axios.create({
    baseURL,
    headers:{Authorization:`Bearer${authtoken?.access}`}
});






axiosInstance.interceptors.request.use(async req =>{
    console.log('Interceptor ran')
    if(!authtoken){
        authtoken = localStorage.getItem('authtoken') ? JSON.parse(localStorage.getItem('authtoken')): null
        req.headers.Authorization = `Bearer ${authtoken?.access}`
    
    }

    const user = jwtDecode(authtoken.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    console.log("isExpired :",isExpired)
    if(!isExpired) return req


    const response = await axios.post(`${baseURL}/token/refresh/`,{
        refresh: authtoken.refresh
       })
       
    localStorage.setItem('authtoken',JSON.stringify(response.data ))
    req.headers.Authorization = `Bearer ${authtoken?.access}`

    return req


})

export default axiosInstance;