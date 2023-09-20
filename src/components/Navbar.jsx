import React from 'react';
import Logo from '../assets/logo.svg';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { NavLinks } from '../components';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
    return (
        <nav className="">
            <div className="navbar align-element">
                <div className="navbar-start">
                    {/* DROPDOWN */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBarsStaggered className="h-6 w-6" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
                        ></ul>
                    </div>
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex align-center justify-center">
                        <NavLinks />
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* THEME SETUP */}
                    <label className="swap swap-rotate">
                        <input type="checkbox" />
                        {/* sun icon*/}
                        <BsSunFill className="swap-on h-4 w-4" />
                        {/* moon icon*/}
                        <BsMoonFill className="swap-off h-4 w-4" />
                    </label>
                    <NavLink
                        to="/cart"
                        className="btn btn-ghost btn-circle btn-md ml-4"
                    >
                        <div className="indicator">
                            <BsCart3 className="h-6 w-6" />
                            <span className="badge badge-sm badge-primary indicator-item">
                                0
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="border-[0.5px]"></div>
        </nav>
    );
};

export default Navbar;