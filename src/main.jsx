import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import {Auth0Provider} from '@auth0/auth0-react'

let domain=import.meta.env.VITE_AUTH0_DOMAIN
let clientId=import.meta.env.VITE_AUTH0_CLIENT_ID

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    clientId={clientId}
    domain={domain}
    authorizationParams={{redirect_uri:window.location.origin}}
  >
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </Auth0Provider>
)
