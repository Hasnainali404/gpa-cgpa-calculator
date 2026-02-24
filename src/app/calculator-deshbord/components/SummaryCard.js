"use client";

import { PieChart, TrendingUp, Award, Calculator } from "lucide-react";

/**
 * SummaryCard component displays the overall CGPA and credit statistics.
 * 
 * @param {Object} props - Component properties.
 * @param {Array} props.semesters - Array of semester objects with GPA data.
 */
export default function SummaryCard({ semesters }) {
    // Calculate overall CGPA
    const totalCredits = semesters.reduce((acc, sem) => {
        return acc + sem.courses.reduce((cAcc, course) => cAcc + (parseFloat(course.credit) || 0), 0);
    }, 0);

    const totalPoints = semesters.reduce((acc, sem) => {
        return acc + sem.courses.reduce((cAcc, course) => cAcc + (parseFloat(course.gp) * (parseFloat(course.credit) || 0) || 0), 0);
    }, 0);

    const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl sticky top-6 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full"></div>

            <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                    <PieChart className="text-blue-400" size={20} />
                    <h2 className="text-lg font-bold text-gray-100 uppercase tracking-tight">Academic Summary</h2>
                </div>

                {/* CGPA Display */}
                <div className="bg-gray-950/50 border border-gray-800 rounded-xl p-6 mb-6 text-center group hover:border-blue-500/40 transition-all duration-500">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mb-2">Overall CGPA</p>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-500 mb-1 group-hover:scale-105 transition-transform duration-500">
                        {cgpa}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                        <Award size={14} className="text-yellow-500/70" />
                        <span>Cumulative performance</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-4">
                    {/* Total Credits */}
                    <div className="flex items-center justify-between p-4 bg-gray-800/40 border border-gray-800 rounded-xl hover:bg-gray-800/60 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <Calculator className="text-emerald-400" size={18} />
                            </div>
                            <span className="text-sm text-gray-300 font-medium">Total Credits</span>
                        </div>
                        <span className="text-lg font-bold text-gray-100">{totalCredits}</span>
                    </div>

                    {/* Semesters Count */}
                    <div className="flex items-center justify-between p-4 bg-gray-800/40 border border-gray-800 rounded-xl hover:bg-gray-800/60 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-500/10 rounded-lg">
                                <TrendingUp className="text-indigo-400" size={18} />
                            </div>
                            <span className="text-sm text-gray-300 font-medium">Semesters</span>
                        </div>
                        <span className="text-lg font-bold text-gray-100">{semesters.length}</span>
                    </div>
                </div>

                {/* Motivational Tip */}
                <div className="mt-8 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                    <p className="text-xs text-gray-400 italic leading-relaxed">
                        "Education is the most powerful weapon which you can use to change the world."
                        <span className="block mt-1 font-semibold text-gray-500">— Nelson Mandela</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
