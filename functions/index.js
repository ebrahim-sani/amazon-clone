const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51Hz156GBHNk9fvjT3IMUsavM3dPeEpT65b7OClQg9l3DfK1N8mQ5FpE1W3cc0mkZjDOKmcR59kTz41ofFFqYBQVX00SIIiKaex"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listener
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-11c85/us-central1/api
