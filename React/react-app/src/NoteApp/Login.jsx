
import React ,{useContext}  from 'react'
import UserContext from "../utilis/UserContext"


const Login = () => {
let {loginUser} = useContext(UserContext)
 
  return (
    <div className='Login-container'>
      <main className='login-form'>
        <form onSubmit={loginUser}>
          <div className='Login-form-left-side'>
           <h1>Lets get Started</h1>
           <p>Note Taking app</p>
           <div className='labels-for-form'>
             
                <label className='name-class' htmlFor='name'>Name</label>
                <input
                 type='text' 
                 name='username'
                 placeholder ="please Enter your name"
                 />
                
                <label className='name-class' htmlFor='password'> Password</label>
                <input 
                 type ='password' 
                 name='password'
                 placeholder='please Enter  password here'/>
                
        
                <input type="submit" />
            </div>
          </div>
      
        </form>
      </main>
    </div>
  )
}

export default Login
