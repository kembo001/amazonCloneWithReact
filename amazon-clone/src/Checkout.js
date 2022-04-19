import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
<div className = 'checkout'>
    <div className= 'checkoutLeft'>
     <img className = 'checkoutAD' src = 'https://i0.wp.com/digiday.com/wp-content/uploads/2018/01/amazon_money.jpg?fit=682%2C284&quality=100&strip=all&ssl=1' 
     alt=''/>
     
     <div>
        <h2 className='checkoutTitle'>Your Shopping Basket</h2>
     </div>
      </div>
    <div className = 'checkoutRight'>
       <Subtotal/>
    </div>

</div>
    
  )
} 

export default Checkout