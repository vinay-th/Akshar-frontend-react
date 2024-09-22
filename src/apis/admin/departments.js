import { GLOBAL_URL } from "../globalUrl";

export const getAllDepartment = async () => {
  const response = await fetch(
    GLOBAL_URL + "admin/department/getAllDepartment",
    {
      method: "GET",
      credentials: "include", // Ensure credentials (cookies) are included
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const checkForDepartmentIdAvail = async (departmentId) => {
  const data = { departmentId };
  const response = await fetch(
    GLOBAL_URL + "admin/department/checkForDepartmentIdAvail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );

  if (!response.ok) {
    alert("Invalid Username or password");
    throw new Error("Network response was not ok");
  }
  return response.json();
};
