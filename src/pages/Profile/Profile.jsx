import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <h1>Login</h1>
      <p>
        This website is underDevelopment, you wont be able to Login yet, sorry.
      </p>
      <form className='login-form'>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            type='password'
            placeholder='Enter your password'
            required
          />
        </div>
      </form>
      <button type='submit' className='login-button'>
        Enter
      </button>
    </div>
  )
}
export default Profile
