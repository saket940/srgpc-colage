import React, { useEffect, useState } from 'react'
import NewsCard from './news-cont'
const news = () => {
 const [News, setNews] = useState([]);
      const fetchNews = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/News`);
          const data = await response.json();
      
          if (response.ok) {
            setNews(data); // Ensure we store an empty array if no data
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("Error fetching News:", error);
    }
};
useEffect(() => {
    fetchNews();      
},[]);
console.log(News)
  return (
    <div>
      <h2>News-</h2>
      {
        News.length > 0 ? (
          News.map((e) => (
            <>
            <NewsCard
            key={e._id} id={e._id} image={e.img} title={e.had} description={e.p} /></>
          ))
        ) : (
          <p>No News found</p>
        )   
      }
    </div>
  )
}

export default news
