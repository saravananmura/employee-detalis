// import React, { useEffect, useState } from "react";
// import "../styles/UpdateEmployee.css";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const UpdateEmployee = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [profileImage, setProfileImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);

//   const [loading, setLoading] = useState(true);

//   const [formData, setFormData] = useState({
//     employee_name: "",
//     employee_id: "",
//     department: "",
//     designation: "",
//     project: "",
//     type: "",
//     status: "",
//   });

//   // Load employee details
//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/employees/${id}`);

//         if (res.data.length > 0) {
//           const emp = res.data[0];

//           setFormData({
//             employee_name: emp.employee_name,
//             employee_id: emp.employee_id,
//             department: emp.department,
//             designation: emp.designation,
//             project: emp.project,
//             type: emp.type,
//             status: emp.status,
//           });

//           setPreviewImage(`http://localhost:5000/uploads/profile-images/${employee.profileImage}`);
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Error loading employee:", err);
//         setLoading(false);
//       }
//     };

//     fetchEmployee();
//   }, [id]);

//   // Input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Image change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProfileImage(file);
//     if (file) {
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   // Update employee (PUT)
//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const data = new FormData();

//       data.append("employee_name", formData.employee_name);
//       data.append("employee_id", formData.employee_id);
//       data.append("department", formData.department);
//       data.append("designation", formData.designation);
//       data.append("project", formData.project);
//       data.append("type", formData.type);
//       data.append("status", formData.status);

//       if (profileImage) {
//         data.append("profileImage", profileImage);
//       }

//       await axios.put(`http://localhost:5000/api/employees/${id}`, data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Employee updated successfully!");
//       navigate("/");

//     } catch (error) {
//       console.error("Update error:", error);
//       alert("Failed to update employee.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <p>Loading data...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="update-employee fade-in">

//       {/* Header */}
//       <div className="ue-header">
//         <i className="bi bi-arrow-left" onClick={() => navigate(-1)}></i>
//         <h2>Edit Employee Details</h2>
//       </div>

//       <div className="ue-tab">
//         <i className="bi bi-person-fill"></i> Personal Information
//       </div>

//       <form onSubmit={handleUpdate}>
//         <div className="ue-content row">

//           {/* Profile Image */}
//           <div className="col-12 upload-section">
//             <label className="upload-box">
//               <img src={previewImage} alt="preview" className="preview-img" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 style={{ display: "none" }}
//               />
//               <div className="edit-icon">
//                 <i className="bi bi-pencil"></i>
//               </div>
//             </label>
//           </div>

//           {/* Name */}
//           <div className="col-md-6">
//             <label>Name*</label>
//             <input
//               type="text"
//               name="employee_name"
//               value={formData.employee_name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* ID */}
//           <div className="col-md-6">
//             <label>Employee ID*</label>
//             <input
//               type="text"
//               name="employee_id"
//               value={formData.employee_id}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Department */}
//           <div className="col-md-6">
//             <label>Department*</label>
//             <select name="department" value={formData.department} onChange={handleChange} required>
//               <option value="Design">Design</option>
//               <option value="Developer">Developer</option>
//               <option value="Support">Support</option>
//             </select>
//           </div>

//           {/* Designation */}
//           <div className="col-md-6">
//             <label>Designation*</label>
//             <select name="designation" value={formData.designation} onChange={handleChange} required>
//               <option value="UI Designer">UI Designer</option>
//               <option value="Frontend Developer">Frontend Developer</option>
//               <option value="Backend Developer">Backend Developer</option>
//               <option value="Design Lead">Design Lead</option>
//             </select>
//           </div>

//           {/* Project */}
//           <div className="col-md-6">
//             <label>Project*</label>
//             <input
//               type="text"
//               name="project"
//               value={formData.project}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Type */}
//           <div className="col-md-6">
//             <label>Type*</label>
//             <select name="type" value={formData.type} onChange={handleChange} required>
//               <option value="Office">Office</option>
//               <option value="Remote">Remote</option>
//               <option value="Hybrid">Hybrid</option>
//             </select>
//           </div>

//           {/* Status */}
//           <div className="col-md-6">
//             <label>Status*</label>
//             <select name="status" value={formData.status} onChange={handleChange} required>
//               <option value="Permanent">Permanent</option>
//               <option value="Active">Active</option>
//               <option value="On Leave">On Leave</option>
//             </select>
//           </div>

//           {/* Buttons */}
//           <div className="ue-buttons">
//             <button type="button" className="cancel-btnn" onClick={() => navigate(-1)}>
//               Cancel
//             </button>

//             <button type="submit" className="update-btn">
//               Update
//             </button>
//           </div>

//         </div>
//       </form>

//     </div>
//   );
// };

// export default UpdateEmployee;

import React, { useEffect, useState } from "react";
import "../styles/editEmployee.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        employee_name: "",
        employee_id: "",
        department: "",
        designation: "",
        project: "",
        type: "",
        status: "",
    });

    // Load employee details
    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/employees/${id}`);

                if (res.data.length > 0) {
                    const emp = res.data[0];

                    setFormData({
                        employee_name: emp.employee_name,
                        employee_id: emp.employee_id,
                        department: emp.department,
                        designation: emp.designation,
                        project: emp.project,
                        type: emp.type,
                        status: emp.status,
                    });

                    // FIXED: Correct preview image
                    if (emp.profileImage) {
                        setPreviewImage(
                            `http://localhost:5000/uploads/profile-images/${emp.profileImage}`
                        );
                    }
                }

                setLoading(false);
            } catch (err) {
                console.error("Error loading employee:", err);
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id]);

    // Input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);

        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    // Update employee (PUT)
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();

            data.append("employee_name", formData.employee_name);
            data.append("employee_id", formData.employee_id);
            data.append("department", formData.department);
            data.append("designation", formData.designation);
            data.append("project", formData.project);
            data.append("type", formData.type);
            data.append("status", formData.status);

            if (profileImage) {
                data.append("profileImage", profileImage);
            }

            await axios.put(
                `http://localhost:5000/api/employees/${id}`,
                data,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            alert("Employee updated successfully!");
            navigate("/");

        } catch (error) {
            console.error("Update error:", error);
            alert("Failed to update employee.");
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading data...</p>
            </div>
        );
    }

    return (
        <div className="update-employee fade-in">

            {/* Header */}
            <div className="ue-header">
                <i className="bi bi-arrow-left" onClick={() => navigate(-1)}></i>
                <h2>Edit Employee Details</h2>
            </div>

            <div className="ue-tab">
                <i className="bi bi-person-fill"></i> Personal Information
            </div>

            <form onSubmit={handleUpdate}>
                <div className="ue-content row">

                    {/* Profile Image */}
                    <div className="col-12 upload-section">
                        <label className="upload-box">
                            <img src={previewImage} alt="preview" className="preview-img" />

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: "none" }}
                            />

                            <div className="edit-icon">
                                <i className="bi bi-pencil"></i>
                            </div>
                        </label>
                    </div>

                    {/* Name */}
                    <div className="col-md-6">
                        <label>Name*</label>
                        <input
                            type="text"
                            name="employee_name"
                            value={formData.employee_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* ID */}
                    <div className="col-md-6">
                        <label>Employee ID*</label>
                        <input
                            type="text"
                            name="employee_id"
                            value={formData.employee_id}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Department */}
                    <div className="col-md-6">
                        <label>Department*</label>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                        >
                            <option value="Design">Design</option>
                            <option value="Developer">Developer</option>
                            <option value="Support">Support</option>
                        </select>
                    </div>

                    {/* Designation */}
                    <div className="col-md-6">
                        <label>Designation*</label>
                        <select
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            required
                        >
                            <option value="UI Designer">UI Designer</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Design Lead">Design Lead</option>
                        </select>
                    </div>

                    {/* Project */}
                    <div className="col-md-6">
                        <label>Project*</label>
                        <input
                            type="text"
                            name="project"
                            value={formData.project}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Type */}
                    <div className="col-md-6">
                        <label>Type*</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                        >
                            <option value="Office">Office</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    {/* Status */}
                    <div className="col-md-6">
                        <label>Status*</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="Permanent">Permanent</option>
                            <option value="Active">Active</option>
                            <option value="On Leave">On Leave</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="ue-buttons">
                        <button type="button" className="cancel-btnn" onClick={() => navigate(-1)}>
                            Cancel
                        </button>

                        <button type="submit" className="update-btn">
                            Update
                        </button>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default EditEmployee;
