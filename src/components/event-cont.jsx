import React from "react";
import { Link } from "react-router";

const Eventcont = (p) => {
  return ( <>
  <Link to={`http://localhost:5173/event/${p.id}`}>
    <div className="news-cantaner main ">
      <img  src={p.image} alt="event img" />
      <div>
        <h2 >{p.title}</h2>
        <p >{p.description}</p>
      </div>
    </div></Link>
    </>
  );
};

export default Eventcont;
