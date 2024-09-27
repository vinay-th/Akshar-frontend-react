import React, { useState } from 'react';

import FacultySidebar from '../../../partials/FacultySidebar';
import Header from '../../../partials/Header';
import AttendanceTable from '../../../partials/attendance/AttendanceTable';
function ConductLecture() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* FacultySidebar */}
      <FacultySidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <AttendanceTable />
        </main>
      </div>
    </div>
  );
}

export default ConductLecture;
