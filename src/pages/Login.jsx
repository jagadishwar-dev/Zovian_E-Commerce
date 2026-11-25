import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const {loginWithRedirect , user}=useAuth0()
  loginWithRedirect()
  return (
    <>
      
    </>
  )
}

export default Login