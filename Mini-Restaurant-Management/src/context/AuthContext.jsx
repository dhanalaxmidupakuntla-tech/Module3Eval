import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser")) || null
  );

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      const u = { role: "admin" };
      setUser(u);
      localStorage.setItem("authUser", JSON.stringify(u));
      return "/admin/dashboard";
    }

    if (email === "customer@gmail.com" && password === "customer1234") {
      const u = { role: "customer" };
      setUser(u);
      localStorage.setItem("authUser", JSON.stringify(u));
      return "/customers/dashboard";
    }

    alert("Invalid credentials");
    return null;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
