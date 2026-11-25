import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../styles/Register.css'

const Register = () => {
  const {loginWithRedirect}=useAuth0()
    useEffect(()=>{
      loginWithRedirect({
        authorizationParams:{
          screen_hint:'signup'
        }
      })
    },[loginWithRedirect])

  return (
    <>
      <div className='register-page'>
        <h1>Create an Account</h1>
        <p>Redircting to registration</p>
      </div>
    </>
  )
}

export default Register