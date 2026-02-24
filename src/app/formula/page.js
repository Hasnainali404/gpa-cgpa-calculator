"use client";

import { Calculator, BookOpen, Sigma, Hash } from "lucide-react";

export default function FormulaPage() {
    return (
        <main className="min-h-screen pt-20 pb-24 font-sans">
            <section className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">
                        Calculation <span className="text-blue-500">Formulas</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Understand how your academic performance is measured. We use standardized formulas for both GPA and CGPA calculations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* GPA Section */}
                    <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-xl">
                                <Calculator className="w-6 h-6 text-blue-500" />
                            </div>
                            <h2 className="text-2xl font-bold font-outfit text-white">Semester GPA</h2>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Grade Point Average (GPA) is calculated for a single semester based on the grades obtained in all courses and the credit hours assigned to them.
                        </p>

                        <div className="bg-gray-950/80 border border-gray-800 rounded-xl p-6 mb-6">
                            <div className="text-center">
                                <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">The Formula</p>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl md:text-2xl text-blue-400 font-mono">
                                        Σ (Grade Points × Credit Hours)
                                    </div>
                                    <div className="w-full h-[1px] bg-gray-700 my-3 max-w-[280px]"></div>
                                    <div className="text-xl md:text-2xl text-blue-400 font-mono">
                                        Total Credit Hours
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-white font-semibold flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-blue-500" />
                                Example Calculation
                            </h3>
                            <ul className="text-sm text-gray-500 space-y-2 list-disc pl-5">
                                <li>Course A: 3 Credits, Grade B (3.0 points) = 9.0</li>
                                <li>Course B: 4 Credits, Grade A (4.0 points) = 16.0</li>
                                <li>Total Points: 25.0 | Total Credits: 7</li>
                                <li className="text-blue-400 font-bold list-none px-0 mt-2">GPA = 25.0 / 7 = 3.57</li>
                            </ul>
                        </div>
                    </div>

                    {/* CGPA Section */}
                    <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-xl">
                                <Sigma className="w-6 h-6 text-purple-500" />
                            </div>
                            <h2 className="text-2xl font-bold font-outfit text-white">Accumulated CGPA</h2>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Cumulative Grade Point Average (CGPA) is the overall average of your performance across all semesters completed so far.
                        </p>

                        <div className="bg-gray-950/80 border border-gray-800 rounded-xl p-6 mb-6">
                            <div className="text-center">
                                <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">The Formula</p>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl md:text-2xl text-purple-400 font-mono">
                                        Σ (Semester GPA × Semester Credits)
                                    </div>
                                    <div className="w-full h-[1px] bg-gray-700 my-3 max-w-[320px]"></div>
                                    <div className="text-xl md:text-2xl text-purple-400 font-mono">
                                        Total Cumulative Credits
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-white font-semibold flex items-center gap-2">
                                <Hash className="w-4 h-4 text-purple-500" />
                                Points to Remember
                            </h3>
                            <ul className="text-sm text-gray-500 space-y-2 list-disc pl-5">
                                <li>CGPA considers all semesters weighed by their total credit hours.</li>
                                <li>Repeat courses usually replace the previous grade in calculations.</li>
                                <li>Pass/Fail courses typically do not affect the CGPA.</li>
                                <li className="text-purple-400 font-bold list-none px-0 mt-2 italic">Maintain a high GPA early to build a strong CGPA foundation.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
