import React, { useState } from 'react';

import StudentSidebar from '../../../partials/StudentSidebar';
import Header from '../../../partials/Header';
import AdminWelcomeBanner from '../../../partials/dashboard/AdminWelcomeBanner';
import Calendar from '../../../partials/Calendar.jsx';

import DonutChart from '../../../charts/DoughnutChart.jsx';
function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let presentCount = 66;
  let absentCount = 34;

  const sampleData = {
    labels: ['Absent', 'Present', 'Holiday'], // Labels for the chart
    datasets: [
      {
        label: 'Attendance', // Dataset label
        data: [5, 20, 2], // Data corresponding to Absent, Present, and Holiday counts
        backgroundColor: [
          '#F87171', // Color for Absent (e.g., Red)
          '#34D399', // Color for Present (e.g., Green)
          '#60A5FA', // Color for Holiday (e.g., Blue)
        ],
        hoverBackgroundColor: [
          '#EF4444', // Hover color for Absent
          '#10B981', // Hover color for Present
          '#3B82F6', // Hover color for Holiday
        ],
        borderColor: [
          '#F87171', // Border color for Absent
          '#34D399', // Border color for Present
          '#60A5FA', // Border color for Holiday
        ],
        hoverBorderColor: [
          '#EF4444', // Hover border color for Absent
          '#10B981', // Hover border color for Present
          '#3B82F6', // Hover border color for Holiday
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* StudentSidebar */}
      <StudentSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <AdminWelcomeBanner />

            {/* Cards */}
            <div className="flex flex-rows gap-6">
              <div
                className="flex justify-center items-center "
                style={{ position: 'relative', top: '-150px' }}
              >
                <DonutChart data={sampleData} height={200} width={200} />
              </div>
              <Calendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentDashboard;
