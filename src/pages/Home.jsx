import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className='homePage'>
              <div className='home-content'>
                  <p className='welcome'>WELCOME TO ZOVIAN</p>
                  <h1>Discover Your Everyday Style</h1>
                  <p className='explore'>Explore fashion,jewellery and electronics selected for your everyday life</p>
                  <Link to="/products"><button className='shop-btn'>Shop Now</button></Link>
              </div>

              <br /><br />

              <div className='img-head'>
                    <h2>Shop by Category</h2>
                    <p>Find something you love</p>
              </div>

              <div className='home-img'>
                <div className='img-container'>
                    <div>
                      <Link to="/products?category=men's clothing">
                          <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80" alt="Men's fashion collection" />
                          <p>Mens</p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/products?category=women's clothing">
                          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80" alt="Women's fashion collection" />
                          <p>Womens</p>
                      </Link>
                    </div>
                    <div>
                        <Link to="/products?category=jewelery">
                            <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80" alt="Jewellery" />
                            <p>Jewelery</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/products?category=electronics">
                             <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" alt="Electronics" />
                            <p>Electronics</p>
                        </Link>
                    </div>
                  </div>
              </div>
          
        </div>
    </>
  )
}

export default Home