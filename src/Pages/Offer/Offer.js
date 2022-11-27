import React from 'react';
import img from '../../assets/iphone-14.webp'

const Offer = () => {
    return (
        <div className='text-center my-10'>
            <h1 className='lg:text-4xl font-serif font-bold'>Upgrading to the new <span style={{ color: '#e7511e' }}>iPhone 14?</span></h1>
            <h1 className='lg:text-4xl font-serif font-bold mt-5 mb-16' style={{ color: '#e7511e' }}>Sell your old phone here for the most cash!</h1>
            <div className='flex justify-center items-center'>
                <img className='lg:w-2/4' src={img} alt="" />
            </div>
            <h1 className='my-5 font-medium font-serif'>TIP: Values of old models typically drop when new model released <br /> -so lock your price in today for up to 30 days!</h1>
        </div>
    );
};

export default Offer;