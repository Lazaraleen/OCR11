import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { profilUser } from "../redux/profilSlice";
import { callAPI } from "../API/apiConnect";
import BankLine from "../components/bankLine";

function User() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const userProfile = useSelector((state) => state.profil);
    const [newName, setNewName] = useState(false);

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

    const handleNewName = () => {
        setNewName(!newName);
    }


    return (
        <main className="main bg-dark2">
        {/* <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div> */}
        {userProfile ? (
            <div className="header">
            <h1>Welcome back<br />{userProfile.firstName} {userProfile.lastName}!</h1>
            <button className="edit-button" onClick={handleNewName}>Edit Name</button>
            {/* Prévoir de faire une modale pour donner un nouveau nom */}
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