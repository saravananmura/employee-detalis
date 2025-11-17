import React, { useEffect, useState } from "react";
import "../styles/ViewEmployee.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeView = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);   // <-- NEW

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/employees/${id}`);

                // Small delay to show loading animation smoothly
                setTimeout(() => {
                    if (res.data.length > 0) {
                        setEmployee(res.data[0]);
                    }
                    setLoading(false);
                }, 400); // 400ms delay
            } catch (err) {
                console.error("Error fetching employee:", err);
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id]);

    // Show loading block
    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading employee details...</p>
            </div>
        );
    }

    if (!employee) {
        return <div className="error">Employee data not found</div>;
    }

    return (
        <div className="view-employee fade-in">

            {/* Header */}
            <div className="ve-header">
                <i className="bi bi-arrow-left" onClick={() => navigate(-1)}></i>
                <h2>View Employee Details</h2>
            </div>

            {/* Tab Title */}
            <div className="ve-tab">
                <i className="bi bi-person-fill"></i> Personal Information
            </div>

            {/* Content Body */}
            <div className="ve-content">

                {/* Image */}
                <div className="ve-image-block">
                    <img
                        src={`http://localhost:5000/uploads/profile-images/${employee.profileImage}`}
                        alt="profile"
                        className="ve-profile-img"
                    />
                </div>

                {/* Details */}
                <div className="ve-details">

                    <div className="detail-row">
                        <div className="detail-col">
                            <label>Name</label>
                            <p>{employee.employee_name}</p>
                        </div>
          
                        <div className="detail-col">
                            <label>Employee ID</label>
                            <p>{employee.employee_id}</p>
                        </div>
                    </div>

                    <div className="detail-row">
                        <div className="detail-col">
                            <label>Department</label>
                            <p>{employee.department}</p>
                        </div>

                        <div className="detail-col">
                            <label>Designation</label>
                            <p>{employee.designation}</p>
                        </div>
                    </div>

                    <div className="detail-row">
                        <div className="detail-col">
                            <label>Project</label>
                            <p>{employee.project}</p>
                        </div>

                        <div className="detail-col">
                            <label>Type</label>
                            <p>{employee.type}</p>
                        </div>
                    </div>

                    <div className="detail-row">
                        <div className="detail-col">
                            <label>Status</label>
                            <p>{employee.status}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EmployeeView;
