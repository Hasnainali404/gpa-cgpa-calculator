// calculator-deshbord

"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CalculatorDashboard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [courseName, setCourseName] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [grade, setGrade] = useState("");
  
  
  const checkGrade = (grade) => {
    if (grade > 100 || grade < 0) return false;
    const getGreatPoints = (grade) => {
      if (grade >= 90) return 4.0;
      if (grade >= 85) return 4.0;
      if (grade >= 80) return 3.7;
      if (grade >= 75) return 3.3;
      if (grade >= 70) return 3.0;
      if (grade >= 65) return 2.7;
      if (grade >= 60) return 2.3;
      if (grade >= 55) return 2.0;
      if (grade >= 50) return 1.0;
      return 0.0;
    }
    return getGreatPoints(grade);
  }


  const onSubmit = () => {
  console.log(courseName);
  console.log("creditHours");
    console.log("Grade Point:", checkGrade(parseFloat(grade)));
    const calcGPA = creditHours && checkGrade(parseFloat(grade)) ? (parseFloat(grade) * parseFloat(creditHours)) / parseFloat(creditHours) : 0;

    const calcCGPA = creditHours && checkGrade(parseFloat(grade)) ? (parseFloat(grade) * parseFloat(creditHours)) / parseFloat(creditHours) : 0;
  }



  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      router.push("/signup"); // redirect if not logged in
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, [router]);

  if (!user) return null; // or loading spinner



  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user.name}!
      </h1>
      <p className="text-gray-400 mb-6">
        Now you can calculate your GPA & CGPA easily.
      </p>

      {/* Example calculator placeholder */}
      <div className="w-auto bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">GPA Calculator</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input onChange={(e) => setCourseName(e.target.value)} className=" bg-amber-200 m-1 w-52" placeholder="course name..." type="text"
              {...register("courseName", {

                required: true,
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only letters are allowed",
                }
              })} />
            <input onChange={(e) => setCreditHours(e.target.value)} className=" bg-amber-200 m-1 w-8" maxLength={3} type="text"
              {...register("creditHours", {
                required: true,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
                maxLength: 3
              })} />
            <input onChange={(e) => setGrade(e.target.value)} className=" bg-amber-200 m-1 w-8" maxLength={3} type="text"
              {...register("grade", {
                required: true,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
                maxLength: 3
              })} />

            <button type="submit">Calculate</button>
          </form>
        </div>
      </div>
    </div>
  );
}
