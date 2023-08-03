import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import logo from '../assets/img/argentBankLogo.png';

function Header() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);

    const handleLogout = () => {
        // Dispatch de l'action "logout" pour supprimer le token
        dispatch(logout());
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
                    // Afficher "Log Out" si l'utilisateur est connecté
                    <NavLink to="/" onClick={handleLogout}>
                        <i className="fa fa-user-circle"></i>
                        Log out
                    </NavLink>
                ) : (
                    // Sinon, afficher "Sign In" si l'utilisateur n'est pas connecté
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