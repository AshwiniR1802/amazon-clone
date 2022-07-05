const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe");
('pk_test_51KbmiJSGGZ7wMQjsJeGsij0eQDTvqX9KHujE723KBAUp7TWGk29Vx4j3OdPp1D4nztK6uU9CdrHndiR89GBTYpQR00OrL7ozyk')

const app=express();
app.use(cors({origin:true}));
app.use(express.json());
app.get('/',(request,response)=>response.status(200).send('hello world'))

exports.api=functions.https.onRequest(app)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });