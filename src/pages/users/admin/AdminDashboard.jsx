import React, { useState } from 'react';

import AdminSidebar from '../../../partials/AdminSidebar';
import Header from '../../../partials/Header';
import AdminWelcomeBanner from '../../../partials/dashboard/AdminWelcomeBanner';
import AdminDashboardContainer from './AdminDashboardContainer.jsx';
import { useSelector } from 'react-redux';

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { username, role } = useSelector((store) => store.userDetailStore);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* AdminSidebar */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <AdminWelcomeBanner />

            <AdminDashboardContainer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
