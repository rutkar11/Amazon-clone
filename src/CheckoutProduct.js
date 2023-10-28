import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price}) {
   const [{basket},dispatch]=useStateValue();
   const formattedprice = price.toLocaleString('en-IN');
   const removeFromBasket = () => {
    // remove item form the basket
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      })
   }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image}
        />
      
      <div className='checkoutProduct_info'>
         <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>₹</small>  
          <strong>{formattedprice}</strong> 
        </p>
        <button onClick={removeFromBasket}>Remove from cart</button>   
      </div>

    </div>
  )
}

export default CheckoutProduct