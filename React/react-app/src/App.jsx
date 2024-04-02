import React from 'react'
import Login from './NoteApp/Login'
import UserContextProvider from './utilis/UserContextProvider'
import Wrapper from './NoteApp/Wrapper'
import Register from './NoteApp/Register'
import Home from './NoteApp/Home'
import ReadNotes from './NoteApp/ReadNotes'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Notepage from './NoteApp/Notepage'
import PrivateRouter from './utilis/PrivateRouter'

const App = () => {
  return (
    <Router>
       <UserContextProvider>
          <Routes>
            <Route element = {<PrivateRouter/>}>
            <Route element = {<Wrapper/>}>
              <Route element ={<Home/>} path='/'> </Route>   
              <Route element ={<Notepage/>} path='/notepage'></Route>
            </Route>
            <Route element = {<ReadNotes/>} path ='/readnote'></Route>
            </Route>
          
            <Route element ={<Login/>} path = '/login'></Route>
            <Route element ={<Register/>} path='/register'> </Route>
          </Routes>
  
    </UserContextProvider>

    </Router>
    
  )
}

export default App
