"use client";

import { Cpu, CheckCircle, Clock, BarChart2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Cpu size={32} />,
      title: "Fast Calculations",
      description:
        "Get your GPA & CGPA results in seconds without wasting time, even for multiple semesters.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Accurate Results",
      description:
        "All calculations follow the official GPA & CGPA formulas, ensuring error-free results every time.",
    },
    {
      icon: <Clock size={32} />,
      title: "Track Your Progress",
      description:
        "Monitor your semester-wise GPA and overall CGPA to stay on top of your academic performance.",
    },
    {
      icon: <BarChart2 size={32} />,
      title: "Visual Performance",
      description:
        "Interactive charts and graphs help you understand your grades and performance trends quickly.",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Features Designed For University Students
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Our platform is built to simplify GPA and CGPA tracking, so you can focus on learning while we take care of the calculations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-lg hover:shadow-blue-500/20 transition"
            >
              <div className="text-blue-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
