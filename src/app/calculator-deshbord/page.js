"use client";

import "./style.css";
import { useState, useEffect, useMemo } from "react";
import { ArrowLeft, Plus, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import SemesterCard from "./components/SemesterCard";
import SummaryCard from "./components/SummaryCard";
import ConfirmModal from "../../../components/ConfirmModal";

/**
 * Grading Helper: Converts numeric marks to grade points based on a 4.0 scale.
 * @param {string|number} grade - The numeric marks (0-100).
 * @returns {number} The grade points.
 */
const getGradePoint = (grade) => {
  const g = parseFloat(grade);
  if (isNaN(g) || g > 100 || g < 0) return 0.0;

  if (g >= 90) return 4.0;
  if (g >= 85) return 3.7;
  if (g >= 80) return 3.3;
  if (g >= 75) return 3.0;
  if (g >= 70) return 2.7;
  if (g >= 65) return 2.3;
  if (g >= 60) return 2.0;
  if (g >= 55) return 1.7;
  if (g >= 50) return 1.0;
  return 0.0;
};

/**
 * Grading Helper: Converts numeric marks to letter grades.
 * @param {string|number} grade - The numeric marks (0-100).
 * @returns {string} The letter grade.
 */
const getLetterGrade = (grade) => {
  const g = parseFloat(grade);
  if (isNaN(g) || g > 100 || g < 0) return "--";

  if (g >= 90) return "A+";
  if (g >= 85) return "A";
  if (g >= 80) return "A-";
  if (g >= 75) return "B+";
  if (g >= 70) return "B";
  if (g >= 65) return "B-";
  if (g >= 60) return "C+";
  if (g >= 55) return "C";
  if (g >= 50) return "D";
  return "F";
};

/**
 * GPADashboard Component: The main application page for managing semesters and calculating GPA/CGPA.
 */
export default function GPADashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [semesters, setSemesters] = useState([{ id: 1, courses: [] }]);

  // Confirmation Modal States
  const [deleteId, setDeleteId] = useState(null); // ID of semester or course to delete
  const [deleteType, setDeleteType] = useState(null); // 'semester' or 'course'
  const [courseContext, setCourseContext] = useState(null); // semesterId for course deletion

  // Initialize: Load data from localStorage on component mount
  useEffect(() => {
    // Auth Check
    if (!user && !localStorage.getItem("user")) {
      router.push("/login");
      return;
    }

    const saved = localStorage.getItem("semesters");
    if (saved) {
      try {
        setSemesters(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved semesters", e);
      }
    }
    setMounted(true);
  }, [user, router]);

  // Persistence: Save semesters data to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("semesters", JSON.stringify(semesters));
    }
  }, [semesters, mounted]);

  // --- Semester Operations ---

  const addSemester = () => {
    const newId = semesters.length ? Math.max(...semesters.map(s => s.id)) + 1 : 1;
    setSemesters([...semesters, { id: newId, courses: [] }]);
  };

  const deleteSemester = (semesterId) => {
    setDeleteId(semesterId);
    setDeleteType("semester");
  };

  const confirmDeleteSemester = () => {
    setSemesters(semesters.filter((s) => s.id !== deleteId));
    setDeleteId(null);
    setDeleteType(null);
  };

  // --- Course Operations ---

  const addCourse = (semesterId) => {
    setSemesters((prev) =>
      prev.map((semester) =>
        semester.id === semesterId
          ? {
            ...semester,
            courses: [
              ...semester.courses,
              {
                id: Date.now() + Math.random(), // Unique ID generation
                name: "",
                credit: "",
                grade: "",
              },
            ],
          }
          : semester
      )
    );
  };

  const deleteCourse = (semesterId, courseId) => {
    setDeleteId(courseId);
    setCourseContext(semesterId);
    setDeleteType("course");
  };

  const confirmDeleteCourse = () => {
    setSemesters((prev) =>
      prev.map((semester) =>
        semester.id === courseContext
          ? {
            ...semester,
            courses: semester.courses.filter((c) => c.id !== deleteId),
          }
          : semester
      )
    );
    setDeleteId(null);
    setDeleteType(null);
    setCourseContext(null);
  };

  const updateCourse = (semesterId, courseId, field, value) => {
    setSemesters((prev) =>
      prev.map((semester) =>
        semester.id === semesterId
          ? {
            ...semester,
            courses: semester.courses.map((course) =>
              course.id === courseId ? { ...course, [field]: value } : course
            ),
          }
          : semester
      )
    );
  };

  // --- Computation Layer ---

  // Enhanced semester data with calculated GPA and individual course results
  const semestersWithGPA = useMemo(() => {
    return semesters.map((semester) => {
      let totalCredits = 0;
      let totalPoints = 0;

      const courses = semester.courses.map((course) => {
        const gp = getGradePoint(course.grade || 0);
        const lg = getLetterGrade(course.grade || 0);
        const credit = parseFloat(course.credit || 0);
        totalCredits += credit;
        totalPoints += gp * credit;
        return { ...course, gp, lg, gcp: gp * credit };
      });

      const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
      return { ...semester, courses, gpa };
    });
  }, [semesters]);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Navigation & Header */}
        <header className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-6 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <LayoutDashboard className="text-blue-400" size={24} />
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                  GPA <span className="text-blue-500">Dashboard</span>
                </h1>
              </div>
              <p className="text-gray-400 max-w-xl">
                Track your academic progress with precision. Add your semesters and courses below to see your real-time performance metrics.
              </p>
            </div>

            <button
              onClick={addSemester}
              className="flex cursor-pointer items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 text-white px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95 font-semibold"
            >
              <Plus size={20} className="text-blue-400" />
              <span>Add New Semester</span>
            </button>
          </div>
        </header>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Semester Cards */}
          <div className="lg:col-span-8 space-y-2">
            {semestersWithGPA.length > 0 ? (
              semestersWithGPA.map((sem) => (
                <SemesterCard
                  key={sem.id}
                  semester={sem}
                  onAddCourse={() => addCourse(sem.id)}
                  onUpdateCourse={(courseId, field, value) => updateCourse(sem.id, courseId, field, value)}
                  onDeleteCourse={(courseId) => deleteCourse(sem.id, courseId)}
                  onDeleteSemester={() => deleteSemester(sem.id)}
                />
              ))
            ) : (
              <div className="text-center py-20 bg-gray-900/30 border border-gray-800 rounded-2xl">
                <p className="text-gray-500">No semesters found. Start by adding a semester.</p>
              </div>
            )}
          </div>

          {/* Right Column: Statistics Summary */}
          <aside className="lg:col-span-4 self-start">
            <SummaryCard semesters={semestersWithGPA} />
          </aside>
        </div>
      </div>

      {/* Confirmation Modals */}
      <ConfirmModal
        isOpen={deleteType === "semester"}
        onClose={() => setDeleteType(null)}
        onConfirm={confirmDeleteSemester}
        title="Delete Semester"
        message={`Are you sure you want to delete Semester ${deleteId}? This action will remove all courses within this semester.`}
        confirmText="Delete"
      />

      <ConfirmModal
        isOpen={deleteType === "course"}
        onClose={() => setDeleteType(null)}
        onConfirm={confirmDeleteCourse}
        title="Remove Course"
        message="Are you sure you want to remove this course from your dashboard? This cannot be undone."
        confirmText="Remove"
      />
    </div>
  );
}
