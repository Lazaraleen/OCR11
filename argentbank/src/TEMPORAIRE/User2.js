import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { loadUserProfileSuccess, loadUserProfileFailure } from "../redux/userSlice";
import { loadUserProfile } from "../redux/userSlice";
import BankLine from "../components/bankLine";
import './style.css';

function User() {
    const dispatch = useDispatch();
    // Obtenir les informations de l'utilisateur depuis l'état Redux
    // const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);

    // useEffect(() => {
    //     // Appel de l'API pour récupérer le profil de l'utilisateur
    //     const fetchUserProfile = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}` // Ajoutez le token dans l'en-tête de la requête
    //         }
    //         });

    //         if (!response.ok) {
    //         throw new Error("Failed to fetch user profile");
    //         }

    //         const data = await response.json();
    //         dispatch(loadUserProfileSuccess(data.body));
    //         console.log(data.body);
    //     } catch (error) {
    //         dispatch(loadUserProfileFailure(error.message));
    //     }
    //     };

    //     fetchUserProfile();
    // }, [dispatch]);

    useEffect(() => {
        // Vérifier si l'utilisateur est connecté (le token est disponible)
        if (token) {
            // Appeler l'API pour récupérer le profil de l'utilisateur
            dispatch(loadUserProfile());
        }
    }, [dispatch, token]);

    return (
        <main className="main bg-dark2">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                {/* {user && user.firstName && (
                <h1>
                    Welcome back<br /> {user.firstName} {user.lastName}!
                </h1>
                )} */}
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <BankLine />
        </main>
    )
}

export default User;