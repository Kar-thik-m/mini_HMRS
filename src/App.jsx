import EmployeeList from "./component/employeelist/EmployeeList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeEdit from "./component/Edit/EmployeeEdit";
import AddEmploy from "./component/AddEmploy/AddEmploy";
import Footer from "./component/Footer/Footer";
/* app  */
function App() {
  return (
    <>

      <Router>
        <div className="main-content">
          <Routes>
            <Route index path="/" element={<EmployeeList />} />
            <Route path="employeelist" element={<EmployeeList />} />
            <Route path=":id" element={<EmployeeEdit />} />
            <Route path="addemployer" element={<AddEmploy />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
