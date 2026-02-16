"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [user, setUser] = useState(null);


  // Check login status
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to from-blue-600/20 via-purple-600/10 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Keep Your <span className="text-blue-500">GPA & CGPA</span> in Check
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
            University life can get hectic! Our GPA & CGPA calculator helps you track your semester performance, predict your CGPA, and stay on top of your academic goals effortlessly.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {user ? (
              <Link
                href="/calculator-deshbord"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-semibold transition shadow-lg hover:shadow-blue-500/30 text-center"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-semibold transition shadow-lg hover:shadow-blue-500/30 text-center"
              >
                Start Calculating
              </Link>
            )
            }

            <Link
              href="/tutorial"
              className="border border-gray-700 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-lg text-sm font-semibold transition text-center"
            >
              How It Works
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <h3 className="text-white font-semibold">Fast & Simple</h3>
              <p>Compute your GPA in seconds, no stress!</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Accurate</h3>
              <p>Reliable calculations you can trust for all semesters.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Student-Friendly</h3>
              <p>Designed with university students in mind.</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/hero-mockup.png"
              alt="Student GPA Calculator Dashboard"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl border border-gray-800"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
