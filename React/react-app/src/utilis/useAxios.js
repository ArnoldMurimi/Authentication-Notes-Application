import axios from "axios";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";

import UserContext from "./UserContext";
import dayjs from "dayjs";


const baseURL = "http://127.0.0.1:8000"


const useAxios = () => {
   const {authtoken,setUser ,setAuthtoken} = useContext(UserContext)

  
   const axiosInstance = axios.create({
    baseURL,
    headers:{Authorization : `Bearer ${authtoken?.access}`}
    });
    

axiosInstance.interceptors.request.use(async req =>{

      if(!authtoken){
      authtoken = localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null
      req.headers.Authorization = `Bearer ${authtoken?.access}`
      return req
      }
        // <----!End Here !---->
const user = jwtDecode(authtoken.access)
const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
console.log("isExpired :",isExpired)
if(!isExpired) return req
    
const response = await axios.post(`${baseURL}token/refresh/`,{
 refresh:  authtoken.refresh
})

localStorage.setItem('authtoken',JSON.stringify(response.data ))
       
       
setAuthtoken(response.data)
setUser(jwtDecode(response.data.access))


 req.headers.Authorization = `Bearer ${authtoken?.access}`

return req
    
    
 })
    
    
    return axiosInstance
}

export default useAxios;