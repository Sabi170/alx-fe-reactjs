import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const navStyle = {
        padding: "10px",
        background: "#333",
        backgroundColor: "#f6f6f6",
        color: "#333",
        display: "flex",
        justifyContent: "space-around",
    };

const linkStyle = { color: "#fff", textDecoration: "none" };

return  (
    <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
);
}

export default Navbar;

