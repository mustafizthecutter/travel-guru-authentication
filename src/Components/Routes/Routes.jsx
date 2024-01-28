import { createBrowserRouter } from "react-router-dom";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";




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