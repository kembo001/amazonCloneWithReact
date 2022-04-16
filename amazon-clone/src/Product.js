import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='productInfo'>
            <p>The Lean Startup</p>
            <p className='productPrice'> <small>$</small> <strong>Price</strong></p>
            
        </div>
    </div>
  )
}

export default Product