import { Routes, Route } from "react-router-dom";

import Addemp from "./components/Addemp";
import EditEmployee from "./pages/EditEmployee";
import MainLayout from "./layout/MainLayout";
import EmployeeView from "./pages/EmployeeView";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<EmployeeTable />} />
        <Route path="/add-employee" element={<Addemp/>} />
        <Route path="/employee/:id" element={<EmployeeView/>} />
        <Route path="/employee/edit/:id" element={<EditEmployee/>} />
      </Routes>
    </MainLayout>
  );
};

export default App;
