import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "./authSlice";

const Register = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch()
    const registerHandle = () => {
        console.log(username, password)
        dispatch(signUpUser({username, password}))
    }
    return (
        <div>
            <div className="test1">
                <h3>Register</h3>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Username" value={username} onChange={(e)=>setusername(e.target.value)}/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button onClick={registerHandle}>Register</button>
            </div>
        </div>
    )
}

export default Register;