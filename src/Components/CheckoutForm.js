import React from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Success from './Success'
import axios from "axios"
import '../Styles/Payment.css'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function CheckoutForm(props){
    const {location} = props
   
    const [success, setSuccess ] = React.useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [email, setEmail] = React.useState("")

    const [errorMessage, setErrorMessage] = React.useState("")

    // const [isProcessing , setIsProcessing] = React.useState(false)  use thiss for frontendd

  
  


    async function handleSubmit(e) {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        
    if(error){
        setErrorMessage(prevValue => error.message )
        const reponse = await axios.post("https://sp-resservation.vercel.app/api/v1/reservation", {
            email : email,
            matchNumber : location.matchNumber,
            tickets :{
                category : location.category,
                quantity : location.quantity,
                price : location.price
            },
            card:{
                number: "424242424242424",
                expirationMonth : paymentMethod.card.exp_month,
                expirationYear : paymentMethod.card.exp_year,
                cvc : "123"
            }

        })  
       console.log(reponse)
    }    

    if(!error) {
        try {
            
            const response = await axios.post("https://sp-resservation.vercel.app/api/v1/reservation", {
                email : email,
                matchNumber : location.matchNumber,
                tickets :{
                    category : 1,
                    quantity : location.quantity,
                    price : location.price
                },
                card:{
                    number: "4242424242424242",
                    expirationMonth : paymentMethod.card.exp_month,
                    expirationYear : paymentMethod.card.exp_year,
                    cvc : "123"
                }

            })
            console.log("Successful payment")
            console.log(response)
            setSuccess(old => true) 
            

        } catch (error) {
            console.log("Error", error)
        }
    }
        
    }
    return (
            <>
        {!success ?
        <div className='payment--form'>

        <form onSubmit={e=>handleSubmit(e)}>
        <h2 className='payment-price'>Total Price : {props.location.price * props.location.quantity}</h2>
            <input required style={{paddingLeft : '0.25rem', color : 'whitesmoke'}} type='text' placeholder='  Card Holder Name'/>
            <input required style={{paddingLeft : '0.25rem', color : 'whitesmoke'}} type='email' placeholder='  Email' value={email} onChange={(e)=>setEmail(prev => e.target.value)}/>
            <fieldset className="FormGroup">
                <div className="FormRow">

                    <CardElement options={CARD_OPTIONS}/>
                </div>
                </fieldset>
            
           
                <h4 className='error-message'>{errorMessage}</h4>
                
             
            <button id='submit' className='payment-button'>
                
                <span id='button-text'>
                    Pay Now
                </span>
            </button>
       
            
        </form>

        </div> : <Success/>}
            </>
        )
}