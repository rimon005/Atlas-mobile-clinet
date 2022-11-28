import { useQuery } from '@tanstack/react-query';
import {React , useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    const url = `https://atlas-mobile-server.vercel.app/bookings?email=${user?.email}`
    const { data : bookings = [] , isLoading} = useQuery({
        queryKey : ['bookings'],
        queryFn : async () => {
            const res = await fetch(url ,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })
    // console.log(bookings);
    if(isLoading) {
        return <Loading />
    }
    return (
        <div className='lg:p-0 p-5'>
        <h1 className='text-3xl text-secondary font-semibold  mb-10'> My Bookings</h1>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>product</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {   bookings.length && 
                        bookings?.map((booking, i) => <tr key={booking._id}>
                            <th>{i + 1}</th>
                            <td>{booking?.userName}</td>
                            <td>{booking?.productName}</td>
                            <td>{booking?.productPrice}</td>
                            <td>
                                {
                                    booking.productPrice && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}
                                    >
                                        <button
                                            className='btn btn-primary btn-sm text-white'
                                        >Pay</button>
                                    </Link>
                                }
                                {
                                    booking.productPrice && booking.paid && <span className='text-green-500 font-bold'>Paid</span>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyBookings;