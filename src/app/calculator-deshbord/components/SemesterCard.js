"use client";

import { Plus, Trash2, GraduationCap } from "lucide-react";
import CourseRow from "./CourseRow";

/**
 * SemesterCard component manages a list of courses for a specific semester.
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.semester - The semester object containing id, courses, and gpa.
 * @param {Function} props.onAddCourse - Callback to add a new course to this semester.
 * @param {Function} props.onUpdateCourse - Callback to update a course's details.
 * @param {Function} props.onDeleteCourse - Callback to delete a course.
 * @param {Function} props.onDeleteSemester - Callback to delete the entire semester.
 */
export default function SemesterCard({
    semester,
    onAddCourse,
    onUpdateCourse,
    onDeleteCourse,
    onDeleteSemester
}) {
    return (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 mb-6 shadow-xl backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                        <GraduationCap className="text-blue-400" size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-100">Semester {semester.id}</h2>
                        <p className="text-sm text-gray-400">Manage your courses and track performance</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {/* Add Course Button */}
                    <button
                        onClick={onAddCourse}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-900/20 active:scale-95"
                    >
                        <Plus size={16} />
                        <span>Add Course</span>
                    </button>

                    {/* Delete Semester Button */}
                    <button
                        onClick={onDeleteSemester}
                        className="flex items-center justify-center p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                        title="Delete Semester"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            {/* Courses List Section */}
            <div className="space-y-1">
                {semester.courses.length > 0 ? (
                    <>
                        {/* Table Header (Hidden on small screens) */}
                        <div className="hidden md:flex items-center gap-3 px-2 mb-2 text-[10px] uppercase tracking-wider font-bold text-gray-500">
                            <div className="flex-1 ml-1">Course Name</div>
                            <div className="w-20 text-center">Credits</div>
                            <div className="w-20 text-center">Marks</div>
                            <div className="w-[150px] text-center">Results</div>
                            <div className="w-10"></div>
                        </div>

                        {semester.courses.map((course) => (
                            <CourseRow
                                key={course.id}
                                course={course}
                                onUpdate={(field, value) => onUpdateCourse(course.id, field, value)}
                                onDelete={() => onDeleteCourse(course.id)}
                            />
                        ))}
                    </>
                ) : (
                    <div className="text-center py-10 border-2 border-dashed border-gray-800 rounded-xl">
                        <p className="text-gray-500 text-sm">No courses added yet. Click "Add Course" to get started.</p>
                    </div>
                )}
            </div>

            {/* Footer / Semester GPA Section */}
            {semester.courses.length > 0 && (
                <div className="mt-6 pt-5 border-t border-gray-800 flex items-center justify-end">
                    <div className="flex items-center gap-3 bg-gray-950/50 px-4 py-2 rounded-full border border-gray-800">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">Semester GPA</span>
                        <span className={`text-lg font-bold ${parseFloat(semester.gpa) >= 3.0 ? 'text-emerald-400' : 'text-blue-400'}`}>
                            {semester.gpa}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
