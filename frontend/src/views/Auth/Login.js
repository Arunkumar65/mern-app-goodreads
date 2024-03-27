import React from 'react'
import './style.css';
import { LoginContainer } from '../../component/Auth/LoginContainer';

export const Login = () => {
  return (
    <>
      <div className='login-bg'>
        <LoginContainer />
      </div>
    </>
  )
}
