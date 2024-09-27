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
            <div className="justify-between">
              <h1 className="text-2xl font-semibold">Classroom Mapping</h1>
              <br />
              <br />
              <div className="flex justify-between">
                <select className="border border-gray-300 w-40 rounded-md p-2">
                  <option value="select">Select Class</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div className="flex justify-between">
                  <input
                    type="text"
                    placeholder="enter classroom name"
                    className="border border-gray-300 rounded-md w-60 p-2"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded">
                    Add Classroom
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div className="flex flex-col gap-6 mb-4">
              <div className="flex justify-between">
                {/* top left corner */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="---"
                    className="border border-gray-300 rounded-md p-2 w-60"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add mapping
                  </button>
                </div>

                {/* top right corner */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="---"
                    className="border border-gray-300 rounded-md p-2 w-60"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add mapping
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                {/* bottom left corner */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="---"
                    className="border border-gray-300 rounded-md p-2 w-60"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add mapping
                  </button>
                </div>
                {/* bottom right corner */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="---"
                    className="border border-gray-300 rounded-md p-2 w-60"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add mapping
                  </button>
                </div>
              </div>
            </div>
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
