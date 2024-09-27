import React, { useState } from 'react';

import FacultySidebar from '../../../partials/FacultySidebar';
import Header from '../../../partials/Header';
import DropdownCourses from '../../../components/DropdownCourses';
import DropdownBatch from '../../../components/DropdownBatch';
import DropdownSection from '../../../components/DropdownSection';
import DropdownClassroom from '../../../components/DropdownClassroom';
import DropdownSubject from '../../../components/DropdownSubject';
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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className=" gap-4" style={{ width: '700px' }}>
              <h1 className="text-2xl font-semibold">Conduct Lecture</h1>
              <div className="flex flex-col gap-4 justify-between mt-10">
                <div className=" gap-2">
                  <h1
                    className=" font-bold text-xl"
                    style={{ fontSize: '1.5rem', color: '#6366F1' }}
                  >
                    Select Course
                  </h1>
                  <DropdownCourses />
                </div>
                <div className=" gap-2">
                  <h1
                    className=" font-bold text-xl"
                    style={{ fontSize: '1.5rem', color: '#6366F1' }}
                  >
                    Select Batch
                  </h1>
                  <DropdownBatch />
                </div>
                <div className=" gap-2">
                  <h1
                    className=" font-bold text-xl"
                    style={{ fontSize: '1.5rem', color: '#6366F1' }}
                  >
                    Select Section
                  </h1>
                  <DropdownSection />
                </div>
                <div className=" gap-2">
                  <h1
                    className=" font-bold text-xl"
                    style={{ fontSize: '1.5rem', color: '#6366F1' }}
                  >
                    Select Classroom
                  </h1>
                  <DropdownClassroom />
                </div>
                <div className=" gap-2">
                  <h1
                    className=" font-bold text-xl"
                    style={{ fontSize: '1.5rem', color: '#6366F1' }}
                  >
                    Select Subject
                  </h1>
                  <DropdownSubject />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="text-white px-4 py-2 rounded-md"
                style={{
                  backgroundColor: '#6366F1',
                  fontSize: '1.2rem',
                  position: 'absolute',
                  bottom: '20px',
                  left: '900px',
                }}
              >
                Conduct Lecture
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ConductLecture;
