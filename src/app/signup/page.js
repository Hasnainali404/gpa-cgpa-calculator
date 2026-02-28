"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, ArrowRight, Loader2, Github, Chrome } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";

export default function Signup() {
  const { user, signup } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Redirect if user already logged in
  useEffect(() => {
    if (user) {
      router.push("/calculator-deshbord");
    }
  }, [user, router]);

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    signup(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6 py-12 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="text-3xl font-bold text-white tracking-tight">
              GPA<span className="text-blue-500"> & </span>CGPA
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-white mb-2">Create an Account</h2>
          <p className="text-gray-400">Join thousands of students managing their academic success.</p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-500 outline-none border border-gray-700/50 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              {errors.name && (
                <span className="text-red-500 text-xs ml-1">{errors.name.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-500 outline-none border border-gray-700/50 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-xs ml-1">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-500 outline-none border border-gray-700/50 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters required" }
                  })}
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs ml-1">{errors.password.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Sign Up <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-500 font-medium">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 rounded-xl text-gray-300 text-sm font-medium transition-all">
              <Chrome size={18} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 rounded-xl text-gray-300 text-sm font-medium transition-all">
              <Github size={18} /> GitHub
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:text-blue-400 font-semibold transition">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
