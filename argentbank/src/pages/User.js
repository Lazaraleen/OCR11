import React from "react";
import BankLine from "../components/bankLine";
import './style.css';

function User() {
    return (
        <main className="main bg-dark2">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <BankLine />
        </main>
    )
}

export default User;