import React ,{useState,useEffect,useContext}from 'react'

import UserContext from '../utilis/UserContext'
import DisplayNotes from './DisplayNotes'

const Home = () => {
  let {User} = useContext(UserContext) 
  console.log(User,'this is the user in home')
  return (
    <div>
      <div className='HeaderContainer'>
        <div className="HeaderWrapper">
         {User && <h1 className='HomeHeader'>Home Welcome {User.username}</h1> } 
          <DisplayNotes/>
        </div>
     
      </div>
    </div>
  )
}

export default Home
