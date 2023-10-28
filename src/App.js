import React,{useEffect} from 'react';
import './App.css';
import Header from './header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Checkout';
import Login from './login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import Orders from './Orders';

const promise=loadStripe(
  "pk_test_51O4hm0SBWHWsGJ4t02V5OxRDG1YKnjdTGVSSpDjP9aeVQmEt4vVAvoVvGu6mzsmLKKmZ6TVITu7Fn7Y6UmH2gqqn00dFgS9YF1"
  );

function App() {
 const [{basket, user},dispatch]=useStateValue();

  useEffect(()=>{
    // will only run once when app comp. loads

   auth.onAuthStateChanged(authUser=>{
    // console.log('THE USER IS >>>',authUser);
    if(authUser){
      // the user just logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    }
    else{
       // the user was logged out
       dispatch({
        type: 'SET_USER',
        user: null
       })
    }

   })
  },[])

  return (
    <Router>
      <div className="App">
       <Switch>
          <Route path="/orders">
           <Header />
           {/* <Orders />  */}
          </Route>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
           </Route>
           <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
            
           </Route>
           <Route path="/">
            <Header /> 
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;