import React, {useState} from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
const [email, setEmail] = useState ('');
const [password, setPassword] = useState ('');
const signIn = e => {
    e.preventDefault()
    // Firebase
}
const register = e => {
    e.preventDefault()
    // Firebase
}

  return (
<div className='login'>
    <Link to= '/'>
        <img className='loginLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt=''/>
    </Link>

    <div className='loginContainer'>
        <h1>Sign In</h1>

        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange=
            {e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type='password' value={password}
            onChange={e => setPassword(e.target.value)}/>

            <button type='submit'
            className='loginSignInButton'>Sign In
            </button>
        </form>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <button onClick={register}
        className='SignupButton'>Don't have an account? Sign up here. 
        </button>

    </div>
</div>
  )
}

export default Login