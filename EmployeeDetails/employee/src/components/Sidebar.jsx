import React, { useState } from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
    const [active, setActive] = useState("Employee");

    const menu = [
        { name: "Dashboard", icon: "bi bi-grid" },
        { name: "Employee", icon: "bi bi-people-fill" },
        { name: "Calendar", icon: "bi bi-calendar2-week" },
        { name: "Messages", icon: "bi bi-chat-left-text" },
    ];

    return (
        <div className="sidebar">
            <h2 className="logo">RS–TECH</h2>

            <ul className="menu-list">
                {menu.map((item) => (
                    <li
                        key={item.name}
                        className={`menu-item ${active === item.name ? "active" : ""}`}
                        onClick={() => setActive(item.name)}
                    >
                        <i className={item.icon}></i>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
