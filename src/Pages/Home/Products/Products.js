import { React, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import Product from './Product';
import BookingModal from './BookingModal';

const Products = () => {
    const [product, setProduct] = useState(null)
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data
        }
    })
    // console.log(products);
    return (
        <div className='py-12'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-5'>
                {
                    products.map(product => <Product setProduct={setProduct} key={product._id} product={product}></Product>)
                }
            </div>
            {
                product && 
                <BookingModal
            product={product}
            />
            }
            
        </div>
    );
};

export default Products;