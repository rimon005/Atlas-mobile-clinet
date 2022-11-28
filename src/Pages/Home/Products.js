import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Product from './Product'

const Products = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null)
    return (
        <div className='py-12'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-5'>
                {
                    products?.map(product => <Product setProduct={setProduct} key={product._id} product={product}></Product>)
                }
            </div>
            {
                product &&
                <BookingModal
                setProduct={setProduct}
                    product={product}
                />
            }
        </div>
    );
};

export default Products;