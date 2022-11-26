import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import Categories from "../../Pages/Home/Categories";
import Home from "../../Pages/Home/Home";

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
                element:<Categories />,
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
    }
]);
export default router;