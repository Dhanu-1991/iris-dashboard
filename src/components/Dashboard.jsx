import React from "react";
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  FileText,
  ChevronRight,
} from "lucide-react";
import CourseCard from "./CourseCard";

const Dashboard = ({ data }) => {
  const {
    user,
    courses,
    announcements,
    upcomingEvents,
    gradesSummary,
    recentActivity,
  } = data;

  const handleCourseClick = (course) => {
    console.log("Course clicked:", course);
    // Add navigation logic here
  };

  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Welcome back, {user.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-slate-600">
            Here's what's happening with your courses today.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* GPA Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                Active
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">
              {gradesSummary.gpa}
            </h3>
            <p className="text-sm text-slate-600">Current GPA</p>
          </div>

          {/* Active Courses Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">
              {courses.length}
            </h3>
            <p className="text-sm text-slate-600">Active Courses</p>
          </div>

          {/* Upcoming Tasks Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-pink-600" />
              </div>
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">
              {upcomingEvents.length}
            </h3>
            <p className="text-sm text-slate-600">Upcoming Tasks</p>
          </div>

          {/* Completed Courses Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-teal-600" />
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                New
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">
              {gradesSummary.completedCourses}
            </h3>
            <p className="text-sm text-slate-600">Completed Courses</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Courses & Announcements */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Courses Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">My Courses</h2>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.slice(0, 4).map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onClick={handleCourseClick}
                  />
                ))}
              </div>
            </div>

            {/* Announcements Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Recent Announcements
                </h2>
                <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                  {announcements.filter((a) => a.isNew).length} New
                </span>
              </div>
              <div className="space-y-4">
                {announcements.slice(0, 4).map((announcement) => (
                  <div
                    key={announcement.id}
                    className={`p-4 rounded-xl border transition-all hover:shadow-md cursor-pointer ${
                      announcement.isNew
                        ? "bg-indigo-50 border-indigo-200"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-600 bg-white px-2 py-1 rounded">
                          {announcement.course}
                        </span>
                        {announcement.isNew && (
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500">
                        {announcement.timestamp}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {announcement.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Events & Activity */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.slice(0, 4).map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer border border-slate-200"
                  >
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-3 shadow-sm border border-slate-200 min-w-[60px]">
                      <span className="text-2xl font-bold text-slate-800">
                        {event.date.split(" ")[1].replace(",", "")}
                      </span>
                      <span className="text-xs text-slate-500 uppercase">
                        {event.date.split(" ")[0]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            event.type === "quiz"
                              ? "bg-orange-100 text-orange-600"
                              : event.type === "assignment"
                              ? "bg-blue-100 text-blue-600"
                              : event.type === "exam"
                              ? "bg-red-100 text-red-600"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {event.type.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-800 text-sm mb-1">
                        {event.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {event.course} • {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-3 items-start">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-800 font-medium">
                        {activity.action}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-600">
                          {activity.course}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500">
                          {activity.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
