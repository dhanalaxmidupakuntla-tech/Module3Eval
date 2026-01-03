import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("authUser")) || null
    );

    const login = (email, password) => {
        if (email === "admin@gmail.com" && password === "admin1234") {
            const data = { role: "admin"};
            setUser(data);
            localStorage.setItem("authUser", JSON.stringify(data));
            return "admin/dashboard";
        }
        if (email === "customer@gmail.com" && password === "customer1234") {
            const data = { role: "customer"};
            setUser(data);
            localStorage.setItem("authUser", JSON.stringify(data));
            return "Customer/dashboard";
        }

        alert("Invalid credentials");
        return null;
    }

    const logout = () => {
        setUser(null);
        localStorage.clear();
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}