import { React, useState , useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ data }) => {
    const { userName, email, productPrice , _id } = data;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [success , setSuccess] = useState('');
    const [clientSecret , setClientSecret] = useState('')
    const [transactionId , setTransactionId] = useState('')


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({ productPrice }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [productPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if(card === null) {
            return;
        }

        const {error } = stripe.createPaymentMethod({
            type : "card",
            card
        })

        if(error){
            setCardError(error.message)
        }

        else{
            setCardError('')
        }
        setSuccess('')
        setProcessing(true);

        const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card :card,
                    billing_details : {
                        name: userName,
                        email : email
                    }
                }
            }
        );
        if(confirmError){
            setCardError(confirmError.message);
            return
        }
        if(paymentIntent.status === 'succeeded'){
            console.log(paymentIntent);
            const payment = {
                productPrice ,
                bookingId : _id,
                email ,
                transactionId : paymentIntent.id
            }

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers : {
                    'content-type' : 'application/json',
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setSuccess('Congrats! Your payment complete')
                    setTransactionId(paymentIntent.id)
                }
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className='mt-3 text-red-600'>{cardError}</p>
                <button className='btn btn-xs btn-secondary mt-4 text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
          success && <div>
            <p className="text-green-600 font-bold">{success}</p>
            <p>Your TransactionId <span className='fond-bold'>{transactionId}</span></p>
          </div>
        }
        </>
    );
};

export default CheckoutForm;