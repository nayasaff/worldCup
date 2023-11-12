import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';
import Nav from './Nav';
import '../Styles/Payment.css'
import { useLocation } from 'react-router-dom';
const PUBLIC_KEY ="pk_test_51MCkk1KX9xs3X0DNeF0UZyUYxb34X3X3SPHptN90YHapCckgqkS2PpfUi6dltypZsJYnU5ohvKkExO3NjzlBns2f00FW8mPG44"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


function Payment() {
  const location = useLocation()
  


  return (
    <>
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm location= {location.state}/>
    </Elements >
    </>
  )
};

export default Payment;