import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/argentBankLogo.png';

function Header() {
    return (
        <nav class="main-nav">
            <NavLink to="/">
                <div class="main-nav-logo">
                    <img
                    class="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                    />
                </div>            
            </NavLink>
            <div class="center">
                <div class="main-nav-item">
                    <NavLink to="/signin">
                        <i class="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
                <div class="main-nav-item invisible">
                    <NavLink to="/">
                        <i class="fa fa-user-circle"></i>
                        Log out
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;