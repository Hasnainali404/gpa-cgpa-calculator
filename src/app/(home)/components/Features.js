"use client";

import { Shield, Zap, Layout, Save, Share2, History } from "lucide-react";

const features = [
    {
        title: "Instant Accuracy",
        description: "Real-time calculations as you type. No more hitting calculate and waiting.",
        icon: <Zap className="text-yellow-400" />,
    },
    {
        title: "Auto Persistence",
        description: "Your data is automatically saved to your device. Close the browser and pick up where you left off.",
        icon: <Save className="text-blue-400" />,
    },
    {
        title: "Elegant Interface",
        description: "A professional dark-themed dashboard designed for focus and productivity.",
        icon: <Layout className="text-indigo-400" />,
    },
    {
        title: "History Tracker",
        description: "Manage multiple semesters and track your progress over time with ease.",
        icon: <History className="text-green-400" />,
    },
    {
        title: "Shareable Results",
        description: "Export your GPA reports or share them with advisors in just a few clicks.",
        icon: <Share2 className="text-purple-400" />,
    },
    {
        title: "Privacy First",
        description: "We don't store your academic data on our servers. Your privacy is our priority.",
        icon: <Shield className="text-red-400" />,
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-gray-950/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        Powerful Features for <span className="text-blue-500">Every Student</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Everything you need to manage your academic performance in one workspace.
                        Simple, fast, and completely free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:border-blue-500/20">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
