import React from "react";
import OperationLine from "../components/operationLine";
import './style.css';

function User() {
    return (
        <main class="main bg-dark2">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <OperationLine />
        </main>
    )
}

export default User;