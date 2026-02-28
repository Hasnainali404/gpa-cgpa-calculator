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

  const login = (data) => {
    // In this prototype, we just save the user and redirect
    const storedUser = localStorage.getItem("user");
    const userData = storedUser ? JSON.parse(storedUser) : null;

    if (userData && userData.email === data.email) {
      setUser(userData);
      router.push("/calculator-deshbord");
      return true;
    }
    return false;
  };

  const signup = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    router.push("/calculator-deshbord");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/signup");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
