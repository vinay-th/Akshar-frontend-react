import React, { useState, useEffect } from "react";
import Upload from "../../../public/svgs/upload.svg";
import Download from "../../../public/svgs/download.svg";
import { checkStudentPresenceInClass } from "../../apis/student/attendLecture";

// Replace this URL with your actual endpoint for marking attendance
const MARK_ATTENDANCE_URL = "https://example.com/api/markAttendance";

function LectureTableItem(props) {
  const [status, setStatus] = useState(props.status);
  const [attendanceStatus, setAttendanceStatus] = useState(
    props.attendanceStatus
  );

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    props.onStatusChange(props.id, newStatus);
  };

  const statusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-emerald-100 text-emerald-600";
      case "Completed":
        return "bg-rose-100 text-rose-500";
      default:
        return "bg-slate-100 text-slate-500";
    }
  };

  const checkForGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          markAttendance(latitude, longitude); // Call function to mark attendance with geolocation
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const markAttendance = async (latitude, longitude) => {
    const studentId = localStorage.getItem("id"); // Get student ID from local storage
    const lectureId = props.id; // Use the lecture ID passed as props

    const attendanceData = {
      studentId,
      lectureId,
      pointVo: {
        latitude,
        longitude,
      },
    };

    const response = await checkStudentPresenceInClass(attendanceData);
    alert(response.body.presenceStatus);
    if (!response.status) {
      throw new Error("Network response was not ok");
    }
    // setAttendanceStatus(data.attendanceMarked); // Update local state based on response
  };

  return (
    <tr>
      <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center"></div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={"font-medium text-sky-500"}>{props.name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-black-500">
          {new Date(props.date).toLocaleDateString()}
        </div>
      </td>
      <td className="px-1 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={`font-medium text-slate-800`}>{props.teacher}</div>
      </td>
      <td>
        <div className="font-medium text-left text-slate-800">
          {new Date(props.time).toLocaleTimeString()}{" "}
        </div>
      </td>
      <td>
        {status ? (
          <div className="inline-flex font-medium rounded-full text-center px-2.5 py-0.5 bg-emerald-100 text-emerald-600">
            In Progress
          </div>
        ) : (
          <div className="inline-flex font-medium rounded-full text-center px-2.5 py-0.5 bg-amber-100 text-amber-600">
            Finished
          </div>
        )}
      </td>
      <td>
        {attendanceStatus ? (
          <div className="inline-flex font-medium rounded-full text-center px-2.5 py-0.5 bg-emerald-100 text-emerald-600">
            Marked
          </div>
        ) : (
          <div className="inline-flex font-medium rounded-full text-center px-2.5 py-0.5 bg-amber-100 text-amber-600">
            Not Marked
          </div>
        )}
      </td>
      <td>
        <div className={`font-medium text-center text-slate-800`}>
          {props.homework ? (
            <img
              src={Upload}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
              alt="Upload"
            />
          ) : (
            "---"
          )}
        </div>
      </td>
      <td>
        <div className={`font-medium text-center text-slate-800`}>
          {props.notes ? (
            <img
              src={Download}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200 "
              alt="Download"
            />
          ) : (
            "---"
          )}
        </div>
      </td>
      <td>
        <div>
          {status ? (
            <div
              className={`font-medium text-center text-white bg-green-500 hover:bg-emerald-700 px-1 py-1 rounded-md w-40`}
            >
              <button onClick={checkForGeoLocation}>Mark Attendance</button>
            </div>
          ) : (
            <div
              className={`font-medium text-center text-white bg-gray-400 px-1 py-1 rounded-md w-40`}
            >
              - -
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default LectureTableItem;
