import { NavLink } from "react-router-dom";


const NavBar = () => {
    const navLinks = <>
        <li> <NavLink to={'/home'}>Home</NavLink></li>
        <li> <NavLink to={'/booking'}>Contact</NavLink></li>
        <li> <NavLink to={'/registration'}>Registration</NavLink></li>
        <li> <NavLink to={'/login'}>Login</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <img className="w-[100px]" src='/../src/assets/logo.png' alt="" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;