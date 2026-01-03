import { useState } from "react";
import {getData, saveData } from "../utils/localStorage";

const AddReastaurentForm = () => {

    const [form, setForm] = useState({
        "restaurantID": "",
        "restaurantName": "",
        "address": "",
        "type": "",
        "parkingLot": true,
        "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });

    const handleAdd = () => {
        if(Object.values(form).includes("")){
            alert("fill it all");
            return;
        }

        const data = getData();
        const newItem = {
            ...form,
            restaurantID : Date.now(),
            parkingLot: form.parkingLot === "true",
        }

        saveData([...data, newItem]);
        alert("Restaurent Added");
        setForm({
            ...form,
            "restaurantName": "",
            "address": "",
            "type": "",
            "parkingLot": true,
        })
    }

    return (
        <div>
            <h3>Add Restaurent</h3>
            <input type="text" placeholder="Name" onChange={e => setForm({...form, restaurantName: e.target.value})} />
            <input type="text" placeholder="Address" onChange={e => setForm({...form, address: e.target.value})} />
            <select name="type" id="type" onChange={e => setForm({...form, type: e.target.value})}>
                <option value="select">Select Type</option>
                {[
                    "Rajasthani",
                    "Gujarati",
                    "Mughlai",
                    "Jain",
                    "Thai",
                    "North Indian",
                    "South Indian"
                ].map(t => (
                    <option key={t}>{t}</option>
                ))}
            </select>
            <select name="parkingLot" id="parkingLot" onChange={e => setForm({...form, parkingLot: e.target.value})}>
                <option value="parking">Parking</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddReastaurentForm;