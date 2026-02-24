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
    <div className="group flex flex-col md:flex-row items-center gap-3 bg-gray-900 md:bg-transparent border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800/30 transition-all duration-300 rounded-lg p-3 md:p-2 mb-2">
      {/* Course Name Input */}
      <input
        value={course.name}
        onChange={(e) => onUpdate("name", e.target.value)}
        placeholder="Course Name (e.g. Mathematics)"
        className="w-full md:flex-1 bg-gray-800 border border-gray-700 text-gray-100 text-sm px-3 py-2 outline-none rounded-md focus:ring-1 focus:ring-blue-500 transition-all"
      />

      {/* Credit Hours Input */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <input
          value={course.credit}
          onChange={(e) => onUpdate("credit", e.target.value)}
          placeholder="Credits"
          className="w-full md:w-20 bg-gray-800 border border-gray-700 text-gray-100 text-sm px-3 py-2 outline-none rounded-md focus:ring-1 focus:ring-blue-500 transition-all"
          maxLength={3}
        />

        {/* Marks Input */}
        <input
          value={course.grade}
          onChange={(e) => onUpdate("grade", e.target.value)}
          placeholder="Marks"
          className="w-full md:w-20 bg-gray-800 border border-gray-700 text-gray-100 text-sm px-3 py-2 outline-none rounded-md focus:ring-1 focus:ring-blue-500 transition-all"
          maxLength={3}
        />
      </div>

      {/* Calculated Displays (Read-only) */}
      <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto py-1">
        {/* Letter Grade */}
        <div className="flex flex-col items-center min-w-[50px]">
          <span className="text-[10px] text-gray-500 uppercase font-medium">Grade</span>
          <span className="text-sm font-semibold text-blue-400">{course?.lg || "--"}</span>
        </div>

        {/* Grade Points */}
        <div className="flex flex-col items-center min-w-[50px]">
          <span className="text-[10px] text-gray-500 uppercase font-medium">GP</span>
          <span className="text-sm font-semibold text-gray-300">{course?.gp || "--"}</span>
        </div>

        {/* Weighted Points (GCP) */}
        <div className="flex flex-col items-center min-w-[50px]">
          <span className="text-[10px] text-gray-500 uppercase font-medium">GCP</span>
          <span className="text-sm font-semibold text-emerald-400">{course?.gcp?.toFixed(2) || "--"}</span>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={onDelete}
        title="Delete Course"
        className="w-full md:w-auto flex items-center justify-center bg-red-500/10 hover:bg-red-500/20 text-red-400 p-2 rounded-md transition-all duration-300 group-hover:opacity-100"
      >
        <Trash2 size={16} />
        <span className="md:hidden ml-2">Delete Course</span>
      </button>
    </div>
  );
}
