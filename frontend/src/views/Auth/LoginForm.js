import React, { useState } from "react"
import '../../views/Auth/style.css';
import { Logo } from '../../component/Logo/Logo';
import { FormInputs } from '../../component/FormInputs/FormInputs';
import { Link, useNavigate } from "react-router-dom";
import { validation } from "../../utils/utils";
import { postRequest } from "../../utils/api";

export const LoginForm = () => {

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState({});

    const navigate = useNavigate();

    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const login = () => {
        const url = 'users/login';
        let data = {
            name: userDetails.email,
            password: userDetails.password
        }
        postRequest(url, data).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }

    const validateLogin = () => {
        navigate('/home', { replace: true });
        return
        if (validation(1, userDetails.email)['success'] && validation(3, userDetails.password)['success']) {
            login();
        } else {
            error.email = validation(1, userDetails.email)['message'];
            error.password = validation(3, userDetails.password)['message'];
        }
        setError({ ...error });
    }

    console.log(error)

    return (
        <>
            <div className='auth-form-container'>
                <div className='text-center'>
                    <Logo />
                    <h4 className='form-heading'>Sign in</h4>
                </div>
                <div className='auth-form'>
                    <FormInputs
                        labelProps={{
                            label: "Email",
                            className: "input-label",
                        }}
                        required={true}
                        inputProps={{
                            type: "text",
                            className: "input-text-box",
                            onChange: handleLoginInput,
                            name: "email",
                            placeholder: ""
                        }}
                        validate={error?.email}
                    />

                    <FormInputs
                        labelProps={{
                            label: "Password",
                            className: "input-label",
                        }}
                        required={true}
                        inputProps={{
                            type: "text",
                            className: "input-text-box",
                            onChange: handleLoginInput,
                            name: "password"
                        }}
                        validate={error?.password}
                    />
                    <button onClick={() => validateLogin()} className='auth-reg-button'>Sign in</button>
                    <p className='policy-text '>By signing in, you agree to the Goodreads <Link className='text-color-brown' href=''>Terms of Service</Link> and <Link className='text-color-brown' href=''>Privacy Policy </Link> </p>
                    <span className="d-flex align-item"> <input type="checkbox" /> <span className="align-lft"> Keep me signed in. <Link to={'/login'} className='text-color-brown' href=''>Details </Link> </span></span>
                    <div className="text-devider"><span>New to Goodreads?</span></div>
                    <button onClick={() => navigate('/register')} className='auth-reg-button-signup'>Sign up</button>
                </div>
            </div>
        </>
    )
}
