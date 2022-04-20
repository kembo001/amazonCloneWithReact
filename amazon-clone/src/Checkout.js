import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';


function Checkout() {

  const [{basket}, dispatch] = useStateValue();
  return (
<div className = 'checkout'>
    <div className= 'checkoutLeft'>
     <img className = 'checkoutAD' src = 'https://i0.wp.com/digiday.com/wp-content/uploads/2018/01/amazon_money.jpg?fit=682%2C284&quality=100&strip=all&ssl=1' 
     alt=''/>
     
     <div>
        <h2 className='checkoutTitle'>Your Shopping Basket</h2>

        {basket.map(item => (
          <CheckoutProduct 
          title ={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating} />
        ))}
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}

     </div>
      </div>
    <div className = 'checkoutRight'>
       <Subtotal/>
    </div>

</div>
    
  )
} 

export default Checkout