import React from 'react'
import { Link } from "react-router-dom"
export const LoginContainer = () => {
    return (
        <div>
            <section className='login-container '>
                <div className='login-card'>
                    <h4 className='login-form-header'>Discover & read more</h4>
                    <Link to={'/register'}><button type='button' className='auth-btn'>Sign up with email</button></Link>
                    <div>
                        <div className='signin-text'>Already a member? <Link to={'/login'} className='signin-btn'>Sign In</Link></div>
                    </div>
                </div>
            </section >
        </div>
    )
}
