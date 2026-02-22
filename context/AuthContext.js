"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
