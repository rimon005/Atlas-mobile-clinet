import { React, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/AuthProvider';
import Products from './Products';

const Categories = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    const handleLoadCategoryItem = id => {
        if (user) {
            fetch(`http://localhost:5000/products?categoryId=${id}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                })
        }
        else{
            navigate('/login')
        }
    }
    return (
        <div>
            <h2 className='text-4xl text-center font-semibold text-cyan-500 my-6'>Products Categories</h2>
            <div className='grid lg:grid-cols-3 p-5 gap-6'>
                <div className="card  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title mx-auto">Apple</h2>
                        <div className="card-actions justify-center">
                            <Link to={`/products/${'01'}`} onClick={() => handleLoadCategoryItem('01')} className="btn btn-primary">Category Products</Link>
                        </div>
                    </div>
                </div>
                <div className="card  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Samsung</h2>
                        <div className="card-actions justify-center">
                            <Link to={`/products/${'02'}`} onClick={() => handleLoadCategoryItem('02')} className="btn btn-primary">Category Products</Link>
                        </div>
                    </div>
                </div>
                <div className="card  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title mx-auto">Xiaomi</h2>
                        <div className="card-actions justify-center">
                            <Link to={`/products/${'03'}`} onClick={() => handleLoadCategoryItem('03')} className="btn btn-primary">Category Products</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Products
                products={products}
            />
        </div>
    );
};

export default Categories;