import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"

function CheckoutProduct({image, title, price, rating}) {

  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      title: title,
    })
  }
  return (
    <div className = 'checkoutProduct'>
      <img className='checkoutProductImage' src={image}/>

      <div className ='checkoutProductInfo'>
       <p className = 'checkoutProductTitle'>{title}</p>
       <p className='checkoutProductPrice'>
        <small>$</small>
        <strong>{price}</strong>
       </p>
       <div className= 'checkoutProductRating'>
       {Array(rating)
       .fill()
       .map((_, i) => (
        <p>⭐</p>
       ))}
       </div>

       <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct