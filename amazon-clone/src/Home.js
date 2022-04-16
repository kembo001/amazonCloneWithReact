import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='homeImage' src='https://m.media-amazon.com/images/I/61K8Nn7dSNL._SX1500_.jpg' alt=''/>

            <div className='homeRow'>
                <Product/>
                {/* Product */}
            </div>
            <div className='homeRow'>
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div>
            <div className='homeRow'>
                {/* Product */}
            </div>
        </div>  
    </div>
  )
}

export default Home