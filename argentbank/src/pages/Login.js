import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { setToken, setError } from '../redux/userSlice'; // Importer les actions nécessaires
import axios from 'axios';
import './style.css';

function SignIn() {  

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', {
          email,
          password,
        });
        const token = response.data.body.token;
        // Mettre le token dans le localStorage
        localStorage.setItem('token', token);
        // Dispatch l'action setToken avec le token récupéré pour mettre à jour le state
        dispatch(setToken(token));
        // Effectuer la redirection manuelle vers la page "User.js" après la connexion réussie
        navigate("/user");
      } catch (error) {
        console.error('Erreur lors de la connexion :', error.message);
        // Dispatch l'action setError avec le message d'erreur approprié pour mettre à jour le state
        dispatch(setError("Erreur de connexion : email ou mot de passe incorrect."));
      }
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
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
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
