import { GLOBAL_URL } from "../globalUrl";

export const getLecturesForStudent = async (data) => {
  const response = await fetch(
    GLOBAL_URL + "student/lecture/getLecturesByStudentId",
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

export const sendFrameToBackend = async (frameDataUrl) => {
  const response = await fetch(GLOBAL_URL + "receiveFrames", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image: frameDataUrl }), // Send the image data
  });
  return response.json();
};

export const checkStudentPresenceInClass = async (data) => {
  const response = await fetch(GLOBAL_URL + "student/attendance/checkUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.ok) {
    alert("Invalid Username or password");
    throw new Error("Network response was not ok");
  }
  return response.json();
};
