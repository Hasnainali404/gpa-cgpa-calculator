"use client";

import Link from "next/link";
import { Info, Target, Users, Award, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    return (
        <main className="min-h-screen pt-24 pb-28 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-widest mb-6">
                    Our Mission
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
                    Empowering Your <br className="sm:hidden" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                        Academic Journey
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    GPA & CGPA Calculator is built with a simple mission: to provide students with the most professional, accurate, and easy-to-use tools for academic tracking.
                </p>
            </section>

            {/* Content Grid */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 relative z-10">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                            We are a team of passionate developers and educators who understand the challenges of academic life. We noticed that many existing GPA calculators were outdated or complex, so we decided to build something better.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Our tool is designed to be sleek, mobile-friendly, and highly functional, ensuring you spend less time calculating and more time focusing on what matters most: your studies.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-xs font-medium text-gray-300">#StudentFirst</div>
                        <div className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-xs font-medium text-gray-300">#AcademicSuccess</div>
                        <div className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-xs font-medium text-gray-300">#TechInEducation</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { icon: <Target className="w-6 h-6" />, title: "Vision", desc: "Simplifying academic management for everyone." },
                        { icon: <Award className="w-6 h-6" />, title: "Quality", desc: "Precision and accuracy in every calculation." },
                        { icon: <Users className="w-6 h-6" />, title: "User Centric", desc: "Built based on student feedback and needs." },
                        { icon: <Info className="w-6 h-6" />, title: "Simple", desc: "Intuitive design for seamless experience." }
                    ].map((item, i) => (
                        <div key={i} className="glass p-8 rounded-3xl border border-gray-800 hover:border-blue-500/30 transition-all hover:translate-y-[-4px] group">
                            <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-12 md:p-20 shadow-2xl shadow-blue-500/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32 group-hover:bg-white/10 transition-colors" />

                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">Ready to Calculate Your Progress?</h2>
                    <p className="text-blue-100 mb-10 text-lg md:text-xl relative z-10 max-w-2xl mx-auto font-medium">
                        Join thousands of students who trust our calculator for their academic tracking.
                    </p>
                    <Link
                        href={user ? "/calculator-deshbord" : "/signup"}
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition shadow-xl relative z-10 hover:scale-105 active:scale-95"
                    >
                        Go to Dashboard <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
