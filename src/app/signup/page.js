"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Signup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Redirect if user already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/");
    }
  }, [router]);

  const onSubmit = (data) => {
    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(data));
    // Redirect to calculator dashboard
    router.push("/calculator-deshbord");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          
          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">Name is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">Valid email is required</span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                Password must be at least 6 characters
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
