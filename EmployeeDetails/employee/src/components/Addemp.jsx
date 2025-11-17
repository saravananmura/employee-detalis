// import React from "react";
// import { useNavigate } from "react-router-dom";
//  import "../styles/AddEmployeePage.css";

// const AddEmployeePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="add-employee fade-in">

//       <div className="header-row">
//         <i className="bi bi-arrow-left" onClick={() => navigate("/")}></i>
//         <h2>Add New Employee</h2>
//       </div>

//       <div className="tab-title">
//         <i className="bi bi-person-fill"></i> Personal Information
//       </div>

//       <div className="form-container row">

//         <div className="col-12">
//           <div className="upload-box">
//             <i className="bi bi-camera"></i>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <label>Name*</label>
//           <input type="text" placeholder="Enter name" />
//         </div>

//         <div className="col-md-6">
//           <label>Employee ID*</label>
//           <input type="text" placeholder="Enter employee ID" />
//         </div>

//         <div className="col-md-6">
//           <label>Department*</label>
//           <select>
//             <option>Select Department</option>
//           </select>
//         </div>

//         <div className="col-md-6">
//           <label>Designation*</label>
//           <select>
//             <option>Select designation</option>
//           </select>
//         </div>

//         <div className="col-md-6">
//           <label>Project</label>
//           <input type="text" placeholder="Enter project" />
//         </div>

//         <div className="col-md-6">
//           <label>Type*</label>
//           <select>
//             <option>Select Type</option>
//           </select>
//         </div>

//         <div className="col-md-6">
//           <label>Status*</label>
//           <select>
//             <option>Select Status</option>
//           </select>
//         </div>

//         <div className="bottom-buttons">
//           <button className="cancel-btn" onClick={() => navigate("/")}>
//             Cancel
//           </button>
//           <button className="confirm-btn">
//             Confirm
//           </button>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default AddEmployeePage;


import React, { useState } from "react";
import "../styles/addemp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addemp= () => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    employee_name: "",
    employee_id: "",
    department: "",
    designation: "",
    project: "",
    type: "",
    status: "",
  });

  // Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Handling form value changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Form Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("profileImage", profileImage);
      data.append("employee_name", formData.employee_name);
      data.append("employee_id", formData.employee_id);
      data.append("department", formData.department);
      data.append("designation", formData.designation);
      data.append("project", formData.project);
      data.append("type", formData.type);
      data.append("status", formData.status);

      const res = await axios.post(
        "http://localhost:5000/api/employees/add",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Employee added successfully!");
      navigate("/");

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="add-employee fade-in">

      {/* Header */}
      <div className="header-row">
        <i className="bi bi-arrow-left" onClick={() => navigate("/")}></i>
        <h2>Add New Employee</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="tab-title">
          <i className="bi bi-person-fill"></i> Personal Information
        </div>

        <div className="form-container row">

          {/* Profile Upload */}
          <div className="col-12 upload-section">
            <label className="upload-box">
              {previewImage ? (
                <img src={previewImage} alt="preview" className="preview-img" />
              ) : (
                <i className="bi bi-camera"></i>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
          </div>

          {/* NAME */}
          <div className="col-md-6">
            <label>Employee Name*</label>
            <input
              type="text"
              name="employee_name"
              placeholder="Enter name"
              onChange={handleChange}
              required
            />
          </div>

          {/* EMPLOYEE ID */}
          <div className="col-md-6">
            <label>Employee ID*</label>
            <input
              type="text"
              name="employee_id"
              placeholder="Enter employee ID"
              onChange={handleChange}
              required
            />
          </div>

          {/* DEPARTMENT */}
          <div className="col-md-6">
            <label>Department*</label>
            <select name="department" onChange={handleChange} required>
              <option value="">Select Department</option>
              <option value="Design">Design</option>
              <option value="Developer">Developer</option>
              <option value="Support">Support</option>
            </select>
          </div>

          {/* DESIGNATION */}
          <div className="col-md-6">
            <label>Designation*</label>
            <select name="designation" onChange={handleChange} required>
              <option value="">Select Designation</option>
              <option value="UI Designer">UI Designer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
            </select>
          </div>

          {/* PROJECT */}
          <div className="col-md-6">
            <label>Project*</label>
            <input
              type="text"
              name="project"
              placeholder="Enter project"
              onChange={handleChange}
              required
            />
          </div>

          {/* TYPE */}
          <div className="col-md-6">
            <label>Type*</label>
            <select name="type" onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Intern">Intern</option>
            </select>
          </div>

          {/* STATUS */}
          <div className="col-md-6">
            <label>Status*</label>
            <select name="status" onChange={handleChange} required>
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="bottom-buttons">
            <button
              type="button"
              className="cancel-btnn"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>

            <button type="submit" className="confirm-btn">
              Confirm
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Addemp;
