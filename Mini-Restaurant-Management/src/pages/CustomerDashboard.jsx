import React, { useEffect, useState } from 'react';
import RestaurentCard from '../components/RestaurentCard';
import { getData } from '../utils/localStorage';

const CustomerDashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => setData(getData()), []);

    return(
        <div>
            {data.map(r => (
                <RestaurentCard key={r.restaurentID} data={r} />
            ))}
        </div>
    )
}

export default CustomerDashboard;