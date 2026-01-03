import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) {
            alert("All fields required");
            return;
        }

        const path = login(email, password);
        if (path) navigate(path)
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder='Email' onChange = {e => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange = {e => setPassword(e.target.value)}  />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;