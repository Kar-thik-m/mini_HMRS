import React, { useState, useEffect } from "react";
import EMListstyle from "../employeelist/EmployeeList.module.css";
import { Link } from "react-router-dom";
import { GetEmployee, DeleteEmployee } from "../../REdux/Action/EmployeeAction.js";
import { useDispatch, useSelector } from "react-redux";

function EmployeeList() {
  const [Search, SetSearch] = useState("");
  const [depSearch, SetdepSearch] = useState("");

  const dispatch = useDispatch();
  const { employee } = useSelector((state) => state?.employee);

  useEffect(() => {
    dispatch(GetEmployee());
  }, [dispatch]);

  const HandleDelete = async (id) => {
    await dispatch(DeleteEmployee(id));
  };
  console.log(employee);
  const HandleSearch = () => {};

  const filerdata = Array.isArray(employee)
    ? employee.filter((datas) => {
        const matchesSearch = Search
          ? datas?.name?.toLowerCase().includes(Search.toLowerCase())
          : true;

        const matchesDept =
          depSearch === "alldepartment"
            ? true
            : datas?.department
                ?.toLowerCase()
                .includes(depSearch.toLowerCase());

        return matchesSearch && matchesDept;
      })
    : [];

  return (
    <>
      <h3 style={{ textAlign: "center" }}>EmployeeList</h3>
      <div className={EMListstyle.head}>
        <Link to="addemployer">Add Employer</Link>

        <div>
          <div onClick={HandleSearch} style={{backgroundColor:"aliceblue"}}>
            <input
              onChange={(e) => SetSearch(e.target.value)}
              value={Search}
              type="search"
              placeholder="Search name"
            />
            🔍
          </div>
        </div>
        <div>
          <select
            name="department"
            value={depSearch}
            onChange={(e) => SetdepSearch(e.target.value)}
            required
          >
            <option value={"alldepartment"}>All Department</option>
            <option value="design">Design</option>
            <option value="hr">HR</option>
            <option value="marketing">Markrting</option>
            <option value="sales">Sales</option>
            <option value="finance">Finance</option>
          </select>
        </div>
      </div>
      <div className={EMListstyle.container}>
        <table border={1} cellPadding={10} className={EMListstyle.table}>
          <thead>
            <tr>
              <th>Employee id</th>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filerdata?.map((data) => (
              <tr>
                <td>{data?.id}</td>
                <td>{data?.name}</td>
                <td>{data?.department}</td>
                <td>{data?.role}</td>
                <td> {data?.status} </td>
                <td>
                  <div className={EMListstyle.edbutton}>
                    <button>
                      <Link to={`${data?.id}`}>Edit</Link>
                    </button>
                    <button onClick={() => HandleDelete(data?.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmployeeList;
