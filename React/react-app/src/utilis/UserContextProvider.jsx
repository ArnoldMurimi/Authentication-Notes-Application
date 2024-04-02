
import React,{ useEffect, useState}from 'react'
import UserContext from "./UserContext"
import { useNavigate } from 'react-router-dom'
import axiosInstance from './AxiosInstance'
import {jwtDecode} from 'jwt-decode'
import useAxios from './useAxios'
// on 4th feb fetch the data using axios from the back-end
//then use the refresh tokens to authenticate user
//log out user
//google and research on user authenitication in 
// using the GetNotesFrombackEnd here we first fetch data/ notes from the back end
//then we post the date to the front or rather update the notes array
const UserContextProvider = ({children}) => {

const [ notesArray,setNotesArray] = useState([])  
const [input,setInputValue] = useState("")
const [isEditNote,setisEditnote] =useState(false)
const [isReadNote,setisReadNote] = useState(false)
const [ReadNote,setReadNote] =useState('')

const [authtoken,setAuthtoken] = useState(localStorage.getItem('authtoken') ? JSON.parse(localStorage.getItem('authoken')): null)
const [User,setUser] = useState(null)



console.log(notesArray,'this is the notes array')
const NavigateTo = useNavigate()




useEffect(()=>{

  if(authtoken){
    setUser(jwtDecode(authtoken.access))
  }
  
},[])


// const postTodo = async (kwant) =>{
//   {
//     try{
//       await axios.post('http://127.0.0.1:8000/notes/',kwant)

//     } 
    
//     catch(error)
    
//     {console.log(error)}
//   }
// }



const addNotesToState = (input) => { 
  postTodo(input)
  if(input.trim()!=""){
    const text = {
      input,
      id: Math.floor(Math.random()* 100000)
    }
    setNotesArray(prev => [...prev,text]);
  
    setInputValue("");
    console.log(text.input,'this is the text')
   
  }
  
  

}
// const postTodo = async (itemTOBePosted ) =>{
//   {
//     try{
//       const response = await axios.post("http://127.0.0.1:8000/notes", itemTOBePosted);
//       console.log("Post created:", response.data);


//     } 
    
//     catch(error)
    
//     {console.log(error)}
//   }
// }

  



console.log(notesArray,'this is the notes ')

console.log(User,'user')
// const GetNotesFrombackEnd = async () => {
// let response = await api.get('/notes/')

// if(response.data === 200){
//   setNotesArray(response.data)
// }

// // using the GetNotesFrombackEnd here we first fetch data/ notes from the back end
// //then we post the date to the front or rather update the notes array
// }




//how to take an id of an array item in a state in react
const editNote =({id}) =>{
 setisEditnote(prev => !prev)
 console.log(id,'This is the id ')
}


const handleMessageChange = (e) =>{
setInputValue(e.target.value)
console.log('handlemessage work')
}

const logOut = ()=>{
  setAuthtoken(null)
  setUser(null)
  localStorage.removeItem('authtoken')
  NavigateTo('/login')
  console.log('log out')
    }
  

let loginUser = async (e) => {
    e.preventDefault()
    console.log('form submitted')
    let response = await fetch('http://127.0.0.1:8000/token/',{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
  body:JSON.stringify({'username': e.target.username.value,'password' : e.target.password.value})
})

let data = await response.json()
console.log(data,'this is data')
if (response.status === 200){
setAuthtoken(data)
setUser(jwtDecode(data.access))

localStorage.setItem('authtoken',JSON.stringify(data))
NavigateTo('/')
} else{
  alert('Something went wrong')
}


}
console.log(User,'this is the user')
const ReadNoteItem = (id,note) =>{
  console.log(id,'this is the read id')
   setisEditnote
   setReadNote(note)
   setisReadNote(prev => !prev)
  // setInputValue(note.id)
 
    // let new_array = array.map(element => element.id == 2 ? {...element, name : 'New Name'} : element);
 note = notesArray.map( noteElement => { 
if (noteElement.id == id)
{ return { id : id , input : note}}
       return noteElement}
       
      
    
    )
    // setInputValue(not)

  // console.log(note,'this is the  note')
  NavigateTo('/readnote')
  console.log(ReadNote,'this readnote state')
  }



// const key = "02";

//     const updated = array.map(item => {
//         if (item.id === key) {
//             return {id: key, name:"updated jaison 1", email:"updatedjaison1@yopmail.com"}
//         }
//         return item;

// const updatedArray = array.map(a => {
//    if (a.id == 2) {
//       a.name = 'New Name';
//    }
//    return a;
// });




// let new_array = array.map(element => element.id == 2 ? {...element, name : 'New Name'} : element);
//let new_array = array.map(element => element.id == 2 ? Object.assign({}, element, {name : 'New Name'}) : element);


// let array = [{id:1,name:'One'}, {id:2, name:'Two'}, {id:3, name: 'Three'}];
// let array2 = [...array]
// array2.find(a => a.id == 2).name = "Not Two";



// const array = [{id:1,name:'One'}, {id:2, name:'Two'}, {id:3, name: 'Three'}]












  const  HandleDeleteItem = (id) => {
    setNotesArray( notesArray.filter(  note => note.id !== id))
    console.log('delete works',id)
  }

//here we 
let contextData = {
notesArray:notesArray,
input:input,
sEditNote:isEditNote,
editNote:editNote,
setisReadNote:setisReadNote,
isReadNote:isReadNote,
ReadNote :ReadNote,
setReadNote:setReadNote,
setNotesArray:setNotesArray,
ReadNoteItem:ReadNoteItem,
loginUser:loginUser,
addNotesToState:addNotesToState,
handleMessageChange:handleMessageChange,
HandleDeleteItem:HandleDeleteItem,
logOut:logOut,
User:User,
setAuthtoken:setAuthtoken,
setUser:setUser,
authtoken:authtoken,

}



  return (
   <UserContext.Provider value={contextData}>
   {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider
