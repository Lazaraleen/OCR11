import { useState, useEffect } from 'react';
import axios from "axios";

const baseURL = "http://localhost:3001/api/v1/user";
// Modifier l'adresse pour la mettre à jour... ne prendre que la base commune à tous les appels

function CallAPI() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/login`).then((response) => {
        // XXX correspond à la suite de l'adresse pour avoir celle de connexion
        setUser(response.data);
    });
  }, []);

  if (!user) return null;

//   Récupérer les infos tapées par l'utilisateur pour tenter de se connecter

// Comparer ces données avec les données de connection de l'API

// SI le résultat est identique, se connecter à la page User... dans le return

  return (
    <div>
      <h1>{user.status}</h1>
      <p>{user.token}</p>
      {/* Ou autre ce qui est dans le return est juste à titre d'exemple pour l'instant */}
    </div>
  );
}

export default CallAPI;