import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  return (
<div className='login'>
    <Link to= '/'>
        <h1 className='loginLogo'><b>Amazon</b></h1>
    </Link>
</div>
  )
}

export default Login