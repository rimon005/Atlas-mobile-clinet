import { React } from 'react';
import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-semibold text-cyan-500 my-6'>Products Categories</h2>
            <div className='grid lg:grid-cols-3 p-5 gap-6'>
                <div className="card  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title mx-auto">Apple</h2>
                        <div className="card-actions justify-center">
                            <Link to={`/products/${'Apple'}`} className="btn btn-primary">Category Products</Link>
                        </div>
                    </div>
                </div>
                <div className="card  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Samsung</h2>
                        <div className="card-actions justify-center">
                            <Link to={`/products/${'Samsung'}`} className="btn btn-primary">Category Products</Link>
                        </div>
                    </div>
                </div>
                <div className="card  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title mx-auto">Xiaomi</h2>
                        <div className="card-actions justify-center">
                            <Link to={`/products/${'Xiaomi'}`} className="btn btn-primary">Category Products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;