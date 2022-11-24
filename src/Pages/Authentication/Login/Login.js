import { useForm } from "react-hook-form";
import loginImg from '../../../assets/login@4x.png'
import {Link} from 'react-router-dom'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left flex justify-center items-center">
                    <img src={loginImg} alt="" className='lg:w-1/2' />
                </div>
                <div className="card rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <h1 className='text-4xl text-accent text-center uppercase font-semibold mt-2'>Login</h1>
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="input input-bordered rounded-none my-5" />
                            {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <input {...register("password", { required: "Password Address is required" })} type="password" placeholder="password" className="input input-bordered rounded-none mb-5" />
                            {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary text-white" />
                        </div>
                        <div>
                            <p className='text-center my-3'>New to website <Link to='/register' className='text-secondary font-medium'>create an account</Link></p>
                        </div>
                        <div className="divider my-3">OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;