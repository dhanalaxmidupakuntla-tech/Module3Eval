import "./RestaurantCard.css";

const RestaurantCard = ({ data, isAdmin, onDelete, onUpdate }) => (
  <div className="card">
    <img src={data.image} alt="" />
    <h3>{data.restaurantName}</h3>
    <p>{data.address}</p>
    <p>{data.type}</p>
    <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>

    {isAdmin && (
      <div>
        <button onClick={() => onUpdate(data)}>Update</button>
        <button onClick={() => onDelete(data.restaurantID)}>Delete</button>
      </div>
    )}
  </div>
);

export default RestaurantCard;
