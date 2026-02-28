"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Loader2, Github, Chrome } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
    const { user, login } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
        setError("");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const success = login(data);

        if (!success) {
            setLoading(false);
            setError("Invalid email or password. Please try again or sign up.");
        }
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
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-gray-400">Log in to your account to continue tracking your progress.</p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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
                            <div className="flex justify-between items-center px-1">
                                <label className="text-sm font-medium text-gray-300">Password</label>
                                <Link href="#" className="text-xs text-blue-500 hover:text-blue-400 transition">Forgot Password?</Link>
                            </div>
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
                                    Log In <ArrowRight size={20} />
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
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-blue-500 hover:text-blue-400 font-semibold transition">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
