import React from "react";
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";
import {useHistory} from "react-router-dom";

function Subtotal() {
  const history=useHistory();
  const [{basket},dispatch]=useStateValue(); 
  const formattedprice = getBasketTotal(basket).toLocaleString('en-IN');
  // const formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "INR",
  // });

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items): <strong>₹{formattedprice}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      {/* <div>{formatter.format(0)}</div> */}
      <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
