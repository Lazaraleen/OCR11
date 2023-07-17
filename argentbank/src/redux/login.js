import React, {useState} from "react";
import { logout, signInUser } from "./authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [email, setusername] = useState("");
    const [password, setpassword] = useState("");

    const dispatch = useDispatch();
    const handleLogin = () => {
        console.log(email, password)
        dispatch(signInUser({email, password}))
    }
    const logouthandle = () => {
        dispatch(logout)
    }

    return (
        <div>
            <div className="test1">
                <h3>Login System</h3>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Username" value={email} onChange={(e)=>setusername(e.target.value)}/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
                <button onClick={logouthandle}>Logout</button>
            </div>
        </div>
    )
}

export default Login;