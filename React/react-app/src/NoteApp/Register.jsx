import React from 'react'

const Register = () => {
  return (
    <div className='Register-Container'>
     
      <h1>Register</h1>
      <input
      type='text'
      placeholder='Enter Username'
      name= 'username'
      />
      <input 
      type='email'
      placeholder='please Enter'
      name='email'
      />
      <input
      type='password'
      placeholder='Enter password'
      name="password"
      />
      <input type='submit'/>
    </div>
  )
}

export default Register
