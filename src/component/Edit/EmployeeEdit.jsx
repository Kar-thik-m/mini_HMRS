import React, { useState } from "react";
import EeditStyle from "../Edit/EmployeeEdit.module.css";
import { useParams } from "react-router-dom";

function EmployeeEdit() {
  const { id } = useParams();

  const [employee, SetEmployee] = useState({
    id: id,
    name: "",
    department: "",
    role: "",
    status: "",
  });
  const [Loading, SetLoading] = useState(true);
  const HandleChange = (e) => {
    SetEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const HandleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://68afc3ce3b8db1ae9c018aca.mockapi.io/employers/${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(employee),
        }
      );
      if (!response.ok) {
        alert("update issue");
      } else {
        alert("udate successfully!");
        SetEmployee({
          role:'',
          name:'',
          status:'',
          department:"",
        })
      }
    } catch (error) {
      alert(error);
    }
  };
  console.log(employee);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>EmployeeEdit</h2>
      <form className={EeditStyle.formcontainer}>
        <label>Name :</label>
        <input
          name="name"
          value={employee.name}
          type="text"
          onChange={HandleChange}
          required
        />
        <br />
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
      </form>
      <button className={EeditStyle.formcontainerbutton} onClick={HandleClick}>
        Submit
      </button>
    </>
  );
}

export default EmployeeEdit;
