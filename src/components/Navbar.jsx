import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const {isAuthenticated , user , logout }=useAuth0()
  return (
    <>
        <nav className='navbar'>
            <Link to="/" className='icon'>ZOVIAN</Link>

            <div className='navlinks'>
                <Link to="/">HOME</Link>
                <Link to="/products">ALL PRODUCTS</Link>
            </div>

            <div className='navicons'>
              {
                isAuthenticated ? (
                  <>
                    <span>Welcome {user.name}</span>
                    <button onClick={()=>logout({
                      logoutParams:{
                        returnTo:window.location.origin
                      }
                    })}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                  </>
                )
              }
                  
                  <Link to="/wishlist" aria-label="Wishlist">♡</Link>
                  <Link to="/cart" aria-label="Shopping cart">🛒</Link>
                  <Link to="/login" aria-label="Account">👤</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar