"use client";

import Link from "next/link";
import { Menu, User, LogOut, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [userMenu, setUserMenu] = useState(false); // profile dropdown
  const [user, setUser] = useState(null);

  // Check login status
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/signup"; // redirect to signup
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-semibold text-white tracking-wide">
            GPA<span className="text-blue-500">&</span>CGPA
          </span>
          <span className="text-xs text-gray-400 tracking-widest">
            CALCULATE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA / Profile */}
        <div className="hidden md:block relative">
          {!user ? (
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition shadow-lg hover:shadow-blue-500/30"
            >
              Sign Up
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setUserMenu(!userMenu)}
                className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                <User size={18} />
                <span>{user.name}</span>
                <ChevronDown size={16} />
              </button>

              {userMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50">
                  <Link
                    href="/calculator-deshbord"
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-red-500 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-4">
          <Link
            href="/"
            className="block text-gray-400 hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-400 hover:text-blue-400 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-gray-400 hover:text-blue-400 transition"
          >
            Contact
          </Link>

          {!user ? (
            <Link
              href="/signup"
              className="block bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center font-medium transition"
            >
              Sign Up
            </Link>
          ) : (
            <div className="border-t border-gray-800 pt-4">
              <div className="flex items-center justify-between px-2">
                <span className="flex items-center gap-2">
                  <User size={18} /> {user.name}
                </span>
                <button onClick={handleLogout} className="text-red-500 hover:text-red-400">
                  Logout
                </button>
              </div>
              <Link
                href="/calculator-deshbord"
                className="block mt-2 px-2 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded transition"
              >
                Profile
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}