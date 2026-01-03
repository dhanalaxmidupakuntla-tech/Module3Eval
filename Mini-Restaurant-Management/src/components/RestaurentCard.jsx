const RestaurentCard = ({data, isAdmin, onDelete, onUpdate}) => {
    <div>
        <img src={data.image} alt="image" width="200" />
        <h3>{data.restaurantName}</h3>
        <p>{data.address}</p>
        <p>{data.type}</p>
        <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>

        {isAdmin && (
            <>
            <button onClick={() => onUpdate(data)}>Update</button>
            <button onClick={() => onDelete(data.restaurantID)}>Delete</button>
            </>
        )}
    </div>
}

export default RestaurentCard