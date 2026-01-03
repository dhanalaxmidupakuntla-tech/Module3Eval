import { useEffect, useState } from "react";
import { getData, saveData } from "../utils/localStorage";
import AddRestaurentForm from "../components/AddRestaurentForm";
import RestaurentCard from "../components/RestaurentCard";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const load = () => setData(getData());

    useEffect(load, []);

    const handleDelete = (id) => {
        if (!confirm("Are you sure?")) return;
        const updated = data.fliter(r => r.restaurentID !== id);
        saveData(updated);
        alert("Deleted Successfully");
        load();
    }

    return (
        <div>
            <AddRestaurentForm refresh = {load} />
            {data.map(r => (
                <RestaurentCard
                    key = {r.restaurentID}
                    data = {r}
                    isAdmin 
                    onDelete = {handleDelete}
                    onUpdate = {() => navigate("/admin/restaurents/update", {state: r})}
                />
            ))}
        </div>
    )
}

export default AdminDashboard