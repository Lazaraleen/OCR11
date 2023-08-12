import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { profilUser } from "../redux/profilSlice";
import { callAPI } from "../API/apiConnect";
import BankLine from "../components/bankLine";
import Modal from "../components/modal";
import './style.min.css';

function User() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const userProfile = useSelector((state) => state.profil);

    useEffect(() => {
        // récupérer les données de l'utilisateur
        const dataUser = async () => {
            try {
                const data = await callAPI ("profilePost", token, {});
                dispatch(profilUser({data}));
            } catch (error) {
                console.log (error, "Erreur à l'appel d'API");
            }
        };
        dataUser();
    });

    return (
        <main className="main bg-dark2">
        {userProfile ? (
            <div className="header">
            <h1>Welcome back<br />{userProfile.firstName} {userProfile.lastName} !</h1>
            <Modal />
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