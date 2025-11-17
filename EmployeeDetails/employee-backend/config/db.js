// import mysql from "mysql2";

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",      // your MySQL username
//   password: "",      // your MySQL password ("" for XAMPP)
//   database: "employee_db",
//   port: 3306
// });

// db.connect((err) => {
//   if (err) {
//     console.error("MySQL connection error:", err);
//   } else {
//     console.log("Connected to MySQL");
//   }
// });

// export default db;


import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // change if you have a password
  password: "",       // empty for XAMPP
  database: "employee_db",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("MySQL Connected");
});

export default db;
