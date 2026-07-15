import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <nav>
                <Link to="/">Home</Link> <br />
                <Link to="/about">About</Link> <br />
                <Link to="/services">Services</Link> <br />
                <Link to="/gallery">Gallery</Link> <br />
            </nav>
        </>
    );

}