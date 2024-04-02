import React,{useContext, useEffect} from 'react'
import UserContext from './UserContext'
import { Navigate,Outlet } from 'react-router-dom'
const PrivateRouter = () => {

  let {User} = useContext(UserContext)
  return (
    <div>
      {User ? <Outlet/> : < Navigate to='/login' />}
    </div>
  )
}

export default PrivateRouter
