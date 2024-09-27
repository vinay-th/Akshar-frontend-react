import React, { useState, useEffect } from 'react';

import FacultySidebar from '../../../partials/FacultySidebar';
import Header from '../../../partials/Header';
import AttendanceTable from '../../../partials/attendance/AttendanceTable';
import FacultyLectureAttendanceBanner from '../../../partials/dashboard/FacultyLectureAttendanceBanner';

// Mock data for testing
const mockStudents = [
  { id: 1, name: 'John Doe', enrollmentNo: 'A001', status: 'Present' },
  { id: 2, name: 'Jane Smith', enrollmentNo: 'A002', status: 'Absent' },
  { id: 3, name: 'Bob Johnson', enrollmentNo: 'A003', status: 'Present' },
];

function ConductingLecture() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Uncomment the following lines when your API is ready
        // const response = await fetch('/api/students');
        // const data = await response.json();
        // setStudents(data);

        // For now, use mock data
        setStudents(mockStudents);
      } catch (error) {
        console.error('Error fetching students:', error);
        setError('Failed to load students. Please try again later.');
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <FacultySidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <FacultyLectureAttendanceBanner />

          {error ? (
            <div className="p-4 text-red-500">{error}</div>
          ) : (
            <AttendanceTable initialStudents={students} />
          )}
        </main>
      </div>
    </div>
  );
}

export default ConductingLecture;
