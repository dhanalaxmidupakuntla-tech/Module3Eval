import { useEffect, useState } from "react";
import { getData, saveData } from "../utils/localStorage";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");
  const navigate = useNavigate();

  const load = () => setData(getData());
  useEffect(load, []);

  const filtered = data
    .filter(r => r.restaurantName.toLowerCase().includes(search.toLowerCase()) || r.address.toLowerCase().includes(search.toLowerCase()))
    .filter(r => (type ? r.type === type : true))
    .filter(r => (parking ? r.parkingLot === (parking === "true") : true));

  const handleDelete = (id) => {
    if (!confirm("Are you sure?")) return;
    saveData(data.filter(r => r.restaurantID !== id));
    alert("Deleted");
    load();
  };

  return (
    <>
      <Navbar {...{ search, setSearch, type, setType, parking, setParking }} />
      <AddRestaurantForm refresh={load} />
      {filtered.map(r => (
        <RestaurantCard
          key={r.restaurantID}
          data={r}
          isAdmin
          onDelete={handleDelete}
          onUpdate={() => navigate("/admin/restaurants/update", { state: r })}
        />
      ))}
    </>
  );
};

export default AdminDashboard;
