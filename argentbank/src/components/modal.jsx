import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { profilUser } from "../redux/profilSlice";
import { callAPI } from "../API/apiConnect";

function Modal() {
    const [modal, setModal] = useState(false);
    const token = useSelector((state) => state.user.token);
    const userProfile = useSelector((state) => state.profil);
    const [useName, setUseName] = useState(userProfile.userName);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setModal(!modal);
    }

    const userNameChange = async (e) => {
        e.preventDefault();
        try {
            const data = await callAPI ("profilePut", token, {userName: useName});
            dispatch(profilUser({data}));
        } catch (error) {
            console.log (error, "Erreur à l'appel d'API pour le changement d'Username");
        }
    }

    return (
        <>
        <button className="edit-button" onClick={toggleModal}>Edit Name</button>
        {modal && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <h3>Changement d'Username</h3>
                    {/* Tout le monde n'a pas un userName */}
                    {userProfile.userName ? (<p> Votre username actuel: {userProfile.userName}</p>) : (<p> Pas d'username actuellement</p>)}
                    {/* Faire un form pour récupérer le nouveau username */}
                    <form onSubmit={userNameChange}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Nouveau Username :</label>
                            <input 
                            type="text" 
                            id="username" 
                            value={useName}
                            onChange={(e) => setUseName(e.target.value)}
                            />
                        </div>
                        <button className="sign-in-button" id="connect" type="submit">
                            <span>Submit</span>
                        </button>
                    </form>
                    <button className="close-modal" onClick={toggleModal}> X </button>
                </div>
            </div>
        )}
        </>
    );
}

export default Modal;