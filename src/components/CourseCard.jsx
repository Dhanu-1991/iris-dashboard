import React from 'react';
import { Clock, Users, BookOpen } from 'lucide-react';

const CourseCard = ({ course, onClick }) => {
  return (
    <div 
      onClick={() => onClick && onClick(course)}
      className="border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer group bg-white"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
              {course.code}
            </span>
            <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
              {course.grade}
            </span>
          </div>
          <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
            {course.name}
          </h3>
        </div>
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: course.color + '20' }}
        >
          <BookOpen className="w-5 h-5" style={{ color: course.color }} />
        </div>
      </div>

      {/* Instructor */}
      <p className="text-sm text-slate-600 mb-3">{course.instructor}</p>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-600">Progress</span>
          <span className="font-semibold text-slate-800">{course.progress}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-500"
            style={{ 
              width: `${course.progress}%`, 
              backgroundColor: course.color 
            }}
          ></div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3" />
          <span>{course.nextClass}</span>
        </div>
        {course.credits && (
          <div className="flex items-center gap-1">
            <span className="font-medium">{course.credits}</span>
            <span>credits</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;