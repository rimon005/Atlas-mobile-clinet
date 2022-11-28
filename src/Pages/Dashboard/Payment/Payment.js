import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51M6oi4JhS5lUgelV9oqkNeT657SjSO22t9qpeQql714thwsKG397MdMdVTIkgzjJJufwsT99ks481KU4QitzZcru00iP7Sqqoh');
// console.log(stripePromise);

const Payment = () => {
    const data = useLoaderData();
    console.log(data);
    const {productName , productPrice } = data
    return (
        <div>
            <h2 className='text-xl font-medium mb-2'>Payment for {productName}</h2>
            <p>Please pay <strong>${productPrice}</strong></p>
            <div className='w-96 my-12 border p-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        data={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;