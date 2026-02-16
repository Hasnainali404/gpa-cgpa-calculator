"use client";

import { Star, Shield, Smile, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: <Star size={32} />,
      title: "User-Friendly Interface",
      description:
        "Clean and intuitive design makes GPA calculation quick and effortless for all students.",
    },
    {
      icon: <Shield size={32} />,
      title: "Accurate & Reliable",
      description:
        "All calculations strictly follow official GPA/CGPA formulas, giving you precise results every time.",
    },
    {
      icon: <Zap size={32} />,
      title: "Fast & Efficient",
      description:
        "Instant calculations even for multiple semesters — no more waiting or manual errors.",
    },
    {
      icon: <Smile size={32} />,
      title: "Student-Focused",
      description:
        "Built specifically for university students, with tips, charts, and guidance to track academic performance.",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why Our Platform Stands Out
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Unlike other GPA calculators, we focus on simplicity, speed, accuracy, and providing tools specifically tailored for university students.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-lg hover:shadow-blue-500/20 transition"
            >
              <div className="text-blue-500">{adv.icon}</div>
              <h3 className="text-xl font-semibold">{adv.title}</h3>
              <p className="text-gray-400 text-sm">{adv.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
