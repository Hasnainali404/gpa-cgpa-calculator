"use client";

import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Github,
  BookOpen,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              GPA<span className="text-blue-500">&</span>CGPA
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Smart GPA & CGPA calculator built for modern students.
            </p>

            {/* Subscribe */}
            <div className="mt-6 flex rounded-lg overflow-hidden border border-gray-700">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 px-2 py-2 text-sm text-white placeholder-gray-500 outline-none flex-1"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 text-sm font-medium transition cursor-pointer">
                Sub
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/formula" className="text-gray-400 hover:text-blue-400 transition">
                  Formula
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-gray-400 hover:text-blue-400 transition">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition cursor-pointer">
                GPA Guide
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                CGPA Formula
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                FAQ
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Quick Info / Social */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering students with precise calculation tools. Follow our journey for more updates.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-900 rounded-lg hover:bg-blue-600 transition">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/hasnainali0" className="p-2 bg-gray-900 rounded-lg hover:bg-blue-600 transition">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Hasnainali404" className="p-2 bg-gray-900 rounded-lg hover:bg-blue-600 transition">
                <Github size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} GPA&CGPA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}