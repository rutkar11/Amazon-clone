const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51O4hm0SBWHWsGJ4tLxPJCljuUek4N9tHyEr0bKUBK1TPLixCXwMulnQn1pY64JpbkQr9lAUR2KilXG9U1L81EOKL00DMsIxWBx'); // Replace with your actual Stripe secret key

// API

// App config
const app = express();

// Middlewares
app.use(cors({
    origin: true // Allow requests from any origin
    
  }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create',async(request,response)=>{
    const total=request.query.total;
    console.log('Payment Request Recieved for this amount>> ', total);
     try{

         const paymentIntent= await stripe.paymentIntents.create({
             amount: total, // subunits of currency
             currency: "usd",
            });
            
            // ok created
            response.status(200).send({
                clientSecret: paymentIntent.client_secret,
            });
        }
        catch(error){
            console.log(error);
            response.send(500);
        }

});

// Define the HTTP function
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5001/clone-5bc70/us-central1/api
















// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
/*
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// // const {onRequest} = require("firebase-functions/v2/https");
// // const logger = require("firebase-functions/logger");
// const functions=require('firebase-functions');
// const express=require("express");
// const cors=require("cors");
// const stripe=require("stripe")('pk_test_51O4hm0SBWHWsGJ4t02V5OxRDG1YKnjdTGVSSpDjP9aeVQmEt4vVAvoVvGu6mzsmLKKmZ6TVITu7Fn7Y6UmH2gqqn00dFgS9YF1')

// // API

// // App config
// const app=express();

// // Middlewares
// app.use(cors({origin: true}));
// app.use(express.json());

// // API routes
// app.get('/',(request,response)=>response.status(200).send
// ('hello world'))

// // Listen command
// express.api=functions.https.onRequest(app)