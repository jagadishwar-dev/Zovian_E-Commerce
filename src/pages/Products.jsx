import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Products.css'
import { Link, useSearchParams } from 'react-router-dom'

const Products = () => {
    const [prod_data, setProd_data] = useState([])
    const [searchParams]=useSearchParams()
    const [search, setSearch] = useState("")

    const category=searchParams.get('category')

    const fetchProductsData=()=>{
      axios.get("https://fakestoreapi.com/products")
      .then(response=>{
        console.log(response.data);
        setProd_data(response.data)
      }).catch(error=>{
        console.log(error);
      })
    }

    useEffect(()=>{
      fetchProductsData()
    },[])

    const filteredProducts=category
     ? prod_data.filter(product=>product.category === category) 
     : prod_data
     
    const searchedProducts=filteredProducts.filter((item)=>{
        return item.title.toLowerCase().includes(search.toLocaleLowerCase())
    })

  return (
    <>
      <div>
        <div className='search'>
            <input type="text" placeholder='search...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className='prod_container'>
        { 
          searchedProducts.map((product)=>(
            <div key={product.id} className='prod_contain'>
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt="" />
                  <p>{product.title}</p>
                  <p>₹{product.price}</p>
                  <p>Rating: {product.rating.rate} ★</p>
                </Link>
              </div>
          ))
        }
        </div>
      </div>  
    </>
  )
}

export default Products