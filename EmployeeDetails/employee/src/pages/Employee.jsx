// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/employee.css";

// import Delete from "../components/Delete";

// const Employee = () => {
//     const navigate = useNavigate();

//     // STATES
//     const [employees, setEmployees] = useState([]);
//     const [search, setSearch] = useState("");

//     // DELETE POPUP STATES
//     const [showDelete, setShowDelete] = useState(false);
//     const [deleteId, setDeleteId] = useState(null);

//     // LOAD EMPLOYEES
//     const loadEmployees = async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/api/employees");
//             setEmployees(res.data);
//         } catch (error) {
//             console.error("Error loading employees:", error);
//         }
//     };

//     useEffect(() => {
//         loadEmployees();
//     }, []);

//     // SEARCH FILTER
//     const filteredEmployees = employees.filter((emp) =>
//         emp.employee_name.toLowerCase().includes(search.toLowerCase()) ||
//         emp.employee_id.toLowerCase().includes(search.toLowerCase()) ||
//         emp.department.toLowerCase().includes(search.toLowerCase()) ||
//         emp.designation.toLowerCase().includes(search.toLowerCase()) ||
//         emp.project.toLowerCase().includes(search.toLowerCase()) ||
//         emp.type.toLowerCase().includes(search.toLowerCase()) ||
//         emp.status.toLowerCase().includes(search.toLowerCase())
//     );

//     // DELETE ACTION
//     const handleDeleteClick = (id) => {
//         setDeleteId(id);
//         setShowDelete(true);
//     };

//     // CONFIRM DELETE
//     const confirmDelete = async () => {
//         try {
//             await axios.delete(`http://localhost:5000/api/employees/${deleteId}`);
//             setShowDelete(false);
//             loadEmployees();
//         } catch (err) {
//             console.error("Delete failed:", err);
//         }
//     };

//     return (
//         <div className="employee-page">

//             {/* HEADER */}
//             <div className="employee-header">
//                 <h2>Employee</h2>

//                 <div className="employee-actions">

//                     {/* SEARCH BOX */}
//                     <div className="search-box">
//                         <i className="bi bi-search"></i>
//                         <input
//                             type="text"
//                             placeholder="Search"
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                         />
//                     </div>

//                     {/* ADD BUTTON */}
//                     <button
//                         className="add-btn"
//                         onClick={() => navigate("/add-employee")}
//                     >
//                         <i className="bi bi-plus-lg"></i> Add New Employee
//                     </button>
//                 </div>
//             </div>

//             {/* EMPLOYEE TABLE */}
//             <div className="employee-table">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Employee Name</th>
//                             <th>Employee ID</th>
//                             <th>Department</th>
//                             <th>Designation</th>
//                             <th>Project</th>
//                             <th>Type</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {filteredEmployees.length === 0 ? (
//                             <tr>
//                                 <td colSpan="8" className="no-data">
//                                     No records found
//                                 </td>
//                             </tr>
//                         ) : (
//                             filteredEmployees.map((emp) => (
//                                 <tr key={emp.id}>
//                                     <td>{emp.employee_name}</td>
//                                     <td>{emp.employee_id}</td>
//                                     <td>{emp.department}</td>
//                                     <td>{emp.designation}</td>
//                                     <td>{emp.project}</td>
//                                     <td>{emp.type}</td>
//                                     <td>{emp.status}</td>
//                                     <td>

//                                         {/* VIEW */}
//                                         <button
//                                             className="action-btn view"
//                                             onClick={() => navigate(`/employee/${emp.id}`)}
//                                         >
//                                             <i className="bi bi-eye"></i>
//                                         </button>

//                                         {/* EDIT */}
//                                         <button
//                                             className="action-btn edit"
//                                             onClick={() => navigate(`/employee/edit/${emp.id}`)}
//                                         >
//                                             <i className="bi bi-pencil-square"></i>
//                                         </button>

//                                         {/* DELETE */}
//                                         <button
//                                             className="action-btn delete"
//                                             onClick={() => handleDeleteClick(emp.id)}
//                                         >
//                                             <i className="bi bi-trash"></i>
//                                         </button>

//                                     </td>
//                                 </tr>
//                             ))
//                         )}
//                     </tbody>
//                 </table>
//             </div>

//             {/* DELETE POPUP */}
//             {showDelete && (
//                 <Delete
//                     onClose={() => setShowDelete(false)}
//                     onConfirm={confirmDelete}
//                 />
//             )}

//         </div>
//     );
// };

// export default Employee;
