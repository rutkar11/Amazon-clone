import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
   const [{basket},dispatch]=useStateValue();
  return (
    <div className="checkout">
       <div className="checkout_left">
        <img 
         className="checkout_ad"
         src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Centralheader/J23_P2_PC_BankStripe.jpg"
        />
        
        <div>
           <h2 className="checkout_title">Your shopping Basket</h2> 
         {basket.map(item=>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            />
         ))} 
        </div>
        
        </div>
        
        <div className="checkout_right">
           <Subtotal />
        </div>
    </div>
  )
}

export default Checkout