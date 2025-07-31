import React from "react";
import { Link } from "react-router";

const NewsCard = ({ id,image, title, description }) => {
  return ( <>
  <Link to={`http://localhost:5173/news/${id}`}>
    <div className="news-cantaner main ">
      <img  src={image} alt="News img" />
      <div>
        <h2 >{title}</h2>
        <p >{description}</p>
      </div>
    </div></Link>
    </>
  );
};

export default NewsCard;
