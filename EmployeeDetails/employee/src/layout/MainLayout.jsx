import React from "react";

import "../styles/MainLayout.css";
import "../styles/navbar.css";
import '../styles/sidebar.css';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <Navbar />
            <div className="main-content">{children}</div>
        </>
    );
};

export default MainLayout;