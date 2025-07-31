
import {useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Index = () => {


  useEffect(() => {
    const cookieValue = Cookies.get("auth");


    if (true) {
      auth(cookieValue)

    }
  }, []);
  const navigate=useNavigate();
  async function auth(token) {
    try {
      const response = await fetch("http://localhost:5000/chack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cock: token }),
      });

      const data = await response.json();
      if (data.message) {
          navigate("/admin")

      }
    } catch (error) {
      console.error("Error:", error);
    }
    
  }

  return (
    <><div>

      <div style={{ 
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '20px'
      }}>
        <button id="btnhome" className="abtn"><a href="/admin/index">Home</a></button>
        <button 
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin:'10px'
          }}
          onClick={() => {
            Cookies.remove("auth");
            navigate("/admin");
          }}
        >
          Logout
        </button>
      </div>
    </div>

    </>
  );
};

export default Index;
