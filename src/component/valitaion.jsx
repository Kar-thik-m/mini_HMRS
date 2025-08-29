export const validateEmployee = (employee) => {
  const errors = {};

  if (!employee.name.trim()) {
    errors.name = "Name is required";
  }

  if (!employee.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(employee.email)) {
    errors.email = "Invalid email format";
  }

  if (!employee.joindate) {
    errors.joindate = "Join date is required";
  }

  if (!employee.department || employee.department === "select Department") {
    errors.department = "Please select a department";
  }

  if (!employee.role || employee.role === "select Role") {
    errors.role = "Please select a role";
  }

  if (!employee.status || employee.status === "select Status") {
    errors.status = "Please select a status";
  }

  return errors;
};
