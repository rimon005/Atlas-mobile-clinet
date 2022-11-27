import React from 'react';

const Product = ({product , setProduct}) => {
    // console.log(product);
    const { img, categoryName, description, location, condition, resale, original, yearOfUse, sellerName, productName, _id } = product
    return (
        <div className="card card-compact rounded-none shadow-xl p-5">
            <figure><img src={img} alt="Shoes" className='w-96 h-72' /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p className='font-medium'>
                    <span className='mr-3'>Original Price: ${original}</span> |
                    <span className='ml-3'>Resale Price: ${resale}</span>
                </p>
                <p>
                    <span className='font-semibold mr-3' style={{ color: '#00A4CF' }}>Location: {location} </span> |
                    <span className='font-medium ml-3'>Year Of Use : {yearOfUse}</span>
                </p>
                <p className='font-semibold'>Condition: <span style={{ color: '#00A4CF' }}>{condition}</span></p>
                <p className='text-xl font-medium'>Seller's name: {sellerName}</p>
                <div className="card-actions justify-end">
                    <label 
                    onClick={() => setProduct(product)}
                    htmlFor="booking-modal" className="btn btn-accent btn-sm text-white rounded-none">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;