import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Shared/Loading/Loading';

const AllAdmin = () => {
    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=admin');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className="text-3xl text-secondary"> All Admin</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>Admin</td>
                                <td><button className='btn btn-xs  text-white btn-error rounded-none'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAdmin;