import { useAuth } from "../AuthContext"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <>
            <h1>Welcome to Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    );

}