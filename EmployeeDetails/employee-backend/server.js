// import express from "express";
// import cors from "cors";
// import employeeRoutes from "./routes/employeeRoutes.js";

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static("uploads")); // serve uploaded files

// // Routes
// app.use("/api/employees", employeeRoutes);

// // Start server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });


// import express from "express";
// import cors from "cors";
// import employeeRoutes from "./routes/employeeRoutes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// // use routes
// app.use("/api/employees", employeeRoutes);

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

// ⭐ VERY IMPORTANT → Serve uploads folder
app.use("/uploads", express.static("uploads"));


// use routes
app.use("/api/employees", employeeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
