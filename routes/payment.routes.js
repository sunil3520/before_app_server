const express =require("express");
const  {checkout, paymentVerification}= require("../controller/payment.controller")
const dotenv = require("dotenv");
const { auth } = require("../middlewares/auth");
dotenv.config();

const paymentRouter = express.Router();

paymentRouter.post("/checkout",auth,checkout)

paymentRouter.post("/paymentverification",auth,paymentVerification)

paymentRouter.get("/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
); 

module.exports = {paymentRouter};
