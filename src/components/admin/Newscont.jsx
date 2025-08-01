import React, { useState } from "react";
import { Link } from "react-router";
import axios from 'axios';
import Cookies from "js-cookie";
const Eventcont =(p) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    cookieValue : Cookies.get("auth"),
    image: p.image,
    title: p.title,
    description: p.description
  });

  const handleEditChange = (e) => {
    setEditData({ 
      ...editData, 
      [e.target.name]: e.target.value 
    });
  };
async function onUpdate(id, updatedData) {
  try {

    await axios.put(`https://srgpc-colage.onrender.com/api/newsup/${id}`, updatedData);
    alert("Content updated");
    window.location.reload();
  } catch (err) {
    console.log("Failed to update",err);
  }
};
const deleteChatbot = async (id) => {
    try {
      const response = await fetch(`https://srgpc-colage.onrender.com/api/delnews/${id}/${editData.cookieValue}`, {
        method: "DELETE",
      });
  
      const data = await response.json();
      console.log(data.message);
  window.location.reload();
      // Refresh chatbot list

    } catch (error) {
      console.error("Error deleting chatbot:", error);
    }
  };
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(p.id, editData);  // Call parent function with ID and new data
    setIsEditing(false);
  };
  return ( <>

    <div className="news-cantaner main ">
      <img  src={p.image} alt="event img" />
      <div>
        <h2 >{p.title}</h2>
        <p >{p.description}</p>
       <button className="abtn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button className="abtn" type="submit" onClick={()=>{
            deleteChatbot(p.id)
          }}>Delete</button>
      </div>
    </div>
    {isEditing && (
        <form onSubmit={handleUpdateSubmit} className="edit-form main ">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={editData.image}
            onChange={handleEditChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Heading"
            value={editData.title}
            onChange={handleEditChange}
            required
          />
          <textarea
            name="description"
            placeholder="Paragraph"
            value={editData.description}
            onChange={handleEditChange}
            required
          />
          <button className="abtn" type="submit">Update</button>
          <button className="abtn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
        </form>
      )}

    </>
  );
};

export default Eventcont
