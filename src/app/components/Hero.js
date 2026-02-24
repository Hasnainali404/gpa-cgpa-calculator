"use client";

import Link from "next/link";
import { ArrowRight, Calculator, BarChart3, GraduationCap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-indigo-600/10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 animate-fade-in">
                        <GraduationCap size={14} />
                        <span>Trusted by 10,000+ Students</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                        Master Your Grades with <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
                            Precision & Style.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg lg:text-xl md:px-12 mb-10 leading-relaxed">
                        The most advanced GPA & CGPA calculator for modern students. Track your academic progress,
                        visualize your performance, and plan your future with ease.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/calculator-deshbord"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-blue-500/25 active:scale-95"
                        >
                            Get Started Free <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/about"
                            className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white border border-gray-800 hover:border-gray-700 rounded-xl font-bold transition active:scale-95"
                        >
                            Learn How It Works
                        </Link>
                    </div>

                    {/* Stats/Floating Icons Grid */}
                    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {[
                            { icon: <Calculator className="text-blue-400" />, label: "Accurate Calcs" },
                            { icon: <BarChart3 className="text-indigo-400" />, label: "Performance Tracking" },
                            { icon: <GraduationCap className="text-blue-400" />, label: "Degree Planning" },
                            { icon: <ArrowRight className="text-indigo-400" />, label: "Future Ready" }
                        ].map((item, i) => (
                            <div key={i} className="glass p-4 rounded-2xl flex items-center gap-3 border border-gray-800/50 hover:border-blue-500/30 transition-all group">
                                <div className="p-2 bg-gray-900 rounded-lg group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-sm font-medium text-gray-300">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
