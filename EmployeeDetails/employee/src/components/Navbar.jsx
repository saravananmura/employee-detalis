import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div></div>

            <div className="nav-right">
                <i className="bi bi-gear-fill"></i>
                <i className="bi bi-bell-fill"></i>

                <img
                    src="https://i.pravatar.cc/300"
                    alt="profile"
                    className="profile-img"
                />
            </div>
        </div>
    );
};

export default Navbar;
