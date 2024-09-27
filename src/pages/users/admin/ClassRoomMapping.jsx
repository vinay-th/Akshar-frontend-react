import React, { useState } from 'react';
import AdminSidebar from '../../../partials/AdminSidebar';
import Header from '../../../partials/Header';
import ClassRoomTable from '../../../partials/classroom/ClassRoomTable.jsx';

const ClassRoomMapping = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className=" gap-6">
              <ClassRoomTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClassRoomMapping;
