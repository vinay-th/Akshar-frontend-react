import React, { useState, useEffect } from 'react';
import AttendanceTableItem from './AttendanceTableItem';
import {
  getStudentForCurrentLecture,
  markAttendence,
} from '../../apis/teacher/conductingLecture';

function AttendanceTable() {
  const [attendanceList, setAttendanceList] = useState([]);
  const [presentAndAbsentCount, setPresentAndAbsentCount] = useState({
    presentCount: 0,
    absentCount: 0,
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const lectureId = localStorage.getItem('lectureId');
        const response = await getStudentForCurrentLecture({ id: lectureId });
        if (response && response.body && response.body.studentList) {
          setAttendanceList(response.body.studentList);
        } else {
          console.error('Invalid response structure:', response);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const present = attendanceList.filter(
      (attendance) => attendance.attendanceStatus // true for present
    ).length;
    const absent = attendanceList.filter(
      (attendance) => !attendance.attendanceStatus // false for absent
    ).length;
    setPresentAndAbsentCount({
      presentCount: present,
      absentCount: absent,
    });
  }, [attendanceList]);

  // Handle status change for each student
  const handleStatusChange = async (id, newStatus) => {
    setAttendanceList((prevList) =>
      prevList.map((student) =>
        student.id === id
          ? { ...student, attendanceStatus: newStatus }
          : student
      )
    );
    try {
      const response = await markAttendence({
        id,
        attendanceStatus: newStatus,
      });
      console.log(response);
    } catch (error) {
      console.error('Error marking attendance:', error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-3 py-4">
        <h2 className="font-semibold text-slate-800">Attendances</h2>
      </header>

      <div>
        {/* <div style={{ position: 'absolute', top: '-200px', left: '55%' }}>
          <DoughnutChart data={chartData} width={120} height={120} />
        </div> */}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Enrollment no.</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Manual Attendance
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {attendanceList.map((attendance) => (
                <AttendanceTableItem
                  key={attendance.id}
                  id={attendance.id}
                  enrollmentNo={attendance.enrollmentNumber}
                  name={attendance.firstName}
                  status={attendance.attendanceStatus}
                  onStatusChange={handleStatusChange}
                  attendanceId={attendance.attendanceId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AttendanceTable;
