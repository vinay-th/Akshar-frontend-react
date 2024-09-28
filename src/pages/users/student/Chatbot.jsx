import React, { useState } from 'react';
import StudentSidebar from '../../../partials/StudentSidebar';
import Header from '../../../partials/Header';
import ChatbotWindow from '../../../partials/ChatbotWindow.jsx';

function Chatbot() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <StudentSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <ChatbotWindow />
        </main>
      </div>
    </div>
  );
}

export default Chatbot;
