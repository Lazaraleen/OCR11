import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/userSlice';
import logo from '../assets/img/argentBankLogo.png';

function Header() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);

    const handleLogout = () => {
        // Dispatch de l'action "logout" pour supprimer le token
        dispatch(logoutUser());
    };
    
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
                {token ? (
                    <NavLink to="/" onClick={handleLogout}>
                        <i className="fa fa-user-circle"></i>
                        Log out
                    </NavLink>
                ) : (
                    <NavLink to="/signin">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>                
                )}
                </div>
            </div>
        </nav>
    )
}

export default Header;