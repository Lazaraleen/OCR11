import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';



function SignIn() {  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password };
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log(userData);
      if (response.ok) {
        const user = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        const errorData = await response.json();
        dispatch({ type: 'LOGIN_FAILURE', payload: errorData.error });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: "Une erreur s'est produite lors de la connexion." });
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button className="sign-in-button" id="connect" type="submit">
            <NavLink to="/user">
                Sign In
            </NavLink>
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
