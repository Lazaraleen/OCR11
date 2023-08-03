import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { login } from '../redux/userSlice';
import './style.css';

function SignIn() {  

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // Effectuer la redirection manuelle vers la page "User.js" si le token est disponible
  if (token) {
    navigate("/user");
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" id="connect" type="submit" >
            <span>Sign In</span>
          </button>
        </form>
        <div className="input-error">
          {error && <p>{error}</p>}
        </div>
      </section>
    </main>
  );
}

export default SignIn;
