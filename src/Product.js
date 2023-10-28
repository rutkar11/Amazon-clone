import React from 'react'
import "./Product.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price}) {
  const formattedprice = price.toLocaleString('en-IN');
  const [{basket},dispatch]=useStateValue();

  const addToBasket=()=>{
    // dispatch item into data layer
    console.log(basket);
     dispatch({
        type: "ADD_TO_BASKET",
        item: {
           id: id,
           title: title,
           image: image,
           price: price,
           
        },
     });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <CurrencyRupeeIcon className="currency-icon"/>
          
          <span className="product_price_text">{formattedprice}</span>
        </p> 
      </div>
      <img src={image} />
      
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Product