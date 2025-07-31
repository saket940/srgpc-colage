import React, { useEffect, useState } from 'react'

const Evnecom = () => {
     const [News, setNews] = useState([]);
           const fetchNews = async () => {
             try {

               const response = await fetch(`http://localhost:5000/api${window.location.pathname}`);
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
   return (
     <>
       <div className="main ">
       <img className='news-img' src={News.img} alt="event img" />
       <div>
         <h2 >{News.had}</h2>
         <p >{News.p}</p>
       </div>
     </div>
     </>
   )
 }

export default Evnecom
