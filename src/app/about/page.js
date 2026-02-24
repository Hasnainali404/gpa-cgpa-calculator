"use client";

import Link from "next/link";
import { Info, Target, Users, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20 pb-24">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-6">
                    Empowering Your <span className="text-blue-500">Academic Journey</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    GPA & CGPA Calculator is built with a simple mission: to provide students with the most professional, accurate, and easy-to-use tools for academic tracking.
                </p>
            </section>

            {/* Content Grid */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-3xl font-bold font-outfit text-white mb-6">Who We Are</h2>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        We are a team of passionate developers and educators who understand the challenges of academic life. We noticed that many existing GPA calculators were outdated or complex, so we decided to build something better.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Our tool is designed to be sleek, mobile-friendly, and highly functional, ensuring you spend less time calculating and more time focusing on what matters most: your studies.
                    </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-gray-800/50 rounded-xl text-center">
                            <Target className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                            <h3 className="text-white font-semibold">Vision</h3>
                            <p className="text-xs text-gray-500 mt-2">Simplifying academic management for everyone.</p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-xl text-center">
                            <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                            <h3 className="text-white font-semibold">Quality</h3>
                            <p className="text-xs text-gray-500 mt-2">Precision and accuracy in every calculation.</p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-xl text-center">
                            <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                            <h3 className="text-white font-semibold">User Centric</h3>
                            <p className="text-xs text-gray-500 mt-2">Built based on student feedback and needs.</p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-xl text-center">
                            <Info className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                            <h3 className="text-white font-semibold">Simple</h3>
                            <p className="text-xs text-gray-500 mt-2">Intuitive design for seamless experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="max-w-4xl mx-auto px-6 text-center">
                <div className="bg-blue-600 rounded-3xl p-10 md:p-16 shadow-2xl shadow-blue-500/20">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Calculate Your Progress?</h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Join thousands of students who trust our calculator for their academic tracking.
                    </p>
                    <Link
                        href="/calculator-deshbord"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </section>
        </main>
    );
}
