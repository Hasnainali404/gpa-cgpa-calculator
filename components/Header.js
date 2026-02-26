"use client";

import Link from "next/link";
import { Menu, User, LogOut, ChevronDown, Settings, LayoutDashboard, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false); // mobile menu
  const [userMenu, setUserMenu] = useState(false); // profile dropdown
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Close dropdown on click outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="text-2xl font-bold text-white tracking-wide group-hover:text-blue-400 transition">
            GPA<span className="text-blue-500"> & </span>CGPA
          </span>
          <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 transition">
            Calculate Smart
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/formula"
            className="text-gray-400 hover:text-white transition duration-300 relative group"
          >
            Formula
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Desktop CTA / Profile */}
        <div className="hidden md:flex items-center gap-4 relative" ref={dropdownRef}>
          {!user ? (
            <>
              <Link
                href="/login"
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-95"
              >
                Get Started
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setUserMenu(!userMenu)}
                className="flex cursor-pointer items-center gap-3 bg-gray-900/50 border border-gray-800 pl-2 pr-4 py-1.5 rounded-full hover:bg-gray-800/80 hover:border-gray-700 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-gray-950 group-hover:ring-blue-500/30 transition">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-200">{user.name}</span>
                <ChevronDown size={14} className={`text-gray-500 transition-transform duration-300 ${userMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {userMenu && (
                <div className="absolute right-0 mt-3 w-56 bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
                  <div className="px-3 py-2 border-b border-gray-800 mb-2">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Authorized User</p>
                    <p className="text-sm text-gray-200 truncate">{user.name}</p>
                  </div>

                  <Link
                    href="/calculator-deshbord"
                    onClick={() => setUserMenu(false)}
                    className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-blue-600 rounded-xl transition group"
                  >
                    <LayoutDashboard size={18} className="text-blue-500 group-hover:text-white" />
                    <span className="text-sm font-medium">Dashboard</span>
                  </Link>

                  <Link
                    href="/calculator-deshbord"
                    className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-gray-800 rounded-xl transition group"
                  >
                    <Settings size={18} className="text-gray-500 group-hover:text-white" />
                    <span className="text-sm font-medium">Settings</span>
                  </Link>

                  <div className="mt-2 pt-2 border-t border-gray-800">
                    <button
                      onClick={handleLogout}
                      className="w-full  flex items-center gap-3 px-3 py-2.5 text-red-400 hover:bg-red-500/10 rounded-xl transition cursor-pointer"
                    >
                      <LogOut size={18} />
                      <span className="text-sm font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white p-2 hover:bg-gray-900 rounded-lg transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden glass border-t border-gray-800 px-6 py-6 space-y-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-blue-400 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link
              href="/formula"
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-blue-400 transition"
            >
              Formula
            </Link>
          </nav>

          <div className="pt-6 border-t border-gray-800">
            {!user ? (
              <div className="flex flex-col gap-4">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="w-full py-3 px-6 text-center text-gray-300 font-medium hover:text-white transition"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-xl text-center shadow-lg shadow-blue-500/20"
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-4 px-2">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{user.name}</p>
                    <p className="text-gray-400 text-sm">Dashboard Member</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href="/calculator-deshbord"
                    onClick={() => setOpen(false)}
                    className="flex flex-col items-center gap-2 p-4 bg-gray-900 rounded-2xl border border-gray-800"
                  >
                    <LayoutDashboard size={20} className="text-blue-500" />
                    <span className="text-xs font-medium text-gray-300">Dashboard</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex flex-col items-center gap-2 p-4 bg-gray-900 rounded-2xl border border-gray-800"
                  >
                    <LogOut size={20} className="text-red-500" />
                    <span className="text-xs font-medium text-gray-300">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
