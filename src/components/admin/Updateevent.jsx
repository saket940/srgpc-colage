import React, { useEffect, useState } from 'react'
import Eventcont from './Eventcont';
const Event = () => {
    const [Event, setEvent] = useState([]);
      const fetchEvent = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/Event`);
          const data = await response.json();
      
          if (response.ok) {
            setEvent(data); // Ensure we store an empty array if no data
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("Error fetching Event:", error);
    }
};
useEffect(() => {
    fetchEvent();      
},[]);

  return (
    <div>
      <h2>Event-</h2><div className="main">
      {
        Event.length > 0 ? (
          Event.map((e) => (
            <>
            <Eventcont key={e._id}  id={e._id} image={e.img} title={e.had} description={e.p} /></>
          ))
        ) : (
          <p>No event found</p>
        )   
      }</div>
    </div>
  )
}

export default Event