import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard";
import mockData from "./data/mockData";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate notification count
  const notificationCount = mockData.announcements.filter(
    (a) => a.isNew
  ).length;

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          user={mockData.user}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          notificationCount={notificationCount}
        />

        {/* Dashboard Content */}
        {activeSection === "dashboard" && <Dashboard data={mockData} />}

        {/* Placeholder for other sections */}
        {activeSection !== "dashboard" && (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </h2>
              <p className="text-slate-600 mb-6">
                This section is coming soon!
              </p>
              <button
                onClick={() => setActiveSection("dashboard")}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
