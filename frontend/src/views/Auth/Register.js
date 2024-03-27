import React, { useState } from 'react'
import './style.css';
import { Logo } from '../../component/Logo/Logo';
import { FormInputs } from '../../component/FormInputs/FormInputs';
import { Link } from "react-router-dom";
import { validation } from '../../utils/utils';
import { postRequest } from '../../utils/api';
import { toast } from 'react-toastify';

export const Register = () => {

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({});

  const handleRegisterInput = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  };

  const signup = async () => {
    let url = "users/login";
    let data = {
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password
    }
    postRequest(url, data).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  const checkPasswordMatch = () => {
    if (validation(4, userDetails.password, userDetails.confirmPassword)['success']) {
      signup();
    } else {
      error.confirmPassword = validation(4, userDetails.password, userDetails.confirmPassword)['message'];
    }
  }

  const createAccount = () => {
    if (validation(0, userDetails.name)['success'] && validation(1, userDetails.email)['success'] && validation(0, userDetails.password)['success'] && validation(3, userDetails.password)['success']) {
      checkPasswordMatch();
    } else {
      error.name = validation(0, userDetails.name)['message'];
      error.email = validation(1, userDetails.email)['message'];
      error.password = validation(3, userDetails.password)['message'];
      error.confirmPassword = validation(0, userDetails.confirmPassword)['message'];
    }
    setError({ ...error });
  }

  return (
    <div className='auth-form-container'>
      <div className='text-center'>
        <Logo />
        <h4 className='form-heading'>Create Account</h4>
      </div>
      <div className='auth-form'>
        <FormInputs
          labelProps={{
            label: "Your name", className: "input-label",
          }}
          inputProps={{
            type: "text",
            className: "input-text-box",
            onChange: handleRegisterInput,
            required: true,
            name: "name",
            placeholder: "First and last name"
          }}
          validate={error?.name}
        />

        <FormInputs
          labelProps={{
            label: "Email", className: "input-label",
          }}
          inputProps={{
            type: "text",
            className: "input-text-box",
            onChange: handleRegisterInput,
            required: true,
            name: "email",
            placeholder: ""
          }}
          validate={error?.email}
        />

        <FormInputs
          labelProps={{
            label: "Password", className: "input-label",
          }}
          inputProps={{
            type: "text",
            className: "input-text-box",
            onChange: handleRegisterInput,
            required: true,
            name: "password",
            placeholder: "At least 6 characters"
          }}
          validate={error?.password}
        />

        <FormInputs
          labelProps={{
            label: "Re-enter Password", className: "input-label",
          }}
          inputProps={{
            type: "text",
            className: "input-text-box",
            onChange: handleRegisterInput,
            required: true,
            name: "confirmPassword"
          }}
          validate={error?.confirmPassword}
        />
        <button onClick={() => createAccount()} className='auth-reg-button'>Create account</button>
        <p className='policy-text '>By creating an account, you agree to the Goodreads <a className='text-color-brown' href=''>Terms of Service</a> and <a className='text-color-brown' href=''>Privacy Policy </a> </p>
        <p>Already have an account? <Link to={'/login'} className='text-color-brown' href=''>Sign in</Link> </p>
      </div>
    </div>
  )
}
