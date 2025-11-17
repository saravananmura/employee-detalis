import React from "react";
import "../styles/Delete.css";

const Delete = ({ onClose, onConfirm }) => {
    return (
        <div className="delete-overlay fade-in">
            <div className="delete-popup">

                <i className="bi bi-trash3-fill delete-icon"></i>

                <p className="delete-text">Are you sure you want to Delete</p>

                <div className="delete-actions">
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                    <button className="yes-btn" onClick={onConfirm}>Yes</button>
                </div>

            </div>
        </div>
    );
};

export default Delete;
