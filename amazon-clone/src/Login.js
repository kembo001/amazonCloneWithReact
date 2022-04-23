import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  return (
<div className='login'>
    <Link to= '/'>
        <h1 className='loginLogo'><b>Amazon</b></h1>
    </Link>

    <div className='loginContainer'>
        <h1>Sign In</h1>

        <form>
            <h5>E-mail</h5>
            <input type='text' />

            <h5>Password</h5>
            <input type='password' />

            <button className='loginSignInButton'>Sign In</button>
        </form>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <button className='SignupButton'>Don't have an account? Sign up here. </button>

    </div>
</div>
  )
}

export default Login