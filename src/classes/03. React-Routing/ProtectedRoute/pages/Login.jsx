import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../AuthContext';

export default function Login() {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const { login } = useAuth();

    function handleLogin(e) {
        e.preventDefault();
        
        if(username.trim() === "admin") {
            login();
            navigate('/dashboard');
        }
        else{
            alert("Invalid Username");
        }

    }

    return (
        <>
            <h1 className="loginHeading">Login Form</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" className="formButton">Login</button>
            </form>
        </>
    );

}