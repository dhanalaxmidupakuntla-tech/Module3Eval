import { useEffect, useState } from "react";
import { getData } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");

  useEffect(() => setData(getData()), []);

  const filtered = data
    .filter(r => r.restaurantName.toLowerCase().includes(search.toLowerCase()) || r.address.toLowerCase().includes(search.toLowerCase()))
    .filter(r => (type ? r.type === type : true))
    .filter(r => (parking ? r.parkingLot === (parking === "true") : true));

  return (
    <>
      <Navbar {...{ search, setSearch, type, setType, parking, setParking }} />
      {filtered.map(r => (
        <RestaurantCard key={r.restaurantID} data={r} />
      ))}
    </>
  );
};

export default CustomerDashboard;
