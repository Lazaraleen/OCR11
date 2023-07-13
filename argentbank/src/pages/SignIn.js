import React from "react";
import { NavLink } from "react-router-dom";
// import useFetch from '../assets/useFetch';
import './style.css';



function SignIn() {  

  // *************************************** First méthode *************************************************
  
  document.querySelector("#connect").addEventListener("click", function(event){
      event.preventDefault();
      // Récupérer les données du formulaire
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      
      // Envoyer les données à l'API
      fetch("http://" + window.location.hostname + ":3001/api/v1/user/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      .then(response => response.json())
      .then(data => {
        // Empêcher l'accès à la page juste en cliquant sur "se connecter"
        // Stocker les informations utilisateur localement
        sessionStorage.setItem("token", data.token);

        // Rediriger l'utilisateur vers la page d'accueil 
        if (sessionStorage.token !== "undefined"){ window.location.href = "./index.html"; }
        else { 
          window.location.href = "./login.html"; 
          alert("Email ou mot de passe incorrect.");
        }
        
      })
      .catch(error => {
        // Afficher un message d'erreur pour l'utilisateur
        console.error("Erreur lors de la connexion:", error);
      });
  });


  // *******************************************************************************************************
 
  // *************************************** Autre méthode *************************************************
  
  // const email = document.getElementById("username").value;
  // // const password = document.getElementById("password").value;
  // const { data: quote, loading, error } = useFetch('http://localhost:3001/api/v1/user/login');
  // console.log(email);

  // *******************************************************************************************************
  
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
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
      {/* <div className="App">
      { loading && <p>{loading}</p> }
      { quote && <p>"{quote}"</p> }
      { error && <p>{error}</p> }
    </div> */}
    </main>
  );
}

export default SignIn;
