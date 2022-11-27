import { React, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/Authprovider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayouts = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>My Bookings</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/alladmin'>All Admin</Link></li>
                                <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoardLayouts;