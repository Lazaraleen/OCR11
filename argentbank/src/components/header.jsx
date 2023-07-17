import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/argentBankLogo.png';

function Header() {
    return (
        <nav className="main-nav">
            <NavLink to="/">
                <div className="main-nav-logo">
                    <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                    />
                </div>            
            </NavLink>
            <div className="center">
                <div className="main-nav-item">
                    <NavLink to="/signin">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
                <div className="main-nav-item invisible">
                    <NavLink to="/">
                        <i className="fa fa-user-circle"></i>
                        Log out
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;