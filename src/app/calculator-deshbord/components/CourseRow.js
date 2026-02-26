"use client";

import { Trash2 } from "lucide-react";

/**
 * CourseRow component handles individual course details input.
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.course - The course object containing id, name, credit, and grade.
 * @param {Function} props.onUpdate - Callback function to update course details.
 * @param {Function} props.onDelete - Callback function to delete the course.
 */
export default function CourseRow({ course, onUpdate, onDelete }) {
  return (
    <div className="group flex flex-col md:flex-row items-center gap-4 bg-gray-900/40 md:bg-transparent border border-gray-800/50 hover:border-blue-500/40 hover:bg-gray-800/40 transition-all duration-300 rounded-2xl p-4 md:p-2 mb-3 md:mb-1">
      {/* Course Name Input */}
      <div className="flex-1 w-full">
        <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 ml-1 md:hidden">Course Name</label>
        <input
          value={course.name}
          onChange={(e) => onUpdate("name", e.target.value)}
          placeholder="Course Name (e.g. Mathematics)"
          className="w-full bg-gray-800/50 border border-gray-700/50 text-gray-100 text-sm px-4 py-2.5 md:py-2 outline-none rounded-xl md:rounded-lg focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        {/* Credits and Marks Inputs */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex-1 sm:w-20">
            <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 ml-1 md:hidden">Credits</label>
            <input
              type="number"
              value={course.credit}
              onChange={(e) => onUpdate("credit", e.target.value)}
              placeholder="0.0"
              className="w-full bg-gray-800/50 border border-gray-700/50 text-gray-100 text-sm px-3 py-2.5 md:py-2 text-center outline-none rounded-xl md:rounded-lg focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
              maxLength={3}
            />
          </div>
          <div className="flex-1 sm:w-20">
            <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 ml-1 md:hidden">Marks</label>
            <input
              type="number"
              value={course.grade}
              onChange={(e) => onUpdate("grade", e.target.value)}
              placeholder="100"
              className="w-full bg-gray-800/50 border border-gray-700/50 text-gray-100 text-sm px-3 py-2.5 md:py-2 text-center outline-none rounded-xl md:rounded-lg focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
              maxLength={3}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="flex items-center justify-between sm:justify-center gap-6 w-full sm:w-auto px-2 sm:px-0 py-2 sm:py-0 bg-gray-950/30 md:bg-transparent rounded-xl md:rounded-none">
          <div className="flex flex-col items-center min-w-[40px]">
            <span className="text-[9px] text-gray-500 uppercase font-bold mb-0.5">Grade</span>
            <span className="text-sm font-bold text-blue-400">{course?.lg || "--"}</span>
          </div>
          <div className="flex flex-col items-center min-w-[40px]">
            <span className="text-[9px] text-gray-500 uppercase font-bold mb-0.5">GP</span>
            <span className="text-sm font-bold text-gray-300">{course?.gp || "--"}</span>
          </div>
          <div className="flex flex-col items-center min-w-[40px]">
            <span className="text-[9px] text-gray-500 uppercase font-bold mb-0.5">GCP</span>
            <span className="text-sm font-bold text-emerald-400">{course?.gcp?.toFixed(1) || "--"}</span>
          </div>
        </div>

        {/* Delete Button */}
        <button
          onClick={onDelete}
          title="Delete Course"
          className="w-full md:w-auto flex items-center justify-center bg-red-500/10 hover:bg-red-500/20 text-red-500 p-2.5 md:p-2 rounded-xl md:rounded-lg transition-all cursor-pointer border border-red-500/10 hover:border-red-500/30"
        >
          <Trash2 size={18} className="md:w-4 md:h-4" />
          <span className="md:hidden ml-2 font-bold text-sm">Remove Course</span>
        </button>
      </div>
    </div>
  );
}
