import { GLOBAL_URL } from "../globalUrl";

export const getAllClassRoom = async () => {
  const response = await fetch(GLOBAL_URL + "admin/classRoom/getAllClassRoom", {
    method: "GET",
    credentials: "include", // Ensure credentials (cookies) are included
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const getClassRoomDetails = async (id) => {
  const data = { id };
  const response = await fetch(
    GLOBAL_URL + "admin/classRoom/getClassRoomById",
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
