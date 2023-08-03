import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import BankLine from "../components/bankLine";
import { fetchUserProfile } from '../redux/profilSlice';

function User() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const navigate = useNavigate();
    const userProfile = useSelector((state) => state.profil.profile);
    const isLoading = useSelector((state) => state.profil.loading);

    useEffect(() => {
        // Vérifier si le token est présent dans le state de Redux ou dans le localStorage
        // Vérifier si le token est disponible pour récupérer les données du profil
        if (token) {
            dispatch(fetchUserProfile(token));
        } else {
            // Si le token n'est pas disponible, rediriger vers la page de connexion
            navigate("/signin");
        }
    }, [dispatch, token, navigate]);

    // Afficher une indication de chargement si les données du profil sont en train d'être récupérées
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Vérifier si userProfile est null avant de lire ses propriétés
    if (!userProfile) {
        return <div>Loading...</div>;
    };

    // Si le token existe, afficher le contenu de la page
    return (
        <main className="main bg-dark2">
        {/* <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div> */}
        {userProfile ? (
            <div className="header">
            <h1>Welcome back<br />{userProfile.firstName} {userProfile.lastName}!</h1>
            <button className="edit-button">Edit Name</button>
            </div>
        ) : (
            <div className="header">
            <h1>Welcome back!</h1>
            <button className="edit-button">Edit Name</button>
            </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <BankLine />
        </main>
    );
}

export default User;