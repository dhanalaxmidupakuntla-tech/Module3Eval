import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getData, saveData } from "../utils/localStorage";

const UpdateRestaurant = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState(state);

  const handleUpdate = () => {
    if (!confirm("Update restaurant?")) return;
    const updated = getData().map(r =>
      r.restaurantID === form.restaurantID ? form : r
    );
    saveData(updated);
    alert("Updated");
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <h2>Update</h2>
      <input value={form.restaurantName} onChange={e => setForm({ ...form, restaurantName: e.target.value })} />
      <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateRestaurant;
