import React from 'react'
import Header from './Header'
import Login from './Login'
import Notepage from './Notepage'
import { Outlet } from 'react-router-dom'
const Wrapper = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
     
    </div>
  )
}

export default Wrapper
