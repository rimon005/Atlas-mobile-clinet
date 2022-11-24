import { React, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import registerImg from '../../../assets/login@4x.png'
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user, googleSignIn, createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleRegister = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('User created Successfully')
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        
                    })
                    .catch(e => console.error(e))
            })
            .catch(e => console.error(e))

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.error(e))
    }



    return (
        <div className="hero my-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left flex justify-center items-center">
                    <img src={registerImg} alt="" className='lg:w-1/2' />
                </div>
                <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                        <h1 className='text-4xl text-accent text-center font-semibold uppercase'>Register</h1>
                        <div className="form-control">
                            <input {...register("name", { required: true })} type="text" name='name' placeholder="name" className="input input-bordered rounded-none my-3" />
                        </div>
                        <div className="form-control">
                            <input {...register("email", { required: true })} type="email" name='email' placeholder="email" className="input input-bordered rounded-none my-3" />
                        </div>
                        <div className="form-control">
                            <input {...register("password", { required: true })} type="password" name='password' placeholder="password" className="input input-bordered rounded-none mb-3" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary text-white" />
                        </div>
                        <div>
                            <p className='text-center  my-3'>Already have an account <Link to='/login' className='text-secondary font-medium'>login</Link></p>
                        </div>
                        <div className="divider my-3">OR</div>
                        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;