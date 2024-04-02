import React ,{useContext, useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utilis/UserContext'
const Header = () => {
  let {logout,User} = useContext(UserContext)
  return (
    <nav className='Nav-Container'>
      <div className='Right-side-Nav-Wrapper'>
       <Link to='/'> <h2>Note App </h2> </Link>  
      { User ? (<button onClick={logout}>Log Out</button>):(<li>Login Please</li>)} 
      </div>
      <div className='Left-side-nav-wrapper'>
        <ul>
         <li><Link to ='/login'>Login</Link></li> 
         <li> <Link to= '/'>Home</Link></li> 
         <li>  <Link to ='/register'>Register</Link></li>
         
         <li> <Link to='/notepage'>Add Note</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
