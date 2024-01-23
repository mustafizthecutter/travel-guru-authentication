import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layout/Mainlayout";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/registration",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            }
        ]
    },
    {
        path: "/home",
        element: <Home></Home>,
    },
    {
        path: "/booking",
        element: <Contact></Contact>,
    },
]);


export default Routes;