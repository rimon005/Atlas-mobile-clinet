import { createBrowserRouter } from "react-router-dom";
import DashBoardLayouts from "../../Layouts/DashboardLayouts";
import Main from "../../Layouts/Main";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import AllAdmin from "../../Pages/Dashboard/AllAdmin/AllAdmin";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyBookings from "../../Pages/Dashboard/MyBookings/MyBookings";
import Categories from "../../Pages/Home/Categories";
import Home from "../../Pages/Home/Home";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AdminRoute from '../AdminRoute/AdminRoute'
import Payment from "../../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/products/:id' , 
                element:<PrivetRoute><Categories /></PrivetRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/products?categoryId=${params.id}`)
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            }
        ]
    },
    {
        path:'/dashboard' , 
        element: <PrivetRoute><DashBoardLayouts /></PrivetRoute>,
        children: [
            {
                path:'/dashboard',
                element: <MyBookings />
            },
            {
                path:'/dashboard/alladmin',
                element: <AdminRoute><AllAdmin /></AdminRoute>
            },
            {
                path:'/dashboard/allbuyer' , 
                element:<AdminRoute><AllBuyer /></AdminRoute>
            },
            {
                path:'/dashboard/allseller',
                element: <AdminRoute><AllSeller /></AdminRoute>
            }, 
            {
                path:'/dashboard/payment/:id',
                element:<Payment />,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
]);
export default router;