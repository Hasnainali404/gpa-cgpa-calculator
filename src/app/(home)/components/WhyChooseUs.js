"use client";

import { CheckCircle2, TrendingUp, Cpu, Globe } from "lucide-react";

const reasons = [
    {
        title: "Data Visualization",
        description: "Get beautiful charts and breakdowns of your academic progress over time.",
        icon: <TrendingUp className="text-blue-500" />,
    },
    {
        title: "Lightweight & Fast",
        description: "Built with Next.js 16 to ensure a lightning-fast experience even on slow connections.",
        icon: <Cpu className="text-indigo-500" />,
    },
    {
        title: "Universal Access",
        description: "Access your dashboard from any device. Mobile, tablet, or desktop.",
        icon: <Globe className="text-blue-400" />,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                            Why <span className="text-blue-500">Students Love</span> <br />
                            Our Calculator
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            We understand the stress of finals and the need for clarity. Our tool is designed
                            not just to calculate numbers, but to give you a clear roadmap to your academic goals.
                        </p>

                        <ul className="space-y-6">
                            {[
                                "100% Free - No hidden subscriptions",
                                "Advanced grading formulas for all universities",
                                "Dark mode optimized for late-night study sessions",
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-4 text-gray-300">
                                    <div className="p-1 bg-blue-500/20 rounded-full">
                                        <CheckCircle2 size={20} className="text-blue-500" />
                                    </div>
                                    <span className="font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-1 gap-6">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="glass p-8 rounded-3xl flex gap-6 items-start border border-gray-800 hover:border-blue-500/20 transition-all hover:translate-x-2"
                            >
                                <div className="p-4 bg-gray-900 rounded-2xl">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
