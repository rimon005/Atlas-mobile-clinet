import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate();

    const { user } = useContext(AuthContext)

    const imageHostKey = 'ceee1f3e86314779fb9548a12dc64888'

    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    const product = {
                        sellerName: user?.displayName,
                        email: user?.email,
                        productName: data.productName,
                        categoryName: data.categoryName,
                        condition: data.condition,
                        original: data.original,
                        resale: data.resale,
                        location: data.location,
                        img: imgData.data.url,
                        yearOfUse: data.yearOfUse

                    }
                    // console.log(product);
                    fetch('https://atlas-mobile-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(doctorData => {
                            if (doctorData.acknowledged) {
                                toast.success(`${data.productName} Product added successfully`)
                                navigate('/')
                            }
                        })
                }
            })
    }


    return (
        <div >
            <h2 className="text-4xl text-secondary text-center">Add A Product </h2>
            <div className="card rounded-none flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl mt-10">
                <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
                    <div className="form-control">
                        <input {...register("productName", { required: true })} type="text" name='productName' placeholder="productName" className="input input-bordered rounded-none my-3" />
                        {errors.productName && <p className='text-red-700'>{errors.productName?.message}</p>}
                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control w-1/2">
                            <label htmlFor="" className=' text-xl mb-2'> Category</label>
                            <select {...register("categoryName", { required: true })} className="select select-bordered mb-2 rounded-none w-full max-w-xs">
                                <option className='w-full p-3' >Apple</option>
                                <option className='w-full p-3'>Samsung</option>
                                <option className='w-full p-3'>Xiaomi</option>
                            </select>
                            {errors.categoryName && <p className='text-red-700'>{errors.categoryName?.message}</p>}
                        </div>
                        <div className="form-control w-1/2">
                            <label htmlFor="" className=' text-xl mb-2'> Condition</label>
                            <select {...register("condition", { required: true })} className="select select-bordered mb-2 rounded-none w-full max-w-xs">
                                <option className='w-full p-3' >excellent</option>
                                <option className='w-full p-3'>good</option>
                                <option className='w-full p-3'>fair</option>
                            </select>
                            {errors.condition && <p className='text-red-700'>{errors.condition?.message}</p>}
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control w-1/2">
                            <input {...register("original", { required: true })} type="text" name='original' placeholder="original price" className="input input-bordered rounded-none my-3" />

                        </div>
                        <div className="form-control w-1/2">
                            <input {...register("resale", { required: true })} type="text" name='resale' placeholder="resale price" className="input input-bordered rounded-none my-3" />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='form-control w-1/2'>
                            <input {...register("location", { required: true })} type="text" name='location' placeholder="location" className="input input-bordered rounded-none my-3" />
                        </div>
                        <div className='form-control w-1/2'>
                            <select {...register("yearOfUse", { required: true })} className="select select-bordered my-3 rounded-none w-full max-w-xs">
                                <option className='w-full p-3' > Year of use</option>
                                <option className='w-full p-3'> 1 Year</option>
                                <option className='w-full p-3'>2 Year</option>
                                <option className='w-full p-3'>3 Year</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <input type="file"
                            {...register('image', { required: true })}
                            className="file-input file-input-bordered file-input-success w-full rounded-none max-w-xs mt-2" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Add Product" className="btn btn-primary text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;