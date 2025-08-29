import React, { useState } from "react";

import AddStyle from "../AddEmploy/Addemploy.module.css";
import { validateEmployee } from "../valitaion";
import { useDispatch, useSelector } from "react-redux";
import { AddEmployees } from "../../REdux/Action/EmployeeAction";

function AddEmploy() {
  const [employee, SetEmployee] = useState({
    name: "",
    department: "",
    role: "",
    status: "",
    email: "",
    joindate: "",
  });
  const [Loading, SetLoading] = useState(true);
  const [error, Seterror] = useState({});
  const dispatch=useDispatch();

  const HandleChange = (e) => {
    SetEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const HandleClick = async (e) => {
    e.preventDefault();
    const checkvalid = validateEmployee(employee);
    if (Object.keys(checkvalid).length > 0) {
      Seterror(checkvalid);
      return;
    }
    await dispatch(AddEmployees(employee,SetEmployee));
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>EmployeeEdit</h2>
      <form className={AddStyle.formcontainer}>
        <label>Name :</label>
        <input
          name="name"
          value={employee.name}
          type="text"
          onChange={HandleChange}
          required
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        <br />
        <label>Email :</label>
        <input
          name="email"
          value={employee.email}
          type="email"
          onChange={HandleChange}
          required
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <br />
        <label>Join Date :</label>
        <input
          name="joindate"
          value={employee.joindate}
          type="date"
          onChange={HandleChange}
          required
        />
        <label>Department :</label>
        <select
          name="department"
          value={employee.department}
          onChange={HandleChange}
          required
        >
          <option>select Department</option>
          <option value="design">Design</option>
          <option value="hr">HR</option>
          <option value="marketing">Markrting</option>
          <option value="sales">Sales</option>
          <option value="finance">Finance</option>
        </select>
        {error.department && <p style={{ color: "red" }}>{error.department}</p>}
        <br />
        <label>Role</label>
        <select
          name="role"
          value={employee.role}
          onChange={HandleChange}
          required
        >
          <option>select Role</option>
          <option value="developer">Developer</option>
          <option value="Intern">intern</option>
          <option value="Product manager">product manager</option>
          <option value="Designer">designer</option>
          <option value="Manager">manager</option>
        </select>
        {error.role && <p style={{ color: "red" }}>{error.role}</p>}
        <br />
        <label>Status</label>
        <select
          name="status"
          value={employee.status}
          onChange={HandleChange}
          required
        >
          <option>select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        {error.status && <p style={{ color: "red" }}>{error.status}</p>}
      </form>
      <button className={AddStyle.formcontainerbutton} onClick={HandleClick}>
        Submit
      </button>
    </>
  );
}

export default AddEmploy;
