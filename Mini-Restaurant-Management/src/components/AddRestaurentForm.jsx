import { useState } from "react";
import { getData, saveData } from "../utils/localStorage";

const AddRestaurantForm = ({ refresh }) => {
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "",
    parkingLot: "",
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
  });

  const handleAdd = () => {
    if (Object.values(form).includes("")) {
      alert("Fill all fields");
      return;
    }

    const data = getData();
    const newItem = {
      ...form,
      restaurantID: Date.now(),
      parkingLot: form.parkingLot === "true",
    };

    saveData([...data, newItem]);
    alert("Restaurant Added");
    refresh();
  };

  return (
    <div>
      <h3>Add Restaurant</h3>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, restaurantName: e.target.value })} />
      <input placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, type: e.target.value })}>
        <option value="">Type</option>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>
      <select onChange={(e) => setForm({ ...form, parkingLot: e.target.value })}>
        <option value="">Parking</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddRestaurantForm;
