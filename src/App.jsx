import EmployeeList from "./component/employeelist/EmployeeList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeEdit from "./component/Edit/EmployeeEdit";
import AddEmploy from "./component/AddEmploy/AddEmploy";

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route index path="/" element={<EmployeeList />} />
          <Route path="employeelist" element={<EmployeeList />} />
          <Route path=":id" element={<EmployeeEdit />} />
          <Route path="addemployer" element={<AddEmploy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
