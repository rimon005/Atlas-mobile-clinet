import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=Seller');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading />
    }

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })

    }

    return (
        <div>
            <h2 className="text-3xl text-secondary"> All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Make Admin</th>
                            <th>Make Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{<button onClick={() => handleMakeAdmin(user?._id)} className='btn btn-xs  text-white btn-secondary rounded-none'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs  text-white btn-error rounded-none'>Make Verify</button></td>
                                <td><button className='btn btn-xs  text-white btn-error rounded-none'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;