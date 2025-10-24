import React from "react";
import { Bell, Search } from "lucide-react";

const Header = ({
  user,
  searchQuery,
  setSearchQuery,
  notificationCount = 2,
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="px-8 py-4 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses, assignments, or announcements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right Side - Notifications & User */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-all">
            <Bell className="w-6 h-6" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-800">
                {user.name}
              </p>
              <p className="text-xs text-slate-500">{user.role}</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:shadow-xl transition-all">
              {user.avatar}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
