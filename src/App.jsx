import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

function App() {

  const routes=createBrowserRouter(
    [
      {
        path:'/',
        element:<Layout/>,
        children:[
          {
            index:true,
            element:<> <Home/> </>
          },
          {
            path:'/products',
            element:<> <Products/> </>
          },
          {
            path:'/products/:id',
            element:<> <ProductDetails/> </>
          },
          {
            path:'/cart',
            element: <> <Cart/> </>
          },
          {
            path:'/wishlist',
            element:<> <Wishlist/> </>
          },
          {
            path:'/login',
            element:<> <Login/> </>
          },
          {
            path:'/register',
            element:<> <Register/> </>
          },
          {
            path:'/checkout',
            element:<> <Checkout/> </>
          },
          {
            path:'*',
            element:<> <NotFound/> </>
          }
        ]
      } 
    ]
  )

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App