import {
  AddEmployeeRequest,
  AddEmployeeFailure,
  AddEmployeeSuccess,
  GetEmployeeFailure,
  GetEmployeeRequest,
  GetEmployeeSuccess,
  deleteFailure,
  deleteRequest,
  deleteSuccess,
  UpdateFailure,
  UpdateRequest,
  UpdateSuccess,
} from "../Slice/EmployeeSlice";

export const GetEmployee = () => async (dispatch) => {
  dispatch(GetEmployeeRequest());
  try {
    const response = await fetch(
      "https://68afc3ce3b8db1ae9c018aca.mockapi.io/employers"
    );
    const data = await response.json();
    dispatch(GetEmployeeSuccess(data));
  } catch (error) {
    dispatch(GetEmployeeFailure(error));
  }
};

export const AddEmployees = (employee, SetEmployee) => async (dispatch) => {
  try {
    dispatch(AddEmployeeRequest());
    const response = await fetch(
      `https://68afc3ce3b8db1ae9c018aca.mockapi.io/employers`,
      {
        method: "Post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(employee),
      }
    );
    if (!response.ok) {
      alert("update issue");
    } else {
      alert("Employee added successfully!");
      dispatch(AddEmployeeSuccess(employee));
      SetEmployee({
        name: "",
        department: "",
        role: "",
        status: "",
        email: "",
        joindate: "",
      });
    }
  } catch (error) {
    alert(error);
    dispatch(AddEmployeeFailure(error));
  }
};

export const DeleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch(deleteRequest());
    const response = await fetch(
      `https://68afc3ce3b8db1ae9c018aca.mockapi.io/employers/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      alert("Failed to delete");
    }

    dispatch(deleteSuccess(id));
  } catch (error) {
    alert(error);
    dispatch(deleteFailure(error));
  }
};

export const UpdateEmployee = (employee, id) => async (dispatch) => {
  try {
    dispatch(UpdateRequest());
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
      
      dispatch(UpdateSuccess(employee))
    }
  } catch (error) {
    alert(error);
  }
};
