import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/argentBankLogo.png';

function Header() {
    return (
        <nav class="main-nav">
            <NavLink to="/home" class="main-nav-logo">
                <img
                class="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
            </NavLink>
            <div>
                <NavLink to="/signin" class="main-nav-item">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    )
}

export default Header;