import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
<div className = 'checkout'>
    <div className= 'checkoutLeft'>
     {/* <img className = 'checkoutAD' src = 'https://m.media-amazon.com/images/I/61Ppgg4eycL.jpg' 
     alt=''/> */}
     
     <div>
        <h2 className='checkoutTitle'>Your Shopping Basket</h2>
     </div>
      </div>
    <div className = 'checkoutRight'>
       <h2>The Subtotal</h2>
    </div>

</div>
    
  )
} 

export default Checkout