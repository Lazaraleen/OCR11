import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserProfileSuccess, loadUserProfileFailure } from "../redux/userSlice";
import BankLine from "../components/bankLine";
import './style.css';

function User() {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.user.userName); // Utilise le champ userName du state
    console.log({userName});

    useEffect(() => {
        // Appel de l'API pour récupérer le profil de l'utilisateur
        const fetchUserProfile = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Ajoutez le token dans l'en-tête de la requête
            }
            });

            if (!response.ok) {
            throw new Error("Failed to fetch user profile");
            }

            const data = await response.json();
            dispatch(loadUserProfileSuccess(data.body));
        } catch (error) {
            dispatch(loadUserProfileFailure(error.message));
        }
        };

        fetchUserProfile();
    }, [dispatch]);

    return (
        <main className="main bg-dark2">
            <div className="header">
                {/* <h1>Welcome back<br />Tony Jarvis!</h1> */}
                {userName && (
                <h1>Welcome back<br />{`${userName}`}!</h1>
                )}
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <BankLine />
        </main>
    )
}

export default User;