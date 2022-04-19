import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {

  const[{basket}, dispatch] = useStateValue();

  const addtoBasket= () => {
    // dispatch the item into the data layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (

    <div className='product'>
        <div className='productInfo'>
            <p>{title}</p>
            <p className='productPrice'> <small>$</small> 
            <strong>{price}</strong>
            </p>
            <div className='productRating'>
                {Array(rating)
                .fill()
                .map((_, i) =>(
                    <p>⭐</p>
                ))}
            </div>
        </div>

        <img src={image}></img>

        <button onClick={addtoBasket}>Add to Basket</button>
    </div>
  )
}

export default Product