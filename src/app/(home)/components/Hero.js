"use client";

import Link from "next/link";
import { ArrowRight, Calculator, BarChart3, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    return (
        <section className="relative pt-24 pb-28 lg:pt-36 lg:pb-44 overflow-hidden">
            {/* Background Glows with better positioning for responsive */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-5%] left-[5%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full sm:w-[40%] sm:h-[40%]" />
                <div className="absolute bottom-[5%] right-[5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[110px] rounded-full sm:w-[30%] sm:h-[30%]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs font-semibold mb-8 animate-fade-in">
                        <GraduationCap size={14} />
                        <span className="tracking-wider uppercase">Trusted by 10,000+ Students</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight px-2">
                        Master Your Grades with <br className="hidden sm:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
                            Precision & Style.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl md:px-12 mb-12 leading-relaxed max-w-2xl mx-auto">
                        The most advanced GPA & CGPA calculator for modern students. Track your academic progress,
                        visualize your performance, and plan your future with ease.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                        <Link
                            href={user ? "/calculator-deshbord" : "/signup"}
                            className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 active:scale-95 group"
                        >
                            Get Started Free <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/about"
                            className="w-full sm:w-auto px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white border border-gray-800 hover:border-gray-700 rounded-2xl font-bold transition-all active:scale-95"
                        >
                            Learn How It Works
                        </Link>
                    </div>

                    {/* Stats/Floating Icons Grid */}
                    <div className="mt-24 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { icon: <Calculator className="text-blue-400" />, label: "Accurate Calcs" },
                            { icon: <BarChart3 className="text-indigo-400" />, label: "Performance Tracking" },
                            { icon: <GraduationCap className="text-blue-400" />, label: "Degree Planning" },
                            { icon: <ArrowRight className="text-indigo-400" />, label: "Future Ready" }
                        ].map((item, i) => (
                            <div key={i} className="glass p-5 rounded-3xl flex items-center gap-4 border border-gray-800/50 hover:border-blue-500/30 transition-all group">
                                <div className="p-3 bg-gray-900 rounded-2xl group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-sm font-semibold text-gray-200">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
