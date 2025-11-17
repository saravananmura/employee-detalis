
// import db from "../config/db.js";

// // Add Employee (you already have this)
// export const addEmployee = (req, res) => {
//   try {
//     const { name, email, mobile, department, salary, joining_date, status } = req.body;
//     const profile_image = req.file ? req.file.filename : null;

//     const query = `
//       INSERT INTO employees
//       (name, email, mobile, department, salary, joining_date, status, profile_image)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     db.query(
//       query,
//       [name, email, mobile, department, salary, joining_date, status, profile_image],
//       (err, result) => {
//         if (err) return res.status(500).json({ error: err.message });
//         res.json({ message: "Employee added successfully", id: result.insertId });
//       }
//     );
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // ✅ Get All Employees
// export const getEmployees = (req, res) => {
//   const query = "SELECT * FROM employees ORDER BY id DESC";
//   db.query(query, (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(result);
//   });
// };

// // ✅ Delete Employee
// export const deleteEmployee = (req, res) => {
//   const { id } = req.params;
//   const query = "DELETE FROM employees WHERE id = ?";
//   db.query(query, [id], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     if (result.affectedRows === 0) return res.status(404).json({ message: "Employee not found" });
//     res.json({ message: "Employee deleted successfully" });
//   });
// };

// // ✅ Update Employee
// export const updateEmployee = (req, res) => {
//   const { id } = req.params;
//   const { name, email, mobile, department, salary, joining_date, status } = req.body;
//   const profile_image = req.file ? req.file.filename : null;

//   let query = `
//     UPDATE employees SET 
//       name = ?, email = ?, mobile = ?, department = ?, salary = ?, joining_date = ?, status = ?
//   `;
//   const params = [name, email, mobile, department, salary, joining_date, status];

//   if (profile_image) {
//     query += ", profile_image = ?";
//     params.push(profile_image);
//   }

//   query += " WHERE id = ?"; 
//   params.push(id);

//   db.query(query, params, (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     if (result.affectedRows === 0) return res.status(404).json({ message: "Employee not found" });
//     res.json({ message: "Employee updated successfully" });
//   });
// };




import db from "../config/db.js";
// --------------------------------------------------
// ADD EMPLOYEE
// --------------------------------------------------
export const addEmployee = (req, res) => {
    try {
        const {
            employee_name,
            employee_id,
            department,
            designation,
            project,
            type,
            status
        } = req.body;

        const profileImage = req.file ? req.file.filename : null;

        const query = `
            INSERT INTO employees
            (employee_name, employee_id, department, designation, project, type, status, profileImage)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(
            query,
            [
                employee_name,
                employee_id,
                department,
                designation,
                project,
                type,
                status,
                profileImage
            ],
            (err, result) => {
                if (err) return res.status(500).json({ error: err.message });

                res.json({
                    message: "Employee added successfully",
                    id: result.insertId
                });
            }
        );
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: err.message });
    }
};


// --------------------------------------------------
// GET ALL EMPLOYEES
// --------------------------------------------------
export const getEmployees = (req, res) => {
    const query = "SELECT * FROM employees ORDER BY id DESC";

    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};


// --------------------------------------------------
// ⭐ NEW — GET EMPLOYEE BY ID (Needed for ViewEmployee.jsx)
// --------------------------------------------------
export const getEmployeeById = (req, res) => {
    const { id } = req.params;

    const query = "SELECT * FROM employees WHERE id = ?";

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.length === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.json(result);
    });
};


// --------------------------------------------------
// DELETE EMPLOYEE
// --------------------------------------------------
export const deleteEmployee = (req, res) => {
    const { id } = req.params;

    const query = "DELETE FROM employees WHERE id = ?";

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Employee not found" });

        res.json({ message: "Employee deleted successfully" });
    });
};


// --------------------------------------------------
// UPDATE EMPLOYEE
// --------------------------------------------------
export const updateEmployee = (req, res) => {
    const { id } = req.params;

    const {
        employee_name,
        employee_id,
        department,
        designation,
        project,
        type,
        status
    } = req.body;

    const profileImage = req.file ? req.file.filename : null;

    let query = `
        UPDATE employees SET
            employee_name = ?, 
            employee_id = ?, 
            department = ?, 
            designation = ?, 
            project = ?, 
            type = ?, 
            status = ?
    `;

    const params = [
        employee_name,
        employee_id,
        department,
        designation,
        project,
        type,
        status
    ];

    if (profileImage) {
        query += ", profileImage = ?";
        params.push(profileImage);
    }

    query += " WHERE id = ?";
    params.push(id);

    db.query(query, params, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Employee not found" });

        res.json({ message: "Employee updated successfully" });
    });
};
