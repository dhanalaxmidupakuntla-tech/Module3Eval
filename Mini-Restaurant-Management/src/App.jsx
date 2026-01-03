import { Route, Routes } from "react-router-dom"

const App = () => {
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element = {
            <ProtectedRoute role="admin" >AdminDashboard</ProtectedRoute>
        }/>
        <Route path="/customers/dashboard" element = {
            <ProtectedRoute role="customer" >CustomerDashboard</ProtectedRoute>
        }/>
    </Routes>
}

export default App